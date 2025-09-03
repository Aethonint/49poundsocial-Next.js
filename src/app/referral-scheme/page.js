import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowPointer} from '@fortawesome/free-solid-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faRightLeft} from '@fortawesome/free-solid-svg-icons'
import {faMoneyBillWave} from '@fortawesome/free-solid-svg-icons'
import {faMagnifyingGlassPlus} from '@fortawesome/free-solid-svg-icons'
import {faGooglePlus} from '@fortawesome/free-brands-svg-icons'
import {faChalkboard} from '@fortawesome/free-solid-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faHandHoldingMedical} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';


export async function generateMetadata() {
  const url = 'https://49poundsocial.com/referral-scheme/'; // this must match the real WordPress page URL

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

<section className="flex flex-col md:flex-row justify-center items-center gap-4 px-8 md:px-16 py-16 bg-backgroundcolor text-white font-figtree">

  {/* Text: appears FIRST on all screens */}
  <div className="order-1 md:order-1 flex flex-col justify-center items-start  text-left max-w-3xl">
    <h1 className="text-3xl sm:text-4xl xl:text-6xl font-bold leading-relaxed">
      Join Our Referral Program & Get 10% Commission paid Monthly!
    </h1>
    <button className="bg-secondarycolor text-backgroundcolor font-bold text-[13px] rounded-[6px] uppercase mt-6 px-6 py-3">
      apply to join
    </button>
  </div>

  <div className="order-2 md:order-2 flex justify-center">

<Image 
  src="/referral scheme/Brand-Template-49-4.png" 
  alt="Home Hero 1" 
  width={356} 
  height={356} // or whatever actual height you'd like
  className="w-40 sm:w-72 md:w-96 xl:w-[356px] h-auto"
/>

  </div>

</section>

{/* end section 1 */}






          {/* start section 2 */}

<section className="bg-white text-black px-10 xl:px-40 py-16 font-figtree ">
  <div className="max-w-7xl mx-auto flex flex-col gap-10">

    {/* Heading Block */}
    <div className="flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-0">
      <h2 className="text-2xl sm:text-3xl lg:text-[44px] font-bold capitalize">
        we know the power of word-of-mouth referrals.
      </h2>
      <h3 className="text-lg sm:text-xl lg:text-[27px] mt-4">
        That&apos;s why we&apos;ve launched an exciting new client referral program just for you!
      </h3>
    </div>

    {/* Content Block */}
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center mt-6">

      {/* Left Text Content */}
      <div className="flex flex-col gap-8">
        <div>
          <span className="text-xl sm:text-[22px] font-semibold">
            What do I get out of the client referral scheme?
          </span>
          <p className="text-base sm:text-[16px] mt-2 font-albert">
            Refer a business or individual to 49 Pound Social and get 10% of the price of the plan paid to you per month as long as the plan is active.
          </p>
        </div>

        <div>
          <span className="text-xl sm:text-[22px] font-semibold">
            Who should I be referring?
          </span>
          <p className="text-base sm:text-[16px] mt-2 font-albert">
            You can refer any business or organisation that could benefit from our services, such as small businesses, startups, entrepreneurs, or individuals looking to improve their online presence through social media management, website design, and other digital marketing solutions.
            <br /><br />
            We enjoy collaborating with diverse brands to assist them in reaching their business objectives through digital solutions. If you believe our services could benefit someone you know who owns a business, don&apos;t hesitate to reach out to us today. Visit Terms & Conditions.
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className=" hidden md:flex justify-center">

<Image 
  src="/referral scheme/Brand-Template-49.png" 
  alt="Home Hero 1" 
  width={312} 
  height={312} // or whatever actual height you'd like
  className="w-40 sm:w-56 md:w-64 lg:w-[312px] h-auto"
/>

      </div>

    </div>
  </div>
</section>

{/* end section 2 */}



                        {/* start section 3 */}
<section className="bg-backgroundcolor text-white px-4 xl:px-56 py-12 font-figtree">
  <div className="flex flex-col justify-center items-center">
    <h2 className="text-3xl sm:text-4xl lg:text-[68px] font-bold text-center">
      How Does It Work?
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
      {/* Step 1 */}
      <div className="flex flex-col justify-center items-center bg-white rounded-[20px] p-6">
        <div className="flex justify-center items-center w-[73px] h-[73px] rounded-full bg-backgroundcolor text-white mb-4">
          <FontAwesomeIcon icon={faArrowPointer} className="w-8 h-8" />
        </div>
        <span className="text-lg font-semibold text-backgroundcolor text-center">Click On Apply</span>
        <p className="text-sm text-center text-black mt-2 font-albert">
          Click on our &quot;Apply to Join&quot; button to express your interest in our referral program.
        </p>
      </div>

      {/* Step 2 */}
      <div className="flex flex-col justify-center items-center bg-white rounded-[20px] p-6">
        <div className="flex justify-center items-center w-[73px] h-[73px] rounded-full bg-backgroundcolor text-white mb-4">
          <FontAwesomeIcon icon={faArrowPointer} className="w-8 h-8" />
        </div>
        <span className="text-lg font-semibold text-backgroundcolor text-center">Receive Form</span>
        <p className="text-sm text-center text-black mt-2 font-albert">
          Expect to receive the referral form promptly after your inquiry.
        </p>
      </div>

      {/* Step 3 */}
      <div className="flex flex-col justify-center items-center bg-white rounded-[20px] p-6">
        <div className="flex justify-center items-center w-[73px] h-[73px] rounded-full bg-backgroundcolor text-white mb-4">
          <FontAwesomeIcon icon={faRightLeft} className="w-8 h-8" />
        </div>
        <span className="text-lg font-semibold text-backgroundcolor text-center">Refer Any Business</span>
        <p className="text-sm text-center text-black mt-2 font-albert">
          Fill out the form, referring the business or individuals looking for our services.
        </p>
      </div>

      {/* Step 4 */}
      <div className="flex flex-col justify-center items-center bg-white rounded-[20px] p-6">
        <div className="flex justify-center items-center w-[73px] h-[73px] rounded-full bg-backgroundcolor text-white mb-4">
          <FontAwesomeIcon icon={faMoneyBillWave} className="w-8 h-8" />
        </div>
        <span className="text-lg font-semibold text-backgroundcolor text-center">Earn Commission</span>
        <p className="text-sm text-center text-black mt-2 font-albert">
          Receive 10% of the monthly package cost for every client who signs up through your referral.
        </p>
      </div>
    </div>

    <button className="bg-secondarycolor text-backgroundcolor font-bold text-[13px] rounded-[6px] uppercase mt-8 px-6 py-3">
      apply to join
    </button>

    <p className="text-sm text-white mt-4 text-center max-w-xl font-albert">
      Please review the <span className="text-secondarycolor">Terms & Conditions</span> before applying to join the scheme
    </p>
  </div>
</section>
{/* end section 3 */}



{/* start section 4 */}

<section className='grid bg-white text-backgroundcolor h-auto py-16 px-4 sm:px-6 lg:px-8 font-figtree'>
  <div className='flex flex-col justify-center items-center'>
    <h2 className='text-[28px] sm:text-[36px] md:text-[43px] font-[700] text-center md:text-left'>
      What Services Are Included In The Referral Program?
    </h2>

    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-backgroundcolor w-full max-w-[1140px] mt-4'>
      <div className='flex flex-col justify-center items-start w-full px-2'>
        <div className='flex justify-start items-center gap-3'>
          <FontAwesomeIcon icon={faFacebook} className='w-[20px] h-[20px]' />
          <span className='text-[18px] sm:text-[20px] md:text-[22px] capitalize'>social media management</span>
        </div>
        <div className='flex justify-start items-center gap-3 mt-2'>
          <FontAwesomeIcon icon={faMagnifyingGlassPlus} className='w-[20px] h-[20px]' />
          <span className='text-[18px] sm:text-[20px] md:text-[22px] capitalize'>Search Engine Optimised Blogs</span>
        </div>
        <div className='flex justify-start items-center gap-3 mt-2'>
          <FontAwesomeIcon icon={faGooglePlus} className='w-[20px] h-[20px]' />
          <span className='text-[18px] sm:text-[20px] md:text-[22px] capitalize'>SEO Services</span>
        </div>
      </div>

      <div className='flex flex-col justify-center items-start w-full px-2'>
        <div className='flex justify-start items-center gap-3'>
          <FontAwesomeIcon icon={faChalkboard} className='w-[20px] h-[20px]' />
          <span className='text-[18px] sm:text-[20px] md:text-[22px] capitalize'>Pay Monthly Websites</span>
        </div>
        <div className='flex justify-start items-center gap-3 mt-2'>
          <FontAwesomeIcon icon={faInstagram} className='w-[20px] h-[20px]' />
          <span className='text-[18px] sm:text-[20px] md:text-[22px] capitalize'>FB & Insta Ads</span>
        </div>
        <div className='flex justify-start items-center gap-3 mt-2'>
          <FontAwesomeIcon icon={faHandHoldingMedical} className='w-[20px] h-[20px]' />
          <span className='text-[18px] sm:text-[20px] md:text-[22px] capitalize'>Hosting and Maintenance</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* end section 4 */}


        
           {/* start section 5 */}

<section className='grid bg-secondarycolor text-backgroundcolor h-auto py-10 px-4 sm:px-6 lg:px-8 font-figtree'>
  <div className='flex flex-col justify-center items-center text-center'>
    <span className='text-[32px] sm:text-[45px] md:text-[55px] font-[500]'>
      Ready to earn?
    </span>
    <button className="bg-backgroundcolor text-secondarycolor w-[150px] sm:w-[165px] h-[42px] sm:h-[46px] font-bold text-[12px] sm:text-[13px] rounded-[6px] uppercase mt-5">
      apply to join
    </button>
  </div>
</section>

{/* end section 5 */}



    </>
  )
}

export default page