import React, { useState } from 'react'

function News() {
    const [email, setEmail] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Here you would typically send the email to your backend server for processing
      console.log('Submitting email:', email);
    };
  return (
    <div className='news'>
    <div className="newsletter-container">
      <h2>Subscribe to Newsletter</h2>
      <p>We have a wide experience in experience design and strategy.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send Now</button>
      </form>
    </div>
    </div>
  )
}

export default News
