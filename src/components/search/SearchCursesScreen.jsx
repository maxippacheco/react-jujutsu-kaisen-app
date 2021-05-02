import React from 'react'
import { useCurses } from '../../hooks/useCurses';
import { useLocation } from 'react-router'
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm';
import { CurseSearchCard } from '../curses/CurseSearchCard';

export const SearchCursesScreen = () => {
    
    const [courseData] = useCurses();
    
    const location = useLocation();
    


    const { q = '' } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText : q
    })

    const { searchText } = formValues;



    const handleSearch = e => {
        
        e.preventDefault();
        // history.push(`?q=${ searchText }`);

    }


    return (
        <div>
            <div>
                <h1 className='text-center mt-10 text-3xl font-semibold text-purple-700 mb-4'>Busca tu personaje</h1>

                <form onSubmit={handleSearch} className='w-full flex justify-center'>
                        <input 
                            type="text"
                            className='border-b-2 border-purple-700 focus:outline-none w-72 text-lg'
                            name='searchText'
                            value={searchText}
                            onChange={ handleInputChange }

                        />

                        <button type='submit' className='border-b-2 border-purple-700 text-2xl text-purple-700'>
                            <i className="fas fa-search"></i>
                        </button>
                </form>
            </div>

            <div>

                {
                    (q === '') && null
                }

                {
                    (q !== '' && courseData.length === 0) && <div>No hay un personaje con {q}</div>
                }

                {
                    courseData
                    .filter((curse) => searchText === curse.nombre )
                    .map(curse =>{
                        return(<CurseSearchCard key={curse._id} {...curse} /> )
                    })
                }
            </div>

        </div>
    )
}
