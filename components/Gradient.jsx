"use client";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

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
]; //formatted specifically as input for the color array parameter for the SwatchPicker component
//pairs with below array to change state to appropraite tailwind class

const tailwindColors = [
  [
    "-slate-50",
    "-slate-100",
    "-slate-200",
    "-slate-300",
    "-slate-400",
    "-slate-500",
    "-slate-600",
    "-slate-700",
    "-slate-800",
    "-slate-900",
    "-slate-950",
  ],
  [
    "-gray-50",
    "-gray-100",
    "-gray-200",
    "-gray-300",
    "-gray-400",
    "-gray-500",
    "-gray-600",
    "-gray-700",
    "-gray-800",
    "-gray-900",
    "-gray-950",
  ],
  [
    "-zinc-50",
    "-zinc-100",
    "-zinc-200",
    "-zinc-300",
    "-zinc-400",
    "-zinc-500",
    "-zinc-600",
    "-zinc-700",
    "-zinc-800",
    "-zinc-900",
    "-zinc-950",
  ],
  [
    "-neutral-50",
    "-neutral-100",
    "-neutral-200",
    "-neutral-300",
    "-neutral-400",
    "-neutral-500",
    "-neutral-600",
    "-neutral-700",
    "-neutral-800",
    "-neutral-900",
    "-neutral-950",
  ],
  [
    "-stone-50",
    "-stone-100",
    "-stone-200",
    "-stone-300",
    "-stone-400",
    "-stone-500",
    "-stone-600",
    "-stone-700",
    "-stone-800",
    "-stone-900",
    "-stone-950",
  ],
  [
    "-red-50",
    "-red-100",
    "-red-200",
    "-red-300",
    "-red-400",
    "-red-500",
    "-red-600",
    "-red-700",
    "-red-800",
    "-red-900",
    "-red-950",
  ],
  [
    "-orange-50",
    "-orange-100",
    "-orange-200",
    "-orange-300",
    "-orange-400",
    "-orange-500",
    "-orange-600",
    "-orange-700",
    "-orange-800",
    "-orange-900",
    "-orange-950",
  ],
  [
    "-amber-50",
    "-amber-100",
    "-amber-200",
    "-amber-300",
    "-amber-400",
    "-amber-500",
    "-amber-600",
    "-amber-700",
    "-amber-800",
    "-amber-900",
    "-amber-950",
  ],
  [
    "-yellow-50",
    "-yellow-100",
    "-yellow-200",
    "-yellow-300",
    "-yellow-400",
    "-yellow-500",
    "-yellow-600",
    "-yellow-700",
    "-yellow-800",
    "-yellow-900",
    "-yellow-950",
  ],
  [
    "-lime-50",
    "-lime-100",
    "-lime-200",
    "-lime-300",
    "-lime-400",
    "-lime-500",
    "-lime-600",
    "-lime-700",
    "-lime-800",
    "-lime-900",
    "-lime-950",
  ],
  [
    "-green-50",
    "-green-100",
    "-green-200",
    "-green-300",
    "-green-400",
    "-green-500",
    "-green-600",
    "-green-700",
    "-green-800",
    "-green-900",
    "-green-950",
  ],
  [
    "-emerald-50",
    "-emerald-100",
    "-emerald-200",
    "-emerald-300",
    "-emerald-400",
    "-emerald-500",
    "-emerald-600",
    "-emerald-700",
    "-emerald-800",
    "-emerald-900",
    "-emerald-950",
  ],
  [
    "-teal-50",
    "-teal-100",
    "-teal-200",
    "-teal-300",
    "-teal-400",
    "-teal-500",
    "-teal-600",
    "-teal-700",
    "-teal-800",
    "-teal-900",
    "-teal-950",
  ],
  [
    "-cyan-50",
    "-cyan-100",
    "-cyan-200",
    "-cyan-300",
    "-cyan-400",
    "-cyan-500",
    "-cyan-600",
    "-cyan-700",
    "-cyan-800",
    "-cyan-900",
    "-cyan-950",
  ],
  [
    "-sky-50",
    "-sky-100",
    "-sky-200",
    "-sky-300",
    "-sky-400",
    "-sky-500",
    "-sky-600",
    "-sky-700",
    "-sky-800",
    "-sky-900",
    "-sky-950",
  ],
  [
    "-blue-50",
    "-blue-100",
    "-blue-200",
    "-blue-300",
    "-blue-400",
    "-blue-500",
    "-blue-600",
    "-blue-700",
    "-blue-800",
    "-blue-900",
    "-blue-950",
  ],
  [
    "-indigo-50",
    "-indigo-100",
    "-indigo-200",
    "-indigo-300",
    "-indigo-400",
    "-indigo-500",
    "-indigo-600",
    "-indigo-700",
    "-indigo-800",
    "-indigo-900",
    "-indigo-950",
  ],
  [
    "-violet-50",
    "-violet-100",
    "-violet-200",
    "-violet-300",
    "-violet-400",
    "-violet-500",
    "-violet-600",
    "-violet-700",
    "-violet-800",
    "-violet-900",
    "-violet-950",
  ],
  [
    "-purple-50",
    "-purple-100",
    "-purple-200",
    "-purple-300",
    "-purple-400",
    "-purple-500",
    "-purple-600",
    "-purple-700",
    "-purple-800",
    "-purple-900",
    "-purple-950",
  ],
  [
    "-fuchsia-50",
    "-fuchsia-100",
    "-fuchsia-200",
    "-fuchsia-300",
    "-fuchsia-400",
    "-fuchsia-500",
    "-fuchsia-600",
    "-fuchsia-700",
    "-fuchsia-800",
    "-fuchsia-900",
    "-fuchsia-950",
  ],
  [
    "-pink-50",
    "-pink-100",
    "-pink-200",
    "-pink-300",
    "-pink-400",
    "-pink-500",
    "-pink-600",
    "-pink-700",
    "-pink-800",
    "-pink-900",
    "-pink-950",
  ],
  [
    "-rose-50",
    "-rose-100",
    "-rose-200",
    "-rose-300",
    "-rose-400",
    "-rose-500",
    "-rose-600",
    "-rose-700",
    "-rose-800",
    "-rose-900",
    "-rose-950",
  ],
]; //corresponds to colors array and holds the appropriate tailwind class to each selected color key in the swatch

