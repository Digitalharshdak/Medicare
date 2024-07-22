import React from 'react';
import logo from '../Image/3.png'; 

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo"/> 
          </a>
          <div className="collapse navbar-collapse flex-grow-0" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
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

            <button className="btn btn-primary">Contact</button>
          </div>
        </div>
      </nav>
    

    </div>
  );
}

export default Navbar;