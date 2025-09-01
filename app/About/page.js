"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import abtImg from "../../public/about.png";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const imageContainerRef = useRef(null);
  const textContentRef = useRef(null);

  const [showMore, setShowMore] = useState(false);

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
        {/* Image Section */}
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
              alt="About Optima Web Design"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Text Section */}
        <div
          ref={textContentRef}
          className="text-center md:text-left md:w-[60%] max-w-3xl space-y-6"
        >
          {/* About Us */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              About Us
            </h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base md:text-lg leading-relaxed">
              Optima Web Design in Ahmedabad, Gujarat, is committed to helping
              businesses expand their digital presence. We specialize in
              crafting high-quality, professional websites that are not only
              visually appealing but also built for performance and results.
            </p>
          </div>

          {/* Animated Extra Content */}
          <AnimatePresence>
            {showMore && (
              <motion.div
                key="extraContent"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="overflow-hidden space-y-6"
              >
                {/* Vision & Mission */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold">
                    Our Vision & Mission
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg leading-relaxed">
                    Our vision is clear: to become Gujarat’s leading web agency
                    within a year. We believe in building long-term partnerships
                    with our clients, helping them achieve lasting online
                    success. Our mission is to consistently deliver outstanding
                    service and measurable results that strengthen your brand’s
                    digital identity.
                  </p>
                </div>

                {/* Our Approach */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold">
                    Our Approach
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg leading-relaxed">
                    We follow a client-first, strategic approach. By
                    understanding your business needs and goals, we design
                    customized solutions that reflect your brand’s personality.
                    Our focus is on modern design, strong functionality,
                    security, speed, and SEO-optimization to ensure your website
                    not only looks great but also performs at the highest
                    standards.
                  </p>
                </div>

                {/* Why Choose Us */}
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold">
                    Why Choose Us
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base md:text-lg leading-relaxed">
                    Choosing Optima Web Design means partnering with a team of
                    passionate professionals who understand the local market
                    deeply. We are dedicated to delivering professional-grade
                    websites that drive genuine business growth. With our
                    commitment to innovation and excellence, we ensure every
                    project adds real value to your digital journey.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Button */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-6 px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-black transition"
          >
            {showMore ? "Show Less" : "Read More"}
          </button>
        </div>
      </div>
    </section>
  );
}
