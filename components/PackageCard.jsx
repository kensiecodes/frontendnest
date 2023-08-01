"use client";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const PackageCard = ({ pkgName, pkgPages }) => {
  return (
    <div className="bg-slate-100/75 max-w-sm p-4 rounded-md drop-shadow-xl rounded-xl">
      <h1 className="text-2xl poppins bg-gradient-to-r from-indigo-300 to-fuchsia-400 bg-clip-text text-transparent mb-2 w-60">
        <a>{pkgName}</a>
      </h1>
      {pkgPages.map((page, index) => {
        return (
          <PackagePage
            className=""
            key={`${index}`}
            img={page.src}
            title={page.title}
            desc={page.desc}
            link={page.link}
          />
        );
      })}
    </div>
  );
};

const PackagePage = ({ link, img, title, desc }) => {
  return (
    <div className="w-1/2 mx-1 my-3 p-1  rounded-xl bg-slate-50 ">
      <a href={link}>
        <img src={img} alt="article image" className="" />
      </a>
      <a
        href={link}
        className="lowercase bold martian"
        data-tooltip-id="desc-tooltip"
        data-tooltip-content={desc}
      >
        <h2 className="text-center mt-1 poppins text-xl text-slate-500 hover:text-teal-400 transition duration-1000 ease-in-out ">
          {title}
        </h2>
      </a>
      <Tooltip id="desc-tooltip" />
    </div>
  );
};

export default PackageCard;
