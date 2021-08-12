import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function HomePage() {

//   function scrollwhatwedo() {
//     var elem = document.getElementById('what-we-do');
//     elem.scrollIntoView();
// }
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
      <div>Welcome the Jẹsẹ́kù website. Learn more about us</div>
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
      <Button variant="primary" className='box-btn' as={Link} to='./register'>Fill Form</Button>
    </div>
    </div>
    </div>

    <div className='contact-us-btn' onClick={()=>contactus()}>
     <div className='contact-btn-text'>Contact Us</div>
    </div>

    <div className='what-we-do' id='what-we-do'>
     <h3 className='blue3-font'>What We Do</h3>
     <div className='action-grid'>
       <div className='action blue3-font'>
       <span className='number'>1.</span>Organize trainings for Entrepreneurs on financial management and business 
       </div>
       <div className='action blue3-font'>
       <span className='number'>2.</span> Equip members with information needed to apply for loan facilities
       </div>
       <div className='action blue3-font'>
       <span className='number'>3.</span> Formulate direct or indirect  mechanisms to monitor members' business performances; to check on their level of productivity
       </div>
       <div className='action blue3-font'> 
       <span className='number'>4.</span> Establish business ventures and create job opportunities for members
       </div>
       <div>
       </div>
     </div>
    </div>
   </div>
    )
}
