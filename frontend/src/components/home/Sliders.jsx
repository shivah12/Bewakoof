import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper";

export default function Sliders({ data }) {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {data.map((slide, index) => (
        <SwiperSlide key={index}>
          <img src={slide.url} alt={`Slide ${index}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
