import React from 'react'
import ContactForm from "../components/ContactForm";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';


export async function generateMetadata() {
  const url = 'https://49poundsocial.com/white-label-social-media-management/'; // this must match the real WordPress page URL

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

<section className="bg-backgroundcolor text-white py-16 px-4 font-figtree">
  <div className="max-w-6xl mx-auto flex flex-col justify-center items-center text-center">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-bold leading-tight lg:leading-none max-w-4xl">
      White Label Reseller Solutions
    </h1>
    <p className="text-base sm:text-lg md:text-xl max-w-2xl py-6">
      Leave the Hard Work to Us! Manage Your Client&apos;s Social Media Accounts with Ease,
      Boost Your Revenue, and Focus on Winning New Clients
    </p>
    <button className="bg-secondarycolor text-backgroundcolor px-6 py-3 font-bold text-xs sm:text-sm rounded-md uppercase">
      Apply for Reseller Program
    </button>
  </div>
</section>

{/* end section 1 */}



         {/* start section 2 */}

<section className="bg-white text-backgroundcolor px-4 py-12 font-figtree">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    
    <div className="flex justify-center md:justify-start text-center md:text-left md:pl-14 xl:pl-0">
      <h2 className="text-3xl sm:text-4xl xl:text-[44px] font-bold leading-relaxed max-w-xl">
        Supercharge Your Digital Marketing Agency&apos;s Growth!
      </h2>
    </div>
    
    <div className="flex justify-center">

<Image 
  src="/resell/ORGANIC-COFFE-BEANS-1-qky5u3zalhdlcxrukpufinzenmxm3wtxbtultyzb2o.png" 
  alt="Home Hero 1" 
  width={100} 
  height={200}
  className="w-40 sm:w-44 md:w-60 lg:w-28 xl:w-32 h-auto"
/>

    </div>

  </div>
</section>

{/* end section 2 */}


          {/* start section 3 */}

<section className="bg-backgroundcolor text-white px-4 py-20 font-figtree">
  <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">

    {/* Image */}
    <div className="flex justify-center">

<Image 
  src="/resell/WHITE-LABEL-STICKER.png" 
  alt="Home Hero 1" 
  width={194} 
  height={194}
  className="w-32 sm:w-40 md:w-44 lg:w-[194px] h-auto"
/>
 </div>

    {/* Text Content */}
    <div className="flex flex-col justify-center items-center text-center md:items-center md:text-center ">
      <h2 className="text-2xl sm:text-3xl lg:text-[37px] font-semibold ">
        What is White Label?
      </h2>
      <p className="text-sm sm:text-base lg:text-[16px] max-w-xl pt-4 font-albert">
        White Label Digital Marketing gives you the freedom to tailor your brand and services according to your unique identity.
        By adding your logo and setting your pricing, you can seamlessly integrate our wide array of services into your brand offerings,
        covering everything from social media management to search engine optimisation (SEO). This flexibility ensures that your brand stands out
        and delivers exceptional value to your clients in the ever-evolving digital realm.
      </p>
    </div>

  </div>
</section>

{/* end section 3 */}


          {/* start section 4 */}

<section className="bg-white text-backgroundcolor px-4 py-20 font-figtree">
  <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">

    {/* Text Content */}
    <div className="flex flex-col justify-center items-center text-center md:text-left font-albert">
      <h2 className="text-2xl sm:text-3xl lg:text-[37px] font-semibold">
        Key Features
      </h2>
      <span className="text-sm sm:text-base pt-3">
        No Setup Fees, Dive into branding success without upfront costs.
      </span>
      <span className="text-sm sm:text-base py-4">
        Tailored Solutions, Customise offerings for your brand and clients.
      </span>
      <span className="text-sm sm:text-base">
        Transparent Processes, Build trust with clear communication.
      </span>
    </div>

    {/* Image */}
    <div className="flex justify-center">

<Image 
  src="/resell/sticky-pad-with-benefits.webp" 
  alt="Home Hero 1" 
  width={194} 
  height={194}
  className="w-32 sm:w-40 md:w-44 lg:w-[194px] h-auto"
/>

    </div>

  </div>
</section>

{/* end section 4 */}


  {/* start section 5 */}

<section className="flex flex-col justify-center items-center bg-backgroundcolor text-white px-4 py-16 font-figtree">
  <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold capitalize text-center">
    our White Label Services
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10 w-full max-w-7xl">
    
    {[
      'social media management',
      'Social Media Marketing',
      'Web Development',
      'Search Engine Optimisation',
      'Blog Articles',
      'Hosting, Support Maintenance'
    ].map((service, index) => (
      <div
        key={index}
        className="flex justify-center items-center bg-white text-backgroundcolor rounded-2xl p-6 min-h-[143px] text-center"
      >
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-semibold capitalize leading-snug">
          {service}
        </h3>
      </div>
    ))}

  </div>
</section>

{/* end section 5 */}





         {/* start section 6 */}
<section className="bg-white px-4 py-12 font-figtree">
  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-7xl mx-auto items-center">
    {/* Form */}
    <div className="lg:col-span-3 flex justify-center">
      <ContactForm />
    </div>

    {/* Info Card */}
    <div className="lg:col-span-2 flex justify-center items-center">
      <div className="bg-backgroundcolor text-white rounded-[10px] p-6 sm:p-10 w-full max-w-sm ">
        <h3 className="text-[28px] sm:text-[32px] md:text-[36px] font-semibold capitalize">
          get in touch
        </h3>
        <p className="text-sm sm:text-base py-6 font-albert">
          Have something to ask or discuss? Just drop us a line using the form below.
          We&apos;re all ears and ready to help with anything you need.
        </p>
        <div className="flex items-center gap-3 text-white text-sm">
         <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
          <Link href="mailto:hello@49poundsocial.co.uk">hello@49poundsocial.co.uk</Link>
        </div>
      </div>
    </div>
  </div>
</section>
{/* end section 6 */}
   



    </>
  )
}

export default page