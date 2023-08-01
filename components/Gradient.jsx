"use client";

const colors = [
  [
    "#f8fafc",
    "#f1f5f9",
    "#e2e8f0",
    "#cbd5e1",
    "#94a3b8",
    "#64748b",
    "#475569",
    "#334155",
    "#1e293b",
    "#0f172a",
    "#020617",
  ],
  [
    "#f9fafb",
    "#f3f4f6",
    "#e5e7eb",
    "#d1d5db",
    "#9ca3af",
    "#6b7280",
    "#4b5563",
    "#374151",
    "#1f2937",
    "#111827",
    "#030712",
  ],

  [
    "#fafafa",
    "#f4f4f5",
    "#e4e4e7",
    "#d4d4d8",
    "#a1a1aa",
    "#71717a",
    "#52525b",
    "#3f3f46",
    "#27272a",
    "#18181b",
    "#09090b",
  ],
  [
    "#fafafa",
    "#f5f5f5",
    "#e5e5e5",
    "#d4d4d4",
    "#a3a3a3",
    "#737373",
    "#525252",
    "#404040",
    "#262626",
    "#171717",
    "#0a0a0a",
  ],
  [
    "#fafaf9",
    "#f5f5f4",
    "#e7e5e4",
    "#d6d3d1",
    "#a8a29e",
    "#78716c",
    "#57534e",
    "#44403c",
    "#292524",
    "#1c1917",
    "#0c0a09",
  ],
  [
    "#fef2f2",
    "#fee2e2",
    "#fecaca",
    "#fca5a5",
    "#f87171",
    "#ef4444",
    "#dc2626",
    "#b91c1c",
    "#991b1b",
    "#7f1d1d",
    "#450a0a",
  ],
  [
    "#fff7ed",
    "#ffedd5",
    "#fed7aa",
    "#fdba74",
    "#fb923c",
    "#f97316",
    "#ea580c",
    "#c2410c",
    "#9a3412",
    "#7c2d12",
    "#431407",
  ],

  [
    "#fffbeb",
    "#fef3c7",
    "#fde68a",
    "#fcd34d",
    "#fbbf24",
    "#f59e0b",
    "#d97706",
    "#b45309",
    "#92400e",
    "#78350f",
    "#451a03",
  ],
  [
    "#fefce8",
    "#fef9c3",
    "#fef08a",
    "#fde047",
    "#facc15",
    "#eab308",
    "#ca8a04",
    "#a16207",
    "#854d0e",
    "#713f12",
    "#422006",
  ],
  [
    "#f7fee7",
    "#ecfccb",
    "#d9f99d",
    "#bef264",
    "#a3e635",
    "#84cc16",
    "#65a30d",
    "#4d7c0f",
    "#3f6212",
    "#365314",
    "#1a2e05",
  ],
  [
    "#f0fdf4",
    "#dcfce7",
    "#bbf7d0",
    "#86efac",
    "#4ade80",
    "#22c55e",
    "#16a34a",
    "#15803d",
    "#166534",
    "#14532d",
    "#052e16",
  ],
  [
    "#ecfdf5",
    "#d1fae5",
    "#a7f3d0",
    "#6ee7b7",
    "#34d399",
    "#10b981",
    "#059669",
    "#047857",
    "#065f46",
    "#064e3b",
    "#022c22",
  ],
  [
    "#f0fdfa",
    "#ccfbf1",
    "#99f6e4",
    "#5eead4",
    "#2dd4bf",
    "#14b8a6",
    "#0d9488",
    "#0f766e",
    "#115e59",
    "#134e4a",
    "#042f2e",
  ],
  [
    "#ecfeff",
    "#cffafe",
    "#a5f3fc",
    "#67e8f9",
    "#22d3ee",
    "#06b6d4",
    "#0891b2",
    "#0e7490",
    "#155e75",
    "#164e63",
    "#083344",
  ],
  [
    "#f0f9ff",
    "#e0f2fe",
    "#bae6fd",
    "#7dd3fc",
    "#38bdf8",
    "#0ea5e9",
    "#0284c7",
    "#0369a1",
    "#075985",
    "#0c4a6e",
    "#082f49",
  ],
  [
    "#eff6ff",
    "#dbeafe",
    "#bfdbfe",
    "#93c5fd",
    "#60a5fa",
    "#3b82f6",
    "#2563eb",
    "#1d4ed8",
    "#1e40af",
    "#1e3a8a",
    "#172554",
  ],
  [
    "#eef2ff",
    "#e0e7ff",
    "#c7d2fe",
    "#a5b4fc",
    "#818cf8",
    "#6366f1",
    "#4f46e5",
    "#4338ca",
    "#3730a3",
    "#312e81",
    "#1e1b4b",
  ],
  [
    "#f5f3ff",
    "#ede9fe",
    "#ddd6fe",
    "#c4b5fd",
    "#a78bfa",
    "#8b5cf6",
    "#7c3aed",
    "#6d28d9",
    "#5b21b6",
    "#4c1d95",
    "#2e1065",
  ],

  [
    "#faf5ff",
    "#f3e8ff",
    "#e9d5ff",
    "#d8b4fe",
    "#c084fc",
    "#a855f7",
    "#9333ea",
    "#7e22ce",
    "#6b21a8",
    "#581c87",
    "#3b0764",
  ],

  [
    "#fdf4ff",
    "#fae8ff",
    "#f5d0fe",
    "#f0abfc",
    "#e879f9",
    "#d946ef",
    "#c026d3",
    "#a21caf",
    "#86198f",
    "#701a75",
    "#4a044e",
  ],
  [
    "#fdf2f8",
    "#fce7f3",
    "#fbcfe8",
    "#f9a8d4",
    "#f472b6",
    "#ec4899",
    "#db2777",
    "#be185d",
    "#9d174d",
    "#831843",
    "#500724",
  ],
  [
    "#fff1f2",
    "#ffe4e6",
    "#fecdd3",
    "#fda4af",
    "#fb7185",
    "#f43f5e",
    "#e11d48",
    "#be123c",
    "#9f1239",
    "#881337",
    "#4c0519",
  ],
];

