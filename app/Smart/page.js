"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FiLayout, FiSmartphone, FiTrendingUp, FiSearch } from "react-icons/fi";
import Image from "next/image";
import img from "../../public/smart.png";
import Link from "next/link";

const cards = [
  {
    title: "Creative Design",
    desc: "We create custom, modern UI/UX concepts to bring your ideal site to life.",
    color: "rgba(255, 231, 199, 1)",
    icon: <FiLayout className="text-5xl text-black" />,
    gradient:
      "linear-gradient(135deg, rgba(255,231,199,1) 0%, rgba(255,180,120,1) 100%)",
  },
  {
    title: "Responsive Layout",
    desc: "Our designs deliver a flawless user experience, customized for all screen sizes and devices.",
    color: "rgba(230,229,228,1)",
    icon: <FiSmartphone className="text-5xl text-black" />,
    gradient:
      "linear-gradient(135deg, rgba(230,229,228,1) 0%, rgba(200,200,200,1) 100%)",
  },
  {
    title: "Smooth Animation",
    desc: "We add beautiful animations and effects to provide an energetic and interactive site.",
    color: "rgba(225,248,220,1)",
    icon: <FiTrendingUp className="text-5xl text-black" />,
    gradient:
      "linear-gradient(135deg, rgba(225,248,220,1) 0%, rgba(150,220,150,1) 100%)",
  },
  {
    title: "SEO Optimization",
    desc: "We boost your web visibility and search engine rankings with advanced, fact-driven SEO techniques.",
    color: "rgba(253,226,228,1)",
    icon: <FiSearch className="text-5xl text-black" />,
    gradient:
      "linear-gradient(135deg, rgba(253,226,228,1) 0%, rgba(255,180,190,1) 100%)",
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function Smart() {
  const topSectionRef = useRef(null);
  const serviceCardsRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !serviceCardsRef.current.includes(el)) {
      serviceCardsRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.fromTo(
      topSectionRef.current.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: topSectionRef.current,
          start: "top 85%",
        },
      }
    );

    gsap.fromTo(
      serviceCardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: serviceCardsRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <div className="bg-[#fdfdfd] py-16 px-6 md:px-10 lg:px-16">
      <div
        ref={topSectionRef}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10"
      >
        <div className="w-full md:w-1/2 relative h-64 md:h-96">
          <Image
            src={img}
            alt="Smart Web Solutions"
            fill
            style={{ objectFit: 'contain' }} // ya 'cover' agar image ko fill karna ho
            className="rounded-lg"
            priority
          />
        </div>

        <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Smart Web Solutions For Your Business by Optima WebDesigns
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Optima WebDesign is your one-stop shop for professional web design
            services. We excel at creating small business websites that not only
            look great but also help you acquire new customers.
            <br />
            <br />
            We have an individual policy for every client, providing unique and
            quality responsive website development. If you&apos;re looking for
            an affordable web design firm that really cares about your needs,
            we&apos;re the perfect choice for you.
            <br />
            <br />
            We want to take your business to the next level, and the services of
            our digital marketing agency in India will definitely get you there.
          </p>
          <Link href="/Service" >
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 w-full sm:w-auto">
              Let&apos;s Go
            </button>
          </Link>

        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            ref={addToRefs}
            className="relative p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer"
            style={{ backgroundColor: card.color }}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div
                className="p-4 rounded-full bg-white shadow-md transition-transform duration-500 hover:rotate-12"
                aria-hidden="true"
              >
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-gray-600 text-sm">{card.desc}</p>
            </div>
            <div
              className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500"
              style={{
                background: card.gradient,
                zIndex: -1,
              }}
              aria-hidden="true"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}
