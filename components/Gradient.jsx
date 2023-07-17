"use client";

import React, { useState, useEffect } from "react";
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

const GradientUI = () => {
  const [direction, setDirection] = useState("bg-gradient-to-r");
  const [firstColor, setFirstColor] = useState("from-lime-300");
  const [middleColor, setMiddleColor] = useState("");
  const [lastColor, setLastColor] = useState("to-cyan-300");
  return (
    <>
      <GradientDirection direction={direction} setDirection={setDirection} />
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
          className="bg-gradient-to-br from-teal-500 to-teal-200 drop-shadow-lg hover:filter-none rounded-xl w-10 h-9 border-b border-teal-500 flex justify-center active:translate-y-0.5"
          onClick={onClick}
        >
          {children}
        </button>
      </li>
    );
  };
  console.log(setDirection);
  const [directionType, setDirectionType] = useState("default");
  return (
    <div className="bg-slate-200 rounded-2xl p-4 flex-col drop-shadow-lg ">
      <h2 className="poppins text-slate-500 mb-2 text-center">
        Gradient Direction
      </h2>
      <div className="flex items-center">
        <div className="flex flex-col items-center justify-center mr-3">
          <div className="flex  lowercase">
            <p className="rotate-90 ">Regular</p>
            <button
              className="m-1 w-12 h-12 bg-gradient-to-l from-teal-100 to-teal-500 rounded-md border border-teal-500"
              onClick={() => setDirectionType("default")}
            ></button>
          </div>
          <div className="flex  lowercase">
            <p className="rotate-90 relative">Radial</p>
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

const ColorSelect = () => {};

const GradientBar = ({ direction, firstColor, middleColor, lastColor }) => {
  let blend = middleColor ? middleColor : "";
  console.log(blend);
  let gradientClasses = `${direction} ${firstColor} ${blend} ${lastColor}`;

  console.log(gradientClasses);
  return (
    <div className="w-full flex flex-col lg:flex-row mx-auto">
      <div className="bg-slate-700 rounded-lg m-5  lg:w-screen h-80">
        <div
          className={`${direction} ${firstColor} ${blend} ${lastColor} w-full h-full rounded`}
        ></div>
      </div>
      <div className="text-xs martian bg-slate-700 rounded-lg m-5  lg:w-screen h-80">
        <p className="p-2 mt-2 mx-2">{gradientClasses}</p>
      </div>
    </div>
  );
};

export default GradientUI;
