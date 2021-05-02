import React from 'react'
import { useLocation } from 'react-router'
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm';
import { useJujutsu } from '../../hooks/useJujutsu';
import { WizzardCard } from '../wizzards/WizzardCard';

export const SearchWizzardScreen = () => {
    
    const location = useLocation();
    
    const [ wizzardData ] = useJujutsu(); 


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
                    (q !== '' && wizzardData.length === 0) && <div>No hay un personaje con {q}</div>
                }

                {
                    wizzardData
                    .filter((wizzard) => searchText === wizzard.nombre )
                    .map(wizzard =>{
                        return(<WizzardCard key={wizzard.uid} {...wizzard} /> )
                    })
                }
            </div>

        </div>
    )
}

// 