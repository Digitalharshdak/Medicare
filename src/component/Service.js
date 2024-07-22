import React from 'react'
import dental from '../Image/5.png'
import pulmonary from '../Image/6.png'
import neurological from '../Image/7.png'
import prediatrics from '../Image/8.png'

function Service() {
  return (
    <div className="app-container">
      <div className="app-header">
        <h1>Our Services</h1>
        <p>We provide the most full medical services, so every person could <br /> heave the opportunity to receive qualitative medical help.</p>
      </div>
      <div className="app-services">
        <div className="app-service">
          <img src={dental} alt="Tooth Icon" />
          <h2>Dental Care</h2>
        </div>
        <div id='pul'>
          <img src={pulmonary} alt="Lungs Icon" />
          <h2>Pulmonary</h2>
        </div>
        <div className="app-service">
          <img src={neurological} alt="Brain Icon" />
          <h2>Neurological</h2>
        </div>
        <div className="app-service">
          <img src={prediatrics} alt="Pediatrics Icon" />
          <h2>Prediatrics</h2>
        </div>
      </div>
    </div>
  )
}

export default Service
