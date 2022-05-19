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
        Hello {name}
      </div>
    )
  
}

export default Home