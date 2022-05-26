// import { render } from '@testing-library/react';
import React, { SyntheticEvent, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';

const Login = (props: { setName: ( name: string ) => void }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
      e.preventDefault();
      
      const response = await fetch('http://localhost:8000/api/login',{
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
          body: JSON.stringify({
              email,
              password
          })
      }); 

      const content = await response.json();
      
      setRedirect(true);
      props.setName(content.name);

    }
    if (redirect) {
      return <Navigate to="/" />;
    }

    return ( 
        <div className="container">
          <div className="row justify-content-center align-items-center pt-5 rounded">
            <div className="col-sm-auto">
              <div className="card">
                <div className="card-body">
                  <div className="form-control-sm">
                    <form onSubmit={submit}>
                      <div className="text-center">
                        <img className="mb-4" src="./images/react.png" alt="" width="72" height="57"/>
                        <h2 className="mb-3 fw-normal">Welcome Back</h2>
                        <p className="mb-3 fw-normal">Please enter your details</p>
                      </div>
                  
                      <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required 
                          onChange={e => setEmail(e.target.value)}
                        />
                        <label htmlFor="floatingInput">Enter your email</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required 
                          onChange={e => setPassword(e.target.value)}
                        />
                        <label htmlFor="floatingPassword">Password</label>
                      </div>

                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Remember for 30 days
                        </label>
                      </div>
                      <div className="form-check form-check-inline mb-3">
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          <Link to="/">Forgot password</Link>
                        </label>
                      </div>
                      <button className="w-100 btn btn-lg btn-primary mb-2" type="submit">Iniciar sesión</button>
                      <div className="mb-3 text-center">
                        <label>
                          Don't have an account? <Link to="/">Sign up</Link>
                        </label>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    )
}

export default Login;