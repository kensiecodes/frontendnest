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
      <li className="bg-slate-400 rounded-md w-[30px] m-auto">
        <button
          className="bg-slate-200 rounded active:translate-y-0.5"
          onClick={onClick}
        >
          {children}
        </button>
      </li>
    );
  };
  console.log(setDirection);
  const [directionType, setDirectionType] = useState("radial");
  return (
    <div className="bg-slate-500 rounded-md p-4 ">
      <h2 className="poppins mb-2 ">Gradient Direction</h2>
      {directionType == "radial" && (
        <ul className=" grid grid-cols-3 grid-rows-3 ">
          <DirButton
            onClick={() =>
              setDirection(
                "bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]"
              )
            }
          >
            <NorthWest className="" />
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
            <img src="images/logo.svg" />
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
  );
};

const GradientBar = ({ direction, firstColor, middleColor, lastColor }) => {
  let blend = middleColor ? middleColor : "";
  console.log(blend);
  let gradientClasses = `${direction} from-${firstColor} ${blend} to-${lastColor} w-full h-full`;

  console.log(gradientClasses);
  return (
    <div className="w-full flex flex-col lg:flex-row mx-auto">
      <div className="bg-slate-700 rounded-lg m-5  lg:w-screen h-80">
        <div
          className={`${direction} ${firstColor} ${blend} ${lastColor} w-full h-full rounded`}
        ></div>
      </div>
      <div className="bg-slate-700 rounded-lg m-5  lg:w-screen h-80"></div>
    </div>
  );
};

export default GradientUI;
