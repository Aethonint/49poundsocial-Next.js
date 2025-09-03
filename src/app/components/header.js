"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';



function Header() {
  const [activeMenu, setActiveMenu] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick = (menuName) => {
    setActiveMenu(menuName);
    setMobileMenuOpen(false); // Close mobile menu on link click
  };

  return (
    <header className="relative z-50 bg-backgroundcolor text-white font-albert">
      <section className="max-w-screen-xl mx-auto flex justify-between items-center px-4 md:px-8 py-4">
        {/* Logo */}
        <Link href="/">
          <Image 
  src="/website logo/website-logo.webp" 
  alt="Home Hero 1" 
  width={157} 
  height={64} // or whatever actual height you'd like
 className="sm:h-10 md:h-12 xl:h-16 object-contain cursor-pointer md:pl-16 xl:pl-0"
          />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-[16px] capitalize items-center pr-32">
          <Link href="/about-us">About Us</Link>

        {/* Dropdown Menu */}
<div className="relative group">
  <div className="flex items-center gap-1 cursor-pointer">
    <span>What We Do</span>
    <FontAwesomeIcon icon={faCaretDown} className="w-4 h-4" />
  </div>

  <div className="absolute left-0 top-full bg-white text-backgroundcolor shadow-lg rounded mt-2 py-2 w-56 z-30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 text-[14px]">
    {[
      { href: "/", label: "Social Media Management" },
      { href: "/social-media-marketing", label: "Social Media Marketing" },
      { href: "/seo-blogs", label: "SEO Blogs" },
      { href: "/branding-design", label: "Branding & Design" },
      { href: "/resell", label: "Resell" },
      { href: "/referral-scheme", label: "Referral Scheme" },
    ].map(({ href, label }) => (
      <Link
        key={href}
        href={href}
        className={`block px-4 py-2 hover:bg-[#F3A237] hover:text-backgroundcolor ${
          activeMenu === href ? "bg-[#F3A237] text-backgroundcolor" : ""
        }`}
        onClick={() => handleMenuClick(href)}
      >
        {label}
      </Link>
    ))}
  </div>
</div>


          <Link href="/samples">Samples</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login">Login</Link>
        </nav>
      </section>

      {/* Mobile Navigation */}
     {mobileMenuOpen && (
  <div className="absolute top-full left-0 w-full bg-white text-backgroundcolor flex flex-col gap-x-4  px-4 py-6 md:hidden z-40">
    <Link
      href="/about-us"
      onClick={() => handleMenuClick("/about-us")}
      className={`px-2 py-2 rounded ${
        activeMenu === "/about-us" ? "bg-yellow-300" : ""
      }`}
    >
      About Us
    </Link>

    {/* What We Do Dropdown (details tag) */}
    <details className="text-backgroundcolor">
      <summary className="cursor-pointer flex items-center gap-1">
        What We Do
        <FontAwesomeIcon icon={faCaretDown} className="w-4 h-4" />
      </summary>
      <ul className="mt-2 flex flex-col text-[14px] ">
        {[
          { href: "/", label: "Social Media Management" },
          { href: "/social-media-marketing", label: "Social Media Marketing" },
          { href: "/seo-blogs", label: "SEO Blogs" },
          { href: "/branding-design", label: "Branding & Design" },
          { href: "/resell", label: "Resell" },
          { href: "/referral-scheme", label: "Referral Scheme" },
        ].map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              onClick={() => handleMenuClick(href)}
              className={`block px-2 py-2 rounded ${
                activeMenu === href ? "bg-secondarycolor" : ""
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </details>

    <Link
      href="/samples"
      onClick={() => handleMenuClick("/samples")}
      className={`px-2 py-2 rounded ${
        activeMenu === "/samples" ? "bg-secondarycolor" : ""
      }`}
    >
      Samples
    </Link>
    <Link
      href="/blog"
      onClick={() => handleMenuClick("/blog")}
      className={`px-2 py-2 rounded ${
        activeMenu === "/blog" ? "bg-secondarycolor" : ""
      }`}
    >
      Blog
    </Link>
    <Link
      href="/contact"
      onClick={() => handleMenuClick("/contact")}
      className={`px-2 py-2 rounded ${
        activeMenu === "/contact" ? "bg-secondarycolor" : ""
      }`}
    >
      Contact
    </Link>
    <Link
      href="/login"
      onClick={() => handleMenuClick("/login")}
      className={`px-2 py-2 rounded ${
        activeMenu === "/login" ? "bg-secondarycolor" : ""
      }`}
    >
      Login
    </Link>
  </div>
)}

    </header>
  );
}

export default Header;



// "use client";

// import Link from "next/link";
// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

// function Header() {
//   const [activeMenu, setActiveMenu] = useState("");
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const handleMenuClick = (menuName) => {
//     setActiveMenu(menuName);
//     setIsMobileMenuOpen(false); // Close mobile menu on link click
//   };

//   return (
//     <header>
//       <section className="flex flex-wrap md:flex-nowrap justify-between items-center h-auto md:h-[81px] bg-backgroundcolor px-4 md:px-12 relative">
//         {/* Logo */}
//         <div className="flex justify-start items-center w-full md:w-1/3 py-4 md:py-0 pl-0 md:pl-20">
//           <Link href="/">
//             <img
//               src="/images/img8.webp"
//               alt="Logo"
//               className="h-10 md:h-full object-contain cursor-pointer"
//             />
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex flex-wrap justify-start items-center gap-4 md:gap-8 capitalize text-[16px] text-white w-full md:w-2/3">
//           <Link href="/about-us">About Us</Link>

//           {/* Dropdown */}
//           <div className="relative group">
//             <button className="flex items-center gap-1 focus:outline-none">
//               What We Do
//               <FontAwesomeIcon icon={faCaretDown} className="w-4 h-4" />
//             </button>

//             <ul className="absolute top-full left-0 bg-white text-backgroundcolor shadow-lg rounded mt-0 py-2 w-56 z-20 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
//               <li>
//                 <Link
//                   href="/"
//                   className={`block px-4 py-2 hover:bg-[#F3A237] hover:text-backgroundcolor transition-colors ${
//                     activeMenu === "/" ? "bg-[#F3A237] text-backgroundcolor" : ""
//                   }`}
//                   onClick={() => handleMenuClick("/")}
//                 >
//                   Social Media Management
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/social-media-marketing"
//                   className={`block px-4 py-2 hover:bg-[#F3A237] hover:text-backgroundcolor transition-colors ${
//                     activeMenu === "/social-media-marketing"
//                       ? "bg-[#F3A237] text-backgroundcolor"
//                       : ""
//                   }`}
//                   onClick={() => handleMenuClick("/social-media-marketing")}
//                 >
//                   Social Media Marketing
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/seo-blogs"
//                   className={`block px-4 py-2 hover:bg-[#F3A237] hover:text-backgroundcolor transition-colors ${
//                     activeMenu === "/seo-blogs"
//                       ? "bg-[#F3A237] text-backgroundcolor"
//                       : ""
//                   }`}
//                   onClick={() => handleMenuClick("/seo-blogs")}
//                 >
//                   SEO Blogs
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/branding-design"
//                   className={`block px-4 py-2 hover:bg-[#F3A237] hover:text-backgroundcolor transition-colors ${
//                     activeMenu === "/branding-design"
//                       ? "bg-[#F3A237] text-backgroundcolor"
//                       : ""
//                   }`}
//                   onClick={() => handleMenuClick("/branding-design")}
//                 >
//                   Branding & Design
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/resell"
//                   className={`block px-4 py-2 hover:bg-[#F3A237] hover:text-backgroundcolor transition-colors ${
//                     activeMenu === "/resell"
//                       ? "bg-[#F3A237] text-backgroundcolor"
//                       : ""
//                   }`}
//                   onClick={() => handleMenuClick("/resell")}
//                 >
//                   Resell
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/referral-scheme"
//                   className={`block px-4 py-2 hover:bg-[#F3A237] hover:text-backgroundcolor transition-colors ${
//                     activeMenu === "/referral-scheme"
//                       ? "bg-[#F3A237] text-backgroundcolor"
//                       : ""
//                   }`}
//                   onClick={() => handleMenuClick("/referral-scheme")}
//                 >
//                   Referral Scheme
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           <Link href="/samples">Samples</Link>
//           <Link href="/blog">Blog</Link>
//           <Link href="/contact">Contact</Link>
//           <Link href="/login">Login</Link>
//         </nav>

//         {/* Mobile Hamburger Button */}
//         <div className="flex md:hidden ml-auto">
//           <button
//             className="text-white focus:outline-none"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>
//       </section>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-backgroundcolor text-white px-6 py-4 space-y-2">
//           <Link href="/about-us" onClick={() => handleMenuClick("/about-us")}>About Us</Link>
//           <Link href="/" onClick={() => handleMenuClick("/")}>Social Media Management</Link>
//           <Link href="/social-media-marketing" onClick={() => handleMenuClick("/social-media-marketing")}>Social Media Marketing</Link>
//           <Link href="/seo-blogs" onClick={() => handleMenuClick("/seo-blogs")}>SEO Blogs</Link>
//           <Link href="/branding-design" onClick={() => handleMenuClick("/branding-design")}>Branding & Design</Link>
//           <Link href="/resell" onClick={() => handleMenuClick("/resell")}>Resell</Link>
//           <Link href="/referral-scheme" onClick={() => handleMenuClick("/referral-scheme")}>Referral Scheme</Link>
//           <Link href="/samples" onClick={() => handleMenuClick("/samples")}>Samples</Link>
//           <Link href="/blog" onClick={() => handleMenuClick("/blog")}>Blog</Link>
//           <Link href="/contact" onClick={() => handleMenuClick("/contact")}>Contact</Link>
//           <Link href="/login" onClick={() => handleMenuClick("/login")}>Login</Link>
//         </div>
//       )}
//     </header>
//   );
// }

// export default Header;
