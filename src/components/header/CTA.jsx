import React from 'react'
import CV from '../../assets/umar.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Lets's Talk</a>
    </div>
  )
}

export default CTA