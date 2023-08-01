"use client";

import { useEffect, useState } from "react";

const colors = [
  {
    color: "slate",
    blocks: [
      { code: 50, hex: "#f8fafc" },
      { code: 100, hex: "#f1f5f9" },
      { code: 200, hex: "#e2e8f0" },
      { code: 300, hex: "#cbd5e1" },
      { code: 400, hex: "#94a3b8" },
      { code: 500, hex: "#64748b" },
      { code: 600, hex: "#475569" },
      { code: 700, hex: "#334155" },
      { code: 800, hex: "#1e293b" },
      { code: 900, hex: "#0f172a" },
      { code: 950, hex: "#020617" },
    ],
  },
  {
    color: "gray",
    blocks: [
      { code: 50, hex: "#f9fafb" },
      { code: 100, hex: "#f3f4f6" },
      { code: 200, hex: "#e5e7eb" },
      { code: 300, hex: "#d1d5db" },
      { code: 400, hex: "#9ca3af" },
      { code: 500, hex: "#6b7280" },
      { code: 600, hex: "#4b5563" },
      { code: 700, hex: "#374151" },
      { code: 800, hex: "#1f2937" },
      { code: 900, hex: "#111827" },
      { code: 950, hex: "#030712" },
    ],
  },
  {
    color: "zinc",
    blocks: [
      { code: 50, hex: "#fafafa" },
      { code: 100, hex: "#f4f4f5" },
      { code: 200, hex: "#e4e4e7" },
      { code: 300, hex: "#d4d4d8" },
      { code: 400, hex: "#a1a1aa" },
      { code: 500, hex: "#71717a" },
      { code: 600, hex: "#52525b" },
      { code: 700, hex: "#3f3f46" },
      { code: 800, hex: "#27272a" },
      { code: 900, hex: "#18181b" },
      { code: 950, hex: "#09090b" },
    ],
  },
  {
    color: "neutral",
    blocks: [
      { code: 50, hex: "#fafafa" },
      { code: 100, hex: "#f5f5f5" },
      { code: 200, hex: "#e5e5e5" },
      { code: 300, hex: "#d4d4d4" },
      { code: 400, hex: "#a3a3a3" },
      { code: 500, hex: "#737373" },
      { code: 600, hex: "#525252" },
      { code: 700, hex: "#404040" },
      { code: 800, hex: "#262626" },
      { code: 900, hex: "#171717" },
      { code: 950, hex: "#0a0a0a" },
    ],
  },
  {
    color: "stone",
    blocks: [
      { code: 50, hex: "#fafaf9" },
      { code: 100, hex: "#f5f5f4" },
      { code: 200, hex: "#e7e5e4" },
      { code: 300, hex: "#d6d3d1" },
      { code: 400, hex: "#a8a29e" },
      { code: 500, hex: "#78716c" },
      { code: 600, hex: "#57534e" },
      { code: 700, hex: "#44403c" },
      { code: 800, hex: "#292524" },
      { code: 900, hex: "#1c1917" },
      { code: 950, hex: "#0c0a09" },
    ],
  },
  {
    color: "red",
    blocks: [
      { code: 50, hex: "#fef2f2" },
      { code: 100, hex: "#fee2e2" },
      { code: 200, hex: "#fecaca" },
      { code: 300, hex: "#fca5a5" },
      { code: 400, hex: "#f87171" },
      { code: 500, hex: "#ef4444" },
      { code: 600, hex: "#dc2626" },
      { code: 700, hex: "#b91c1c" },
      { code: 800, hex: "#991b1b" },
      { code: 900, hex: "#7f1d1d" },
      { code: 950, hex: "#450a0a" },
    ],
  },
  {
    color: "orange",
    blocks: [
      { code: 50, hex: "#fff7ed" },
      { code: 100, hex: "#ffedd5" },
      { code: 200, hex: "#fed7aa" },
      { code: 300, hex: "#fdba74" },
      { code: 400, hex: "#fb923c" },
      { code: 500, hex: "#f97316" },
      { code: 600, hex: "#ea580c" },
      { code: 700, hex: "#c2410c" },
      { code: 800, hex: "#9a3412" },
      { code: 900, hex: "#7c2d12" },
      { code: 950, hex: "#431407" },
    ],
  },
  {
    color: "amber",
    blocks: [
      { code: 50, hex: "#fffbeb" },
      { code: 100, hex: "#fef3c7" },
      { code: 200, hex: "#fde68a" },
      { code: 300, hex: "#fcd34d" },
      { code: 400, hex: "#fbbf24" },
      { code: 500, hex: "#f59e0b" },
      { code: 600, hex: "#d97706" },
      { code: 700, hex: "#b45309" },
      { code: 800, hex: "#92400e" },
      { code: 900, hex: "#78350f" },
      { code: 950, hex: "#451a03" },
    ],
  },
  {
    color: "yellow",
    blocks: [
      { code: 50, hex: "#fefce8" },
      { code: 100, hex: "#fef9c3" },
      { code: 200, hex: "#fef08a" },
      { code: 300, hex: "#fde047" },
      { code: 400, hex: "#facc15" },
      { code: 500, hex: "#eab308" },
      { code: 600, hex: "#ca8a04" },
      { code: 700, hex: "#a16207" },
      { code: 800, hex: "#854d0e" },
      { code: 900, hex: "#713f12" },
      { code: 950, hex: "#422006" },
    ],
  },
  {
    color: "lime",
    blocks: [
      { code: 50, hex: "#f7fee7" },
      { code: 100, hex: "#ecfccb" },
      { code: 200, hex: "#d9f99d" },
      { code: 300, hex: "#bef264" },
      { code: 400, hex: "#a3e635" },
      { code: 500, hex: "#84cc16" },
      { code: 600, hex: "#65a30d" },
      { code: 700, hex: "#4d7c0f" },
      { code: 800, hex: "#3f6212" },
      { code: 900, hex: "#365314" },
      { code: 950, hex: "#1a2e05" },
    ],
  },
  {
    color: "green",
    blocks: [
      { code: 50, hex: "#f0fdf4" },
      { code: 100, hex: "#dcfce7" },
      { code: 200, hex: "#bbf7d0" },
      { code: 300, hex: "#86efac" },
      { code: 400, hex: "#4ade80" },
      { code: 500, hex: "#22c55e" },
      { code: 600, hex: "#16a34a" },
      { code: 700, hex: "#15803d" },
      { code: 800, hex: "#166534" },
      { code: 900, hex: "#14532d" },
      { code: 950, hex: "#052e16" },
    ],
  },
  {
    color: "emerald",
    blocks: [
      { code: 50, hex: "#ecfdf5" },
      { code: 100, hex: "#d1fae5" },
      { code: 200, hex: "#a7f3d0" },
      { code: 300, hex: "#6ee7b7" },
      { code: 400, hex: "#34d399" },
      { code: 500, hex: "#10b981" },
      { code: 600, hex: "#059669" },
      { code: 700, hex: "#047857" },
      { code: 800, hex: "#065f46" },
      { code: 900, hex: "#064e3b" },
      { code: 950, hex: "#022c22" },
    ],
  },
  {
    color: "teal",
    blocks: [
      { code: 50, hex: "#f0fdfa" },
      { code: 100, hex: "#ccfbf1" },
      { code: 200, hex: "#99f6e4" },
      { code: 300, hex: "#5eead4" },
      { code: 400, hex: "#2dd4bf" },
      { code: 500, hex: "#14b8a6" },
      { code: 600, hex: "#0d9488" },
      { code: 700, hex: "#0f766e" },
      { code: 800, hex: "#115e59" },
      { code: 900, hex: "#134e4a" },
      { code: 950, hex: "#042f2e" },
    ],
  },
  {
    color: "cyan",
    blocks: [
      { code: 50, hex: "#ecfeff" },
      { code: 100, hex: "#cffafe" },
      { code: 200, hex: "#a5f3fc" },
      { code: 300, hex: "#67e8f9" },
      { code: 400, hex: "#22d3ee" },
      { code: 500, hex: "#06b6d4" },
      { code: 600, hex: "#0891b2" },
      { code: 700, hex: "#0e7490" },
      { code: 800, hex: "#155e75" },
      { code: 900, hex: "#164e63" },
      { code: 950, hex: "#083344" },
    ],
  },
  {
    color: "sky",
    blocks: [
      { code: 50, hex: "#f0f9ff" },
      { code: 100, hex: "#e0f2fe" },
      { code: 200, hex: "#bae6fd" },
      { code: 300, hex: "#7dd3fc" },
      { code: 400, hex: "#38bdf8" },
      { code: 500, hex: "#0ea5e9" },
      { code: 600, hex: "#0284c7" },
      { code: 700, hex: "#0369a1" },
      { code: 800, hex: "#075985" },
      { code: 900, hex: "#0c4a6e" },
      { code: 950, hex: "#082f49" },
    ],
  },
  {
    color: "blue",
    blocks: [
      { code: 50, hex: "#eff6ff" },
      { code: 100, hex: "#dbeafe" },
      { code: 200, hex: "#bfdbfe" },
      { code: 300, hex: "#93c5fd" },
      { code: 400, hex: "#60a5fa" },
      { code: 500, hex: "#3b82f6" },
      { code: 600, hex: "#2563eb" },
      { code: 700, hex: "#1d4ed8" },
      { code: 800, hex: "#1e40af" },
      { code: 900, hex: "#1e3a8a" },
      { code: 950, hex: "#172554" },
    ],
  },
  {
    color: "indigo",
    blocks: [
      { code: 50, hex: "#eef2ff" },
      { code: 100, hex: "#e0e7ff" },
      { code: 200, hex: "#c7d2fe" },
      { code: 300, hex: "#a5b4fc" },
      { code: 400, hex: "#818cf8" },
      { code: 500, hex: "#6366f1" },
      { code: 600, hex: "#4f46e5" },
      { code: 700, hex: "#4338ca" },
      { code: 800, hex: "#3730a3" },
      { code: 900, hex: "#312e81" },
      { code: 950, hex: "#1e1b4b" },
    ],
  },
  {
    color: "violet",
    blocks: [
      { code: 50, hex: "#f5f3ff" },
      { code: 100, hex: "#ede9fe" },
      { code: 200, hex: "#ddd6fe" },
      { code: 300, hex: "#c4b5fd" },
      { code: 400, hex: "#a78bfa" },
      { code: 500, hex: "#8b5cf6" },
      { code: 600, hex: "#7c3aed" },
      { code: 700, hex: "#6d28d9" },
      { code: 800, hex: "#5b21b6" },
      { code: 900, hex: "#4c1d95" },
      { code: 950, hex: "#2e1065" },
    ],
  },
  {
    color: "purple",
    blocks: [
      { code: 50, hex: "#faf5ff" },
      { code: 100, hex: "#f3e8ff" },
      { code: 200, hex: "#e9d5ff" },
      { code: 300, hex: "#d8b4fe" },
      { code: 400, hex: "#c084fc" },
      { code: 500, hex: "#a855f7" },
      { code: 600, hex: "#9333ea" },
      { code: 700, hex: "#7e22ce" },
      { code: 800, hex: "#6b21a8" },
      { code: 900, hex: "#581c87" },
      { code: 950, hex: "#3b0764" },
    ],
  },
  {
    color: "fuchsia",
    blocks: [
      { code: 50, hex: "#fdf4ff" },
      { code: 100, hex: "#fae8ff" },
      { code: 200, hex: "#f5d0fe" },
      { code: 300, hex: "#f0abfc" },
      { code: 400, hex: "#e879f9" },
      { code: 500, hex: "#d946ef" },
      { code: 600, hex: "#c026d3" },
      { code: 700, hex: "#a21caf" },
      { code: 800, hex: "#86198f" },
      { code: 900, hex: "#701a75" },
      { code: 950, hex: "#4a044e" },
    ],
  },
  {
    color: "pink",
    blocks: [
      { code: 50, hex: "#fdf2f8" },
      { code: 100, hex: "#fce7f3" },
      { code: 200, hex: "#fbcfe8" },
      { code: 300, hex: "#f9a8d4" },
      { code: 400, hex: "#f472b6" },
      { code: 500, hex: "#ec4899" },
      { code: 600, hex: "#db2777" },
      { code: 700, hex: "#be185d" },
      { code: 800, hex: "#9d174d" },
      { code: 900, hex: "#831843" },
      { code: 950, hex: "#500724" },
    ],
  },
  {
    color: "rose",
    blocks: [
      { code: 50, hex: "#fff1f2" },
      { code: 100, hex: "#ffe4e6" },
      { code: 200, hex: "#fecdd3" },
      { code: 300, hex: "#fda4af" },
      { code: 400, hex: "#fb7185" },
      { code: 500, hex: "#f43f5e" },
      { code: 600, hex: "#e11d48" },
      { code: 700, hex: "#be123c" },
      { code: 800, hex: "#9f1239" },
      { code: 900, hex: "#881337" },
      { code: 950, hex: "#4c0519" },
    ],
  },
];

