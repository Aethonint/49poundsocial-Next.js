"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from 'next/image';


export default function CustomSlider3() {
  const images = [
     "/samples/image12.webp",
    "/samples/image13.webp",
    "/samples/image14.webp",
    "/samples/image15.webp",
    "/samples/image16.webp",
    "/samples/image17.webp",
    "/samples/image18.webp",
    "/samples/image19.webp",
    "/samples/image20.webp",
    "/samples/image21.webp",
  ];

  return (
    <div className="relative w-full px-32">
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1100: { slidesPerView: 3 },
        }}
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx} className="flex justify-center">
              <Image 
              src={img}
              alt={`Slide ${idx + 1}`}
              width={400} 
              height={466} // or whatever actual height you'd like
              className="w-full h-[20vh] sm:h-[30vh] xl:h-[60vh] object-contain"
          />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-16 right-16 flex justify-between px-6 z-10 pointer-events-none">
        <button className="custom-prev pointer-events-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 14.707a1 1 0 01-1.414 0L7.586 11l3.707-3.707a1 1 0 111.414 1.414L10.414 11l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button className="custom-next pointer-events-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-black"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 001.414 0L12.414 11 8.707 7.293a1 1 0 10-1.414 1.414L9.586 11l-2.293 2.293a1 1 0 000 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