import React, { useState, useEffect, useRef } from "react";
import { SwatchesPicker } from "react-color";

const GradientUI = () => {
  const [direction, setDirection] = useState("bg-gradient-to-r");
  const [firstColor, setFirstColor] = useState("from-violet-300");
  const [middleColor, setMiddleColor] = useState("");
  const [lastColor, setLastColor] = useState("to-teal-300");
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row mx-auto relative z-10">
        <GradientDirection
          direction={direction}
          setDirection={setDirection}
          firstColor={firstColor}
          middleColor={middleColor}
          lastColor={lastColor}
        />
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
//holds state for all the gradient variables and initializes UI for page

const GradientDirection = ({
  direction,
  setDirection,
  firstColor,
  middleColor,
  lastColor,
}) => {
  let gradientClasses = `${direction} ${firstColor} ${middleColor} ${lastColor}`;

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [copied]);

  const copy = () => {
    navigator.clipboard.writeText(gradientClasses).then(setCopied(true));
  };

  const DirButton = ({ children, onClick }) => {
    return (
      <li className="mb-1 m-auto merriweather">
        <button
          className="text-slate-600 text-2xl  bg-indigo-50 drop-shadow-sm hover:filter-none rounded-xl w-10 h-9 border-b  flex justify-center transition ease-in-out duration-150 active:translate-y-0.5"
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
      {copied && (
        <p className="absolute text-slate-50 border border-rose-400 bg-rose-400 z-99  border-2 rounded-md px-3 py-1 top-24 right-4">
          Copied!
        </p>
      )}
      <div className="flex items-between justify-between ">
        <h2 className="poppins text-slate-500 mb-2 mr-2 text-xl text-center">
          Gradient Direction
        </h2>
        <div className="p-2">
          <Tooltip id="help-tooltip" />

          <button
            data-tooltip-id="help-tooltip"
            data-tooltip-content="Select either radial or regular gradients, and then select the
          orientation."
            className="mx-1 text-xl w-10 h-10 rounded-lg text-slate-600 bg-indigo-50"
          >
            <i class="fa-regular fa-circle-question"></i>
          </button>

          <button className="mx-1 text-xl w-10 h-10 rounded-lg text-slate-600 bg-indigo-50">
            <i onClick={copy} class="fa-regular fa-copy"></i>
          </button>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="flex flex-col items-center justify-center mr-3">
          <div className="flex  lowercase">
            <p className="rotate-90 absolute hidden">Regular</p>
            <button
              className="m-1 w-12 h-12 bg-gradient-to-l from-sky-100 to-indigo-500 rounded-md border border-slate-300"
              onClick={() => setDirectionType("default")}
            ></button>
          </div>
          <div className="flex lowercase">
            <p className="rotate-90 absolute hidden">Radial</p>
            <button
              className="m-1 w-12 h-12 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-100 to-indigo-500 rounded-md border border-slate-300"
              onClick={() => setDirectionType("radial")}
            ></button>
          </div>
        </div>
        <div className="px-5">
          {directionType == "radial" && (
            <ul className=" grid grid-cols-3 grid-rows-3 ">
              <DirButton
                onClick={() =>
                  setDirection(
                    "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]"
                  )
                }
              >
                &#8598;
              </DirButton>

              <DirButton
                onClick={() =>
                  setDirection(
                    "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]"
                  )
                }
              >
                &#8593;
              </DirButton>
              <DirButton
                onClick={() =>
                  setDirection(
                    "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]"
                  )
                }
              >
                &#8599;
              </DirButton>
              <DirButton
                onClick={() =>
                  setDirection(
                    "bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))]"
                  )
                }
              >
                &#8592;
              </DirButton>
              <DirButton
                onClick={() =>
                  setDirection(
                    "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]"
                  )
                }
              >
                <p class="dmsans text-bold text-slate-600 text-xl m-auto uppercase">
                  o
                </p>
              </DirButton>
              <DirButton
                onClick={() =>
                  setDirection(
                    "bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))]"
                  )
                }
              >
                &#8594;
              </DirButton>
              <DirButton
                onClick={() =>
                  setDirection(
                    "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))]"
                  )
                }
              >
                &#8601;
              </DirButton>
              <DirButton
                onClick={() =>
                  setDirection(
                    "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]"
                  )
                }
              >
                &#8595;
              </DirButton>
              <DirButton
                onClick={() =>
                  setDirection(
                    "bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))]"
                  )
                }
              >
                &#8600;
              </DirButton>
            </ul>
          )}
          {directionType == "default" && (
            <ul className=" grid grid-cols-3 grid-rows-3 ">
              <DirButton onClick={() => setDirection("bg-gradient-to-tl")}>
                <p className="merriweather">&#8598;</p>
              </DirButton>
              <DirButton onClick={() => setDirection("bg-gradient-to-t")}>
                &uarr;
              </DirButton>
              <DirButton onClick={() => setDirection("bg-gradient-to-tr")}>
                &#8599;
              </DirButton>
              <DirButton onClick={() => setDirection("bg-gradient-to-l")}>
                &#8592;
              </DirButton>
              <li className="w-[30px] "></li>
              <DirButton onClick={() => setDirection("bg-gradient-to-r")}>
                &#8594;
              </DirButton>
              <DirButton onClick={() => setDirection("bg-gradient-to-bl")}>
                &#8601;
              </DirButton>
              <DirButton onClick={() => setDirection("bg-gradient-to-b")}>
                &#8595;
              </DirButton>
              <DirButton onClick={() => setDirection("bg-gradient-to-br")}>
                &#8600;
              </DirButton>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
//a selector for gradient direction
//in dev: visual indicator for selected direction

const ColorDropDown = ({ color, setColor, trim }) => {
  const [isActive, setActive] = useState(false);

  let menuRef = useRef();

  const CustomSwatches = ({ isActive }) => {
    const convertHex = (hex) => {
      let firstIndex;
      let secondIndex;
      let prefix;
      if (trim === 4) {
        prefix = "from";
      } else if (trim === 3) {
        prefix = "via";
      } else if (trim === 2) {
        prefix = "to";
      }
      for (let i = 0; i < colors.length; i++) {
        const subArray = colors[i];
        for (let j = 0; j < subArray.length; j++) {
          if (subArray[j] === hex) {
            firstIndex = i;
            secondIndex = j;
          }
        }
      }
      console.log(prefix + tailwindColors[firstIndex][secondIndex]);
      return prefix + tailwindColors[firstIndex][secondIndex];
    };

    const handleChange = (color, event) => {
      setColor(convertHex(color.hex));
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
      }
    };
    document.addEventListener("mousedown", handler);
  });

  const toggleMenu = () => {
    setActive(!isActive);
  };

  const background = "bg" + color.substring(trim); //trims the string by a predetermined amount based on which color is selected

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
//component for dropdown color selection, three of these present in colorselect component for from- via- and to- classes

const ColorSelect = ({
  firstColor,
  setFirstColor,
  middleColor,
  setMiddleColor,
  lastColor,
  setLastColor,
}) => {
  const [hidden, setHidden] = useState(true);

  const handleHidden = () => {
    setHidden(!hidden);
    hidden ? setMiddleColor("via-cyan-300") : setMiddleColor("");
  };

  return (
    <div className="flex items-center justify-center bg-slate-200 p-4 flex  drop-shadow-xl rounded-lg m-5  lg:w-screen h-50">
      <ColorDropDown color={firstColor} setColor={setFirstColor} trim={4} />
      {!hidden && (
        <ColorDropDown color={middleColor} setColor={setMiddleColor} trim={3} />
      )}
      <ColorDropDown color={lastColor} setColor={setLastColor} trim={2} />
      {hidden && (
        <p
          onClick={handleHidden}
          className="cursor-pointer text-slate-600 bg-indigo-50 rounded-xl text-bold text-4xl m-4 px-2"
        >
          +
        </p>
      )}
      {!hidden && (
        <p
          onClick={handleHidden}
          className="cursor-pointer text-slate-600 bg-indigo-50 rounded-xl text-bold text-4xl m-4 px-2"
        >
          -
        </p>
      )}
    </div>
  );
};
//color selection bar

const GradientBar = ({ direction, firstColor, middleColor, lastColor }) => {
  let gradientClasses = `${direction} ${firstColor} ${middleColor} ${lastColor}`;

  const [mode, setMode] = useState("bg-slate-100");

  const handleClick = () => {
    if (mode == "bg-slate-100") {
      setMode("bg-slate-700");
    } else if (mode == "bg-slate-700") {
      setMode("bg-slate-100");
    }
  };

  return (
    <div className="w-full flex flex-col lg:flex-row mx-auto">
      <div className="bg-slate-200 p-10 drop-shadow-xl rounded-lg m-5  lg:w-screen h-80">
        <div
          className={`${direction} ${firstColor} ${middleColor} ${lastColor} w-full h-full rounded`}
        ></div>
      </div>
      <div
        className={`flex-col items-center drop-shadow-xl ${mode} rounded-lg m-5 font-bold lg:w-screen h-80`}
      >
        <button
          onClick={handleClick}
          className=" bg-slate-200 rounded-xl text-slate-600 text-xl w-10 h-10 m-2 p-2"
        >
          <i className="fa-regular fa-lightbulb "></i>
        </button>
        <p
          className={`text-center text-2xl p-5 xl:p-10 mt-1 mx-2 text-transparent bg-clip-text ${gradientClasses}`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </p>
      </div>
    </div>
  );
};
//outputs the generated gradient in a dom element

export default GradientUI;
