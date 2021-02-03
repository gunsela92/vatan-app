import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import './slider.css';
import SliderProducts from "../data/sliderProducts.json";

const Slider = () => {
  
  SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [controlledSwiper] = useState(null);
  
    const slides = [];

    SliderProducts.forEach(element => {
      slides.push(
        <SwiperSlide key={`slide-${element.title}`} tag="li">
          <img
            src={element.image}
            style={{ listStyle: 'none' }}
            alt={`Slide ${element.title}`}
          />
        </SwiperSlide>
    )})
    
  
    return (
      <React.Fragment>
        <Swiper
          id="main"
          thumbs={{ swiper: thumbsSwiper }}
          controller={{ control: controlledSwiper }}
          onSwiper={setThumbsSwiper}
          watchSlidesVisibility
          wrapperTag="ul"
          navigation
          pagination
          spaceBetween={10}
          slidesPerView={"auto"}
        >
          {slides}
        </Swiper>
      </React.Fragment>
    );
  }
export default Slider;
