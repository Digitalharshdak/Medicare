import React from 'react'
import doctor from '../Image/9.png'
import doctors from '../Image/10.png'
import docto from '../Image/11.png'

function Innovative() {
  return (
    <div>
      <div className="innovative-container">
      <div className="innovative-title">
        <h1>Clinic With Innovative</h1>
        <p>We provide the most full medical services, so every person could <br /> heave the opportunity to receive qualitative medical help.</p>
        <button>Learn More</button>
      </div>

      <div className="innovative-services">
        <div className="innovative-service-card">
          <img src={doctor} alt="Doctor" /> 
          <h3>Qualified Doctors</h3>
        </div>

        <div className="innovative-service-card">
          <img src={doctors} alt="Ambulance" />
          <h3>24 Hours Service</h3>
        </div>


        <div className="innovative-service-card">
          <img src={docto} alt="Nurse" /> 
          <h3>Emergency Care</h3>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Innovative
