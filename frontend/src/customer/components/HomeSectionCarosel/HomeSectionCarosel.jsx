import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./HomeSectionCarosel.css";

import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";


const HomeSectionCarosel = ({data,sectionName}) => {
  console.log(data)
  return (
    <>
      <div className="">
        <div className="mb-5 ml-5">
          <h3 className="text-2xl font-extrabold text-gray-900">{sectionName}</h3>
        </div>
        <div>
          <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={5}
            spaceBetween={20}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 5,
              },
            }}
          >
            {data?.slice(0, 10).map((item, index) => (
              <SwiperSlide key={index}>
                <HomeSectionCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeSectionCarosel;
