"use client";

import Image from "next/image";
import img from "../public/home1.png";
import imga from "../public/home2.png";
import About from "./About/page";
import Smart from "./Smart/page";
import LatestProjects from "./latest/page";
import Testimonials from "./Customer/page";
import Loader from "./component/Loader";
import Link from "next/link";
import BlogPage from "./blog/page";

export default function Hero() {
  // Apna WhatsApp number dalna (country code ke sath, bina + ke)
  const phoneNumber = "917567835879"; // <-- Apna WhatsApp number yaha daalo
  const message = "Hi, I want to discuss about website development with you.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <>
      <Loader />
      <section className="relative flex flex-col justify-center items-center text-center min-h-screen bg-[#fdfdfd] overflow-hidden px-4 md:px-8">
        <div className="hidden md:flex absolute top-20 left-10 w-44 h-44 justify-center items-center">
          <div className="absolute w-44 h-44 rounded-full border border-gray-300 animate-spin-slow">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-black rounded-full"></span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-black rounded-full"></span>
            <span className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full"></span>
            <span className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-black rounded-full"></span>
          </div>
          <div className="absolute w-36 h-36 rounded-full border border-gray-300 animate-spin-reverse">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-black rounded-full"></span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-black rounded-full"></span>
            <span className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full"></span>
            <span className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-black rounded-full"></span>
          </div>
          <Image
            src={img}
            alt="Hero Left"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>

        {/* Center Content */}
        <div className="flex flex-col items-center text-center max-w-2xl mt-10 md:mt-0">
          <h2 className="text-lg md:text-xl text-gray-600 opacity-0 animate-fadeIn delay-100">
            Your Vision, Our Design
          </h2>
          <h1 className="text-3xl md:text-[35px] font-bold leading-snug mt-4 opacity-0 animate-slideUp delay-200">
            Website Design Company in Ahmedabad | Professional Website Development Services in Gujarat
          </h1>
          <p className="text-[8px] md:text-[10px] mt-[1rem]">
            We are Gujarat&apos;s top web design company with experience in
            business website development service to Ahmedabad and other cities.
            We are the leading web design firm in Gujarat, offering business
            website development services to companies in Ahmedabad and
            elsewhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 opacity-0 animate-fadeIn delay-300">
            {/* WhatsApp Redirect Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-md text-lg hover:bg-gray-600 hover:scale-105 transition shadow-lg flex items-center gap-2"
            >
              <span>💬</span> Start Your Project
            </a>

            <Link href="/latest" passHref legacyBehavior>
              <button className="bg-black cursor-pointer text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 w-full sm:w-auto">
                View Portfolio
              </button>
            </Link>
          </div>
        </div>

        <div className="hidden md:flex absolute bottom-10 right-10 w-44 h-44 justify-center items-center">
          <div className="absolute w-44 h-44 rounded-full border border-gray-300 animate-spin-slow">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-black rounded-full"></span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-black rounded-full"></span>
            <span className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full"></span>
            <span className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-black rounded-full"></span>
          </div>
          <div className="absolute w-36 h-36 rounded-full border border-gray-300 animate-spin-reverse">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-black rounded-full"></span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-black rounded-full"></span>
            <span className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full"></span>
            <span className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-black rounded-full"></span>
          </div>
          <Image
            src={imga}
            alt="Hero Right"
            className="w-24 h-24 rounded-full object-cover"
          />
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-black">
            <span className="text-xl">↓</span>
          </div>
        </div>
      </section>
      <About />
      <Smart />
      <BlogPage />
      <LatestProjects />
      <Testimonials />
    </>
  );
}
