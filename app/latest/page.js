"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Img from "../../public/AI Web Design_ Modern UI_UX Inspiration.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function LatestProjects() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const projectsContainerRef = useRef(null);

  useEffect(() => {
    
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    
    gsap.fromTo(
      projectsContainerRef.current.children,
      { y: 50, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: projectsContainerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-20 px-6">
      <h2
        ref={headingRef}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent relative inline-block"
      >
        Our Work Projects
        <span className="block w-24 h-1 bg-gradient-to-r from-black to-gray-500 mx-auto mt-3 rounded-full"></span>
      </h2>

      <div
        ref={projectsContainerRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto"
      >
        {[1, 2].map((item, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform duration-300 hover:-translate-y-2"
          >
            <div className="relative h-80 md:h-96 overflow-hidden">
              <Image
                src={Img}
                alt={`Latest Project ${item}`}
                width={800}
                height={600}
                className="object-cover w-full h-full transform group-hover:scale-110 transition duration-700 ease-in-out"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                Project Title {item}
              </h3>
              <p className="text-gray-600">
                A short description of the project and its main features.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
