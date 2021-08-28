import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInstagramSquare, faTwitterSquare, faFacebookSquare, faWhatsappSquare, faWhatsapp} from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faClipboard } from '@fortawesome/free-solid-svg-icons'

export default function RegisterContact() {
    return (
        <div className='page'>
            <a  href="https://forms.gle/F2daLXkTEnrNaCUy9" className='input-row'>
            <button>Click here to be directed to our Registration Form <FontAwesomeIcon icon={faArrowRight} size='1.5x' className='icon'/></button>
            </a>
            <div className='icons'>
                <div className='text'>
                After filling the form <FontAwesomeIcon icon={faClipboard} size='1.5x' className='icon'/>, 
                click <a  href= {`https://wa.me/2348117616816?text=Good%20day,%20my%20name%20is%20*fill%20in%20name*%20,%20I'm%20interested%20in%20joining%20Jeseku`}><span className='whatsapp-link'>here <FontAwesomeIcon icon={faWhatsapp} size='1.5x' className='icon'/></span> </a> to chat with us
                </div>
            </div>
            <div className='icons fade-in'>
                <div className='text'>Check us out on our socials</div>
            <a href= {`https://wa.me/2348117616816?text=I'm%20interested%20in%20Jeseku`} className='a whatsapp-anchor'>
            <FontAwesomeIcon icon={faWhatsappSquare} size='5x' />
            </a>
            
            <a href='https://www.facebook.com/jeseku.cooperative' className='a fb-anchor'><FontAwesomeIcon icon={faFacebookSquare} size='5x' /></a>
           <a href='https://www.instagram.com/jesekucoop/' className='a ig-anchor'><FontAwesomeIcon icon={faInstagramSquare} size='5x' /></a>
           <a href='https://twitter.com/jesekucoop' className=' a twitter-anchor'><FontAwesomeIcon icon={faTwitterSquare} size='5x' /></a>
            </div>
        </div>
    )
}
