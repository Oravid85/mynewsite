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
    >
      {recommendations.map((rec, index) => (
        <SwiperSlide
          key={index}
          className=" h-auto flex flex-col justify-start"
        >
          <p className="text-base text-gray-800">{rec.text}</p>
          <p className="text-sm text-gray-600">{rec.author}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