const ColorWall = () => {
  const [clipboard, setClipboard] = useState("");
  return (
    <>
      <div className="mb-10 mt-10 flex flex-col lg:flex-row">
        {colors.map((el, index) => {
          return (
            <ColorSet
              key={`colorSet-${index}`}
              colorKey={el.color}
              blocksKey={el.blocks}
              setClipboard={setClipboard}
            />
          );
        })}
      </div>
      <p className="absolute top-10">{clipboard}</p>
    </>
  );
};

const ColorSet = ({ colorKey, blocksKey, setClipboard }) => {
  return (
    <div className="flex lg:flex-col">
      <div
        style={{ backgroundColor: blocksKey[5].hex, color: blocksKey[2].hex }}
        className="lg:rounded-t  max-lg:rounded-l text-right pt-3 lg:pt-1 pr-1 lg:mr-0 lg:pb-2 lg:text-center lg:mt-0 text-xs w-12 lg:w-12"
      >
        {colorKey}
      </div>

      <div className="flex lg:flex-col">
        {blocksKey.map((colorSet, index) => {
          let textColor;
          if (index < 5) {
            textColor = blocksKey[8].hex;
          } else {
            textColor = blocksKey[3].hex;
          }
          return (
            <ColorBlock
              key={`colorBlock-${index}`}
              colorCode={colorSet.code}
              hexCode={colorSet.hex}
              textColor={textColor}
              setClipboard={setClipboard}
            />
          );
        })}
      </div>
    </div>
  );
};

const ColorBlock = ({ colorCode, hexCode, textColor, setClipboard }) => {
  const copy = () => {
    navigator.clipboard.writeText(hexCode).then(
      () => {
        setInterval(setClipboard("Successfully copied hex code."), 3000);
      },
      () => {}
    );
  };
  return (
    <div className={hexCode}>
      <div
        onClick={copy}
        className={`w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center group`}
        style={{ backgroundColor: hexCode, color: textColor }}
      >
        <span className="cursor-pointer invisible group-hover:visible">
          {colorCode}
        </span>
      </div>
    </div>
  );
};

export default ColorWall;
