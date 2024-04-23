import React, { useState } from 'react' 
import Profile from '../components/Profile'
import Form from '../components/Form';
 
const Welcome = () => { 
 
  const [name, setName] = useState('');
    const [especie, setEspecie] = useState('');
    const [genero, setGenero] = useState('');
    const [edad, setEdad] = useState('');
    const [ocupacion, setOcupacion] = useState('');
    const [image, setImage]=useState('');
  
 const handleonFormSubmit = (newName, newEspecie, newGenero, newEdad, newOcupacion,  newImage)=>{
  setName(newName);
  setEspecie(newEspecie);
  setGenero(newGenero);
  setEdad(newEdad);
  setOcupacion(newOcupacion);
  setImage(newImage)
 }

   
  return ( 
    <div>
    <div>
       <h1 className='mb-2 text-xl font-semibold leading-tight text-gray-700 text-center p-5' >¡CREA TÚ PERSONAJE! 😊</h1>
    </div>
    <div className="flex justify-center mt-6 "> 
    
      <div className='w-1/3'> 
        <Profile image={image} name={name} especie={especie} genero={genero} edad={edad} ocupacion={ocupacion} /> 
      </div> 
 
      <div className='w-1/3'> 
      <Form onFormSubmit={handleonFormSubmit}/>

    </div> 
    </div>
    </div>
  ) 
} 
 
export default Welcome 