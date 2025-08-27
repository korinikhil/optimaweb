"use client";
import { useState, useEffect } from "react";
import Logo from "../../public/optimaweb.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/80"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        
        <div className="flex items-center">
          <Link href='/'>
          <img src={Logo.src} alt="Logo" className="h-10 w-auto" />
          </Link>
        </div>

        
        <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <Link href="/About" className="hover:text-black transition">About Us</Link>
          <Link href="/Service" className="hover:text-black transition">Services</Link>
          <Link href="/Blog" className="hover:text-black transition">Blog</Link>
          <Link href="/Contact" className="hover:text-black transition">Contact Us</Link>
        </nav>

        
        <div className="hidden md:block">
          <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-black transition">
            Login
          </button>
        </div>

        
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XMarkIcon className="h-6 w-6 text-gray-800" /> : <Bars3Icon className="h-6 w-6 text-gray-800" />}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-100">Home</Link>
          <Link href="/About" className="block px-4 py-2 hover:bg-gray-100">About Us</Link>
          <Link href="/Service" className="block px-4 py-2 hover:bg-gray-100">Services</Link>
          <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Blog</Link>
          <Link href="Contact" className="block px-4 py-2 hover:bg-gray-100">Contact Us</Link>
          <button className="w-full text-center bg-gray-800 text-white px-4 py-2 mt-2 rounded hover:bg-black transition">
            Login
          </button>
        </nav>
      )}
    </header>
  );
}
