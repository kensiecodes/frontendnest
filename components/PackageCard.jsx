"use client";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

const PackageCard = ({ pkgName, pageLink, pkgPages }) => {
  return (
    <div className="bg-slate-200 max-w-sm p-4 rounded-md">
      <h1 className="text-2xl text-indigo-700 mb-2">
        <a>{pkgName}</a>
      </h1>
      {pkgPages.map((page, index) => {
        return (
          <PackagePage
            key={`${index}`}
            img={page.src}
            title={page.title}
            desc={page.desc}
            link={pageLink}
          />
        );
      })}
    </div>
  );
};

const PackagePage = ({ link, img, title, desc }) => {
  return (
    <div className="w-1/2 px-1">
      <a href={link}>
        <img src={img} alt="article image" className="" />
      </a>
      <a
        href={link}
        className="lowercase bold martian"
        data-tooltip-id="desc-tooltip"
        data-tooltip-content={desc}
      >
        <h2 className="mt-1 poppins text-xl text-slate-600 hover:text-indigo-600 transition duration-1000 ease-in-out ">
          {title}
        </h2>
      </a>
      <Tooltip id="desc-tooltip" />
    </div>
  );
};

export default PackageCard;
