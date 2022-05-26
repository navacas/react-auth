import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard'

function App() {

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
    <div className="App">
      <BrowserRouter>
        <Nav name={name} setName={setName}/>
        <main className="form-signin w-100 m-auto">
          <Routes>
            <Route path="/" element={ <Home name={name}/>} />
            <Route path="/login" element={ <Login setName={setName}/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
