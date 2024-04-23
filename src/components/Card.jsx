import React from "react";
import { Link } from "react-router-dom";

const Card=({character})=>{

  const { name, status,  image, species, id} = character; 

    return(
        <div> 
          <Link  to={`character/${id}`} >
            <img  className="rounded-full  shadow-2xl mx-auto border-8 border-indigo-200 hover:bg-gray-400  " src={image} alt="personaje"  /> 
          </Link>
          <div > 
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 text-center">{name}</h5> 
            <p className=" text-center mb-3 font-normal  text-gray-100">{status}</p> 
          </div>
        </div> 
    )
}

export default Card