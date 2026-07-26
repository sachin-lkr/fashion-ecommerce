import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HomeCaroselData } from "./HomeCaroselData";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const HomeCarosel = () => {
  return (
    <>
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="mySwiper"
      >
        {HomeCaroselData.map((item) => {
         return( <SwiperSlide key={item.id}>

            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[500px] object-cover cursor-pointer"
            />
          </SwiperSlide>);
        })}
      </Swiper>
    </>
  );
};
export default HomeCarosel;
