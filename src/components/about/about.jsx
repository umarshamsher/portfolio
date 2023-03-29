import React from 'react'
import './about.css'
import MeAbout from '../../assets/me-about-img.jpg'
import {FaAward} from 'react-icons/fa'
import {TbUsers} from 'react-icons/tb'
import {VscFolderLibrary} from 'react-icons/vsc'

function about() {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className="about__me">
        <div className="about__me-img">
          <img src={MeAbout} alt="About-me-img" />
        </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className='about__card'>
              <TbUsers className='about__icon' />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perferendis amet ducimus inventore nobis. Laudantium laboriosam nam corporis ipsam beatae nostrum perspiciatis sunt doloribus modi fuga. Consequuntur id suscipit perspiciatis?</p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about