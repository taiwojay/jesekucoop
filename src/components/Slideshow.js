import React from 'react'

export default function Slideshow() {
    return (
        <div id='slide-container'>
          <div id='slide-first-element'>
          <img src='./ggg' alt='1' className='slide-image'></img>
             <p className='slide-text'>first</p>
          </div>
          <div id='slide-element-2'>
          <img src='./ggg' alt='1' className='slide-image'></img>
             <p className='slide-text'>second</p>
          </div>
          <div id='slide-element-3'>
          <img src='./ggg' alt='1' className='slide-image'></img>
             <p className='slide-text'>third</p>
          </div>
       </div>
    )
}
