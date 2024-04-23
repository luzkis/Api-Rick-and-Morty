import React from "react";


const footer = () => {

    return(
        <div className="bg-blue-200 p-20 mt-6 content-center">
            <ul className=" flex items-center justify-center mx-5">
              <li className="">
                <a title="characters" href="https://rickandmortyapi.com/api/character">
                  <span className="mx-5 text-gray-700 hover:text-gray-400  font-black">CHARACTERES: 826</span>
                </a> 
              </li>
              <li>
                <a title="characters" href="https://rickandmortyapi.com/api/location">
                  <span className="mx-5 text-gray-700 hover:text-gray-400 font-black">UBICACIONES: 126</span>
                </a> 
              </li>
              <li>
                <a title="characters" href="https://rickandmortyapi.com/api/episode">
                  <span className="mx-5 text-gray-700 hover:text-gray-400 font-black">EPISODIOS: 51</span> 
                </a>  </li>
            </ul>
        </div>
    )
}
export default footer