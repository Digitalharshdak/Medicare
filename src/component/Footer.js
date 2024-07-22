import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import logo from '../Image/3.png'; 

function Footer() {
  return (
    <div className="foot">
        <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo"/> 
          </a>
          <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/news">News</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <footer>
        <div className="social-icons">
          <a href=" " className="icon"> <FontAwesomeIcon icon={faFacebook} /> </a>
          <a href=" " className="icon"> <FontAwesomeIcon icon={faGoogle} /></a>
          <a href=" " className="icon"> <FontAwesomeIcon icon={faTwitter} /></a>
        </div>
        <p>&copy; 2023 - 0180</p>
      </footer>  

    </div>
  )
}

export default Footer
