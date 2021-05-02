import axios from "axios";

const baseUrl = 'http://localhost:8080';


export const getAllWizzardsAxios = async() => {
    const data = await axios.get(`${baseUrl}/api/wizzards`);
    
    return data;
}


export const getWizzardByIdAxios = async(uid = '') => {
    
    const data = await axios.get(`${baseUrl}/api/wizzards/${uid}`)

    if (!uid) {
        throw new Error('El id no existe');
    }

    return data;

}

export const getAllCurses = async() => {
    const data = await axios.get(`${baseUrl}/api/curses`);
    
    return data;
}
