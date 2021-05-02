import { useEffect, useState } from "react";
import { getAllCurses } from "../helpers/axiosHttp";

export const useCurses = () => {
    const [curseData, setCurseData] = useState([]);

    useEffect(() => {
        
        const getData = async () => {
            const { data } = await getAllCurses();
            const { curses } = data;

            setCurseData(curses);
        }

        getData();
    }, [])
    
    return [
        curseData
    ]
}