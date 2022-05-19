import React, { useEffect, useState } from 'react'

const Home = () => {
  const [name, setName] = useState('');
    useEffect(() => {
      (
        async () => {
          const reponse = await fetch('http://localhost:8000/api/user',{
              headers: {'Content-Type': 'application/json'},
              credentials: 'include',
              
          }); 

          const content = await reponse.json();

          setName(content.name);
        }
      )();
    })
    
    return (
      <div>
        {name ? 'Hola ' + name: "No haz iniciado sesión"}
      </div>
    )
  
}

export default Home