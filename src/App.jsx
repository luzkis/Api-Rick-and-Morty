import React, { Fragment, useEffect, useState } from 'react'; 
import Card from './components/Card'; 

const App = () => { 


  
 
  const [characters, setCharacters] = useState([]); 
 
  useEffect(() => { 
    const fetchData = async () => { 
      const data = await fetch('https://rickandmortyapi.com/api/character'); 
      const response = await data.json(); 
 
      setCharacters(response.results); 
    } 
   
    fetchData() 
      
      .catch(console.error); 
  }, []) 
   
  

  return ( 
    <Fragment> 
      <section className="h-70   grid place-content-center mt-50"> 
      <div>
        <  img src="https://1000logos.net/wp-content/uploads/2022/03/Rick-and-Morty.png" alt="" />
        </div>
      </section> 
 
      <div className="grid grid-cols-2 mt-10 mx-20  gap-6"> 
        { 
          characters.map(character => ( 
            <Card key={character.id} character={character} /> 
          )) 
        } 
        
        
      </div> 
      
    </Fragment>
    
  ) 
} 
 
export default App 