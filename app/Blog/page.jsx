"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/lib/blogs";

export default function Blog() {
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
          <motion.article
            key={blog.slug}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Link href={`/blog/${blog.slug}`} className="block">
              <div className="relative w-full h-56">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                  priority={index < 2}
                />
              </div>
            </Link>

            <div className="p-6">
              <p className="text-sm text-gray-400">{blog.date}</p>
              <Link href={`/blog/${blog.slug}`}>
                <h3 className="text-xl font-bold text-gray-700 mt-2 hover:text-black transition">
                  {blog.title}
                </h3>
              </Link>
              <p className="text-gray-600 mt-3">{blog.desc}</p>
              <Link
                href={`/blog/${blog.slug}`}
                className="inline-block mt-4 text-black font-semibold hover:underline"
              >
                Read More →
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
