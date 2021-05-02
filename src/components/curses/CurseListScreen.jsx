import React from "react";
import { useCurses } from "../../hooks/useCurses";
import { CurseCard } from "./CurseCard";

export const CurseListScreen = () => {
  const [curseData] = useCurses();

  return (
    <div className="grid grid-cols-3 gap-20 mx-96 my-20">
      {curseData.map(curse => {
          return(
                <CurseCard key={curse._id} {...curse} />
          )
      })}
    </div>
  );
};
