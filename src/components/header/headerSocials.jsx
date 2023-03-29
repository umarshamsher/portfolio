import React from 'react'
import {BsLinkedin,BsFacebook,BsTwitter} from 'react-icons/bs'

function headerSocials() {
  return (
    <div className='header__socials'>
        <a href="https://linkin.com" target="_blank"><BsLinkedin /></a>
        <a href="https://facebook.com" target="_blank"><BsFacebook /></a>
        <a href="https://twitter.com" target="_blank"><BsTwitter/></a>
    </div>
  )
}

export default headerSocials