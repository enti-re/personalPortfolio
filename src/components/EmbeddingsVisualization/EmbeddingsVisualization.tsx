import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Maximize2, X } from 'lucide-react'

const CONTEXT_CHUNKS = [
  'Client mentioned budget was cut to $40K.',
  'Wants v1 shipped before the Q2 review.',
  'Prefers weekly async updates over calls.',
  'Flagged concern about mobile latency.',
]

const DURATION_MS = 7200
const VECTOR_DURATION_MS = 4400
// Chunks finish sliding left ~900ms after chunking completes (300ms delay +
// 600ms shift) — wait a beat past that before revealing the model stage.
const MODEL_REVEAL_DELAY_MS = 1500
const VECTOR_STAGE_DELAY_MS = 1000
const QUESTION_REVEAL_DELAY_MS = 1400
const QUERY_DURATION_MS = 3600
// The dot travels the entire remaining pipeline (question -> model -> winning
// vector -> LLM) in one continuous run, timed to land at the LLM around when
// the rest of the sequence (similarity reveal, LLM node) finishes too.
const PIPELINE_DOT_DURATION_MS = 7000

// A dedicated row at the top, reserved for the retrieval question.
const QUESTION_ROW_HEIGHT = 90
const QUESTION_Y = 20
const QUESTION_TEXT = 'What was said about the budget?'
// Deterministic "similarity" scores — index 0 (the budget chunk) wins.
const SIMILARITY_SCORES = [94, 38, 52, 29]
const WINNER_INDEX = 0
// A restrained second attempt at color: two muted hues from CompoundCube's
// palette (violet, weighted heavier, and sky), only on the winning vector,
// only a small fraction of cells, kept low-opacity so it reads as a hint.
const WINNER_ACCENTS = ['167,139,250', '167,139,250', '56,189,248'] // violet-400 x2, sky-400 x1
const WINNER_TINT_FRACTION = 0.18

// Bucket rows — each 90 units tall, label then a 40-tall box. Shifted down
// to leave room for the question row above.
const ROW_HEIGHT = 90
const CONTENT_TOP = QUESTION_Y + QUESTION_ROW_HEIGHT
const ROW_STARTS = CONTEXT_CHUNKS.map((_, i) => CONTENT_TOP + i * ROW_HEIGHT)
const BOX_Y_OFFSET = 22
const BOX_HEIGHT = 40
const BRANCH_Y = ROW_STARTS.map((y) => y + BOX_Y_OFFSET + BOX_HEIGHT / 2)
const QUESTION_BRANCH_Y = QUESTION_Y + BOX_Y_OFFSET + BOX_HEIGHT / 2
const TRUNK_X = 500
const STEM_X = 410
const BUCKET_X = 600
const BUCKET_WIDTH = 220
const VIEW_HEIGHT = ROW_STARTS[ROW_STARTS.length - 1] + ROW_HEIGHT

// Stage 2: chunks (now at x=0) fan in to one shared Embedding Model, which
// fans back out to four independent vector tiles — same row positions.
const LEFT_TRUNK_X = 280
const EMBED_X = 330
const EMBED_WIDTH = 140
const EMBED_HEIGHT = 70
const RIGHT_TRUNK_X = 560
const VECTOR_X = 620
const VECTOR_WIDTH = 220

// Step 5: the LLM has nothing to do with the vector/embedding side of the
// diagram — it only ever receives the question and the winning chunk's real
// text. Sitting it on the opposite (left) side of the question+chunks column
// from the model/vector side makes that visually obvious on its own, and
// keeps both real connections short, with zero risk of crossing chunks 2-4.
const LLM_WIDTH = 140
const LLM_HEIGHT = 70
const LLM_MARGIN = 30
const LLM_X = -(LLM_MARGIN + LLM_WIDTH)
const LLM_FEED_X = LLM_X + LLM_WIDTH + 20 // merge point for question + winning-chunk branches
const llmCenterYConst = (QUESTION_BRANCH_Y + BRANCH_Y[WINNER_INDEX]) / 2
const LLM_Y = llmCenterYConst - LLM_HEIGHT / 2
const LLM_REVEAL_DELAY_MS = 1300
const VIEW_BOX_X = LLM_X - LLM_MARGIN
const VIEW_WIDTH = VECTOR_X + VECTOR_WIDTH + 20 - VIEW_BOX_X
const VIEW_HEIGHT_TOTAL = VIEW_HEIGHT
const VECTOR_COLS = 10
const VECTOR_ROWS = 2
const VECTOR_CELLS = VECTOR_COLS * VECTOR_ROWS

