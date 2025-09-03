"use client";
import React from 'react'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGreaterThan} from '@fortawesome/free-solid-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faTiktok} from '@fortawesome/free-brands-svg-icons'
import {faXTwitter} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faCalendar} from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image';



function page() {

  const [posts, setPosts] = useState([]);
  const [popularPosts, setPopularPosts] = useState([]);


   useEffect(() => {
    fetch("https://49poundsocial.com/wp-json/wp/v2/posts?per_page=10&_embed")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("API Error:", err));

// Fetch Most Popular Blog Posts
   fetch("https://49poundsocial.com/wp-json/wp/v2/posts?per_page=3&meta_key=views&_embed")
  .then((res) => res.json())
  .then((data) => setPopularPosts(data))
  .catch((err) => console.error("Popular Posts API Error:", err));


  }, []);


  return (
    <>
    {/* start section 1 */}

<section className='grid place-items-center h-auto py-10 px-4 sm:px-6 lg:px-8 bg-backgroundcolor text-white font-figtree'>
  <div className='flex flex-col justify-center items-start w-full max-w-[1340px]'>
    
    <div className='flex flex-wrap gap-2 items-center text-[14px]'>
      <Link href="/" className='hover:underline'>Home</Link>
      <FontAwesomeIcon icon={faGreaterThan} className='text-[14px]' />
      <span className='text-secondarycolor'>Blog</span>
    </div>

    <h1 className='text-[36px] sm:text-[50px] md:text-[65px] xl:text-[80px] capitalize font-[700] mt-4'>
      49 pound social blog
    </h1>

    <h3 className='text-[16px] sm:text-[18px] md:text-[20px] text-secondarycolor mt-2 font-albert'>
      Dive into Our Blog for Social Media Tips, Trends, and More!
    </h3>
  </div>
</section>

{/* end section 1 */}



              {/* start section 2 */}

<section className='grid h-auto py-6 px-4 sm:px-6 lg:px-8 bg-white place-items-center font-figtree'>
  <div className='flex justify-start items-center w-full max-w-[1140px]'>
    <h2 className='text-[24px] sm:text-[26px] md:text-[30px] text-black capitalize font-[600]'>
      latest posts
    </h2>
  </div>
</section>

{/* end section 2 */}

               {/* start section 3 */}
 
  
<section className='grid grid-cols-1 lg:grid-cols-5 gap-7 bg-white mb-14 px-4 sm:px-6 lg:px-12 font-figtree'>


  <div className='flex flex-col justify-center items-center lg:items-end lg:col-span-3 gap-6 w-full'>
      {posts.map((post) => {
        const imageUrl =
          post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
          "/fallback.jpg";
        const formattedDate = new Date(post.date).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        });

        return (
          <Link href={`/blog/${post.slug}`} key={post.id}>
             <div className='flex flex-col sm:flex-row justify-center items-center w-full max-w-[746px] bg-backgroundcolor border border-gray-500 rounded-[20px] overflow-hidden'>
             <div className="w-full sm:w-3/5">
  <Image
    src={imageUrl}
    alt="Post Image"
    width={600} 
    height={400}
    className="w-full h-full object-cover"
  />
</div>

            <div className='flex flex-col justify-center items-start text-white w-full sm:w-2/5 h-full p-4'>
          <div className='flex justify-center items-center gap-2'>
                  <FontAwesomeIcon icon={faCalendar} />
                  <span>{formattedDate}</span>
                </div>
                <h2
                  className="text-xl font-semibold mt-4"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
              </div>
            </div>
          </Link>
        );
      })}
    </div>

  {/* <div className='flex flex-col justify-center items-center lg:items-end lg:col-span-3 gap-6 w-full'> */}

    {/* BLOG POST CARD 1




    <Link href="#">
      <div className='flex flex-col sm:flex-row justify-center items-center w-full max-w-[746px] bg-backgroundcolor border border-gray-500 rounded-[20px] overflow-hidden'>
        <div className='w-full sm:w-3/5 h-[200px] sm:h-[337px]'>

   <Image 
  src="/blog/organic-social.webp" 
  alt="Home Hero 1" 
  width={446} 
  height={337}
className="w-full h-full object-cover"/>

        </div>
        <div className='flex flex-col justify-center items-start text-white w-full sm:w-2/5 h-full p-4'>
          <div className='flex justify-center items-center gap-2'>
            <FontAwesomeIcon icon={faCalendar} className='text-secondarycolor w-[15px] h-[15px]' />
            <span className='text-[14px]'>May 21, 2025</span>
          </div>
          <h3 className='text-[20px] capitalize font-[600] pt-7'>
            organic content vs paid ads trust uk: which do british consumers prefer?
          </h3>
        </div>
      </div>
    </Link> */}

    {/* BLOG POST CARD 2 */}
    {/* <Link href="#">
      <div className='flex flex-col sm:flex-row justify-center items-center w-full max-w-[746px] bg-backgroundcolor border border-gray-500 rounded-[20px] overflow-hidden'>
        <div className='w-full sm:w-3/5 h-[200px] sm:h-[337px]'>
           <Image 
  src="/blog/affordable-social.webp" 
  alt="Home Hero 1" 
  width={446} 
  height={337}
className="w-full h-full object-cover"/>
        </div>
        <div className='flex flex-col justify-center items-start text-white w-full sm:w-2/5 h-full p-4'>
          <div className='flex justify-center items-center gap-2'>
            <FontAwesomeIcon icon={faCalendar} className='text-secondarycolor w-[15px] h-[15px]' />
            <span className='text-[14px]'>May 21, 2025</span>
          </div>
          <h3 className='text-[20px] capitalize font-[600] pt-7'>
            Transform Your UK Business with Affordable Social Media Management Solutions
          </h3>
        </div>
      </div>
    </Link> */}

    {/* BLOG POST CARD 3 */}
    {/* <Link href="#">
      <div className='flex flex-col sm:flex-row justify-center items-center w-full max-w-[746px] bg-backgroundcolor border border-gray-500 rounded-[20px] overflow-hidden'>
        <div className='w-full sm:w-3/5 h-[200px] sm:h-[337px]'>
           <Image 
  src="/blog/marketing-strategy.webp" 
  alt="Home Hero 1" 
  width={446} 
  height={337}
className="w-full h-full object-cover"/>
        </div>
        <div className='flex flex-col justify-center items-start text-white w-full sm:w-2/5 h-full p-4'>
          <div className='flex justify-center items-center gap-2'>
            <FontAwesomeIcon icon={faCalendar} className='text-secondarycolor w-[15px] h-[15px]' />
            <span className='text-[14px]'>May 21, 2025</span>
          </div>
          <h3 className='text-[20px] capitalize font-[600] pt-7'>
            Social Media Management Tools for Creators & Businesses
          </h3>
        </div>
      </div>
    </Link> */}

    {/* BLOG POST CARD 4 */}
    {/* <Link href="#">
      <div className='flex flex-col sm:flex-row justify-center items-center w-full max-w-[746px] bg-backgroundcolor border border-gray-500 rounded-[20px] overflow-hidden'>
        <div className='w-full sm:w-3/5 h-[200px] sm:h-[337px]'>
           <Image 
  src="/blog/laptop.webp" 
  alt="Home Hero 1" 
  width={446} 
  height={337}
className="w-full h-full object-cover"/>
        </div>
        <div className='flex flex-col justify-center items-start text-white w-full sm:w-2/5 h-full p-4'>
          <div className='flex justify-center items-center gap-2'>
            <FontAwesomeIcon icon={faCalendar} className='text-secondarycolor w-[15px] h-[15px]' />
            <span className='text-[14px]'>May 21, 2025</span>
          </div>
          <h3 className='text-[20px] capitalize font-[600] pt-7'>
            How to create a Facebook marketing strategy
          </h3>
        </div>
      </div>
    </Link> */}

    {/* BLOG POST CARD 5 */}
    {/* <Link href="#">
      <div className='flex flex-col sm:flex-row justify-center items-center w-full max-w-[746px] bg-backgroundcolor border border-gray-500 rounded-[20px] overflow-hidden'>
        <div className='w-full sm:w-3/5 h-[200px] sm:h-[337px]'>
          <Image 
  src="/blog/whatsup-channels.webp" 
  alt="Home Hero 1" 
  width={446} 
  height={337}
className="w-full h-full object-cover"/>
        </div>
        <div className='flex flex-col justify-center items-start text-white w-full sm:w-2/5 h-full p-4'>
          <div className='flex justify-center items-center gap-2'>
            <FontAwesomeIcon icon={faCalendar} className='text-secondarycolor w-[15px] h-[15px]' />
            <span className='text-[14px]'>May 21, 2025</span>
          </div>
          <h3 className='text-[20px] capitalize font-[600] pt-7'>
            How To Create WhatsApp Channels
          </h3>
        </div>
      </div>
    </Link>
  </div> */}

  {/* SIDEBAR */}
  <div className='relative flex flex-col justify-start items-center lg:items-start col-span-2 w-full'>
    <div className='sticky top-1 w-full max-w-[363px]'>

       {/* Most Popular  */}
      <div className='flex flex-col w-full bg-white border border-backgroundcolor rounded-[20px] overflow-hidden'>
        <div className='flex justify-center items-center w-full h-[68px] text-white bg-backgroundcolor'>
          <h3 className='text-[25px] capitalize'>most popular</h3>
        </div>

{popularPosts.map((post, index) => {
  const imageUrl =
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/fallback.jpg";
  const title = post.title.rendered;
  const slug = post.slug;

  return (
    <React.Fragment key={post.id}>
      <div className='flex flex-col justify-center items-start px-5 py-4'>
        <div className='flex justify-center items-center gap-4'>
          <Link href={`/blog/${slug}`}>
            <Image 
              src={imageUrl} 
              alt={`Popular Post ${index + 1}`} 
              width={114} 
              height={76}
              className="w-[114px] h-[76px] object-cover"
            />
          </Link>
          <div className='flex'>
            <Link href={`/blog/${slug}`}>
              <h4
                className='text-[18px] text-black w-[191px] capitalize font-[600] leading-6'
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </Link>
          </div>
        </div>
        <div className='flex text-secondarycolor pt-4'>
          <Link href={`/blog/${slug}`} className='flex justify-center items-center gap-1'>
            <span className='text-[15px] capitalize font-[600]'>read more</span>
            <FontAwesomeIcon icon={faArrowRight} className='w-[15px] h-[15px]' />
          </Link>
        </div>
      </div>

      {index < popularPosts.length - 1 && (
        <hr className="my-2 border-t-2 border-gray-300 block mx-3" />
      )}
    </React.Fragment>
  );
})}



         {/* Popular Post 1 
        <div className='flex flex-col justify-center items-start px-5 py-4'>
          <div className='flex justify-center items-center gap-4'>
            <Link href="#">
              <Image 
  src="/blog/affordable-social.webp" 
  alt="Home Hero 1" 
  width={114} 
  height={76}
 className="w-[114px] h-[76px] object-cover"/>
            </Link>
            <div className='flex'>
              <Link href="#">
                <h4 className='text-[18px] text-black w-[191px] capitalize font-[600] leading-6'>
                  Tranform your UK business with afforable social...
                </h4>
              </Link>
            </div>
          </div>
          <div className='flex text-secondarycolor pt-4'>
            <Link href='#' className='flex justify-center items-center gap-1'>
              <span className='text-[15px] capitalize font-[600]'>read more</span>
              <FontAwesomeIcon icon={faArrowRight} className='w-[15px] h-[15px]' />
            </Link>
          </div>
        </div>

        <hr className="my-2 border-t-2 border-gray-300 block mx-3" />

         Popular Post 2 
        <div className='flex flex-col justify-center items-start px-5 py-4'>
          <div className='flex justify-center items-center gap-4'>
            <Link href="#">
 <Image 
  src="/blog/laptop.webp" 
  alt="Home Hero 1" 
  width={114} 
  height={76}
className="w-[114px] h-[76px] object-cover" />
            </Link>
            <div className='flex'>
              <Link href="#">
                <h4 className='text-[18px] text-black w-[191px] capitalize font-[600] leading-6'>
                  Social Media Management Tools for Creators & Businesses
                </h4>
              </Link>
            </div>
          </div>
          <div className='flex text-secondarycolor pt-4'>
            <Link href='#' className='flex justify-center items-center gap-1'>
              <span className='text-[15px] capitalize font-[600]'>read more</span>
              <FontAwesomeIcon icon={faArrowRight} className='w-[15px] h-[15px]' />
            </Link>
          </div>
        </div>

        <hr className="my-2 border-t-2 border-gray-300 block mx-3" />

         Popular Post 3 
        <div className='flex flex-col justify-center items-start px-5 py-4'>
          <div className='flex justify-center items-center gap-4'>
            <Link href="#">

      <Image 
  src="/blog/marketing-strategy.webp" 
  alt="Home Hero 1" 
  width={114} 
  height={76}
className="w-[114px] h-[76px] object-cover" />
            </Link>
            <div className='flex'>
              <Link href="#">
                <h4 className='text-[18px] text-black w-[191px] capitalize font-[600] leading-6'>
                  How to create a Facebook marketing strategy
                </h4>
              </Link>
            </div>
          </div>
          <div className='flex text-secondarycolor pt-4'>
            <Link href='#' className='flex justify-center items-center gap-1'>
              <span className='text-[15px] capitalize font-[600]'>read more</span>
              <FontAwesomeIcon icon={faArrowRight} className='w-[15px] h-[15px]' />
            </Link>
          </div>
        </div> */}
      </div>

       {/* Follow Us  */}
      <div className='flex flex-col justify-center items-center w-full bg-backgroundcolor text-white rounded-[20px] mt-5 py-4 px-2'>
        <h3 className='text-[25px] font-[600] capitalize'>follow us</h3>
        <hr className="my-2 border-t-[1px] border-gray-500 w-full block" />
        <div className='flex flex-wrap justify-center text-secondarycolor pt-4 gap-3'>
          <Link href="#"><FontAwesomeIcon icon={faFacebook} className='w-[19px] h-[19px]' /></Link>
          <Link href="#"><FontAwesomeIcon icon={faInstagram} className='w-[19px] h-[19px]' /></Link>
          <Link href="#"><FontAwesomeIcon icon={faTiktok} className='w-[19px] h-[19px]' /></Link>
          <Link href="#"><FontAwesomeIcon icon={faXTwitter} className='w-[19px] h-[19px]' /></Link>
          <Link href="#"><FontAwesomeIcon icon={faLinkedin} className='w-[19px] h-[19px]' /></Link>
        </div>
      </div>
    </div>
  </div>