import React, { useState, useEffect, useRef } from "react";
import {
  East,
  SouthEast,
  South,
  SouthWest,
  West,
  NorthWest,
  North,
  NorthEast,
} from "./Directions"; //svg imports
import { SketchPicker, SwatchesPicker } from "react-color";

const GradientUI = () => {
  const [direction, setDirection] = useState("bg-gradient-to-r");
  const [firstColor, setFirstColor] = useState("from-lime-300");
  const [middleColor, setMiddleColor] = useState("");
  const [lastColor, setLastColor] = useState("to-cyan-300");
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row mx-auto relative z-10">
        <GradientDirection direction={direction} setDirection={setDirection} />
        <ColorSelect
          setFirstColor={setFirstColor}
          firstColor={firstColor}
          setMiddleColor={setMiddleColor}
          middleColor={middleColor}
          setLastColor={setLastColor}
          lastColor={lastColor}
        />
      </div>
      <GradientBar
        direction={direction}
        firstColor={firstColor}
        middleColor={middleColor}
        lastColor={lastColor}
      />
    </>
  );
};

const GradientDirection = ({ direction, setDirection }) => {
  const DirButton = ({ children, onClick }) => {
    return (
      <li className="mb-1 m-auto">
        <button
          className="bg-emerald-300 drop-shadow-lg hover:filter-none rounded-xl w-10 h-9 border-b border-teal-500 flex justify-center active:translate-y-0.5"
          onClick={onClick}
        >
          {children}
        </button>
      </li>
    );
  };

  const [directionType, setDirectionType] = useState("default");
  return (
    <div className="bg-slate-200 rounded-2xl p-4 flex-col drop-shadow-lg drop-shadow-xl rounded-lg m-5  lg:w-screen h-50">
      <h2 className="poppins text-slate-500 mb-2 text-center">
        Gradient Direction
      </h2>
      <div className="flex items-center">
        <div className="flex flex-col items-center justify-center mr-3">
          <div className="flex  lowercase">
            <p className="rotate-90 absolute hidden">Regular</p>
            <button
              className="m-1 w-12 h-12 bg-gradient-to-l from-teal-100 to-teal-500 rounded-md border border-teal-500"
              onClick={() => setDirectionType("default")}
            ></button>
          </div>
          <div className="flex lowercase">
            <p className="rotate-90 absolute hidden">Radial</p>
            <button
              className="m-1 w-12 h-12 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-100 to-teal-500 rounded-md border border-teal-500"
              onClick={() => setDirectionType("radial")}
            ></button>
          </div>
        </div>
        <div>
          {directionType == "radial" && (
            <ul className=" grid grid-cols-3 grid-rows-3 ">
              <DirButton
                onClick={() =>
                  setDirection(
                    "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]"
                  )
                }
              >
                <NorthWest className="mt-2" />
              </DirButton>

              <DirButton
                onClick={() =>
                  setDirection(
                    "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]"
                  )
                }
              >
                <North className="" />
              </DirButton>
              <DirButton
                onClick={() =>
                  setDirection(
                    "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]"
                  )
                }
              >
                <NorthEast className="" />
              </DirButton>
              <DirButton
                onClick={() =>
                  setDirection(
                    "bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))]"
                  )
                }
              >
                <West className="" />
              </DirButton>
              <DirButton
                onClick={() =>
                  setDirection(
                    "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]"
                  )
                }
              >
                <i class="fa-regular fa-circle text-black text-2xl m-auto"></i>
              </DirButton>
              <DirButton
                onClick={() =>
                  setDirection(
                    "bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))]"
                  )
                }
              >
                <East className="" />
              </DirButton>
              <DirButton
                onClick={() =>
                  setDirection(
                    "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))]"
                  )
                }
              >
                <SouthWest className="" />
              </DirButton>
              <DirButton
                onClick={() =>
                  setDirection(
                    "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]"
                  )
                }
              >
                <South className="" />
              </DirButton>
              <DirButton
                onClick={() =>
                  setDirection(
                    "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))]"
                  )
                }
              >
                <SouthEast className="" />
              </DirButton>
            </ul>
          )}
          {directionType == "default" && (
            <ul className=" grid grid-cols-3 grid-rows-3 ">
              <DirButton onClick={() => setDirection("bg-gradient-to-tl")}>
                <NorthWest className="" />
              </DirButton>
              <DirButton onClick={() => setDirection("bg-gradient-to-t")}>
                <North className="" />
              </DirButton>
              <DirButton onClick={() => setDirection("bg-gradient-to-tr")}>
                <NorthEast className="" />
              </DirButton>
              <DirButton onClick={() => setDirection("bg-gradient-to-l")}>
                <West className="" />
              </DirButton>
              <li className="w-[30px] "></li>
              <DirButton onClick={() => setDirection("bg-gradient-to-r")}>
                <East className="" />
              </DirButton>
              <DirButton onClick={() => setDirection("bg-gradient-to-bl")}>
                <SouthWest className="" />
              </DirButton>
              <DirButton onClick={() => setDirection("bg-gradient-to-b")}>
                <South className="" />
              </DirButton>
              <DirButton onClick={() => setDirection("bg-gradient-to-br")}>
                <SouthEast className="" />
              </DirButton>
            </ul>
          )}
        </div>
        <p className="w-40 text-right px-1 self-start text-sm  text-slate-800">
          Select both radial or regular gradients, and then select their
          orientation.
        </p>
      </div>
    </div>
  );
};

