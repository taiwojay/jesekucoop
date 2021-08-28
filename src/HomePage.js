import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function HomePage() {

function contactus() {
  var elem = document.getElementById('footer');
  elem.scrollIntoView();
}

    return (
        <div className='page'>
          <div className='cover-parent'>
          <div className='cover'>
            <div className='cover-text fade-in'>
               <h2>Let's move your finances forward together
               </h2>
            </div>
            <div className='sample'>
            <div className='sub-sample'></div>
          </div>
           </div>
          </div>
      
      <div className='cover-text2'>
        <h1 className='neon fast-fade-in'>Jẹsẹ́kù</h1>
        <h3 className='fade-in'>A new financial cooperative platform coming to you <span className='neon'>soon</span></h3>
      </div>
         
    <div className='wrapper'>
    <div className='box-wrapper'>
    <div className='box'>
      <h3>Welcome</h3>
      <div>Welcome to the Jẹsẹ́kù website. Learn more about us</div>
      <Button variant="primary" className='box-btn' as={Link} to='/about-us'>Learn More</Button>
    </div>
    </div>
    
    <div className='box-wrapper'>
    <div className='box'>
    <h3>Our Services</h3>
      <div>We offer a variety of cooperative services, from savings, loans and soon investments </div>
      <Button variant="primary" className='box-btn' as={Link} to='./products&services'>Learn More</Button>
    </div>
    </div>

    <div className='box-wrapper'>
    <div className='box'>
    <h3>Join Us</h3>
      <div>Provide us with some of your information so we can know more about you</div>
      <Button variant="primary" className='box-btn'  as={Link} to='./register'>Fill Form</Button>
    </div>
    </div>
    </div>

    <div className='contact-us-btn' onClick={()=>contactus()}>
     <div className='contact-btn-text'>Contact Us</div>
    </div>
   </div>
    )
}
