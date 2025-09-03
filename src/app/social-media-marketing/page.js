import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';


export async function generateMetadata() {
  const url = 'https://49poundsocial.com/'; // this must match the real WordPress page URL

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
  return (
    <>
     {/* start section 1 */}

<section className='grid grid-cols-1 md:grid-cols-2 gap-9 items-center capitalize bg-backgroundcolor px-6 sm:px-10 md:px-20 lg:px-28 py-10 md:h-[537px] font-figtree'>
  <div className='flex flex-col justify-start items-start text-center md:text-left'>
    <h1 className='text-white font-[700] text-[35px] sm:text-[45px] md:text-[55px] lg:text-[55px] xl:text-[65px] leading-none'>
      Affordable social media marketing!
    </h1>
    <h3 className='text-secondarycolor font-[500] text-[20px] sm:text-[17px] md:text-[30px] lg:text-[28px] xl:text-[37px] leading-none py-5 md:py-7'>
      If you&apos;re looking for affordable social media marketing services in the UK, look no further.
    </h3>
    <div className="flex flex-row sm:flex-row gap-4 sm:gap-5 pt-4 justify-center md:justify-start">
      <button className="bg-secondarycolor text-backgroundcolor w-[170px] md:w-[170px] h-[46px] font-bold text-[13px] rounded-[6px] capitalize">book a call</button>
      <button className="bg-white text-backgroundcolor w-[170px] md:w-[170px] h-[46px] font-bold text-[13px] rounded-[6px] capitalize">get started</button>
    </div>
  </div>
  <div className=' hidden md:flex justify-center items-center mt-8 md:mt-0'>
      <Image 
  src="/social media marketing/yellow-man-with-paper-rocket.webp" 
  alt="Home Hero 1" 
  width={389} 
  height={389}
className='w-[250px] md:w-[310px] lg:w-[340px] xl:w-[389px] h-auto'/>
  </div>
</section>
{/* end section 1 */}


      {/* start section 2 */}
<section className='grid grid-cols-1 md:grid-cols-2 bg-white text-black py-10 md:h-[425px] font-figtree'>
  <div className='flex flex-col justify-center items-center md:items-start px-6 sm:px-12 md:pl-36'>
    <h2 className='text-[24px] sm:text-[30px] md:text-[36px] font-[700] capitalize leading-snug md:leading-none max-w-[584px] text-center md:text-left'>
      Social media marketing that won&apos;t strain your budget.
    </h2>
    <p className='text-[14px] sm:text-[15px] md:text-[12px] lg:text-[16px] pt-4 max-w-[584px] text-center md:text-left font-albert'>
      At 49 Pound Social, we believe that every small business deserves the opportunity to thrive in the digital landscape.
      Our mission is to empower small businesses with cost-effective advertising solutions that deliver impactful results.
    </p>
  </div>
  <div className='hidden md:flex justify-center items-center px-6 sm:px-12 md:pr-36 mt-8 md:mt-0'>
    <Image 
  src="/social media marketing/Black-Grey-Minimal-Color-Branding-Inclusive-Skincare-Instagram-Post-400-x-400-px-1.png" 
  alt="Home Hero 1" 
  width={305} 
  height={305}
className='w-[220px] sm:w-[260px] md:w-[305px] h-auto rounded-[14px]' />
  </div>
</section>
{/* end section 2 */}


       {/* start section 3 */}
<section className='flex justify-center items-center bg-backgroundcolor text-secondarycolor h-auto py-10 px-4 text-center'>
  <h2 className='text-[24px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-[700] leading-snug font-figtree'>
    Budget-Friendly Digital Marketing Solutions
  </h2>
</section>
{/* end section 3 */}


         {/* start section 4 */}
<section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 bg-white text-black py-10 px-6 xl:px-40 font-figtree'>
  <div className='flex flex-col justify-center items-center max-w-[250px] mx-auto'>
    <h3 className='flex justify-center items-center bg-backgroundcolor h-[65px] w-[65px] text-[28px] sm:text-[32px] md:text-[37px] font-[700] text-white rounded-full'>1</h3>
    <h3 className='text-center text-[22px] sm:text-[26px] md:text-[30px] capitalize leading-none py-4'>cost effective</h3>
    <p className='text-[15px] sm:text-[16px] text-center font-albert'>We prioritise budget-friendly tactics to ensure maximum ROI for our clients, maintaining quality and effectiveness.</p>
  </div>

  <div className='flex flex-col justify-center items-center max-w-[250px] mx-auto'>
    <h3 className='flex justify-center items-center bg-backgroundcolor h-[65px] w-[65px] text-[28px] sm:text-[32px] md:text-[37px] font-[700] text-white rounded-full'>2</h3>
    <h3 className='text-center text-[22px] sm:text-[26px] md:text-[30px] capitalize leading-none py-4'>Targeted Audience</h3>
    <p className='text-[15px] sm:text-[16px] text-center font-albert'>Our focus is on reaching the right audience segments through tailored content strategies, driving engagement and conversions.</p>
  </div>

  <div className='flex flex-col justify-center items-center max-w-[250px] mx-auto'>
    <h3 className='flex justify-center items-center bg-backgroundcolor h-[65px] w-[65px] text-[28px] sm:text-[32px] md:text-[37px] font-[700] text-white rounded-full'>3</h3>
    <h3 className='text-center text-[22px] sm:text-[26px] md:text-[30px] capitalize leading-none py-4'>Data Driven</h3>
    <p className='text-[15px] sm:text-[16px] text-center font-albert'>Leveraging comprehensive analytics to analyse campaign performance, optimise strategies, and ensure efficient spending.</p>
  </div>

  <div className='flex flex-col justify-center items-center max-w-[250px] mx-auto'>
    <h3 className='flex justify-center items-center bg-backgroundcolor h-[65px] w-[65px] text-[28px] sm:text-[32px] md:text-[37px] font-[700] text-white rounded-full'>4</h3>
    <h3 className='text-center text-[22px] sm:text-[26px] md:text-[30px] capitalize leading-none py-4'>Creative Content</h3>
    <p className='text-[15px] sm:text-[16px] text-center font-albert'>Crafting captivating content that resonates with our 
      client&apos;s audience while adhering to budget constraints and delivering exceptional value.</p>
  </div>
</section>
{/* end section 4 */}


               {/* start section 5 */}
<section className='grid bg-backgroundcolor text-white py-10 px-4 text-center font-figtree'>
  <div className='flex flex-col justify-center items-center max-w-[940px] mx-auto'>
    <h2 className='text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px] font-[700] leading-snug md:leading-none capitalize'>
      Seeking affordable social media Advertisement.
    </h2>
    <p className='text-[15px] sm:text-[16px] py-5 font-albert'>
      Book a FREE consultation with our social media advertising specialists.
    </p>
    <button className="bg-secondarycolor text-backgroundcolor w-[145px] sm:w-[155px] h-[44px] sm:h-[46px] font-bold text-[13px] rounded-[6px] capitalize">
      book a call
    </button>
  </div>
</section>
{/* end section 5 */}


                {/* start section 6 */}

<section className='grid bg-white text-backgroundcolor h-[500px] font-figtree'>
<h2 className='flex justify-center items-start text-[20px] md:text-[40px] lg:text-[50px] font-[700] pt-20 leading-none text-center'>Affordable Social Media Marketing Plans</h2>
</section>

        {/* end section 6 */}


        {/* start section 7 */}


<section className='bg-backgroundcolor py-32 px-4 font-figtree '>

  <div className='relative flex flex-col xl:flex-row justify-center items-center gap-6 pb-10 -mt-96'>

    <div className='relative z-10 xl:left-20 bg-white border-[3px] border-backgroundcolor rounded-[20px] w-full xl:max-w-[406px] px-6 py-5  xl:py-10 lg:mt-0'>
      <h5 className='bg-backgroundcolor text-white w-[180px] h-[46px] rounded-[8px] flex justify-center items-center capitalize absolute -top-6 left-1/2 -translate-x-1/2 font-albert'>start up</h5>
      <h2 className='text-center bg-secondarycolor text-backgroundcolor text-[36px] sm:text-[44px] lg:text-[50px] font-[700] md:w-[355px] xl:w-[159px] h-auto leading-none mx-auto mt-8 flex items-center justify-center'>
        £99 p/m
      </h2>
      <div className='text-[17px] sm:text-[19px] mt-6 space-y-4 font-albert'>
        {[
          "Ad On Facebook",
          "Ad On Instagram",
          "Static post ad creation",
          "£49 ad spend inclusive",
          "Option To Add more",
          "Ad campaign setup",
          "Compelling copy",
          "Target audience research",
          "Ad performance monitoring",
          "Monthly report",
          "Email Support"
        ].map((item, idx) => (
          <div key={idx} className='flex gap-3 items-center'>
            <FontAwesomeIcon icon={faCircleCheck} className='w-[21px] h-[21px] text-backgroundcolor' />
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className='flex justify-center pt-10'>
        <button className='text-[13px] bg-secondarycolor text-backgroundcolor uppercase font-semibold w-[150px] h-[46px] rounded-[6px]'>
          sign up now
        </button>
      </div>
    </div>


{/* deluxe */}


    <div className='relative z-20 bg-secondarycolor rounded-[20px] w-full xl:max-w-[401px] px-6 py-5 xl:py-16'>
      <h5 className='bg-backgroundcolor text-white w-[180px] h-[46px] rounded-[8px] flex justify-center items-center capitalize absolute -top-6 left-1/2 -translate-x-1/2 font-albert'>DELUXE</h5>
      <h2 className='text-center bg-backgroundcolor text-secondarycolor text-[36px] sm:text-[44px] lg:text-[50px] font-[700] md:w-[355px] xl:w-[159px] h-auto leading-none mx-auto mt-8 flex items-center justify-center'>
        £99 p/m
      </h2>
      <div className='text-[17px] sm:text-[19px] mt-6 space-y-4 text-white font-albert'>
        {[
          "Ad On Facebook",
          "Ad On Instagram",
          "10-15 Sec Ad Video",
          "£99 ad spend inclusive",
          "Option To Add more",
          "Ad campaign setup",
          "Compelling copy",
          "Target audience research",
          "Ad performance monitoring",
          "Weekly report",
          "Email Support",
          "Dedicated account manager"
        ].map((item, idx) => (
          <div key={idx} className='flex gap-3 items-center'>
            <FontAwesomeIcon icon={faCircleCheck} className='w-[21px] h-[21px] text-backgroundcolor' />
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className='flex justify-center pt-10'>
        <button className='text-[13px] bg-backgroundcolor text-secondarycolor uppercase font-semibold w-[150px] h-[46px] rounded-[6px]'>
          sign up now
        </button>
      </div>
    </div>


    <div className='relative z-10 xl:right-20 bg-white border-[3px] border-backgroundcolor rounded-[20px] w-full xl:max-w-[406px] px-6 
    py-[125px]'>
      <h2 className='text-[32px] sm:text-[40px] lg:text-[55px] font-[700] leading-tight text-center mb-6 xl:pl-10'>
        Simple Transparent Pricing
      </h2>
      <div className='flex justify-center mb-6'>
        {/* <img src="/images/img13.webp" alt="My Image" className='w-[220px] sm:w-[260px] h-[220px] sm:h-[260px]' /> */}
         <Image 
  src="/social media marketing/lady-with-transparent.webp" 
  alt="Home Hero 1" 
  width={260} 
  height={206}
className='w-[220px] sm:w-[260px] h-[220px] sm:h-[260px]' />
      </div>
      <h4 className='text-[20px] sm:text-[24px] font-[600] capitalize italic text-center xl:pl-10'>
        give your business a boost!
      </h4>
    </div>

  </div>
</section>
{/* end section 7 */}







    </>
  )
}

export default page