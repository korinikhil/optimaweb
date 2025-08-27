"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const blogs = [
  {
    title: "Why Your Business Needs a Website in 2025",
    desc: "Discover why having an online presence is no longer optional and how it impacts your brand growth.",
    image: "/images/blog1.jpg",
    date: "August 15, 2025",
    link: "#",
  },
  {
    title: "Top 10 Web Design Trends in 2025",
    desc: "Stay ahead of the competition with these modern design trends for an engaging user experience.",
    image: "/images/blog2.jpg",
    date: "August 12, 2025",
    link: "#",
  },
  {
    title: "SEO in 2025: What You Need to Know",
    desc: "SEO strategies are evolving fast! Learn the best practices for ranking higher on Google.",
    image: "/images/blog3.jpg",
    date: "August 10, 2025",
    link: "#",
  },
  {
    title: "AI in Web Development: The Future is Here",
    desc: "AI is revolutionizing web development. Here’s how businesses can benefit from AI-powered tools.",
    image: "/images/blog4.jpg",
    date: "August 8, 2025",
    link: "#",
  },
];

export default function BlogPage() {
  return (
    <section className="py-16 px-6 bg-gray-50 min-h-screen">
      
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-black font-semibold uppercase">Our Blog</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">
          Latest Articles & Insights
        </h1>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Stay updated with web design trends, SEO strategies, and business growth tips from industry experts.
        </p>
      </motion.div>

      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative w-full h-56">
              <Image src={blog.image} alt={blog.title} layout="fill" objectFit="cover" />
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-400">{blog.date}</p>
              <h3 className="text-xl font-bold text-gray-700 mt-2 hover:text-black transition">
                {blog.title}
              </h3>
              <p className="text-gray-600 mt-3">{blog.desc}</p>
              <a
                href={blog.link}
                className="inline-block mt-4 text-black-600 font-semibold hover:underline"
              >
                Read More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
