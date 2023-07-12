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
  return (
    <>
      <GradientDirection />
      <GradientBar />
    </>
  );
};

const GradientDirection = () => {
  const [direction, setDirection] = useState("bg-gradient-to-r");
  return (
    <div className="bg-indigo-200 rounded-md p-4 ">
      <h2 className="poppins mb-2 ">Gradient Direction</h2>
      <ul className=" grid grid-cols-3 grid-rows-3 ">
        <li className="bg-slate-400 rounded-md w-[30px] m-auto">
          <button
            className="bg-slate-200 rounded "
            onClick={() => setDirection("bg-gradient-to-tl")}
          >
            <NorthWest className="" />
          </button>
        </li>
        <li className="bg-slate-400 rounded-md w-[30px] m-auto">
          <button
            className="bg-slate-200 rounded "
            onClick={() => setDirection("bg-gradient-to-t")}
          >
            <North className="" />
          </button>
        </li>
        <li className="bg-slate-400 rounded-md w-[30px] m-auto">
          <button
            className="bg-slate-200 rounded"
            onClick={() => setDirection("bg-gradient-to-tr")}
          >
            <NorthEast className="" />
          </button>
        </li>
        <li className="bg-slate-400 rounded-md w-[30px] m-auto">
          <button
            className="bg-slate-200 rounded"
            onClick={() => setDirection("bg-gradient-to-l")}
          >
            <West className="" />
          </button>
        </li>
        <li className="w-[30px] "></li>
        <li className="bg-slate-400 rounded-md w-[30px] m-auto">
          <button
            className="bg-slate-200 rounded"
            onClick={() => setDirection("bg-gradient-to-r")}
          >
            <East className="" />
          </button>
        </li>
        <li className="bg-slate-400 rounded-md w-[30px] m-auto">
          <button
            className="bg-slate-200 rounded"
            onClick={() => setDirection("bg-gradient-to-bl")}
          >
            <SouthWest className="" />
          </button>
        </li>
        <li className="bg-slate-400 rounded-md w-[30px] m-auto">
          <button
            className="bg-slate-200 rounded"
            onClick={() => setDirection("bg-gradient-to-b")}
          >
            <South className="" />
          </button>
        </li>
        <li className="bg-slate-400 rounded-md w-[30px] m-auto">
          <button
            className="bg-slate-200 rounded "
            onClick={() => setDirection("bg-gradient-to-br")}
          >
            <SouthEast className="" />
          </button>
        </li>
      </ul>
    </div>
  );
};

const GradientBar = (form) => {
  return (
    <div className="w-full flex flex-col lg:flex-row mx-auto">
      <div className="bg-indigo-200 rounded-lg m-5  lg:w-screen h-80"></div>
      <div className="bg-indigo-200 rounded-lg m-5  lg:w-screen h-80"></div>
    </div>
  );
};

export default GradientUI;
