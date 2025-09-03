'use client';

import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';



const images = [
  "/home/samples/carousel.webp",
    "/home/samples/carousel.webp",
    "/home/samples/carousel.webp",
];

export default function ImageSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <div className="w-full max-w-screen-xl mx-auto flex items-center justify-center px-4">
      {/* Left Arrow */}
      <button
        ref={prevRef}
        className="z-10 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition mr-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Swiper */}
      {swiperReady && (
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="w-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              {/* <img
                src={src}
                alt={`Slide ${index + 1}`}
  className="w-full h-[20vh] sm:h-[30vh] xl:h-[70vh] object-contain"
              /> */}

               <Image 
                src={src}
                alt={`Slide ${index + 1}`}
                width={1080} 
                height={472} // or whatever actual height you'd like
              className="w-full h-[20vh] sm:h-[30vh] xl:h-[70vh] object-contain"
              />

            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Right Arrow */}
      <button
        ref={nextRef}
        className="z-10 p-2 bg-white/80 rounded-full shadow-md hover:bg-white transition ml-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
