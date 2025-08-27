"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function FAQ() {
  const faqs = [
    
    { question: "Which is the best web design agency in India?", answer: "Optima WebDesign is one of India’s top-rated web agencies, offering mobile-friendly, SEO-optimized, and professional website designs." },
    { question: "How much does it cost to get a website designed?", answer: "Our packages range from ₹15,000 to ₹50,000, depending on features, complexity, and customization requirements." },
    { question: "How long does it take to build a website?", answer: "A standard small business website is ready in 2–4 weeks. For complex features, it may take 6–8 weeks." },
    { question: "Will the website be SEO-friendly?", answer: "Yes, every website is on-page SEO optimized and designed to be Google-friendly." },
    { question: "Do you design e-commerce websites?", answer: "Yes, our web agency in India provides custom e-commerce solutions that are user-friendly and secure." },
    { question: "Will the website be responsive or mobile-friendly?", answer: "Absolutely, all our websites are optimized for desktop, tablet, and mobile devices." },
    { question: "Do you use a CMS (WordPress/Next.js) for websites?", answer: "Yes, based on your requirements, we use WordPress, Next.js, or custom CMS solutions." },
    { question: "Do you provide hosting and domain along with the website?", answer: "Yes, we offer hosting and domain setup services with every website." },
    { question: "Do you offer website maintenance and support?", answer: "Yes, our web agency provides continuous support and maintenance services." },
    { question: "Will the website have an SSL certificate?", answer: "Yes, every website includes an SSL certificate for enhanced security." },
    { question: "Will the website load fast?", answer: "Yes, our websites are highly optimized and lightweight, ensuring fast loading speeds." },
    { question: "Do you provide SEO strategy for the website?", answer: "Yes, we provide basic SEO setup and on-page SEO along with every website." },
    { question: "Do you offer custom website designs?", answer: "Yes, our web agency provides fully customized designs aligned with your brand and business goals." },
    { question: "Can we add a blog feature to the website?", answer: "Yes, a blog section can be added to support content marketing and SEO." },
    { question: "Do you provide social media integration?", answer: "Yes, websites can include WhatsApp, Instagram, Facebook, and LinkedIn integration." },
    { question: "Do you set up analytics and tracking on the website?", answer: "Yes, we integrate Google Analytics and heatmap tracking to monitor user behavior." },
    { question: "Do you offer website redesign services?", answer: "Yes, we provide modern redesigns for existing websites with an SEO-friendly structure." },
    { question: "Can the website support multiple languages?", answer: "Yes, we develop multi-language websites suitable for multiple regions." },
    { question: "Can the website have email subscription and newsletter features?", answer: "Yes, we provide subscription forms and newsletter integration for marketing purposes." },
    { question: "Will the website have portfolio and testimonials sections?", answer: "Yes, we include portfolio, client testimonials, and case studies to build credibility and trust." },
    { question: "Can you create custom forms for the website?", answer: "Yes, contact forms, booking forms, and lead generation forms can be easily integrated." },
    { question: "Can payment gateways be set up on the website?", answer: "Yes, we integrate secure payment gateways for e-commerce and service-based websites." },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-[#fdfdfd] px-6 py-16 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="max-w-3xl w-full">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="border border-gray-300 rounded-lg mb-4 overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-gray-50 text-left"
            >
              <span className="text-lg font-semibold">{faq.question}</span>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown className="text-gray-600" />
              </motion.span>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 py-4 bg-gray-50 text-gray-700 text-sm"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