function seededRandom(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

const microLabel =
  'font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500'

const EmbeddingsVisualization: React.FC = () => {
  const [isZoomed, setIsZoomed] = useState(false)

  useEffect(() => {
    if (!isZoomed) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsZoomed(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isZoomed])

  const [progress, setProgress] = useState(0)
  const [showModel, setShowModel] = useState(false)
  const [vectorProgress, setVectorProgress] = useState(0)

  useEffect(() => {
    let raf: number
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / DURATION_MS)
      setProgress(p)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  // Step 2: once chunks have finished sliding left, reveal the embedding
  // model and the fan-in lines connecting the chunks to it.
  useEffect(() => {
    if (progress < 1) return
    const timeout = setTimeout(() => setShowModel(true), MODEL_REVEAL_DELAY_MS)
    return () => clearTimeout(timeout)
  }, [progress >= 1])

  // Step 3: once the model is shown, reveal the fan-out + start the vector fill.
  const [showVectors, setShowVectors] = useState(false)
  useEffect(() => {
    if (!showModel) return
    let raf: number
    let cancelled = false
    const timeout = setTimeout(() => {
      if (cancelled) return
      setShowVectors(true)
      const start = performance.now()
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / VECTOR_DURATION_MS)
        setVectorProgress(p)
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, VECTOR_STAGE_DELAY_MS)
    return () => {
      cancelled = true
      clearTimeout(timeout)
      cancelAnimationFrame(raf)
    }
  }, [showModel])

  // Step 4: retrieval — once every vector is stored, a question arrives,
  // gets embedded the same way, and is compared against the stored vectors.
  const [showQuestion, setShowQuestion] = useState(false)
  const [queryProgress, setQueryProgress] = useState(0)
  useEffect(() => {
    if (vectorProgress < 1) return
    let raf: number
    let cancelled = false
    const timeout = setTimeout(() => {
      if (cancelled) return
      setShowQuestion(true)
      const start = performance.now()
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / QUERY_DURATION_MS)
        setQueryProgress(p)
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, QUESTION_REVEAL_DELAY_MS)
    return () => {
      cancelled = true
      clearTimeout(timeout)
      cancelAnimationFrame(raf)
    }
  }, [vectorProgress >= 1])

  // A single dot travels the whole remaining pipeline once the question
  // appears — question -> model -> winning vector -> LLM, one continuous run.
  const [pipelineDotProgress, setPipelineDotProgress] = useState(0)
  useEffect(() => {
    if (!showQuestion) return
    let raf: number
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / PIPELINE_DOT_DURATION_MS)
      setPipelineDotProgress(p)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [showQuestion])

  // Step 5: the LLM box + question line appear as soon as the question does —
  // "standing by, ready." The dotted lookup lines are separately gated by the
  // traveling dot's own progress below, so they draw in exactly as the dot
  // passes through them instead of popping in on their own disconnected timer
  // (that mismatch made the line appear well after the dot had already moved
  // past that point).
  const [showLLM, setShowLLM] = useState(false)
  useEffect(() => {
    if (!showQuestion) return
    const timeout = setTimeout(() => setShowLLM(true), 200)
    return () => clearTimeout(timeout)
  }, [showQuestion])

  // A trailing space folded into every chunk but the last, so the whole
  // context still reads as one continuous paragraph, not separate blocks.
  const chunkChars = CONTEXT_CHUNKS.map((chunk, i) =>
    (i < CONTEXT_CHUNKS.length - 1 ? `${chunk} ` : chunk).split('')
  )
  const chunkWindow = 1 / CONTEXT_CHUNKS.length
  const localProgressPerChunk = chunkChars.map((_, i) => {
    const windowStart = i * chunkWindow
    return Math.min(1, Math.max(0, (progress - windowStart) / chunkWindow))
  })
  // First line erases first, last line erases last. Within a line, letters
  // erase left to right — every letter keeps its own fixed position
  // (hidden, not removed), so nothing after it ever shifts.
  const charsErasedPerChunk = chunkChars.map((chars, i) =>
    Math.floor(chars.length * localProgressPerChunk[i])
  )
  const chunksRemaining = charsErasedPerChunk.filter(
    (erased, i) => erased < chunkChars[i].length
  ).length

  const trunkTop = BRANCH_Y[0]
  const trunkBottom = BRANCH_Y[BRANCH_Y.length - 1]
  const stemY = (trunkTop + trunkBottom) / 2

  // Stage 2: all four chunks vectorize together — same progress for every
  // chunk, first half travels chunk -> model, second half model -> vector.
  const localVectorProgress = CONTEXT_CHUNKS.map(() => vectorProgress)
  const leftDotProgress = localVectorProgress.map((p) => Math.min(1, p / 0.5))
  const rightDotProgress = localVectorProgress.map((p) => Math.max(0, (p - 0.5) / 0.5))
  const embedBoxY = stemY - EMBED_HEIGHT / 2

  const showSimilarity = queryProgress >= 0.65

  // Step 5: the LLM only ever receives two things — the question, and the
  // winning chunk's real text. Neither has anything to do with the vector
  // side of the diagram — two fully independent paths feed it instead.
  const winnerRowY = BRANCH_Y[WINNER_INDEX]
  const llmCenterY = LLM_Y + LLM_HEIGHT / 2
  const llmBoxY = LLM_Y

  // One dot, one continuous path: question -> trunk corner -> stem -> model
  // -> stem -> trunk corner -> winning vector's row (match found here) ->
  // back to that chunk's real text -> down the LLM feed trunk -> LLM. Time
  // per segment is proportional to its actual pixel length, so the dot
  // moves at one consistent visual speed instead of jerking between short
  // and long hops — and each segment eases in/out instead of snapping
  // direction instantly at the corners.
  const llmEntryX = LLM_X + LLM_WIDTH / 2
  const pipelineWaypoints = [
    { x: BUCKET_WIDTH + 10, y: QUESTION_BRANCH_Y },
    { x: LEFT_TRUNK_X, y: QUESTION_BRANCH_Y },
    { x: LEFT_TRUNK_X, y: stemY },
    { x: EMBED_X, y: stemY }, // arrives at embedding model
    { x: EMBED_X + EMBED_WIDTH, y: stemY }, // departs embedding model
    { x: RIGHT_TRUNK_X, y: stemY },
    { x: RIGHT_TRUNK_X, y: winnerRowY },
    { x: VECTOR_X - 10, y: winnerRowY }, // arrives at winning vector (the match is found here)
    { x: BUCKET_WIDTH, y: winnerRowY }, // arrives at the winning chunk's right edge —
    // this is the actual retrieval step: the vector hands off to its paired text
    { x: 0, y: winnerRowY }, // departs the chunk's left edge, now carrying text not a vector
    { x: llmEntryX, y: winnerRowY }, // travel to the LLM's entry column (same column the question uses)
    { x: llmEntryX, y: LLM_Y + LLM_HEIGHT }, // up into the LLM from its bottom edge
  ]
  // These segments pass straight through a box (embedding model, then the
  // winning chunk) rather than along a connecting line — the dot hides while
  // "inside" either one, same logic in both cases: it doesn't skate over the
  // rendered text, it briefly becomes the thing it's inside.
  const PIPELINE_HIDDEN_SEGMENTS = [3, 8]

  const pipelineSegmentLengths = pipelineWaypoints.slice(1).map((p, i) => {
    const prev = pipelineWaypoints[i]
    return Math.hypot(p.x - prev.x, p.y - prev.y)
  })
  const pipelineTotalLength = pipelineSegmentLengths.reduce((a, b) => a + b, 0)
  const pipelineCumulative: number[] = []
  pipelineSegmentLengths.reduce((acc, len) => {
    const next = acc + len / pipelineTotalLength
    pipelineCumulative.push(next)
    return next
  }, 0)

  let pipelineSegmentIndex = pipelineCumulative.findIndex((c) => pipelineDotProgress <= c)
  if (pipelineSegmentIndex === -1) pipelineSegmentIndex = pipelineCumulative.length - 1
  const pipelineSegStart = pipelineSegmentIndex === 0 ? 0 : pipelineCumulative[pipelineSegmentIndex - 1]
  const pipelineSegEnd = pipelineCumulative[pipelineSegmentIndex]
  const pipelineSegLocalRaw =
    pipelineSegEnd > pipelineSegStart
      ? (pipelineDotProgress - pipelineSegStart) / (pipelineSegEnd - pipelineSegStart)
      : 1
  const pipelineSegLocal = Math.max(0, Math.min(1, pipelineSegLocalRaw))
  const pipelineFrom = pipelineWaypoints[pipelineSegmentIndex]
  const pipelineTo = pipelineWaypoints[pipelineSegmentIndex + 1]
  const pipelineDotX = pipelineFrom.x + (pipelineTo.x - pipelineFrom.x) * pipelineSegLocal
  const pipelineDotY = pipelineFrom.y + (pipelineTo.y - pipelineFrom.y) * pipelineSegLocal
  const pipelineDotVisible =
    pipelineDotProgress > 0 &&
    pipelineDotProgress < 1 &&
    !PIPELINE_HIDDEN_SEGMENTS.includes(pipelineSegmentIndex)

  return (
    <div
      className={
        isZoomed
          ? 'fixed inset-0 z-50 flex items-center justify-center bg-white/95 p-6 backdrop-blur-sm dark:bg-neutral-950/95 sm:p-10'
          : 'w-full max-w-2xl mx-auto py-12'
      }
      onClick={() => {
        if (isZoomed) setIsZoomed(false)
      }}
    >
      <div
        className={isZoomed ? 'relative w-full max-w-5xl' : 'relative w-full'}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setIsZoomed((z) => !z)}
          aria-label={isZoomed ? 'Exit zoomed view' : 'Zoom in'}
          className="absolute right-0 top-0 z-10 rounded-md border border-neutral-200 p-1.5 text-neutral-400 transition-colors hover:border-neutral-300 hover:text-neutral-700 dark:border-neutral-800 dark:hover:border-neutral-700 dark:hover:text-neutral-200"
        >
          {isZoomed ? <X className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
        </button>
        <motion.svg
        width="100%"
        height="100%"
        viewBox={`${VIEW_BOX_X} 0 ${VIEW_WIDTH} ${VIEW_HEIGHT_TOTAL}`}
        preserveAspectRatio="xMidYMid meet"
        className="text-neutral-300 dark:text-neutral-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        role="img"
        aria-label="Context text flows through a stem that branches into four chunk buckets, one per sentence, each filling as its matching text is consumed"
      >
        {/* Context text — vertically centered against the bucket column */}
        <foreignObject x="0" y="0" width="390" height={VIEW_HEIGHT}>
          <div className="flex h-full flex-col justify-center">
            <div
              className="flex items-center justify-between"
              style={{ opacity: progress >= 1 ? 0 : 1, transition: 'opacity 0.4s ease' }}
            >
              <span className={microLabel}>Context</span>
              <span className={microLabel}>{chunksRemaining} chunks</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed font-mono text-neutral-700 dark:text-neutral-300">
              {chunkChars.map((chars, i) =>
                chars.map((ch, ci) => (
                  <span
                    key={`${i}-${ci}`}
                    style={{ visibility: ci < charsErasedPerChunk[i] ? 'hidden' : 'visible' }}
                  >
                    {ch}
                  </span>
                ))
              )}
            </p>
          </div>
        </foreignObject>

        {/* Stem: context -> trunk. Fades once every chunk has fully drained. */}
        <motion.line
          x1={STEM_X}
          y1={stemY}
          x2={TRUNK_X}
          y2={stemY}
          stroke="currentColor"
          strokeWidth="2"
          animate={{ opacity: progress >= 1 ? 0 : 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Trunk: vertical spine spanning all four branches. Same fade. */}
        <motion.line
          x1={TRUNK_X}
          y1={trunkTop}
          x2={TRUNK_X}
          y2={trunkBottom}
          stroke="currentColor"
          strokeWidth="2"
          animate={{ opacity: progress >= 1 ? 0 : 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Branches: trunk -> each bucket. Each fades as its own chunk finishes draining. */}
        {BRANCH_Y.map((y, i) => (
          <motion.line
            key={i}
            x1={TRUNK_X}
            y1={y}
            x2={BUCKET_X - 10}
            y2={y}
            stroke="currentColor"
            strokeWidth="2"
            animate={{ opacity: localProgressPerChunk[i] >= 1 ? 0 : 1 }}
            transition={{ duration: 0.4 }}
          />
        ))}

        {/* Traveling dot: moves along a branch in sync with its chunk draining */}
        {BRANCH_Y.map((y, i) => {
          const p = localProgressPerChunk[i]
          const flowing = p > 0 && p < 1
          const cx = TRUNK_X + p * (BUCKET_X - 10 - TRUNK_X)
          return (
            <circle
              key={i}
              cx={cx}
              cy={y}
              r="3.5"
              fill="currentColor"
              style={{ opacity: flowing ? 1 : 0, transition: 'opacity 0.3s ease' }}
            />
          )
        })}

        {/* Chunk buckets — slide left into the context's old spot once fully drained,
            making room on the right for the next stage (embedding -> vector). */}
        {CONTEXT_CHUNKS.map((chunk, i) => (
          <foreignObject
            key={chunk}
            x="0"
            y={ROW_STARTS[i]}
            width={BUCKET_X + BUCKET_WIDTH}
            height={ROW_HEIGHT - 20}
          >
            <motion.div
              className="flex flex-col gap-1.5"
              style={{ width: BUCKET_WIDTH }}
              initial={{ x: BUCKET_X, opacity: 1 }}
              animate={{ x: progress >= 1 ? 0 : BUCKET_X, opacity: showQuestion ? 0.4 : 1 }}
              transition={{
                x: { duration: 0.6, ease: 'easeInOut', delay: progress >= 1 ? 0.3 : 0 },
                opacity: { duration: 0.4 },
              }}
            >
              <span className={microLabel}>Chunk {i + 1}</span>
              <div className="relative h-10 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 overflow-hidden px-2 py-1.5">
                <p className="font-mono text-[11px] leading-tight text-neutral-500 dark:text-neutral-400 truncate">
                  {chunkChars[i].slice(0, charsErasedPerChunk[i]).join('')}
                </p>
              </div>
            </motion.div>
          </foreignObject>
        ))}

        {/* Step 2: model + fan-in appear once chunks have settled on the left.
            Static once shown — these don't fade or hide again. */}
        {showModel && (
          <>
            {BRANCH_Y.map((y, i) => (
              <motion.line
                key={`fanin-${i}`}
                x1={BUCKET_WIDTH + 10}
                y1={y}
                x2={LEFT_TRUNK_X}
                y2={y}
                stroke="currentColor"
                strokeWidth="2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
              />
            ))}
            <motion.line
              x1={LEFT_TRUNK_X}
              y1={trunkTop}
              x2={LEFT_TRUNK_X}
              y2={trunkBottom}
              stroke="currentColor"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.15 }}
            />
            <motion.line
              x1={LEFT_TRUNK_X}
              y1={stemY}
              x2={EMBED_X}
              y2={stemY}
              stroke="currentColor"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.3 }}
            />

            {/* Embedding model — no container, just icon + label floating */}
            <foreignObject x={EMBED_X} y={embedBoxY} width={EMBED_WIDTH} height={EMBED_HEIGHT}>
              <motion.div
                className="flex h-full flex-col items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.45 }}
              >
                <div className="h-3 w-3 rotate-45 border border-neutral-400 dark:border-neutral-500" />
                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                    Embedding Model
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-neutral-400 dark:text-neutral-500">
                    text-embedding-3
                  </span>
                </div>
              </motion.div>
            </foreignObject>
          </>
        )}

        {/* Step 3: fan-out + vector tiles appear once the model starts producing output. */}
        {showVectors && (
          <>
            <motion.line
              x1={EMBED_X + EMBED_WIDTH}
              y1={stemY}
              x2={RIGHT_TRUNK_X}
              y2={stemY}
              stroke="currentColor"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35 }}
            />
            <motion.line
              x1={RIGHT_TRUNK_X}
              y1={trunkTop}
              x2={RIGHT_TRUNK_X}
              y2={trunkBottom}
              stroke="currentColor"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, delay: 0.15 }}
            />
            {BRANCH_Y.map((y, i) => (
              <motion.line
                key={`fanout-${i}`}
                x1={RIGHT_TRUNK_X}
                y1={y}
                x2={VECTOR_X - 10}
                y2={y}
                stroke="currentColor"
                strokeWidth="2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35, delay: 0.3 }}
              />
            ))}

            {/* Traveling dots: chunk -> model (first half), model -> vector (second half) */}
            {BRANCH_Y.map((y, i) => {
              const leftFlowing = leftDotProgress[i] > 0 && leftDotProgress[i] < 1
              const rightFlowing = rightDotProgress[i] > 0 && rightDotProgress[i] < 1
              const leftCx = BUCKET_WIDTH + 10 + leftDotProgress[i] * (LEFT_TRUNK_X - (BUCKET_WIDTH + 10))
              const rightCx = RIGHT_TRUNK_X + rightDotProgress[i] * (VECTOR_X - 10 - RIGHT_TRUNK_X)
              return (
                <React.Fragment key={`dot-${i}`}>
                  <circle
                    cx={leftCx}
                    cy={y}
                    r="3.5"
                    fill="currentColor"
                    style={{ opacity: leftFlowing ? 1 : 0, transition: 'opacity 0.3s ease' }}
                  />
                  <circle
                    cx={rightCx}
                    cy={y}
                    r="3.5"
                    fill="currentColor"
                    style={{ opacity: rightFlowing ? 1 : 0, transition: 'opacity 0.3s ease' }}
                  />
                </React.Fragment>
              )
            })}

            {/* Vector tiles — one per chunk, cells popping in random order (not
                left-to-right) as that chunk's window completes */}
            {CONTEXT_CHUNKS.map((chunk, i) => {
              return (
                <foreignObject
                  key={`vector-${chunk}`}
                  x={VECTOR_X}
                  y={ROW_STARTS[i]}
                  width={VECTOR_WIDTH}
                  height={ROW_HEIGHT - 20}
                >
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        {showSimilarity && i === WINNER_INDEX && (
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" className="text-neutral-900 dark:text-neutral-100">
                            <path d="M1 4 L4 7 L9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                        <span
                          className={
                            showSimilarity && i === WINNER_INDEX
                              ? 'font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-900 dark:text-neutral-100 font-bold'
                              : microLabel
                          }
                        >
                          Vector {i + 1}
                        </span>
                      </div>
                      <span
                        className="font-mono text-[10px] tabular-nums"
                        style={{
                          opacity: showSimilarity ? 1 : 0,
                          transition: 'opacity 0.3s ease',
                        }}
                      >
                        <span
                          className={
                            i === WINNER_INDEX
                              ? 'font-bold text-neutral-900 dark:text-neutral-100'
                              : 'text-neutral-400 dark:text-neutral-500'
                          }
                        >
                          {SIMILARITY_SCORES[i]}%
                        </span>
                      </span>
                    </div>
                    <div
                      className="grid h-10 gap-[2px]"
                      style={{
                        gridTemplateColumns: `repeat(${VECTOR_COLS}, minmax(0, 1fr))`,
                        outline:
                          showSimilarity && i === WINNER_INDEX
                            ? '1.5px solid currentColor'
                            : 'none',
                        outlineOffset: '3px',
                        transition: 'outline 0.3s ease',
                      }}
                    >
                      {Array.from({ length: VECTOR_CELLS }).map((_, ci) => {
                        const revealAt = seededRandom(i * 700 + ci)
                        const isFilled = revealAt < localVectorProgress[i]
                        const intensity = seededRandom(i * 100 + ci)
                        const isWinnerTint =
                          showSimilarity &&
                          i === WINNER_INDEX &&
                          seededRandom(i * 900 + ci) < WINNER_TINT_FRACTION
                        const tintAccent =
                          WINNER_ACCENTS[Math.floor(seededRandom(i * 1100 + ci) * WINNER_ACCENTS.length)]
                        return (
                          <div
                            key={ci}
                            className="rounded-[1px]"
                            style={{
                              backgroundColor: isFilled
                                ? isWinnerTint
                                  ? `rgba(${tintAccent}, ${0.12 + intensity * 0.15})`
                                  : `rgba(120,120,120,${0.15 + intensity * 0.6})`
                                : 'transparent',
                              border: isFilled ? 'none' : '1px solid rgba(120,120,120,0.15)',
                              transition: 'background-color 0.3s ease',
                            }}
                          />
                        )
                      })}
                    </div>
                  </div>
                </foreignObject>
              )
            })}
          </>
        )}

        {/* Step 4: retrieval — a question arrives, gets embedded, and the
            closest stored vector is retrieved back to its source chunk. */}
        {showQuestion && (
          <>
            <foreignObject x="0" y={QUESTION_Y} width={BUCKET_WIDTH} height={ROW_HEIGHT - 20}>
              <motion.div
                className="flex flex-col gap-1.5"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-1.5">
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" className="text-neutral-400 dark:text-neutral-500">
                    <circle cx="5" cy="5" r="3.5" stroke="currentColor" strokeWidth="1.2" />
                    <line x1="7.5" y1="7.5" x2="10.5" y2="10.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-900 dark:text-neutral-100">
                    Question
                  </span>
                </div>
                <div className="relative h-10 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 overflow-hidden px-2 py-1.5">
                  <p className="font-mono text-[11px] leading-tight text-neutral-500 dark:text-neutral-400 truncate">
                    {QUESTION_TEXT}
                  </p>
                </div>
              </motion.div>
            </foreignObject>

            <motion.line
              x1={BUCKET_WIDTH + 10}
              y1={QUESTION_BRANCH_Y}
              x2={LEFT_TRUNK_X}
              y2={QUESTION_BRANCH_Y}
              stroke="currentColor"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
            <motion.line
              x1={LEFT_TRUNK_X}
              y1={QUESTION_BRANCH_Y}
              x2={LEFT_TRUNK_X}
              y2={trunkTop}
              stroke="currentColor"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />


          </>
        )}

        {/* Step 5: the LLM's only two real inputs are the question and the winning
            chunk's actual text — nothing to do with the vector/embedding side of
            the diagram. Two fully independent paths, styled differently on
            purpose: the question is directly visible (solid), but the chunk's
            text only got here via a vector lookup (dotted, both legs of it). */}
        {showLLM && (
          <>
            {/* dotted: the lookup itself — winning vector -> its paired text.
                Gated by the dot's actual progress (not a separate timer), so
                this draws in exactly as the dot travels this segment. */}
            {pipelineSegmentIndex >= 7 && (
              <motion.line
                x1={VECTOR_X - 10}
                y1={winnerRowY}
                x2={BUCKET_WIDTH}
                y2={winnerRowY}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
            {/* explicit marker at the chunk's edge — makes clear the line actually
                lands ON the chunk here, rather than just passing near it */}
            {pipelineSegmentIndex >= 7 && (
              <motion.circle
                cx={BUCKET_WIDTH}
                cy={winnerRowY}
                r="3"
                fill="currentColor"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
            {/* dotted: that retrieved text -> LLM. Gated to when the dot actually
                departs the chunk's left edge (segment 9), not before — the
                chunk-crossing segment itself (8) is hidden, same as the model. */}
            {pipelineSegmentIndex >= 9 && (
            <motion.line
              x1={0}
              y1={winnerRowY}
              x2={LLM_X + LLM_WIDTH / 2}
              y2={winnerRowY}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            )}
            {pipelineSegmentIndex >= 10 && (
            <motion.line
              x1={LLM_X + LLM_WIDTH / 2}
              y1={winnerRowY}
              x2={LLM_X + LLM_WIDTH / 2}
              y2={LLM_Y + LLM_HEIGHT}
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
            />
            )}

            {/* solid: the question is directly visible text, no lookup needed —
                enters from the top */}
            <motion.line
              x1={0}
              y1={QUESTION_BRANCH_Y}
              x2={LLM_X + LLM_WIDTH / 2}
              y2={QUESTION_BRANCH_Y}
              stroke="currentColor"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
            <motion.line
              x1={LLM_X + LLM_WIDTH / 2}
              y1={QUESTION_BRANCH_Y}
              x2={LLM_X + LLM_WIDTH / 2}
              y2={LLM_Y}
              stroke="currentColor"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            />

            {/* LLM — no container, just icon + label floating (chat-bubble
                mark distinguishes it from the embedding model's diamond) */}
            <foreignObject x={LLM_X} y={llmBoxY} width={LLM_WIDTH} height={LLM_HEIGHT}>
              <motion.div
                className="flex h-full flex-col items-center justify-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <svg
                  width="15"
                  height="13"
                  viewBox="0 0 15 13"
                  fill="none"
                  className="text-neutral-400 dark:text-neutral-500"
                >
                  <rect x="1" y="1" width="13" height="8" rx="2" stroke="currentColor" strokeWidth="1.3" />
                  <path
                    d="M4.5 9 L4.5 11.5 L7.2 9"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
                <div className="flex flex-col items-center gap-0.5">
                  <span className="text-xs font-semibold text-neutral-900 dark:text-neutral-100">
                    LLM
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-neutral-400 dark:text-neutral-500">
                    claude-sonnet
                  </span>
                </div>
              </motion.div>
            </foreignObject>
          </>
        )}

        {/* The single dot that carries the whole question -> model -> vector -> LLM
            journey — constant visual speed (time proportional to distance),
            eased in/out of every turn, hiding while inside the model/vector boxes */}
        {showQuestion && (
          <circle
            cx={pipelineDotX}
            cy={pipelineDotY}
            r="3.5"
            fill="currentColor"
            className="text-neutral-900 dark:text-neutral-100"
            style={{
              opacity: pipelineDotVisible ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
          />
        )}

        {/* Label that travels with the dot: (vector) for the whole search/match
            journey, then flips to (text) the moment it departs the winning
            chunk — making the "vector's job ends here, real text continues"
            handoff explicit instead of implied. */}
        {showQuestion && pipelineDotVisible && (
          <text
            x={pipelineDotX}
            y={pipelineDotY - 9}
            textAnchor="middle"
            fill="currentColor"
            className="text-neutral-500 dark:text-neutral-400"
            fontSize="9"
            fontFamily="monospace"
          >
            {pipelineSegmentIndex <= 7 ? '(vector)' : '(text)'}
          </text>
        )}
        </motion.svg>
      </div>
    </div>
  )
}

export default EmbeddingsVisualization
