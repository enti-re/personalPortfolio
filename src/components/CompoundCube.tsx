'use client'

import React, { useState, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { motion, AnimatePresence } from 'framer-motion'

// Define labels and icons (repeated to cover all 26 outer shell cubes)
const FEATURE_LABELS = [
    "Interactive 3D Model", "Dynamic Animations", "Customizable Colors",
    "Clickable Elements", "State Management", "Responsive Design",
    "Hover Effects", "Edge Rendering", "Performance Optimized",
    "Intuitive Controls", "Modular Design", "Accessibility Ready",
    "Cross-Browser Compatible", "Smooth Transitions", "Scalable Architecture",
    "Rich User Experience", "Modern Aesthetic", "Optimized for Speed",
    "Engaging Visuals", "Fluid Interactions", "Declarative UI",
    "Component-Based", "Reusable Logic", "Type-Safe Code",
    "Extensible Features", "Community Supported"
];
const FEATURE_ICONS = [
    "✨", "🚀", "🎨",
    "👆", "🔄", "📱",
    "👀", "📐", "⚡",
    "🎮", "🧱", "♿",
    "🌐", "💫", "🏗️",
    "🌟", "💎", "💨",
    "🤩", "🌊", "📝",
    "📦", "💡", "🛡️",
    "➕", "🤝"
];

// === HoverGrid Colors ===
const COLORS = [
    '#BAE6FD', '#7DD3FC', '#38BDF8', // sky (blue shades)
    '#C7D2FE', '#A5B4FC', '#818CF8', // indigo (purple/blue shades)
    '#DDD6FE', '#C4B5FD', '#A78BFA', // violet (purple shades)
    '#86EFAC', // green-300
    '#6EE7B7', // emerald-300
    '#5EEAD4', // teal-300
    '#FDBA74', // orange-300
]

// === Generate 2x2x2 cubes with features ===
function generateFeatures() {
    const features: { id: string; pos: [number, number, number]; color: string; label: string; icon: string }[] = []
    let featureIndex = 0

    for (let x = 0; x < 2; x++) {
        for (let y = 0; y < 2; y++) {
            for (let z = 0; z < 2; z++) {
                const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
                features.push({
                    id: `cube-${x}-${y}-${z}`,
                    pos: [x, y, z],
                    color: randomColor,
                    label: FEATURE_LABELS[featureIndex % FEATURE_LABELS.length],
                    icon: FEATURE_ICONS[featureIndex % FEATURE_ICONS.length],
                })
                featureIndex++
            }
        }
    }
    return features
}

const features = generateFeatures()

// === Single Cube with Edges ===
function CubeWithEdges({
    position,
    color,
    isActive,
    isHidden,
    onClick
}: {
    position: [number, number, number]
    color: string
    isActive: boolean
    isHidden: boolean
    onClick: () => void
}) {
    const meshRef = useRef<THREE.Mesh>(null)
    const edgesRef = useRef<THREE.LineSegments>(null)

    // Calculate actual position with offset for 2x2 grid centered at origin
    const basePos = useMemo(() => [
        (position[0] - 0.5) * 1.02,
        (position[1] - 0.5) * 1.02,
        (position[2] - 0.5) * 1.02,
    ], [position])

    // Animation state
    const currentY = useRef(basePos[1])
    const currentScale = useRef(1)
    const currentOpacity = useRef(1)

    useFrame((_, delta) => {
        if (!meshRef.current || !edgesRef.current) return

        // Target values
        const targetY = isActive ? basePos[1] + 0.5 : basePos[1]
        const targetScale = isActive ? 1.1 : (isHidden ? 0.7 : 1)
        const targetOpacity = isHidden ? 0.2 : 1

        // Smooth interpolation
        currentY.current += (targetY - currentY.current) * delta * 6
        currentScale.current += (targetScale - currentScale.current) * delta * 6
        currentOpacity.current += (targetOpacity - currentOpacity.current) * delta * 6

        // Apply
        meshRef.current.position.y = currentY.current
        meshRef.current.scale.setScalar(currentScale.current)
        edgesRef.current.position.y = currentY.current
        edgesRef.current.scale.setScalar(currentScale.current)

        const mat = meshRef.current.material as THREE.MeshStandardMaterial
        mat.opacity = currentOpacity.current
    })

    const geometry = useMemo(() => new THREE.BoxGeometry(1, 1, 1), [])
    const edgesGeometry = useMemo(() => new THREE.EdgesGeometry(geometry), [geometry])

    return (
        <group>
            <mesh
                onClick={(e) => { e.stopPropagation(); onClick() }}
                ref={meshRef}
                position={[basePos[0], basePos[1], basePos[2]]}
                geometry={geometry}
            >
                <meshStandardMaterial
                    color={color}
                    roughness={1.0}
                    metalness={0.0}
                    transparent
                    opacity={1}
                />
            </mesh>
            <lineSegments
                ref={edgesRef}
                position={[basePos[0], basePos[1], basePos[2]]}
                geometry={edgesGeometry}
            >
                <lineBasicMaterial color="#1a1a1a" linewidth={2} />
            </lineSegments>
        </group>
    )
}

// === Scene ===
function Scene({
    activeId,
    setActiveId
}: {
    activeId: string | null
    setActiveId: (id: string | null) => void
}) {
    const groupRef = useRef<THREE.Group>(null)

    useFrame((_, delta) => {
        if (groupRef.current && !activeId) {
            groupRef.current.rotation.y += delta * 0.15
        }
    })

    return (
        <>
            <ambientLight intensity={1.2} />
            <directionalLight position={[5, 10, 5]} intensity={0.8} />
            <directionalLight position={[-3, 5, -3]} intensity={0.3} />
            <directionalLight position={[0, 0, -10]} intensity={0.5} />

            <OrbitControls
                enableDamping
                dampingFactor={0.05}
                enableZoom={true}
                minDistance={4}
                maxDistance={10}
            />

            <group
                ref={groupRef}
                rotation={[-Math.PI * 0.15, Math.PI * 0.25, 0]}
                onPointerMissed={() => setActiveId(null)}
            >
                {features.map((f) => (
                    <CubeWithEdges
                        key={f.id}
                        position={f.pos}
                        color={f.color}
                        isActive={activeId === f.id}
                        isHidden={activeId !== null && activeId !== f.id}
                        onClick={() => setActiveId(activeId === f.id ? null : f.id)}
                    />
                ))}
            </group>
        </>
    )
}

// === Main Component ===
export default function CompoundCube() {
    const [activeId, setActiveId] = useState<string | null>(null)
    const activeFeature = features.find(f => f.id === activeId)

    return (
        <div className="flex flex-col items-center justify-center min-h-[600px] overflow-hidden font-mono">
            {/* 3D Canvas */}
            <div className="relative w-full h-[450px] rounded-xl overflow-hidden">
                <Canvas
                    camera={{ position: [5, 4, 5], fov: 35 }}
                    gl={{ antialias: true, alpha: true }}
                >
                    <Scene activeId={activeId} setActiveId={setActiveId} />
                </Canvas>
            </div>

            {/* Label Bar */}
            <div className="mt-4 w-full max-w-md px-4">
                {activeFeature && (
                    <motion.div
                        className="flex items-center gap-4 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700"
                        layout
                    >
                        <div
                            className="w-6 h-6 rounded border border-neutral-300"
                            style={{ backgroundColor: activeFeature?.color || '#d1d5db' }}
                        />
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={activeFeature?.label || 'default'}
                                className="text-lg font-semibold tracking-tight text-neutral-800 dark:text-neutral-100"
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -5 }}
                                transition={{ duration: 0.15 }}
                            >
                                {activeFeature?.label || ""}
                            </motion.span>
                        </AnimatePresence>

                        {activeFeature && (
                            <span className="text-xl">{activeFeature.icon}</span>
                        )}

                        <AnimatePresence>
                            {activeId && (
                                <motion.button
                                    onClick={() => setActiveId(null)}
                                    className="ml-auto text-xs bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-3 py-1.5 rounded font-medium"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    Reset
                                </motion.button>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>
        </div>
    )
}
