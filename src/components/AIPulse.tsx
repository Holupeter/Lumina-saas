"use client";

export default function AIPulse() {
    return (
        <div className="mt-8 flex flex-1 items-center justify-center">
            <div className="relative flex h-48 w-48 items-center justify-center">
                {/* Concentric pulse rings */}
                {[0, 1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className="absolute rounded-full border border-brand-primary/30"
                        style={{
                            width: `${(i + 1) * 60}px`,
                            height: `${(i + 1) * 60}px`,
                            animation: `pulse-ring 3s ease-out ${i * 0.5}s infinite`,
                        }}
                    />
                ))}

                {/* Static outer glow ring */}
                <div className="absolute h-44 w-44 rounded-full bg-brand-primary/5" />

                {/* Center icon */}
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-brand-primary/20 shadow-lg shadow-brand-primary/20">
                    <div className="h-8 w-8 rounded-full bg-brand-primary/40 flex items-center justify-center">
                        <div className="h-3 w-3 rounded-full bg-brand-primary animate-pulse" />
                    </div>
                </div>

                {/* Scanning line */}
                <div
                    className="absolute left-1/2 top-1/2 h-px w-20 origin-left bg-gradient-to-r from-brand-primary/60 to-transparent"
                    style={{ animation: "scan-rotate 4s linear infinite" }}
                />
            </div>
        </div>
    );
}
