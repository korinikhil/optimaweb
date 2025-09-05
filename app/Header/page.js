"use client";
import { useState, useEffect } from "react";
import Logo from "../../public/optimaweb.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [email, setEmail] = useState(null);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const dropdownVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <header
      className={
        "fixed w-full top-0 left-0 z-50 transition-all duration-300 " +
        (scrolled ? "bg-white shadow-md" : "bg-white/80")
      }
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src={Logo}
              alt="Optima Web Design Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <Link href="/" className="hover:text-black transition">
            Home
          </Link>
          <Link href="/About" className="hover:text-black transition">
            About Us
          </Link>
          <Link href="/Service" className="hover:text-black transition">
            Services
          </Link>
          <Link href="/Blog" className="hover:text-black transition">
            Blog
          </Link>
          <Link href="/Contact" className="hover:text-black transition">
            Contact Us
          </Link>
         
            
        
        </nav>

        {/* Desktop Login Button */}
        <div className="hidden md:block">
         
           
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-800" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownVariants}
            className="md:hidden bg-white shadow-lg border-t border-gray-200 overflow-hidden"
          >
            <Link
              href="/"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/service"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/Blog"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            
            <div className="p-4 border-t border-gray-200">
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
