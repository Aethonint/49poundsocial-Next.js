"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import Image from 'next/image';



const logos = [
  "/about/logos/ksp.webp",
  "/about/logos/optimize.webp",
  "/about/logos/book-chief.webp",
  "/about/logos/revive-bee.webp",
  "/about/logos/reliable-digital.webp",
  "/about/logos/london-laser.webp",
  "/about/logos/heritage.webp",
  "/about/logos/elite.webp",
];

const repeatedLogos = [...logos, ...logos];

export default function ClientsLogo() {
  return (
    <section className="bg-backgroundcolor py-12 sm:py-16 font-figtree">
      <div className="text-center max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-3 sm:mb-4">
          Some Of Our Clients
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-white font-albert">
          Building relationships with over 100+ clients and providing services in 10+ Sectors.
        </p>
      </div>

      <div className="mt-6 sm:mt-8 px-4 sm:px-6">
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={6000}
          freeMode={true}
          freeModeMomentum={false}
          spaceBetween={30}
        >
          {repeatedLogos.map((logo, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
               <Image 
                src={logo}
                alt={`Client logo ${index + 1}`}
               width={200} 
               height={176} // or whatever actual height you'd like
               className="h-[100px] sm:h-[140px] md:h-[176px] object-contain"
              />

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
