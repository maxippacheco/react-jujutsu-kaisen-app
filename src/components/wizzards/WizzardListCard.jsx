import React from "react";
import {
  Link
} from "react-router-dom";

export const WizzardListCard = ({ img, nombre, afiliacion, grado, uid }) => {
  return (
    <div className='animate__animated animate__fadeIn'>
      <img
        src={img}
        alt={nombre}
        className="h-5/6 m-auto object-cover w-full"
      />

      <div className="text-center border border-gray-200">
        <div className="my-2 text-2xl font-bold">{nombre}</div>

        <div className="my-2 text-xs text-gray-400">{afiliacion}</div>

        <div className="my-2 text-xl text-purple-700">{grado}</div>

        <Link to={`/wizzards/${uid}`} className='text-blue-400'>...Mas </Link>

      </div>
    </div>
  );
};