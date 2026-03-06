"use client";
import { useState, useEffect } from "react";

// Simplified world map dot positions (row, col) on a 9x17 grid
// Each row is a latitude band, dots approximate land masses
const LAND_DOTS: [number, number][] = [
    // North America
    [1, 2], [1, 3], [1, 4],
    [2, 1], [2, 2], [2, 3], [2, 4], [2, 5],
    [3, 2], [3, 3], [3, 4],
    [4, 3], [4, 4],
    // Europe
    [1, 8], [1, 9],
    [2, 7], [2, 8], [2, 9], [2, 10],
    [3, 8], [3, 9],
    // Asia
    [1, 11], [1, 12], [1, 13], [1, 14],
    [2, 11], [2, 12], [2, 13], [2, 14], [2, 15],
    [3, 10], [3, 11], [3, 12], [3, 13], [3, 14], [3, 15],
    [4, 11], [4, 12], [4, 13], [4, 14],
    // Africa
    [3, 8], [3, 9],
    [4, 8], [4, 9],
    [5, 8], [5, 9],
    [6, 8], [6, 9],
    // South America
    [5, 4], [5, 5],
    [6, 4], [6, 5],
    [7, 4],
    // Australia
    [6, 13], [6, 14],
    [7, 13], [7, 14],
];

const ROWS = 9;
const COLS = 17;

export default function GlobeGrid() {
    const [activeDots, setActiveDots] = useState<Set<string>>(new Set());

    useEffect(() => {
        const activate = () => {
            const newActive = new Set<string>();
            // Pick 4-6 random land dots to glow
            const count = 4 + Math.floor(Math.random() * 3);
            for (let i = 0; i < count; i++) {
                const dot = LAND_DOTS[Math.floor(Math.random() * LAND_DOTS.length)];
                newActive.add(`${dot[0]}-${dot[1]}`);
            }
            setActiveDots(newActive);
        };

        activate();
        const interval = setInterval(activate, 2000);
        return () => clearInterval(interval);
    }, []);

    const isLand = (r: number, c: number) =>
        LAND_DOTS.some(([lr, lc]) => lr === r && lc === c);

    return (
        <div className="mt-4 flex justify-center">
            <div className="grid gap-[5px]" style={{ gridTemplateColumns: `repeat(${COLS}, 6px)` }}>
                {Array.from({ length: ROWS * COLS }, (_, idx) => {
                    const r = Math.floor(idx / COLS);
                    const c = idx % COLS;
                    const land = isLand(r, c);
                    const active = activeDots.has(`${r}-${c}`);

                    return (
                        <div
                            key={idx}
                            className={`h-1.5 w-1.5 rounded-full transition-all duration-700 ${active
                                    ? "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]"
                                    : land
                                        ? "bg-slate-600"
                                        : "bg-slate-800/40"
                                }`}
                        />
                    );
                })}
            </div>
        </div>
    );
}
