import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
import './Navbar.css'
import * as firebase from "firebase/app";
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode'

const Navbar = () => {
  const token = sessionStorage.getItem('token')
  let user;
  if(token){
      user = jwt_decode(token);
  }

  const handleSignOut = () => {
    sessionStorage.removeItem('token')
    window.location.reload();
}
    return (
        
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent py-2 px-5">
            <div className="container-fluid">
              <a class="navbar-brand" href="#"><img src={logo} className="img-fluid brand-logo" alt=""/> </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                    <a class="nav-link mr-5" href="#home">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link mr-5" href="#portfolio">Our Portfolio</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link mr-5" href="#home">Our Team</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link mr-5" href="#contact">Contact Us</a>
                  </li>
                  <li class="nav-item">
                  {
                    user?
                      <button class="nav-link mr-5 brand-btn text-white text-center" href="/login" onClick={handleSignOut}>Logout</button> 
                    : <Link to="/login"><a class="nav-link mr-5 brand-btn text-white text-center" href="/login">Login</a></Link>
                  }
                    
                  </li>
                
                </ul>
              </div>
          </div>
     </nav>
        
    );
};

export default Navbar;