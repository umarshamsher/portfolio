import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {TbBrandMessenger} from 'react-icons/tb'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react';
import emailjs from 'emailjs-com' 

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oc7ri1e', 'template_nc9kygq', form.current, 'sO7AgmnsJZBF6CJ8J')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>umarshamsheer@gmail.com</h5>
            <a href="mailto:umarshamsheer@gmail.com" >Send Message</a>
          </article>
          <article className="contact__option">
            <TbBrandMessenger className='contact__option-icon'/>
            <h4>Messanger</h4>
            <h5>umarshamsheer</h5>
            <a href="https://m.me/umar.shamsheer" >Send Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>What'sApp</h4>
            <h5>umar shamsheer</h5>
            <a href="https://wa.me/3417057609" >Send Message</a>
          </article>
        </div>
        {/* End of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message </button>
        </form>
      </div>
    </section>
  )
}

export default Contact