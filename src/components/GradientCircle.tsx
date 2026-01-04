import React, { useEffect, useRef, useState } from 'react';
import { Download, RefreshCw } from 'lucide-react';

// Configuration types
interface LightConfig {
    x: number;
    y: number;
}

interface DrawConfig {
    tilt: number;
    light: LightConfig;
    noise: number;
    size: number;
}

interface ColorStop {
    a: number;
    c: [number, number, number];
}

const GradientCircle: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isGenerating, setIsGenerating] = useState(false);

    // Constants consistent with the original design
    const TWO_PI = Math.PI * 2;
    const stops: ColorStop[] = [
        { a: 0.00, c: [59, 130, 246] },   // blue
        { a: 0.90, c: [255, 147, 60] },   // orange
        { a: 1.30, c: [245, 158, 11] },   // amber
        { a: 2.20, c: [239, 68, 68] },    // red
        { a: 3.60, c: [96, 165, 250] },   // light blue
        { a: 5.20, c: [255, 255, 255] },  // white highlight
        { a: TWO_PI, c: [59, 130, 246] }, // wrap back to blue
    ];

    // Utilities
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const mixRGB = (c1: [number, number, number], c2: [number, number, number], t: number): [number, number, number] => [
        Math.round(lerp(c1[0], c2[0], t)),
        Math.round(lerp(c1[1], c2[1], t)),
        Math.round(lerp(c1[2], c2[2], t)),
    ];

    const clamp255 = (v: number) => Math.max(0, Math.min(255, v));

    const sampleAngularColor = (angle: number): [number, number, number] => {
        angle = ((angle % TWO_PI) + TWO_PI) % TWO_PI; // normalize to [0, 2π)
        for (let i = 0; i < stops.length - 1; i++) {
            const s0 = stops[i], s1 = stops[i + 1];
            if (angle >= s0.a && angle <= s1.a) {
                const t = (angle - s0.a) / (s1.a - s0.a);
                return mixRGB(s0.c, s1.c, t);
            }
        }
        return [...stops[0].c];
    };

    const drawPlanet = ({
        tilt = 0.2,
        light = { x: -0.4, y: -0.8 },
        noise = 4,
        size = 640,
    }: Partial<DrawConfig> = {}) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas dimensions
        canvas.width = size;
        canvas.height = size;

        const cx = size / 2;
        const cy = size / 2;
        const radius = size * 0.42;
        const rSq = radius * radius;

        const img = ctx.createImageData(size, size);
        const data = img.data;

        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                const dx = x - cx;
                const dy = y - cy;
                const distSq = dx * dx + dy * dy;
                const idx = (y * size + x) * 4;

                if (distSq <= rSq) {
                    const dist = Math.sqrt(distSq);

                    // Polar angle with tilt
                    const angle = Math.atan2(dy, dx) + tilt;

                    // Base angular color
                    const base = sampleAngularColor(angle);

                    // Radial falloff (center brighter)
                    const falloff = 1.0 - (dist / radius);

                    // Simple directional light via dot on normalized position
                    const nx = dx / radius;
                    const ny = dy / radius;
                    const ndotl = Math.max(0, nx * light.x + ny * light.y);

                    // Combine lighting terms + specular highlight
                    const lightFactor = 0.35 + 0.45 * falloff + 0.7 * ndotl;
                    const spec = Math.pow(Math.max(0, ndotl), 12) * 64;

                    let r = clamp255(base[0] * lightFactor + spec);
                    let g = clamp255(base[1] * lightFactor + spec);
                    let b = clamp255(base[2] * lightFactor + spec);

                    // Subtle grain to avoid banding
                    r = clamp255(r + (Math.random() * 2 - 1) * noise);
                    g = clamp255(g + (Math.random() * 2 - 1) * noise);
                    b = clamp255(b + (Math.random() * 2 - 1) * noise);

                    data[idx] = r;
                    data[idx + 1] = g;
                    data[idx + 2] = b;
                    data[idx + 3] = 255;
                } else {
                    data[idx + 3] = 0; // transparent outside circle
                }
            }
        }

        ctx.putImageData(img, 0, 0);

        // Vignette shadow to sell sphere depth
        ctx.save();
        ctx.globalCompositeOperation = "multiply";
        const grad = ctx.createRadialGradient(
            cx, cy + radius * 0.25, radius * 0.3,
            cx, cy + radius * 0.2, radius * 1.15
        );
        grad.addColorStop(0, "rgba(0,0,0,0)");
        grad.addColorStop(1, "rgba(0,0,0,0.35)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    };

    const handleRerender = () => {
        setIsGenerating(true);
        // Add a slight delay to allow rotation animation to start/be visible
        setTimeout(() => {
            drawPlanet({
                tilt: 0.2,
                light: { x: -0.4, y: -0.8 },
                noise: 4,
                size: 640
            });
            setIsGenerating(false);
        }, 300);
    };

    const handleSave = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const url = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = url;
        a.download = "gradient-circle.png";
        a.click();
    };

    useEffect(() => {
        drawPlanet();
    }, []);

    return (
        <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
            <div className="relative w-full aspect-square max-w-[500px] mb-8 group">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    aria-label="Gradient circle visualization"
                />
            </div>

            <div className="flex items-center gap-4">
                {/* Palette preview */}
                <div className="flex gap-1.5 p-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700">
                    {stops.map((stop, i) => (
                        <div
                            key={i}
                            className="w-4 h-4 rounded shadow-sm border border-black/5 dark:border-white/10"
                            style={{ backgroundColor: `rgb(${stop.c[0]}, ${stop.c[1]}, ${stop.c[2]})` }}
                        />
                    ))}
                </div>

                <div className="h-8 w-px bg-neutral-200 dark:bg-neutral-700 mx-2" />

                <button
                    onClick={handleRerender}
                    disabled={isGenerating}
                    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors disabled:opacity-50"
                >
                    <RefreshCw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
                    Rerender
                </button>

                <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-4 py-2 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg text-sm font-medium hover:bg-neutral-800 dark:hover:bg-white/90 transition-colors shadow-sm"
                >
                    <Download className="w-4 h-4" />
                    Save PNG
                </button>
            </div>

            <p className="mt-8 text-sm text-neutral-500 dark:text-neutral-400 text-center max-w-md mx-auto leading-relaxed">
                A generative canvas experiment. Each render applies unique noise distribution and subtle lighting variations.
            </p>
        </div>
    );
};

export default GradientCircle;