const ColorDropDown = ({ color, setColor, trim }) => {
  const [isActive, setActive] = useState(false);

  let menuRef = useRef();

  const CustomSwatches = ({ isActive }) => {
    const handleChange = (color, event) => {
      color = {
        hex: "#333",
      };
      setColor();
    };

    return (
      <SwatchesPicker
        colors={colors}
        className={`dropdowncolor absolute z-50 ${
          isActive ? "active" : "inactive"
        }`}
        onChange={handleChange}
      />
    );
  };

  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setActive(false);
        console.log(menuRef.current);
      }
    };
    document.addEventListener("mousedown", handler);
  });

  const toggleMenu = () => {
    setActive(!isActive);
  };

  const background = "bg" + color.substring(trim); //trims the string by a predetermined amount based on which color is selected
  console.log(background);

  return (
    <div className="" ref={menuRef}>
      <button
        className={`${background} m-1 w-24 h-24 rounded-md`}
        onClick={toggleMenu}
      ></button>
      <div className="z-10">
        <CustomSwatches isActive={isActive} />
      </div>
    </div>
  );
};

const ColorSelect = ({
  firstColor,
  setFirstColor,
  middleColor,
  setMiddleColor,
  lastColor,
  setLastColor,
}) => {
  return (
    <div className="flex items-center justify-center bg-slate-200 p-4 flex  drop-shadow-xl rounded-lg m-5  lg:w-screen h-50">
      <ColorDropDown color={firstColor} setColor={setFirstColor} trim={4} />
      <ColorDropDown color={middleColor} setColor={setMiddleColor} trim={3} />
      <ColorDropDown color={lastColor} setColor={setLastColor} trim={2} />
    </div>
  );
};

const GradientBar = ({ direction, firstColor, middleColor, lastColor }) => {
  let blend = middleColor ? middleColor : "";
  let gradientClasses = `${direction} ${firstColor} ${blend} ${lastColor}`;

  return (
    <div className="w-full flex flex-col lg:flex-row mx-auto">
      <div className="bg-slate-200 p-10 drop-shadow-xl rounded-lg m-5  lg:w-screen h-80">
        <div
          className={`${direction} ${firstColor} ${blend} ${lastColor} w-full h-full rounded`}
        ></div>
      </div>
      <div className="text-xs martian drop-shadow-xl bg-slate-200 rounded-lg m-5 text-slate-700 lg:w-screen h-80">
        <p className="p-2 mt-2 mx-2">{gradientClasses}</p>
      </div>
    </div>
  );
};

export default GradientUI;
