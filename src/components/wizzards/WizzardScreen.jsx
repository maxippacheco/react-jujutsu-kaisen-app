import React from "react";
import { useParams } from "react-router";
import { useJujutsu } from "../../hooks/useJujutsu";
import { WizzardCard } from "./WizzardCard";

export const WizzardScreen = () => {
  const [wizzardData] = useJujutsu();

  const { uid } = useParams();

  return (
    <div>
      {wizzardData
        .filter((wizzard) => wizzard.uid === uid)
        .map(wizzard =>{

          return(
            <WizzardCard key={wizzard.uid} {...wizzard} />
          )  
        })

      }
    </div> 
       
  )
};
