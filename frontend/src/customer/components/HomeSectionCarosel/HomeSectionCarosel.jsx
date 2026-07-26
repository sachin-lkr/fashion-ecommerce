import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./HomeSectionCarosel.css";

import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";

const HomeSectionCarosel = () => {
  return (
    <>
      <div className="mt-5">
        <div className="mb-5 ml-5">
          <h3 className="text-lg font-medium text-gray-900">Men's Kurta</h3>
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
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <SwiperSlide key={item}>
                <HomeSectionCard />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeSectionCarosel;
