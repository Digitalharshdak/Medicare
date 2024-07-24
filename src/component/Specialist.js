import React from 'react'
import img from '../Image/13.png'
import per from '../Image/14 (1).png'
import pers from '../Image/14 (2).png'

function Specialist() {
  return (
    <div className="special-container">
      <div className="special-header">
        <h className="special-title">We Have The Best Specialist</h>
        <p className="special-description">
          We have a wide experience in experience design and strategy,<br /> with
          locally-rooted knowledge.
        </p>
      </div>
      <div className="special-cards">
        <div className="special-card">
          <div className="special-image">
            <img src={img} alt="Specialist" />
          </div>
          <div className="special-content">
            <h3>Dr. Awaatif Al</h3>
            <p>Dental Care</p>
          </div>
        </div>
        <div className="special-card">
          <div className="special-image">
            <img src={img} alt="Specialist" />
          </div>
          <div className="special-content">
            <h3>Dr. Filipa Gaspar</h3>
            <p>Cardiology</p>
          </div> 
        </div>
        <div className="special-card">
          <div className="special-image">
            <img src={img} alt="Specialist" />
          </div>
          <div className="special-content">
            <h3>Dr. Sukhmeet Gorae</h3>
            <p>Neurological</p>
          </div>
        </div>
        <div className="special-card">
          <div className="special-image">
            <img src={img} alt="Specialist" />
          </div>
          <div className="special-content">
            <h3>Dr. Siri Jakobsson</h3>
            <p>Prediatrics</p>
          </div>
        </div>
      </div>
    
    <div className="say-testimonials">
      <h2>What Our Customers Say</h2>
      <div className="say-testimonials-container">
        <div className="say-testimonial">
          <div className="say-quote">
            <p>I wanted to thanks everyone at this facility for the <br/>quality of care and compassion they showed during <br/> my stay.</p>
            <div className="say-author">
              <img src={per} alt="Jacqueline Asong" />
              <div>
                <br/>
                <h5>Jacqueline Asong</h5>
                <p>Patient</p>
              </div>
            </div>
          </div>
        </div>
          <div className="say-testimonial">
          <div className="say-quote">
            <p>I wanted to thanks everyone at this facility for the <br/> quality of care and compassion they showed during <br/> my stay.</p>
            <div className="say-author">
              <img src={pers} alt="Patrícia Ribeiro" />
              <div>
                <br/>
                <h5>Patrícia Ribeiro</h5>
                <p>Patient</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Specialist
