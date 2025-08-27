"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import abtImg from "../../public/about.png";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const textContentRef = useRef(null);

  useEffect(() => {
   
    gsap.fromTo(
      imageContainerRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    
    gsap.fromTo(
      textContentRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex items-center justify-center min-h-screen py-12 md:py-20 px-4 md:px-8 bg-[#fdfdfd]"
    >
      <div className="flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-20 max-w-7xl w-full">
        
       
        <div
          ref={imageContainerRef}
          className="relative flex items-center justify-center w-64 h-64 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem] flex-shrink-0"
        >
          
          <div className="absolute w-full h-full rounded-full border-2 border-gray-300 animate-spin-slow">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-black rounded-full"></span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-black rounded-full"></span>
            <span className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-black rounded-full"></span>
            <span className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-6 h-6 bg-black rounded-full"></span>
          </div>

          
          <div className="absolute w-5/6 h-5/6 rounded-full border-2 border-gray-300 animate-spin-reverse">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-black rounded-full"></span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-black rounded-full"></span>
            <span className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-black rounded-full"></span>
            <span className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-6 h-6 bg-black rounded-full"></span>
          </div>

          
          <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-[22rem] md:h-[22rem] rounded-full overflow-hidden border border-gray-200 shadow-lg">
            <Image
              src={abtImg}
              alt="About Company"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        
        <div
          ref={textContentRef}
          className="text-center md:text-left md:w-[60%] max-w-3xl"
        >
          <h4 className="text-lg font-serif">About Company</h4>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mt-2">
            Your Reliable Ahmedabad Web Design & Development Partner
          </h1>
          <p className="text-gray-600 mt-4 text-sm sm:text-base md:text-lg">
            Being a seasoned Ahmedabad web development and design firm, we are dedicated to offering tech-driven, creative, and inventive solutions to support the expansion of both new and existing companies.  We aspire to be your growth partner by developing strategic web solutions that are both aesthetically pleasing and incredibly useful.  In order to build a powerful online presence that engages your audience and produces tangible outcomes, we place a high priority on comprehending your unique goals.
          </p>
          <button className="mt-6 px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-black transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
