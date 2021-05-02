import React from 'react'
import { Link } from 'react-router-dom'

export const SearchScreen = () => {
    return (
        <div>
            <h1 className='text-center m-20 text-3xl animate__animated animate__pulse'>Search</h1>


            <div className='w-full grid grid-cols-2 text-center'>
                <div className='animate__animated animate__heartBeat animate__infinite'>
                    <Link to='/search/wizzard' className='bg-purple-700 p-2 text-white rounded' >Wizzards</Link>
                </div>

                <div className='animate__animated animate__heartBeat animate__infinite'>
                    <Link to='/search/curses' className='bg-purple-700 p-2 text-white rounded' >Curses</Link>
                </div>
            </div>
        </div>
    )
}
