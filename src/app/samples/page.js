import React from 'react'
import CustomSlider2 from '../components/CustomSlider2.js';
import CustomSlider3 from '../components/CustomSlider3.js';
import CustomSlider4 from '../components/CustomSlider4.js';
import ImageSlider from '../components/ImageSlider';
import Image from 'next/image';

export async function generateMetadata() {
  const url = 'https://49poundsocial.com/our-work/'; // this must match the real WordPress page URL

  try {
    const res = await fetch(
      `https://49poundsocial.com/wp-json/rankmath/v1/getHead?url=${encodeURIComponent(url)}`,
      { cache: 'no-store' }
    );
    const data = await res.json();

    if (data.success) {
      const html = data.head;

      const titleMatch = html.match(/<title>(.*?)<\/title>/);
      const descMatch = html.match(/<meta name="description" content="(.*?)"/);

      return {
        title: titleMatch?.[1] || 'Fallback Title',
        description: descMatch?.[1] || 'Fallback description',
      };
    } else {
      console.warn('Rank Math API response failed:', data);
    }
  } catch (e) {
    console.error('RankMath SEO fetch error:', e);
  }

  return {
    title: 'Fallback Title',
    description: 'Fallback description',
  };
}


function page() {

 const firstSlider = [
   "/images/image1.webp",
    "/images/image2.webp",
    "/images/image3.webp",
    "/images/image4.webp",
    "/images/image5.webp",
    "/images/image6.webp",
    "/images/image7.webp",
    "/images/image8.webp",
    "/images/image9.webp",
    "/images/image10.webp",
    "/images/image11.webp",
  ];

  const secondSlider = [
    "/images/image12.webp",
    "/images/image13.webp",
    "/images/image14.webp",
    "/images/image15.webp",
    "/images/image16.webp",
    "/images/image17.webp",
    "/images/image18.webp",
    "/images/image19.webp",
    "/images/image20.webp",
    "/images/image21.webp",
  ];

const thirdSlider = [
    "/images/image22.webp",
    "/images/image23.webp",
    "/images/image24.webp",
    "/images/image25.webp",
    "/images/image26.webp",
    "/images/image27.webp",
    "/images/image28.webp",
    "/images/image29.webp",
    "/images/image30.webp",
    "/images/image31.webp",
  ];


  return (
    <>
   {/* start section 1 */}

<section className='grid grid-cols-1 md:grid-cols-2 bg-backgroundcolor h-auto md:h-[460px] font-figtree'>
  <div className='flex flex-col justify-center items-center px-4  md:px-20 xl:px-4 py-10 md:py-0'>
    <h1 className='text-[40px] xl:text-[70px] font-[700] w-full xl:w-[550px] text-white leading-none capitalize text-center md:text-left'>
      Tailored to elevate brands
    </h1>
    <p className='text-secondarycolor text-[18px] xl:text-[22px] w-full xl:w-[550px] capitalize pt-5 font-[600] text-center md:text-left font-albert'>
      Witness the Power of Visual Storytelling
    </p>
  </div>
  <div className='flex justify-center items-center py-6 md:py-0'>
    {/* <img
      src="/images/img23.webp"
      alt="My Image"
      className='w-[250px] h-[250px] md:w-[314px] md:h-[310px]'
    /> */}
 <Image 
      src="/samples/mobile.webp"
      alt="My Image"
      width={314} 
      height={310}
      className='w-[250px] h-[250px] md:w-[314px] md:h-[310px]'
/>
  </div>
</section>

{/* end section 1 */}





                {/* start section 2 */}
 
<section className='mb-20 font-figtree'>
 
 <div className='grid bg-white place-content-center h-auto px-4 py-10'>
  <div className='flex flex-col justify-center items-center text-black text-center'>
    <h2 className='text-[28px] xl:text-[44px] font-[700] text-backgroundcolor capitalize'>
      Experience our social media posts firsthand!
    </h2>
    <p className='text-[14px] xl:text-[16px] mt-2 font-albert'>
      No matter your industry, we craft compelling content that connects with your audience.
    </p>
  </div>
</div> 



   <div className="mb-10">
  <CustomSlider2/>
    </div>


         <div className="mb-10">
  <CustomSlider3/>
    </div>


         <div className="mb-10">
  <CustomSlider4/>
    </div>


</section>
      
 

        {/* end section 2 */}


        

              {/* start section 3 */}

<section className="bg-white px-4 font-figtree">
  {/* Header */}
  <div className="flex flex-col justify-center items-center text-center">
    <h2 className="text-[32px] sm:text-[40px] md:text-[50px] xl:text-[60px] text-backgroundcolor font-bold capitalize leading-tight">
      dynamic carousels
    </h2>
    <p className="text-[14px] sm:text-[16px] capitalize mt-1 mb-3 sm:mb-4 md:mb-5 leading-snug font-albert">
      captivating and interactive visual displays
    </p>
  </div>

  {/* ImageSlider Wrapper */}
  <div className="h-auto flex justify-center">
    <ImageSlider />
  </div>
</section>


{/* end section 3 */}



               {/* start section 4 */}

<section className="grid min-h-[264px] bg-secondarycolor text-backgroundcolor px-4 py-10">
  <div className="flex flex-col justify-center items-center text-center">
    <h4 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] italic max-w-[1120px]">
      &quot;Social media is not just an activity; it is an investment of valuable time and resources. Surround yourself with people who not just support you and stay with you, but inform your thinking about ways to WOW your online presence.&quot;
    </h4>
    <h4 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-[600] capitalize pt-6 font-albert">
      - Sean Gardner
    </h4>
  </div>
</section>

{/* end section 4 */}



                              {/* start section 5 */}

<section className="grid min-h-[190px] bg-white text-backgroundcolor px-4 py-10 font-figtree">
  <div className="flex flex-col justify-center items-center text-center">
    <h2 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[69px] font-[700] capitalize">
      welcome to the memeland
    </h2>
    <p className="text-[14px] sm:text-[16px] capitalize text-black font-albert">
      clever and engaged content for every audience
    </p>
  </div>
</section>

{/* end section 5 */}


            {/* start section 6 */}

<section className="flex flex-col justify-center items-center bg-white h-auto px-4 xl:py-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
    {[
      "meme1", "meme2", "meme3", "meme4",
      "meme5", "meme6", "meme7", "meme8",
      "meme9", "meme10", "meme11", "meme12",
    ].map((meme, index) => (
      <div
        key={index}
        className="flex justify-center items-center w-full max-w-[283px] h-auto mx-auto"
      >
        {/* <img
          src={`/samples/memes/${meme}.webp`}
          alt={`Meme ${index + 1}`}
          className="w-[90%] max-w-[253px] h-auto"
        /> */}
          <Image 
          src={`/home/samples/memes/${meme}.webp`}
          alt={`Meme ${index + 1}`}
          width={253} 
          height={253}
          className="w-[90%] max-w-[253px] h-auto"
/>
      </div>
    ))}
  </div>
</section>

{/* end section 6 */}


               {/* start section 7 */}

<section className="grid min-h-[610px] bg-white text-backgroundcolor px-4 py-10 font-figtree">
  <div className="flex flex-col justify-center items-center text-center">
    <h2 className="text-[40px] sm:text-[50px] md:text-[60px] lg:text-[69px] font-[700] capitalize">
      puzzle grids
    </h2>
    <p className="text-[14px] sm:text-[16px] capitalize text-black font-albert">
      interactive and challenging designs for all ages
    </p>

    <div className="flex flex-col sm:flex-row flex-wrap gap-5 justify-center items-center pt-8">
      <div className="flex justify-center items-center">
        {/* <img
          src="/samples/puzzle-grid1.webp"
          alt="My Image"
          className="w-[250px] sm:w-[300px] md:w-[320px] lg:w-[364px] h-auto"
        /> */}
          <Image 
  src="/home/samples/puzzle-grid1.webp"
  alt="Home Hero 1" 
  width={364} 
  height={364}
  className="w-[250px] sm:w-[300px] md:w-[320px] lg:w-[364px] h-auto"
/>
      </div>

      <div className="flex justify-center items-center">
        {/* <img
          src="/samples/puzzle-grid2.webp"
          alt="My Image"
          className="w-[250px] sm:w-[300px] md:w-[320px] lg:w-[364px] h-auto"
        /> */}
  <Image 
  src="/home/samples/puzzle-grid2.webp"
  alt="Home Hero 1" 
  width={364} 
  height={364}
  className="w-[250px] sm:w-[300px] md:w-[320px] lg:w-[364px] h-auto"
/>

      </div>

      <div className="flex justify-center items-center">
        {/* <img
          src="/samples/puzzle-grid3.webp"
          alt="My Image"
          className="w-[250px] sm:w-[300px] md:w-[320px] lg:w-[364px] h-auto"
        /> */}
        <Image 
  src="/home/samples/puzzle-grid3.webp"
  alt="Home Hero 1" 
  width={364} 
  height={364}
  className="w-[250px] sm:w-[300px] md:w-[320px] lg:w-[364px] h-auto"
/>
      </div>
    </div>
  </div>
</section>

{/* end section 7 */}



    </>
  )
}

export default page