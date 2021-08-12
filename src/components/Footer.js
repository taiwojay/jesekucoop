import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faLocationArrow, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {faInstagramSquare, faTwitterSquare, faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
      <footer className='wrapper' id='footer'>
        <div className='footer-content'>
        <div className='logo'> Jẹsẹ́kù</div>
        <Link to='/' className='quick-link'>
        <p className='quick-link'>Home</p>
        </Link>
        <Link to='/about-us' className='quick-link'>
        <p className='quick-link'>About</p>
        </Link>
        <Link to='/register' className='quick-link'>
        <p className='quick-link'>Join Us</p>
        </Link>
        </div>
        <div className='footer-content'>
        <h3>Address</h3>
          <div><span><FontAwesomeIcon icon={faLocationArrow} className='icon'/></span>Oyeks Plaza, Beside Mobil Filling Station,</div>
          <div>U.I Secretariat Road, Awolowo Junction,</div>
          <div>Bodjia, Ibadan</div>
          <div> <span> <FontAwesomeIcon icon={faPhone} className='icon'/></span> 0811 761 6816</div>
          <div><span> <FontAwesomeIcon icon={faEnvelope} className='icon'/></span> jesekucoop@gmail.com</div>
        </div>
        <div className='footer-content'>
          <h3>Our Socials</h3>
           <a href='https://www.facebook.com/jeseku.cooperative'><FontAwesomeIcon icon={faFacebookSquare} size='2x' className='icon'/></a>
           <a href='https://www.instagram.com/jesekucoop/'><FontAwesomeIcon icon={faInstagramSquare} size='2x' className='icon'/></a>
           <a href='https://twitter.com/jesekucoop'><FontAwesomeIcon icon={faTwitterSquare} size='2x' className='icon'/></a>
        </div>
        <div className='copyright'>© 2021 Jẹsẹ́kù Cooperative</div>
        <a href='https://github.com/taiwojay' className='copyright'>https://github.com/taiwojay</a>
        <Link to='/terms&conditions' >
          <p className='copyright'>Terms and Conditons</p>
        </Link>
    </footer> 
    
    )
  }
