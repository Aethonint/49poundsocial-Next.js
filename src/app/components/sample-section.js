"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';


export default function SampleSection() {
  
  const [activeTab, setActiveTab] = useState("Posts");

  const tabs = ["Posts", "Carousel", "Memes", "Puzzle Grid"];

  // Define different images for each tab
  const sliderImages = {
    Posts: [
      "/home/samples/posts/post1.webp",
      "/home/samples/posts/post2.webp",
      "/home/samples/posts/post3.webp",
      "/home/samples/posts/post4.webp",
      "/home/samples/posts/post5.webp",
      "/home/samples/posts/post6.webp",
      "/home/samples/posts/post7.webp",
      "/home/samples/posts/post8.webp",

    ],
    Memes: [
      "/home/samples/memes/meme1.webp",
      "/home/samples/memes/meme2.webp",
      "/home/samples/memes/meme3.webp",
      "/home/samples/memes/meme4.webp",
      "/home/samples/memes/meme5.webp",
      "/home/samples/memes/meme6.webp",
      "/home/samples/memes/meme7.webp",
      "/home/samples/memes/meme8.webp",

    ],
  };

 const staticImages = {
  Carousel: "/home/samples/carousel.webp",
  "Puzzle Grid": [
    "/home/samples/puzzle-grid1.webp",
    "/home/samples/puzzle-grid2.webp",
    "/home/samples/puzzle-grid3.webp",
  ],
};


  const renderContent = () => {
 if (activeTab === "Carousel") {
  return (
      <div className="mt-10 flex justify-center px-4">
      {/* <img
        src={staticImages[activeTab]}
        alt={activeTab}
          className="w-full max-w-[1108px] h-auto object-cover rounded-lg"
      /> */}
 <Image 
  src={staticImages[activeTab]}
  alt={activeTab} 
  width={1108} 
  height={484} // or whatever actual height you'd like
  className="w-full max-w-[1108px] h-auto object-cover rounded-lg"
/>


    </div>
  );
}

if (activeTab === "Puzzle Grid") {
  return (
      <div className="mt-10 flex justify-center flex-wrap gap-4 sm:gap-6 px-4">
      {staticImages[activeTab].map((img, idx) => (

<Image 
  key={idx}
  src={img}
  alt={`Puzzle Grid ${idx + 1}`} 
  width={1108} 
  height={484} // or whatever actual height you'd like
  className="w-full max-w-[300px] sm:max-w-[320px] h-auto object-cover rounded-lg"
/>

        // <img
        //   key={idx}
        //   src={img}
        //   alt={`Puzzle Grid ${idx + 1}`}
        //     className="w-full max-w-[300px] sm:max-w-[320px] h-auto object-cover rounded-lg"
        // />

        
      ))}
    </div>
  );
}

    return (
    <div className="mt-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 relative xl:ml-10">
        <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  slidesPerView={1}
  spaceBetween={0}
  navigation={{
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  }}
  pagination={{
    clickable: true,
    el: ".custom-pagination",
  }}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  }}
>
  {sliderImages[activeTab].map((img, idx) => (
    <SwiperSlide key={idx} className="flex justify-center xl:-mt-16">
      {/* <img
        src={img}
        alt={`${activeTab} Sample ${idx + 1}`}
         className="w-full h-[20vh] sm:h-[30vh] xl:h-[70vh] object-contain md:pr-3"

      /> */}
      <Image 
        src={img}
        alt={`${activeTab} Sample ${idx + 1}`}
  width={1108} 
  height={484} // or whatever actual height you'd like
  className="w-full h-[20vh] sm:h-[30vh] xl:h-[70vh] object-contain md:pr-3"
/>

    </SwiperSlide>
  ))}
</Swiper>



       {/* Navigation Arrows */}
    <div className="absolute top-1/2 lg:top-[40%] left-0 right-0  lg:-left-24 lg:-right-24  xl:left-0 xl:right-0 px-4 sm:px-10 md:px-20 lg:px-24 xl:px-32 z-10 flex justify-between items-center -translate-y-1/2 lg:-translate-y-[55%] pointer-events-none">
  {/* Prev Button */}
  <button className="custom-prev pointer-events-auto">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-14 w-14 text-backgroundcolor"
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

  {/* Next Button */}
  <button className="custom-next pointer-events-auto">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-14 w-14 text-backgroundcolor"
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


        {/* Pagination with padding from top */}
        <div className="custom-pagination mt-6 flex justify-center"></div>
      </div>
    );
  };

  return (
<section className="py-16 bg-white text-center px-4 font-figtree">
      <h2 className="text-[45px] font-[700] text-black">
        Explore Latest Samples
      </h2>
      <p className="text-[16px] text-black mt-2 mb-8 font-albert">
        No matter your industry, we craft compelling content that connects with your audience.
      </p>

      {/* Tab Buttons */}
     <div className="flex flex-wrap justify-center gap-4">
  {tabs.map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`w-[200px] h-[48px] text-[16px] px-6 py-2 rounded-full border font-medium transition-all relative
        ${
          activeTab === tab
            ? "bg-[#014b64] text-secondarycolor border-[#014b64]"
            : "border-[#014b64] text-[#014b64] hover:bg-[#014b64]/10"
        }`}
    >
      {tab}
      {activeTab === tab && (
        <div className="absolute left-1/2 -bottom-2.5 transform -translate-x-1/2 w-3 h-3 bg-[#014b64] rotate-45" />
      )}
    </button>
  ))}
</div>


      {/* Dynamic Tab Content */}
      {renderContent()}
    </section>
  );
}