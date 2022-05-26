// import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props: { name: string, setName: (name: string) => void }) => {

    const logout = async () => {
        await fetch('http://localhost:8000/api/logout',{
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
      }); 

      props.setName(' ');
    }
    console.log( props.name || 'No tiene');
    let menu;
    let dashboard;
        
    if (!props.name) {
        menu = (
            <form className="d-flex">
                <Link to="/login" className="btn me-1" type="submit">Log in</Link>
                <Link to="/register" className="btn btn-primary me-1" type="submit">Sign up</Link>
            </form>
        )
        
    } else{
        dashboard = (
            <Link to ="/dashboard" className="nav-link active" aria-current="page" >Dashboard</Link>
        )
        menu = (
            <form className="d-flex">
                <button className='btn me-1'>Hola {props.name}</button>
                <Link to="/login" className="btn btn-primary me-1" onClick={logout}>Logout</Link>
            </form>
        )
    }

    return (
        <div className="container">
            <nav className="navbar sticky-top navbar-expand-lg navbar-light border-bottom">
                <div className="container-fluid">
                <Link to ="/" className="navbar-brand">
                    <img src="./images/logo-react.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />
                    Logotipo
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to ="/" className="nav-link active" aria-current="page" >Home</Link>
                        </li>
                        <li>
                            {dashboard}
                        </li>
                        <li className="nav-item dropdown">
                            <Link to ="/" className="nav-link dropdown-toggle"  id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Products
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link to ="/" className="dropdown-item" >Action</Link></li>
                            <li><Link to ="/" className="dropdown-item" >Another action</Link></li>
                            <li><Link to ="/" className="dropdown-item" >Something else here</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to ="/" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Resources
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <li><Link to ="/" className="dropdown-item" >Action</Link></li>
                            <li><Link to ="/" className="dropdown-item" >Another action</Link></li>
                            <li><Link to ="/" className="dropdown-item" >Something else here</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link to ="/" className="nav-link" >Pricing</Link>
                        </li>
                    </ul>
                    {menu}
                </div>
                </div>
            </nav>
        
        </div>
    )
}

export default Nav