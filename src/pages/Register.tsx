import React, { SyntheticEvent, useState } from 'react'
import { Navigate } from 'react-router-dom';



const Register = () => {
  

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        await fetch('http://localhost:8000/api/register',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name,
                email,
                password
            })
        }); 
        setRedirect(true);
    }
    
    if (redirect) {
        return <Navigate to="/login" />;
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center pt-5 rounded">
                <div className="col-sm-auto">
                    <div className="card">
                        <div className="card-body">
                            <div className="form-control-sm">
                                <form onSubmit={submit}>
                                    <h1 className="h3 mb-3 fw-normal">Please register</h1>
                                    <input className="form-control mb-3" id="floatingInput" placeholder="Name" required
                                        onChange={e => setName(e.target.value)}
                                    />
                                    <input type="email" className="form-control mb-3" id="floatingInput" placeholder="Email Address" required
                                        onChange={e => setEmail(e.target.value)}
                                    />
                                    <input type="password" className="form-control mb-3" id="floatingPassword" placeholder="Password" required
                                        onChange={e => setPassword(e.target.value)}
                                    />
                                    <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register