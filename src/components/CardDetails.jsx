import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CardDetails = ()=> {
    let {characterid}= useParams();

    const [character, setCharacter]=useState(null);

    useEffect(()=>{
        const getCharacter= async ()=>{
            const data = await fetch(`https://rickandmortyapi.com/api/character/${characterid}`
);
            const response= await data.json();

            setCharacter(response);
        };
        getCharacter();

    
    
    
    },[]);
     
    if (character === null) return <div>Loading...</div>
    return (
        <div class="block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mx-auto mt-5 p r " >
          <img  className="rounded-t-lg " src={character?.image} />
          <p className="mb-2 text-xl font-medium leading-tight text-green-600 text-center ">{character.name} </p>
          <p className='font-normal text-center'>Status: {character.status}</p>
          <p className='font-normal text-center'>Especie: {character.species}</p>
          <p className='font-normal text-center'>Genero: {character.gender}</p>
          <p className='font-normal text-center mb-10 pb-6'>Origen:  {character.origin.name}</p>
        </div>
    );
}

export default CardDetails;
        