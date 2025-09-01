"use client";

import Image from "next/image";
import img from "../../public/home1.png";
import imga from "../../public/home2.png";

export default function Hero() {
  // ✅ WhatsApp Number aur Pre-filled Message
  const whatsappNumber = "919999999999"; // <-- yaha apna WhatsApp number daalo (country code ke sath)
  const message = "I want to discuss with you something regarding website development";

  const handleWhatsAppClick = () => {
    alert()
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank"); // ✅ New tab me WhatsApp open hoga
  };

  return (
    <section className="relative flex flex-col justify-center items-center text-center min-h-screen bg-[#fdfdfd] overflow-hidden px-4 md:px-8">
      {/* Left Spinning Image */}
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
        <Image src={img} alt="Hero Left" className="w-24 h-24 rounded-full object-cover" />
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center text-center max-w-2xl mt-10 md:mt-0">
        <h2 className="text-lg md:text-xl text-gray-600 opacity-0 animate-fadeIn delay-100">
          Your Vision, Our Design
        </h2>
        <h1 className="text-3xl md:text-5xl font-bold leading-snug mt-4 opacity-0 animate-slideUp delay-200">
          We craft stunning, responsive websites for your business
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 opacity-0 animate-fadeIn delay-300">
          {/* ✅ WhatsApp Redirect Button */}
          <button
            onClick={handleWhatsAppClick}
            className="bg-black text-white px-6 py-3 rounded-md text-lg hover:bg-gray-800 hover:scale-105 transition"
          >
            Start Your Project
          </button>
          <button className="border border-black text-black px-6 py-3 rounded-md text-lg hover:bg-gray-100 hover:scale-105 transition">
            View Portfolio
          </button>
        </div>
      </div>

      {/* Right Spinning Image */}
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
        <Image src={imga} alt="Hero Right" className="w-24 h-24 rounded-full object-cover" />
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-black">
          <span className="text-xl">↓</span>
        </div>
      </div>
    </section>
  );
}
