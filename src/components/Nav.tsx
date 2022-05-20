
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props: { name: string, setName: (name: string) => void }) => {

    const logout = async () => {
        await fetch('http://localhost:8000/api/logout',{
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
      }); 

      props.setName('');
    }

    /* let menu;

    if (props.name === '') {
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <Link to="/login" className="nav-link active">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link active">Register</Link>
                </li>
            </ul>
        )
    }else{
        menu = (
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                    <Link to="/login" className="nav-link active" onClick={logout}>Logout</Link>
                </li>
                
            </ul>
        )
    } */

    return (
      
        // <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        //     <div className="container-fluid">
        //         <Link to="/" className="navbar-brand" >Home</Link>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse">
        //             {menu}
        //         </div>
        //     </div>
        // </nav>

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
                            <Link to ="/dashboard" className="nav-link active" aria-current="page" >Dashboard</Link>
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
                    <form className="d-flex">
                        <Link to="/login" className="btn me-1" type="submit">Log in</Link>
                        <Link to="/register" className="btn btn-primary me-1" type="submit">Sign up</Link>
                    </form>
                </div>
                </div>
            </nav>
        
        </div>
    )
}

export default Nav