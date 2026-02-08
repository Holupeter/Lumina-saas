"use client";
import { useState, useEffect } from "react";

const commands = [
  "npm install @lumina/sdk",
  "import { Lumina } from '@lumina/sdk';",
  "Lumina.init({ apiKey: '••••••••' });",
  "// Observation active. 🚀"
];

export default function Terminal() {
  const [text, setText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);

  useEffect(() => {
    if (lineIndex < commands.length) {
      const currentLine = commands[lineIndex];
      let charIndex = 0;
      
      const interval = setInterval(() => {
        setText(currentLine.slice(0, charIndex + 1));
        charIndex++;
        
        if (charIndex === currentLine.length) {
          clearInterval(interval);
          // Wait 1 second before starting the next line
          setTimeout(() => {
            setLineIndex((prev) => prev + 1);
            setText("");
          }, 1000);
        }
      }, 50);

      return () => clearInterval(interval);
    } else {
      // Loop back to start after a delay
      setTimeout(() => setLineIndex(0), 3000);
    }
  }, [lineIndex]);

  return (
    <div className="mt-6 w-full rounded-xl bg-black/50 p-4 font-mono text-sm border border-white/5 shadow-2xl">
      <div className="mb-3 flex gap-1.5">
        <div className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
        <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
        <div className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
      </div>
      <div className="flex">
        <span className="mr-2 text-brand-primary">$</span>
        <span className="text-slate-200">{text}</span>
        <span className="w-2 animate-pulse bg-brand-primary ml-1" />
      </div>
      {/* Show previous lines in a dimmed state if you want more complexity */}
      <div className="mt-4 text-xs text-slate-500 italic">
        {lineIndex >= commands.length ? "Done!" : "Installing dependencies..."}
      </div>
    </div>
  );
}