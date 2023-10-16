"use client";

import ColorWall from "../../components/ColorWall";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const ColorWallPage = () => {
  return (
    <>
      <h2 className="text-3xl poppins text-indigo-500">Color Palette</h2>
      <h4 className="">
        Tailwind's default color palette. See{" "}
        <a
          className="text-sky-500 underline hover:no-underline hover:text-fuchsia-500 ease-in-out transition duration-300"
          href="https://tailwindcss.com/docs/customizing-colors"
        >
          here
        </a>{" "}
        for official docs.
      </h4>
      <p className="">
        Usage:{" "}
        <a
          className="lowercase bold martian"
          data-tooltip-id="usage-tooltip"
          data-tooltip-content="most commonly: bg-, text-, border-"
        >
          element-
        </a>
        <Tooltip id="usage-tooltip" />
        <a
          className="lowercase bold martian"
          data-tooltip-id="color-tooltip"
          data-tooltip-content="see tabs below (e.g. yellow, cyan)"
        >
          color-
        </a>
        <Tooltip id="color-tooltip" />
        <a
          className="lowercase bold martian"
          data-tooltip-id="number-tooltip"
          data-tooltip-content="hover desired color. a number between 50-950."
        >
          number
        </a>
        <Tooltip id="number-tooltip" />
      </p>
      <ColorWall />
    </>
  );
};

export default ColorWallPage;
