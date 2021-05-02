import React from "react";

export const CurseCard = ({img, nombre, apodo, tipo, estado}) => {
  return (
    <div className='border animate__animated animate__fadeIn'>
      <img src={img} alt={nombre} />

      <div className='mt-2 text-center text-2xl font-semibold'>{nombre}</div>

      {apodo ? <div className='text-base italic text-center text-gray-400 my-2'>{apodo}</div> : null}

      <div className='text-center my-2'>{tipo}</div>
      <div className='text-center font-semibold text-purple-700 mt-2 mb-4'>{estado}</div>
    </div>
  );
};
