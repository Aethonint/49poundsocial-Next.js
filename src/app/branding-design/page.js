import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';

export async function generateMetadata() {
  const url = 'https://49poundsocial.com/affordable-branding-design-agency'; // this must match the real WordPress page URL

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
<section className='grid grid-cols-1 md:grid-cols-2 gap-9 items-center capitalize bg-backgroundcolor px-6 md:px-16 lg:px-28 py-12 md:h-[537px] font-figtree'>
  <div className='flex flex-col justify-center items-center md:items-start '>
    <h1 className='text-white font-[700] text-[36px] md:text-[48px] xl:text-[65px] leading-none text-center md:text-left'>
      Affordable Branding Design Agency
    </h1>
    <h3 className='text-secondarycolor font-[500] text-[20px] md:text-[28px] xl:text-[37px] leading-8 md:leading-10 py-5 md:py-7 w-full md:w-[400px] xl:w-[724px] text-center md:text-left'>
      Affordable, Creative, All-Inclusive Branding Solutions.
    </h3>
    <div className="flex flex-row gap-4 pt-4">
      <button className="bg-secondarycolor text-backgroundcolor w-[155px] h-[46px] font-bold text-[13px] rounded-[6px] capitalize">
        book a call
      </button>
      <button className="bg-white text-backgroundcolor w-[155px] h-[46px] font-bold text-[13px] rounded-[6px] capitalize">
        get started
      </button>
    </div>
  </div>

  <div className='hidden md:flex justify-center items-center'>

<Image 
  src="/branding/stationary-branding.webp" 
  alt="Home Hero 1" 
  width={382} 
  height={296}
className='w-[280px] sm:w-[350px] md:w-[401px] h-auto' />
  </div>
</section>
{/* end section 1 */}


    {/* start section 2 */}
<section className='grid grid-cols-1 md:grid-cols-2 bg-white text-black px-6 md:px-16 lg:px-14 xl:px-48 py-12 md:gap-10 '>
  <div className='flex justify-center items-center font-figtree'>
   
<Image 
  src="/branding/Colorful-Creative-Personal-Brand-Logo.png" 
  alt="Home Hero 1" 
  width={381}  
  height={381}
className='w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[340px] md:h-[340px] lg:w-[381px] lg:h-[381px]' />

  </div>
  <div className='flex flex-col justify-center items-center text-center md:text-left'>
    <h2 className='text-[30px] sm:text-[30px] md:text-[30px] xl:text-[47px] font-[700] leading-none max-w-[535px] capitalize'>
      What is branding and why is it so important?
    </h2>
    <p className='text-[15px] sm:text-[16px] xl:text-[17px] max-w-[535px] pt-6 font-albert'>
      Branding is really important for making your business successful. It&apos;s not just about having a logo. It&apos;s about what your business stands for, what it believes in, and how it looks. A good brand makes people trust you, makes you different from other businesses, and helps people feel connected to you. When your branding is the same everywhere, it helps people know it&apos;s you and makes them want to be part of what you&apos;re doing. So, if you spend time and effort on your branding, you can make your business stand out and be remembered by the people who matter most to you.
    </p>
  </div>
</section>
{/* end section 2 */}


        {/* start section 3 */}
<section className='grid grid-cols-1 xl:grid-cols-2 place-items-center bg-gray-100 px-6 md:px-12 lg:px-20 xl:px-48 gap-12 mb-10 md:mb-0'>


  <div className='flex flex-col justify-center items-center sm:w-full md:w-[900px] xl:w-[561px] bg-secondarycolor text-backgroundcolor rounded-[12px] py-8 px-6 font-figtree'>
    <h2 className='text-[30px] sm:text-[36px] md:text-[40px] lg:text-[44px] capitalize font-[700] text-center'>branding package</h2>
    <h4 className='text-[20px] md:text-[22px] font-[600] mt-2'>What&apos;s included?</h4>
    <p className='text-[15px] md:text-[16px] text-center font-[600] py-6 font-albert'>
      30-minute consultation to grasp your business, outline brand design requirements.
    </p>

    <div className='flex flex-col gap-3 items-start font-[600] w-full font-albert'>
      <div className='flex gap-2 items-start'>
        <FontAwesomeIcon icon={faCheck} className='w-[16px] h-[16px]' />
        <p>Custom logo design</p>
      </div>
      <div className='flex gap-2 items-start'>
        <FontAwesomeIcon icon={faCheck} className='w-[16px] h-[16px]' />
        <p>Brand identity development</p>
      </div>
      <div className='flex gap-2 items-start'>
        <FontAwesomeIcon icon={faCheck} className='w-[16px] h-[16px]' />
        <p>Brand style guide creation</p>
      </div>
      <div className='flex gap-2 items-start'>
        <FontAwesomeIcon icon={faCheck} className='w-[16px] h-[16px]' />
        <p>Brand messaging and positioning</p>
      </div>
      <div className='flex gap-2 items-start'>
        <FontAwesomeIcon icon={faCheck} className='w-[16px] h-[16px]' />
        <p>Visual elements including color palette, typography, and imagery selection</p>
      </div>
      <div className='flex gap-2 items-start'>
        <FontAwesomeIcon icon={faCheck} className='w-[16px] h-[16px]' />
        <p>Social media profile branding</p>
      </div>
      <div className='flex gap-2 items-start'>
        <FontAwesomeIcon icon={faCheck} className='w-[16px] h-[16px]' />
        <p>Five rounds of revisions included for each item</p>
      </div>
    </div>

    <h4 className='text-[28px] md:text-[32px] lg:text-[35px] pt-6 font-[550]'>£199</h4>
    <button className="bg-backgroundcolor text-white w-[135px] h-[46px] font-bold text-[13px] rounded-[6px] uppercase mt-3">buy now</button>
  </div>

  <div className='hidden xl:flex justify-center items-center'>

<Image 
  src="/branding/branding.webp" 
  alt="Home Hero 1" 
  width={528}  
  height={217}
className='rounded-[20px] w-full max-w-[528px] h-auto object-contain' />

  </div>
</section>
{/* end section 3 */}




  {/* start section 4 */}
<section className='grid grid-cols-1 xl:grid-cols-2 place-items-center px-6 md:px-12 lg:px-48 lg:h-[797px] bg-gray-100 gap-10 mb-10 md:mb-0 font-figtree'>

  <div className='hidden xl:flex justify-center items-center'>
<Image 
  src="/branding/76d60cb5947cb16f38674fafa23185d8.png" 
  alt="Home Hero 1" 
  width={528}  
  height={396}
className='rounded-[20px] w-[528px] h-[396px]' />
  </div>

  <div className='flex flex-col justify-center items-center sm:w-full md:w-[900px] xl:w-[561px] bg-backgroundcolor text-white rounded-[12px] p-6 md:p-8'>
    <h2 className='text-[32px] md:text-[36px] lg:text-[44px] capitalize font-[700] text-center'>Stationery Package</h2>
    <h4 className='text-[18px] md:text-[20px] lg:text-[22px] font-[600] text-center'>What&apos;s Included in the Bundle?</h4>
    <p className='text-[15px] md:text-[16px] font-[600] text-center pt-4 font-albert'>A 30-minute consultation with us to delve into your business objectives and branding aspirations.</p>

    <div className='flex flex-col gap-2 text-[15px] font-[600] pt-4 px-4 md:px-8 w-full font-albert'>
      {[
        'logo design',
        'Letterhead design',
        'Business card design',
        'Notepad design',
        'Complimentary slip design',
        'Branded pens design',
        'Print-ready files for all items',
        'Five rounds of revisions included for each item'
      ].map((item, index) => (
        <div key={index} className='flex gap-2 items-center'>
          <FontAwesomeIcon icon={faCheck} className='w-[16px] h-[16px]' />
          <p>{item}</p>
        </div>
      ))}
    </div>

    <h4 className='text-[28px] md:text-[32px] lg:text-[35px] pt-6 font-[550] text-secondarycolor'>£99</h4>
    <button className="bg-secondarycolor text-backgroundcolor w-[135px] h-[46px] font-bold text-[13px] rounded-[6px] uppercase mt-3">buy now</button>
  </div>
</section>
{/* end section 4 */}




        {/* start section 5 */}
<section className="bg-secondarycolor py-12 px-4 text-center font-figtree">
  <div className="flex flex-col justify-center items-center max-w-4xl mx-auto">
    <h2 className="text-[26px] sm:text-[30px] md:text-[32px] lg:text-[35px] font-[700] capitalize leading-snug text-backgroundcolor">
      Looking for more than what&apos;s listed?
    </h2>
    <button className="bg-secondarycolor text-backgroundcolor w-[155px] h-[46px] font-bold text-[13px] rounded-[6px] uppercase border-4 border-solid border-backgroundcolor mt-5">
      get in touch
    </button>
  </div>
</section>
{/* end section 5 */}




    </>
  )
}

export default page