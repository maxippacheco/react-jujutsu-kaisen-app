import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className='h-16 w-full bg-purple-500 grid grid-cols-3'>
            
            <div className='ml-40 flex items-center text-xl text-white font-semibold'>
                <h1>Jujutsu App</h1>
            </div>

            <div></div>

            <div className='grid grid-cols-3 m-auto gap-20 text-white font-semibold'>
                <div className='hover:text-purple-800 cursor-pointer'>
                    <NavLink to='/'>Hechizeros</NavLink>
                </div>
                <div className='hover:text-purple-800 cursor-pointer'>
                    <NavLink to='/curse'>Maldiciones</NavLink>
                </div>
                <div className='hover:text-purple-800 cursor-pointer'>
                    <NavLink to='/search'>Buscar</NavLink>
                </div>
            </div>
        </nav>
    )
}
