"use client";

import React, {
    useEffect,
    useRef,
    useState,
    type ReactNode,
} from "react";

export interface GlitchOptions {
    /** Overall strength of the glitch (0 to 2). */
    intensity?: number;
    /** Seconds between glitch bursts. 0 keeps the glitch running constantly. */
    interval?: number;
    /** How long each burst lasts in seconds. */
    duration?: number;
    /** Number of horizontal slices the tear snaps to. Lower is chunkier. */
    slices?: number;
    /** How far the torn slices shift sideways, in CSS pixels. */
    shift?: number;
    /** Chromatic RGB split during bursts, in CSS pixels. */
    rgbShift?: number;
    /** Amount of corrupted block artifacts during bursts (0 to 1). */
    blocks?: number;
    /** Analog noise and scanline flicker during bursts (0 to 1). */
    noise?: number;
}

export interface GlitchProps extends GlitchOptions {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    glitchOnHover?: boolean;
}

const DEFAULTS: Required<GlitchOptions> = {
    intensity: 1,
    interval: 3,
    duration: 0.4,
    slices: 24,
    shift: 15,
    rgbShift: 4,
    blocks: 0.5,
    noise: 0.35,
};

export function Glitch({
    children,
    className = "",
    style,
    glitchOnHover = true,
    ...options
}: GlitchProps) {
    const config = { ...DEFAULTS, ...options };
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isGlitching, setIsGlitching] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [clipPathRed, setClipPathRed] = useState("inset(0 0 0 0)");
    const [clipPathBlue, setClipPathBlue] = useState("inset(0 0 0 0)");
    const [transformRed, setTransformRed] = useState("translate(0, 0)");
    const [transformBlue, setTransformBlue] = useState("translate(0, 0)");

    // Interval loop for periodic glitch bursts
    useEffect(() => {
        if (config.interval <= 0) {
            setIsGlitching(true);
            return;
        }

        const triggerBurst = () => {
            setIsGlitching(true);
            setTimeout(() => {
                setIsGlitching(false);
            }, config.duration * 1000);
        };

        const intervalId = setInterval(() => {
            triggerBurst();
        }, config.interval * 1000);

        return () => clearInterval(intervalId);
    }, [config.interval, config.duration]);

    const activeGlitch = isGlitching || (glitchOnHover && isHovered);

    // Animation frame effect for generating slice clip-paths & RGB transforms
    useEffect(() => {
        if (!activeGlitch) return;

        let frameId: number;

        const animateGlitch = () => {
            const shiftAmount = config.shift * config.intensity;
            const rShiftX = (Math.random() - 0.5) * shiftAmount;
            const rShiftY = (Math.random() - 0.5) * (shiftAmount * 0.3);
            const bShiftX = (Math.random() - 0.5) * shiftAmount;
            const bShiftY = (Math.random() - 0.5) * (shiftAmount * 0.3);

            const top1 = Math.floor(Math.random() * 80);
            const bot1 = Math.floor(Math.random() * (100 - top1));
            const top2 = Math.floor(Math.random() * 80);
            const bot2 = Math.floor(Math.random() * (100 - top2));

            setClipPathRed(`inset(${top1}% 0 ${bot1}% 0)`);
            setClipPathBlue(`inset(${top2}% 0 ${bot2}% 0)`);
            setTransformRed(`translate(${rShiftX}px, ${rShiftY}px)`);
            setTransformBlue(`translate(${bShiftX}px, ${bShiftY}px)`);

            frameId = requestAnimationFrame(animateGlitch);
        };

        frameId = requestAnimationFrame(animateGlitch);

        return () => cancelAnimationFrame(frameId);
    }, [activeGlitch, config.shift, config.intensity]);

    // Canvas render loop for block corruption and noise
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        if (!activeGlitch) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return;
        }

        let animationFrameId: number;

        const render = () => {
            const rect = canvas.getBoundingClientRect();
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const width = Math.max(1, Math.floor(rect.width * dpr));
            const height = Math.max(1, Math.floor(rect.height * dpr));

            if (canvas.width !== width || canvas.height !== height) {
                canvas.width = width;
                canvas.height = height;
            }

            ctx.clearRect(0, 0, width, height);

            // Draw glitch digital corruption blocks
            if (config.blocks > 0) {
                const numBlocks = Math.floor(Math.random() * 8 * config.intensity * config.blocks);
                for (let i = 0; i < numBlocks; i++) {
                    const bw = Math.random() * width * 0.4 + 10;
                    const bh = Math.random() * 8 + 2;
                    const bx = Math.random() * (width - bw);
                    const by = Math.random() * (height - bh);

                    const colors = [
                        "rgba(34, 197, 94, 0.4)",  // green
                        "rgba(239, 68, 68, 0.4)",  // red
                        "rgba(59, 130, 246, 0.4)",  // blue
                        "rgba(255, 255, 255, 0.5)" // white
                    ];
                    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
                    ctx.fillRect(bx, by, bw, bh);
                }
            }

            // Draw noise scanline slice lines
            if (config.noise > 0) {
                const numLines = Math.floor(Math.random() * 5 * config.noise);
                ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
                for (let i = 0; i < numLines; i++) {
                    const ly = Math.random() * height;
                    const lw = Math.random() * width;
                    ctx.fillRect(0, ly, lw, Math.random() * 2 + 1);
                }
            }

            animationFrameId = requestAnimationFrame(render);
        };

        animationFrameId = requestAnimationFrame(render);

        return () => cancelAnimationFrame(animationFrameId);
    }, [activeGlitch, config.blocks, config.noise, config.intensity]);

    return (
        <div
            ref={containerRef}
            className={`relative inline-block ${className}`}
            style={{ position: "relative", ...style }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Main Original Content */}
            <div className={`relative z-0 transition-transform ${activeGlitch ? "opacity-90" : "opacity-100"}`}>
                {children}
            </div>

            {/* Red / Magenta Glitch Clone Layer */}
            {activeGlitch && (
                <div
                    aria-hidden="true"
                    className="absolute inset-0 z-10 pointer-events-none overflow-hidden select-none"
                    style={{
                        clipPath: clipPathRed,
                        transform: transformRed,
                        filter: "drop-shadow(-2px 0 #ef4444) saturate(1.8)",
                        opacity: 0.85,
                    }}
                >
                    {children}
                </div>
            )}

            {/* Cyan / Green Glitch Clone Layer */}
            {activeGlitch && (
                <div
                    aria-hidden="true"
                    className="absolute inset-0 z-10 pointer-events-none overflow-hidden select-none"
                    style={{
                        clipPath: clipPathBlue,
                        transform: transformBlue,
                        filter: "drop-shadow(2px 0 #22c55e) saturate(1.8)",
                        opacity: 0.85,
                    }}
                >
                    {children}
                </div>
            )}

            {/* Glitch Noise & Blocks Canvas Overlay */}
            <canvas
                ref={canvasRef}
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none w-full h-full z-20"
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                }}
            />
        </div>
    );
}

export default Glitch;
