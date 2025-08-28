"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // 2.5 second बाद loader हटेगा
    const timer = setTimeout(() => {
      setShow(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
      <h1 className="text-3xl md:text-5xl font-bold animate-pulse tracking-wide">
        Optima Webdesigns
      </h1>
    </div>
  );
}
