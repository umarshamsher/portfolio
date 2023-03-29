import React from "react";
import "./testimonial.css";
import avator1 from "../../assets/avator1.jpg";
import avator2 from "../../assets/avator2.jpg";
import avator3 from "../../assets/avator3.jpg";

// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
function testimonial() {
  return (
    <section id="testimonals">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
       
      >
        <SwiperSlide className="testimonial">
          <div className="client__avator">
            <img src={avator1} alt="avator one" />
          </div>
          <h5 className="client__name">Ernest Achiever </h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Incidunt, culpa dolores nam hic placeat nostrum autem corrupti
              libero quod itaque?
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avator">
            <img src={avator2} alt="avator one" />
          </div>
          <h5 className="client__name">Tina Snow</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Incidunt, culpa dolores nam hic placeat nostrum autem corrupti
              libero quod itaque?
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avator">
            <img src={avator3} alt="avator one" />
          </div>
          <h5 className="client__name">Kawme Despite</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Incidunt, culpa dolores nam hic placeat nostrum autem corrupti
              libero quod itaque?
            </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default testimonial;
