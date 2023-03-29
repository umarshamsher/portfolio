import React from 'react'
import './portfolio.css'
import fiverr from '../../assets/fiverr.png'
import resturant from '../../assets/resturant.png'

function portfolio() {
  return (
    <section id='portfolio' >
      <h5>My Recent Work</h5>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={fiverr} alt="fiverr" />
          </div>
          <h3>Ract Fiverr Clone</h3>
          
          <div className='portfolio__item-cta'>
          
          <a href="https://umarshamsher.github.io/fiverr" className='btn btn-primary' target="_blabk">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={resturant} alt="resturant" />
          </div>
          <h3>Restaruant Web Site</h3>
          <div className='portfolio__item-cta'>
          <a href="https://umarshamsher.github.io/resturant" className='btn btn-primary' target="_blabk">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio