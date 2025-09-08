"use client";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/optima app.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 text-gray-800">
      {/* Main Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10"
      >
        {/* Logo + Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center mb-4">
            {/* ✅ Next.js Image */}
            <Image
              src={Logo}
              alt="Optima Web Design Logo"
              width={40}
              height={40}
              className="mr-2"
              priority
            />
            <h2 className="text-2xl font-bold">Optima Web Design</h2>
          </div>
          <p className="text-sm mb-4">
            Optima Web Design: Your Growth Partner

            Optima Web Design is a well-known web design firm that provides website design solutions to small enterprises. We create responsive and contemporary website development that enhances your online growth. We organize everything from designing to developing, so you can only focus on running your business. Our professional web design service has the potential to make your business successful online.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 text-xl">
            <motion.a
              href="https://www.facebook.com/profile.php?id=61570359304541"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="hover:text-blue-600 transition"
            >
              <FaFacebookF />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/optima_webdesign/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              href="https://x.com/optimaweb12"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="hover:text-black transition"
            >
              <FaXTwitter />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/optima-webdesign-28a011342/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              className="hover:text-blue-700 transition"
            >
              <FaLinkedinIn />
            </motion.a>
          </div>
        </motion.div>

        {/* Quick Links ✅ using <Link /> */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/About" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/Service" className="hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link href="/Blog" className="hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/Faq" className="hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/Contact" className="hover:underline">
                Contact
              </Link>
            </li>
            
          </ul>
        </motion.div>
        {/* legal ✅ using <Link /> */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-4">Legal Links</h3>
          <ul className="space-y-2">
           
            <li>
              <Link href="/cancellation-refunds" className="hover:underline">
                refunds & cancellation
              </Link>
            </li>
            <li>
              <Link href="/Shipping" className="hover:underline">
                Shipping
              </Link>
            </li>
            <li>
              <Link href="/Terms-condition" className="hover:underline">
                Terms-condition
              </Link>
            </li>
            <li>
              <Link href="/Privacy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>
              <a href="tel:+917990402535" className="hover:underline">
                +91 79904 02535
              </a>
            </li>
            <li>
              <a
                href="mailto:optimawebdesigns12@gmail.com"
                className="hover:underline"
              >
                optimawebdesigns12@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/917990402535"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Office Hours */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
          <p>Monday to Saturday</p>
          <p>09:00 AM to 05:00 PM</p>
        </motion.div>
      </motion.div>

      {/* Footer Bottom with Dynamic Year */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="border-t border-gray-300 text-center py-4 text-sm"
      >
        © {currentYear}{" "}
        <span className="text-black font-semibold">Optima Web Design</span>. All Rights Reserved.
      </motion.div>
    </footer>
  );
}
