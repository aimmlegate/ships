import React from "react";

const levelsMap = new Map([
  [1, "Ⅰ"],
  [2, "Ⅱ"],
  [3, "Ⅲ"],
  [4, "Ⅳ"],
  [5, "Ⅴ"],
  [6, "Ⅵ"],
  [7, "Ⅶ"],
  [8, "Ⅷ"],
  [9, "Ⅸ"],
  [10, "Ⅹ"],
  [11, "★"],
]);

interface Props {
  children: number;
}

export const LevelView: React.FC<Props> = ({ children }) => {
  return <span>{levelsMap.get(children)}</span>;
};
