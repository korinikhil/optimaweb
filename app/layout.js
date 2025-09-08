// app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Header/page";
import Footer from "./Footer/page";
import Script from "next/script";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Optima Web Design | Affordable Website Design & Development Worldwide",
  description:
    "Cost-effective and professional website development and design services for entrepreneurs, startups, and businesses globally. Optima Web Design provides SEO-friendly, mobile-friendly, and visually appealing websites that improve your online presence and grow your business. Obtain your free quote and consultation today and grow your digital presence across the world.",
  keywords: [
    "Optima Web Design",
    "affordable website design",
    "professional web development",
    "SEO-friendly websites",
    "responsive web design",
    "custom website solutions",
    "business website development",
    "modern website design company",
    "web design agency worldwide",
  ],
  openGraph: {
    title: "Optima Web Design | Affordable Website Design & Development Worldwide",
    description:
      "Grow your business online with Optima Web Design. We create responsive, SEO-friendly, and customized websites designed to attract customers and increase sales.",
    url: "https://www.optimawebdesign.in",
    siteName: "Optima Web Design",
    images: [
      { url: "/logo.ico", width: 1200, height: 630, alt: "Optima Web Design - Website Design Agency" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Optima Web Design | Affordable Website Design & Development Worldwide",
    description:
      "Optima Web Design offers affordable, responsive, and SEO-friendly websites tailored for your business success.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  verification: { google: "cUFO7fssNmwaOftA0nKPrCKSHQCr_OxfhlvLF7XlIGM" },
  icons: { icon: "/logo.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* Google Tag Manager (GTM) - load after interactive in head */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NLHH3XGV');
            `,
          }}
        />

        {/* Google Analytics (source) */}
        <Script
          id="ga-src"
          src="https://www.googletagmanager.com/gtag/js?id=G-YZRLDNXD0J"
          strategy="afterInteractive"
        />

        {/* Google Analytics (init) */}
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-YZRLDNXD0J');
          `}
        </Script>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* GTM noscript must be in body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NLHH3XGV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Tawk.to via next/script (fixed) */}
        <Script id="tawk-to" strategy="afterInteractive">
          {`
            window.Tawk_API = window.Tawk_API || {};
            window.Tawk_LoadStart = new Date();
            (function() {
              var s1 = document.createElement("script");
              s1.async = true;
              s1.src = "https://embed.tawk.to/6876017e749494190c45200f/1j06fbm1j";
              s1.charset = "UTF-8";
              s1.setAttribute("crossorigin", "*");
              var s0 = document.getElementsByTagName("script")[0];
              if (s0 && s0.parentNode) {
                s0.parentNode.insertBefore(s1, s0);
              } else {
                document.head.appendChild(s1);
              }
            })();
          `}
        </Script>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
