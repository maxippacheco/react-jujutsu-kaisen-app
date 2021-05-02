import { useEffect, useState } from "react";
import { getAllWizzardsAxios } from "../helpers/axiosHttp";

export const useJujutsu = () => {
    
    const [wizzardsData, setWizzards] = useState([]);

    useEffect(() => {
      const getAllWizzards = async () => {
        const { data } = await getAllWizzardsAxios();
  
        const { wizzards } = data;
  
        setWizzards(wizzards);
  
        // console.log(wizzards);
      };
  
      getAllWizzards();
    }, []);


    return[
        wizzardsData
    ]
}