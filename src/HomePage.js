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
      <header>
   <img src="https://images.unsplash.com/photo-1605896163420-830698e44fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=751&q=80" alt="Five developers at work." />
   <section className='hero-header-text'>
      <h1 className='jeseku-fade-in jeseku-font'>Jẹsẹ́kù</h1>
      <div className='typewriter'>
      <h2>A new digital cooperative platform</h2>
      </div>
   </section>
  </header>
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
