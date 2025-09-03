import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faTiktok} from '@fortawesome/free-brands-svg-icons'
import {faXTwitter} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image';



import React from 'react'

function footer() {
  return (
    <>
      <footer>
        <section className="flex flex-col xl:flex-row justify-center sm:items-center xl:items-start xl:justify-evenly bg-backgroundcolor pt-4 xl:pt-12 px-6 xl:px-0 gap-10 lg:gap-0 font-figtree">

          <div className="flex flex-col items-center xl:items-start sm:max-w-[800px]  xl:max-w-[480px]">
 {/* <img src="/images/img8.webp" alt="Logo" className="flex xl:hidden h-[90px] sm:h-[110px] object-contain cursor-pointer py-5" /> */}
  <Image 
  src="/website logo/website-logo.webp" 
  alt="Home Hero 1" 
  width={172} 
  height={110} // or whatever actual height you'd like
  className="flex xl:hidden h-[90px] sm:h-[110px] object-contain cursor-pointer py-5" />

            <h2 className="font-[700] text-[36px] sm:text-[45px] xl:text-[50px] h-auto capitalize bg-secondarycolor text-backgroundcolor px-5 py-4 rounded-[8px] leading-tight">
              get more, pay less
            </h2>
            <h2 className="text-[25px] md:text-[40px] xl:text-[30px] text-white capitalize leading-none pt-5 font-[700]">
              It&apos;s all in our jam-packed plans!
            </h2>
            <p className="text-sm text-white pt-4 sm:text-center xl:text-start font-albert text-center">
              Affordable social media management, dynamic blog content, and strategic social media marketing solutions. Small price, big impact!
            </p>
          </div>


<div className='flex flex-col md:flex-row justify-center items-start sm:gap-96 xl:gap-44 pt-0 md:pt-5 xl:pt-0' >
 
  <div className="flex flex-col items-start font-albert">
            <p className="text-secondarycolor text-[18px] sm:text-[20px] font-[700] capitalize">useful links</p>
            <Link href="#" className="text-white font-[600] pt-4 capitalize">blog</Link>
            <Link href="#" className="text-white font-[600] pt-2 capitalize">privacy policy</Link>
            <Link href="#" className="text-white font-[600] pt-2 capitalize">terms & conditions</Link>
            <Link href="#" className="text-white font-[600] pt-2 capitalize">contact us</Link>
          </div>

  <div className="flex flex-col items-start pt-7 md:pt-0 font-albert">
            <p className="text-secondarycolor text-[18px] sm:text-[20px] font-[700] capitalize ">connect with us</p>
  <Image 
  src="/website logo/website-logo.webp" 
  alt="Home Hero 1" 
  width={172} 
  height={110} // or whatever actual height you'd like
  className="hidden xl:flex h-[90px] sm:h-[110px] object-contain cursor-pointer py-5" />

            <div className="flex text-white gap-3 items-center text-sm pt-4">
              <FontAwesomeIcon icon={faEnvelope} className="w-[17px] h-[17px]" />
              <Link href="#">hello@49poundsocial.co.uk</Link>
            </div>
            <div className="flex text-white gap-3 pt-2 items-center text-sm">
              <FontAwesomeIcon icon={faLocationDot} className="w-[17px] h-[17px]" />
              <Link href="#">5 Brayford Square, LONDON E1 0SG</Link>
            </div>
            <div className="flex text-secondarycolor pt-6 gap-4">
              <Link href="#"><FontAwesomeIcon icon={faFacebook} className="w-[19px] h-[19px]" /></Link>
              <Link href="#"><FontAwesomeIcon icon={faInstagram} className="w-[19px] h-[19px]" /></Link>
              <Link href="#"><FontAwesomeIcon icon={faTiktok} className="w-[19px] h-[19px]" /></Link>
              <Link href="#"><FontAwesomeIcon icon={faXTwitter} className="w-[19px] h-[19px]" /></Link>
              <Link href="#"><FontAwesomeIcon icon={faLinkedin} className="w-[19px] h-[19px]" /></Link>
            </div>
          </div>

  
</div>
         

        
        </section>

        <section className="flex justify-center items-center bg-backgroundcolor px-4 py-4 text-center font-albert pt-10">
          <p className="text-[12px] sm:text-[14px] text-secondarycolor leading-tight">
            © Copyright 49 Pound Social-part of Aethon group Ltd Company number 15520393
          </p>
        </section>
      </footer>
    </>
  );
}

export default footer;