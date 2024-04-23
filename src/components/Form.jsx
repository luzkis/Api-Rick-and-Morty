import React,{useState, useRef} from "react";

const Form= ({onFormSubmit}) => { 
 
    const [name, setName] = useState('');
    const [especie, setEspecie] = useState('');
    const [genero, setGenero] = useState('');
    const [edad, setEdad] = useState('');
    const [ocupacion, setOcupacion] = useState('');
    const [image, setImage]=useState('');
    
   
    const handleChange = (event) => { 
      setName(event.target.value); 
    } 

    const handleChangeespecie = (event) => { 
      setEspecie(event.target.value); 
    } 
    const handleChangegenero = (event) => { 
      setGenero(event.target.value); 
    } 
    const handleChangeedad = (event) => { 
      setEdad(event.target.value); 
    } 
    const handleChangeOcupacion = (event) => { 
      setOcupacion(event.target.value); 
    } 
      
   
  
    const handleChangeimagen=(event)=>{
      const file = event.target.files[0];
      if (file){
        setImage(URL.createObjectURL(file));
      }
    }
      const handleSubmit=(event)=>{
        event.preventDefault();
        onFormSubmit(name, especie, genero, edad, ocupacion, image)
       
      }
       const borrarDatos=()=>{
              setName('');
              setEspecie('');
              setGenero('');
              setEdad('');
              setOcupacion('');
              
              setImage('');
              if (imageInputRef.current) {
                imageInputRef.current.value = '';  
            }

       }
       const imageInputRef = useRef(null);
  
     
    return ( 

        <form onSubmit={handleSubmit} className='px-8 py-4 border rounded-md bg-blue-200'> 
           
          <span className="block text-sm font-medium text-slate-700">Nombre</span> 
          <input type="text" className="px-4 py-2 border rounded-md w-full" value={name} placeholder='Nombre' onChange={handleChange} /> 

          <span className="block text-sm font-medium text-slate-700">Especie</span> 
          <input type="text" className="px-4 py-2 border rounded-md w-full" value={especie} placeholder='Especie' onChange={handleChangeespecie} /> 

          <span className="block text-sm font-medium text-slate-700">Genero</span> 
          <input type="text" className="px-4 py-2 border rounded-md w-full" value={genero} placeholder='Genero' onChange={handleChangegenero} /> 

          <span className="block text-sm font-medium text-slate-700">Edad</span> 
          <input type="text" className="px-4 py-2 border rounded-md w-full" value={edad} placeholder='Edad' onChange={handleChangeedad} /> 

          <span className="block text-sm font-medium text-slate-700">Ocupacion</span> 
          <input type="text" className="px-4 py-2 border rounded-md w-full" value={ocupacion} placeholder='Ocupacion' onChange={handleChangeOcupacion} /> 
 
        
 
          <span className="block text-sm font-medium text-slate-700 mt-6"></span> 
          <input type="file" accept='image/*' placeholder='Profile picture'  ref={imageInputRef}  onChange={handleChangeimagen}/> 

 
          <div className='mt-8'> 
            <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"type='submit'>Enter</button> 

            <button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"type='button' onClick={borrarDatos}>Borrar</button>
            
          </div> 
        </form> 
      
    )
}
         export default Form