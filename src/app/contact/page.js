import React from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';


// rank math api start

export async function generateMetadata() {
  const url = 'https://49poundsocial.com/contact-social-media-solutions/'; // this must match the real WordPress page URL

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
// rank math api end


function page() {
  return (
    <>
    
   {/* start section 1 */}

<section className='grid grid-cols-1 md:grid-cols-2 bg-backgroundcolor text-white h-auto py-10 px-4 sm:px-6 lg:px-8 gap-8 font-figtree'>
  <div className='flex flex-col justify-center items-start md:pl-20 xl:pl-32'>
    <h1 className='text-[36px] sm:text-[50px] md:text-[69px] font-[700] text-secondarycolor capitalize'>
      contact us
    </h1>
    <p className='text-[15px] sm:text-[16px] max-w-[544px] mt-4 font-albert'>
      49 Pound Social was founded in Feb 2021 to help small business owners increase and grow their presence on social media presence. Join us to empower small businesses around the world to give them extra time on growing their business.
    </p>
  </div>

  <div className='flex justify-center items-center'>
    {/* <img src="/images/img31.webp" alt="My Image" className='w-[180px] sm:w-[200px] md:w-[231px] h-auto' /> */}
    <Image 
  src="/contact/lets-talk-logo.webp" 
  alt="Home Hero 1" 
  width={231} 
  height={267}
className='w-[180px] sm:w-[200px] md:w-[231px] h-auto' />  
  </div>
</section>

{/* end section 1 */}


        {/* start section 2 */}

<section className='flex flex-col lg:flex-row justify-center items-center gap-8 bg-white h-auto py-10 px-4 sm:px-6 lg:px-8 font-figtree'>
  {/* Left Card */}
  <div className='flex flex-col justify-center items-start bg-backgroundcolor text-white w-full max-w-sm rounded-[10px] px-6 sm:px-10 py-36'>
    <h3 className='text-[28px] sm:text-[32px] md:text-[37px] text-secondarycolor capitalize font-[600]'>
      get in touch
    </h3>
    <p className='text-[15px] sm:text-[16px] py-6 font-albert'>
      Whether you&apos;re looking to revamp your social media strategy, launch a new marketing campaign, or build a stunning website, we&apos;ve got you covered. Our team is here to turn your ideas into digital success. Drop us a message below, and let&apos;s start the conversation.
    </p>
    <div className='flex justify-start items-center text-white gap-3 mt-4'>
      <FontAwesomeIcon icon={faEnvelope} className='w-[17px] h-[17px] text-secondarycolor' />
      <Link href="#">hello@49poundsocial.co.uk</Link>
    </div>
  </div>

  {/* Right Form */}
  <div className='flex flex-col w-full max-w-3xl justify-center items-center bg-gray-100 rounded-[10px] p-6 sm:p-10 md:py-16 '>
    <form className='w-full'>
      <div className='grid grid-cols-1 gap-4'>
        <div className='flex flex-col'>
          <label htmlFor='name' className='text-[16px] text-backgroundcolor'>Name</label>
          <input
            type="text"
            className="border border-backgroundcolor rounded-[6px] px-4 py-2 w-full h-[43px] outline-none"
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='phone' className='text-[16px] text-backgroundcolor'>Phone Number</label>
          <input
            type="text"
            className="border border-backgroundcolor rounded-[6px] px-4 py-2 w-full h-[43px] outline-none"
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='email' className='text-[16px] text-backgroundcolor'>Email</label>
          <input
            type="email"
            className="border border-backgroundcolor rounded-[6px] px-4 py-2 w-full h-[43px] outline-none"
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='message' className='text-[16px] text-backgroundcolor'>What can we do for you?</label>
          <textarea
            rows={5}
            className="border border-backgroundcolor rounded-[6px] px-4 py-2 outline-none w-full"
          />
        </div>

        <button className='w-[120px] h-[46px] bg-backgroundcolor text-white uppercase font-[600] rounded-[6px] mt-2'>
          send
        </button>
      </div>
    </form>
  </div>
</section>

{/* end section 2 */}




                       {/* start section 3 */}

<section className='grid bg-white h-auto py-10 px-4 sm:px-6 lg:px-8 place-items-center font-figtree'>
  <div className='flex flex-col justify-center items-start bg-gray-100 w-full max-w-[1140px] rounded-[10px] px-6 sm:px-10 py-6'>
    <h3 className='text-[28px] sm:text-[32px] md:text-[37px] capitalize text-backgroundcolor font-[600]'>
      subscribe to our Newsletter
    </h3>
    <p className='text-[15px] sm:text-[16px] py-2 font-albert'>
      Stay ahead with expert insights and special promotions delivered straight to your inbox
    </p>

    <div className='flex flex-col sm:flex-row w-full gap-3 mt-4'>
      <input
        type="text"
        placeholder="Enter your Email"
        className="border border-secondarycolor px-4 py-2 w-full outline-none text-black"
      />
      <button className='w-full sm:w-[190px] bg-backgroundcolor text-white text-[13px] font-[600] uppercase py-2'>
        Subscribe
      </button>
    </div>
  </div>
</section>

{/* end section 3 */}


            {/* start section 4 */}

<section className='grid bg-secondarycolor h-auto py-10 px-4 sm:px-6 xl:px-8 place-items-center font-figtree'>
  <div className='flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10'>

    {/* Email Card */}
    <div className='flex flex-col justify-center items-center bg-backgroundcolor rounded-[20px] w-full max-w-[379px] h-[198px] px-4 md:px-14'>
      <Link href="#"><FontAwesomeIcon icon={faEnvelope} className='w-[40px] h-[40px] text-secondarycolor' /></Link>
      <Link href='#' className='text-[20px] sm:text-[22px] uppercase font-[600] text-white pt-4'>email</Link>
      <p className='text-[15px] sm:text-[16px] text-white text-center'>hello@49poundsocial.co.uk</p>
    </div>

    {/* Address Card */}
    <div className='flex flex-col justify-center items-center bg-backgroundcolor rounded-[20px] w-full max-w-[379px] h-[198px] px-4 md:px-14'>
      <Link href="#"><FontAwesomeIcon icon={faLocationDot} className='w-[40px] h-[40px] text-secondarycolor' /></Link>
      <Link href='#' className='text-[20px] sm:text-[22px] uppercase font-[600] text-white pt-4'>address</Link>
      <p className='text-[15px] sm:text-[16px] text-white text-center'>5 Brayford Square, LONDON E1 0SG UK.</p>
    </div>

  </div>
</section>

{/* end section 4 */}


    
    </>
  )
}

export default page