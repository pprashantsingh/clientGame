import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import "./testimonials.css";
import images from "../../assets";

const Testimonials = () => {
  return (
    <>
      <div className="_testimonials_btn_container">
        <button className="testimonials_btn winner-heading">
          Testimonials
        </button>
      </div>
      <Swiper  
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={'auto'}
  initialSlide={1} // Set the default slide index to 1 (second slide)
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  pagination={{
    clickable: true,
  }}
  autoplay={{
    delay: 2500, // Time in ms before the next slide
    disableOnInteraction: false, // Keep autoplay running even after user interaction
  }}
  modules={[EffectCoverflow, Pagination, Autoplay]}
  className="mySwiper"
>
  <SwiperSlide>
    <img src={images?.Aditya} alt="Aditya" />
  </SwiperSlide>
  <SwiperSlide>
    <img src={images?.Nisha} alt="Nisha" />
  </SwiperSlide>
  <SwiperSlide>
    <img src={images?.Raj} alt="Raj" />
  </SwiperSlide>
</Swiper>
    </>
  );
};

export default Testimonials;
