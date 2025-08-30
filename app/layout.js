import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Header/page";
import Footer from "./Footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Optima WebDesigns | Professional Website Design & Development Agency",
  description:
    "Optima WebDesigns is a professional web design and development agency that builds responsive, SEO-friendly, and high-performing websites to grow your business online.",
  keywords: [
    "Optima WebDesigns",
    "website design agency",
    "professional web design",
    "responsive web development",
    "SEO-friendly websites",
    "custom web design",
    "UI/UX design services",
    "business website development",
    "modern website solutions",
    "web design company India"
  ],
  openGraph: {
    title: "Optima WebDesigns | Professional Website Design & Development Agency",
    description:
      "Grow your business online with Optima WebDesigns. We create responsive, SEO-friendly, and customized websites designed to attract customers and increase sales.",
    url: "https://www.optimawebdesign.in",
    siteName: "Optima WebDesigns",
    images: [
      {
        width: 1200,
        height: 630,
        alt: "Optima WebDesigns - Website Design Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Optima WebDesigns | Professional Website Design & Development Agency",
    description:
      "Optima WebDesigns offers modern, responsive, and SEO-friendly websites tailored for your business success.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "cUFO7fssNmwaOftA0nKPrCKSHQCr_OxfhlvLF7XlIGM", // ✅ sirf code string daalo
  },
  icons: {
    icon: "/favicon.ico", // yaha apna ico file ka path do (public/ folder me rakho)
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
