import React from 'react'
import doctor from '../Image/9.png'
import doctors from '../Image/10.png'
import docto from '../Image/11.png'

function Innovative() {
  return (
    <div>
      <div className="innovative-container">
        <div className="innovative-title">
          <h2>Clinic With Innovative</h2>
          <p>We provide the most full medical services, so every person could heave the opportunity to receive qualitative medical help.</p>
          <button>Learn More</button>
        </div>

        <div className="innovative-services">
          <div className="innovative-service-card">
            <img src={doctor} alt="Doctor" /> 
            <h5>Qualified Doctors</h5>
          </div>
          <br/>
          <br/>
          <br/>
          <div className="innovative-service-card">
            <img src={doctors} alt="Ambulance" />
            <h5>24 Hours Service</h5>
          </div>
        </div>

        <div className="innovative-look">
          <div className="innovative-service-card">
            <img src={docto} alt="Nurse" /> 
            <h6>Emergency Care</h6>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Innovative
