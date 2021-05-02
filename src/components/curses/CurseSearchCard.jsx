import React from "react";

export const CurseSearchCard = ({
  img,
  nombre,
  estado,
  apodo
}) => {
  return (
    <div className="animate__animated animate__fadeInDown grid grid-cols-2 m-48">
      <div className="m-auto">
        <img src={img} alt={nombre} className="rounded" />
      </div>

      <div>
        <div className="mt-2 font-bold text-5xl">{nombre}</div>


        {apodo ? (
          <div className="my-2 text-base italic text-gray-400">{apodo}</div>
        ) : null}

        <div className="mt-2 mb-5 text-base text-purple-700 font-bold">
          {estado}
        </div>
      </div>
    </div>
  );
};
