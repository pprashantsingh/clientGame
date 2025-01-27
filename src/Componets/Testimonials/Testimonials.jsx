import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import "./testimonials.css";
import images from '../../assets';
const Testimonials = () => {
  return (
    <>
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={true}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={images?.Aditya} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={images?.Nisha} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={images?.Raj} />
      </SwiperSlide>
    </Swiper>
  </>
  )
}

export default Testimonials