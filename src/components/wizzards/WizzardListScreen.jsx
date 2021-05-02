import React from "react";
import { useJujutsu } from "../../hooks/useJujutsu";
import { WizzardListCard } from "./WizzardListCard";

export const WizzardListScreen = () => {

    const [wizzardData] = useJujutsu();

    return (
        <div className='grid grid-cols-3 gap-20 mx-96 my-20 animate__animated animate__fadeIn'>
          {wizzardData.map( wizzard => {
            return (
                  <WizzardListCard 
                      key={wizzard.uid} 
                      {...wizzard} 
                  />
            );
          })}
        </div>
      );
}
