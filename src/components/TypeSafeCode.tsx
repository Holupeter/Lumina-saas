export default function TypeSafeCode() {
    return (
        <div className="mt-4 relative">
            <div className="rounded-xl bg-black/40 p-4 font-mono text-xs border border-white/5 overflow-hidden">
                {/* Line 1 */}
                <div className="flex">
                    <span className="mr-3 select-none text-slate-600">1</span>
                    <span>
                        <span className="text-purple-400">interface</span>{" "}
                        <span className="text-emerald-400">TelemetryEvent</span>{" "}
                        <span className="text-slate-400">{"{"}</span>
                    </span>
                </div>
                {/* Line 2 */}
                <div className="flex">
                    <span className="mr-3 select-none text-slate-600">2</span>
                    <span className="pl-4">
                        <span className="text-sky-300">id</span>
                        <span className="text-slate-400">: </span>
                        <span className="text-amber-300">string</span>
                        <span className="text-slate-400">;</span>
                    </span>
                </div>
                {/* Line 3 */}
                <div className="flex">
                    <span className="mr-3 select-none text-slate-600">3</span>
                    <span className="pl-4">
                        <span className="text-sky-300">timestamp</span>
                        <span className="text-slate-400">: </span>
                        <span className="text-amber-300">number</span>
                        <span className="text-slate-400">;</span>
                    </span>
                </div>
                {/* Line 4 */}
                <div className="flex">
                    <span className="mr-3 select-none text-slate-600">4</span>
                    <span className="pl-4">
                        <span className="text-sky-300">latency</span>
                        <span className="text-slate-400">: </span>
                        <span className="text-amber-300">number</span>
                        <span className="text-slate-400">;</span>
                    </span>
                </div>
                {/* Line 5 */}
                <div className="flex">
                    <span className="mr-3 select-none text-slate-600">5</span>
                    <span className="pl-4">
                        <span className="text-sky-300">region</span>
                        <span className="text-slate-400">: </span>
                        <span className="text-amber-300">Region</span>
                        <span className="text-slate-400">;</span>
                    </span>
                </div>
                {/* Line 6 */}
                <div className="flex">
                    <span className="mr-3 select-none text-slate-600">6</span>
                    <span className="text-slate-400">{"}"}</span>
                </div>
            </div>

            {/* Type-safe badge */}
            <div className="absolute -top-2 -right-2 flex items-center gap-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-2.5 py-1 text-[10px] font-semibold text-emerald-400">
                <span>✓</span>
                <span>Type-safe</span>
            </div>
        </div>
    );
}