</section>

{/* end section 3 */}


               {/* start section 4 */}

<section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-backgroundcolor text-white py-10 px-4 sm:px-8 lg:px-12 gap-6 font-figtree'>
  
  {/* Left Images */}
  <div className='flex md:flex-col justify-around items-center gap-6'>
    

 <Image 
  src="/blog/6499e3bc566c6e196118d774_dots-8-hero-v6-startech-x-template.svg" 
  alt="Home Hero 1" 
  width={284} 
  height={192}
  className="w-[200px] sm:w-[284px] h-auto object-contain"
/> 


       <Image 
  src="/blog/6499e3bc566c6e196118d777_image-1-newsletter-v1-startech-x-template.svg" 
  alt="Home Hero 1" 
  width={156} 
  height={123}
  className="w-[120px] sm:w-[156px] h-auto object-contain"
/> 
  </div>

 

  {/* Center Content */}
  <div className='flex flex-col justify-center items-center text-center px-2'>
    <h2 className='text-[28px] sm:text-[36px] xl:text-[44px] font-[600] capitalize leading-snug max-w-[500px]'>
      Subscribe to receive articles right in your inbox
    </h2>
    <p className='text-[15px] sm:text-[16px] max-w-[460px] pt-4 font-albert'>
      Stay updated with the latest in social media! Subscribe now and get insightful articles and expert tips delivered directly to your inbox.
    </p>

    {/* Input and Button */}
    <div className='flex flex-col sm:flex-row items-center mt-6 w-full max-w-[460px]'>
      <input
        type="text"
        placeholder="Enter your Email"
        className="border border-secondarycolor px-4 py-2 w-full outline-none text-black"
      />
      <button className='w-full sm:w-[190px] bg-secondarycolor text-backgroundcolor text-[13px] font-[600] uppercase py-3'>
        Subscribe
      </button>
    </div>
  </div>

  {/* Right Images */}
  <div className='flex md:flex-col justify-around items-center gap-6'>

      <Image 
  src="/blog/6499e3bc566c6e196118d776_image-2-newsletter-v1-startech-x-template.svg" 
  alt="Home Hero 1" 
  width={156} 
  height={123}
  className="w-[120px] sm:w-[156px] h-auto object-contain"
