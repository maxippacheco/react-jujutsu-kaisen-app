import React from "react";
import { Link } from "react-router-dom";

export const WizzardCard = ({
  img,
  nombre,
  afiliacion,
  grado,
  estado,
  clan,
  apodo,
  uid,
}) => {
  return (
    <div className="animate__animated animate__fadeInDown grid grid-cols-2 m-48">
      <div className="m-auto">
        <img src={img} alt={nombre} className="rounded" />
      </div>

      <div>
        <div className="my-2 font-bold text-5xl">{nombre}</div>

        <div className="my text-purple-700 font-bold text-2xl">{grado}</div>

        <div className="my-2 text-base italic text-gray-400">{afiliacion}</div>

        {clan ? (
          <div className="my-2 text-lg text-purple-700 font-bold">{clan}</div>
        ) : null}

        {apodo ? (
          <div className="my text-base italic text-gray-400">{apodo}</div>
        ) : null}

        <div className="mt-2 mb-5 text-base text-purple-700 font-bold">
          {estado}
        </div>

        <Link
          to="/"
          className=" px-4 py-2 rounded text-white bg-purple-500 hover:bg-purple-700"
        >
          Return
        </Link>
      </div>
    </div>
  );
};
