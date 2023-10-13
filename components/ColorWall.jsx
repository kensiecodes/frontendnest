"use client";

import { useEffect, useState } from "react";


const ColorWall = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <>
      <div className="mb-10 mt-10 flex flex-col lg:flex-row">
        {colors.map((el, index) => {
          return (
            <ColorSet
              key={`colorSet-${index}`}
              colorKey={el.color}
              blocksKey={el.blocks}
              setCopied={setCopied}
            />
          );
        })}
      </div>
      {copied && (
        <p className="fixed top-20 bg-rose-400 px-2 py-1 text-slate-50 rounded-md">
          Successfully copied hex code.
        </p>
      )}
    </>
  );
};

const ColorSet = ({ colorKey, blocksKey, setCopied }) => {
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
              setCopied={setCopied}
            />
          );
        })}
      </div>
    </div>
  );
};

const ColorBlock = ({ colorCode, hexCode, textColor, setCopied }) => {
  const copy = () => {
    navigator.clipboard.writeText(hexCode).then(setCopied(true));
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