/> 

    <Image 
  src="/blog/6499e3bc566c6e196118d774_dots-8-hero-v6-startech-x-template.svg" 
  alt="Home Hero 1" 
  width={284} 
  height={192}
  className="w-[200px] sm:w-[284px] h-auto object-contain"
/> 
  </div>
</section>

{/* end section 4 */}


                {/* start section 5 */}

<section className='grid bg-white h-auto py-12 px-4 sm:px-6 lg:px-8 font-figtree'>
  <div className='flex justify-center items-center'>
    <Link href="#">
      <div className='flex flex-col lg:flex-row justify-center items-center w-full max-w-[1140px] h-auto lg:h-[390px] bg-white border border-gray-500 rounded-[20px] overflow-hidden'>

        {/* Image Side */}
        <div className='relative w-full lg:w-1/2 h-[300px] lg:h-full flex justify-center items-center'>
         
        <Image 
  src="/blog/laptop.webp" 
  alt="Home Hero 1" 
  width={446} 
  height={337}
className="w-full h-full object-cover"/>

          <div className="absolute inset-0 bg-black bg-opacity-55"></div>
          <div className="absolute inset-0 flex justify-center items-center text-white text-[24px] sm:text-[30px] md:text-[35px] lg:text-[45px] font-[700] text-center px-4 sm:px-8 leading-snug">
            Social Media Management Tools for Creators & Businesses
          </div>
        </div>

        {/* Text Side */}
        <div className='flex flex-col justify-center items-start w-full lg:w-1/2 h-auto lg:h-full p-4 sm:px-5 text-backgroundcolor'>
          <div className='flex items-center gap-2 pb-2'>
            <FontAwesomeIcon icon={faCalendar} className='text-backgroundcolor w-[18px] h-[18px]' />
            <span className='text-[16px] sm:text-[18px] md:text-[20px] text-secondarycolor font-[600]'>
              May 21, 2025
            </span>
          </div>
          <h3 className='text-[24px] sm:text-[30px] md:text-[36px] lg:text-[45px] capitalize font-[700] leading-snug pt-2'>
            Social Media Management Tools for Creators & Businesses
          </h3>
        </div>

      </div>
    </Link>
  </div>
</section>


                {/* end section 5 */}



    </>
  )
}

export default page