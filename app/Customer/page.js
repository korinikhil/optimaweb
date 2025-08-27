"use client";
import { useState } from "react";
import { FaStar, FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Dianne Russell",
    role: "Owner, Architecture Studio",
    rating: 4.5,
    image: "/images/user1.jpg",
    text: "Optima Web Design completely transformed our online presence! Our website looks amazing and works flawlessly.",
  },
  {
    name: "John Doe",
    role: "CEO, Tech Company",
    rating: 5.0,
    image: "/images/user2.jpg",
    text: "Highly professional team! The design quality and attention to detail are outstanding. I highly recommend them.",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    rating: 4.8,
    image: "/images/user3.jpg",
    text: "Our sales increased by 40% after Optima redesigned our website. They truly understand business goals.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  const nextSlide = () =>
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);

  return (
    <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-200 overflow-hidden">
      {/* Section Heading */}
      <motion.div
        className="text-center mb-12 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-gray-600 font-semibold uppercase tracking-wide">
          What Our Clients Say
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 text-gray-700">
          Trusted by <span className="text-black">Happy Clients</span>
        </h2>
      </motion.div>

      {/* Testimonial Card */}
      <div className="relative max-w-6xl mx-auto flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-lg rounded-2xl p-8 md:p-12 w-full max-w-4xl flex flex-col md:flex-row items-center gap-8"
          >
            <motion.div
              className="relative flex-shrink-0"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* ✅ Responsive Next/Image */}
              <div className="w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 relative">
                <Image
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  fill
                  sizes="(max-width: 640px) 128px,
                         (max-width: 1024px) 160px,
                         176px"
                  className="rounded-full object-cover border-4 border-black shadow-md"
                  priority
                />
              </div>

              <div className="absolute -top-4 -right-4 bg-gray-500 text-white p-3 rounded-full text-xl shadow-lg">
                <FaQuoteLeft />
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="text-center md:text-left flex-1">
              <div className="flex justify-center md:justify-start items-center gap-1 text-yellow-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="ml-2 text-black font-semibold">
                  {testimonials[current].rating}
                </span>
              </div>
              <p className="text-gray-600 mb-5 text-lg leading-relaxed italic">
                {testimonials[current].text}
              </p>
              <h4 className="font-bold text-xl text-gray-800">
                {testimonials[current].name}
              </h4>
              <p className="text-gray-500">{testimonials[current].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-6">
          <button
            onClick={prevSlide}
            className="bg-gray-500 text-white p-3 rounded-full hover:bg-black transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="bg-gray-500 text-white p-3 rounded-full hover:bg-black transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full transition-all ${
              index === current ? "bg-black scale-110" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
