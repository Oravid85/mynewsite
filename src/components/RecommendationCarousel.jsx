import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function RecommendationCarousel({ recommendations }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
      autoHeight={false}
      breakpointsBase="container"
      breakpoints={{
        640: { slidesPerView: 1 },
        1024: { slidesPerView: 1 },
      }}
      className="w-full h-44"
    >
      {recommendations.map((rec, index) => (
        <SwiperSlide
          key={index}
          className="bg-amber-500 flex flex-col justify-start "
        >
          <div className="px-8 h-full flex flex-col justify-center gap-3">
            <p className=" text-center bg-red-600 text-base text-gray-800 pt-2">
              {rec.text}
            </p>
            <p className=" flex justify-end bg-fuchsia-500 text-sm text-gray-600pt-1">
              {rec.author}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
