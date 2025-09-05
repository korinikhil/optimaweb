"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    mobile: "",
    email: "",
    website: "",
    message: "",
    city: "",
    state: "",
    address: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.mobile || !formData.email) {
      alert("Please fill Name, Mobile, and Email before submitting.");
      return;
    }

    const whatsappMessage = `
*New Enquiry from Website:*

*Name:* ${formData.name}
*Company:* ${formData.company || "N/A"}
*Mobile:* ${formData.mobile}
*Email:* ${formData.email}
*Website:* ${formData.website || "N/A"}
*City:* ${formData.city || "N/A"}
*State:* ${formData.state || "N/A"}
*Address:* ${formData.address || "N/A"}

*Message:*
${formData.message || "N/A"}
    `;

    // Encode and open WhatsApp link
    const whatsappLink = `https://wa.me/919428884897?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <section className="min-h-screen bg-[#fdfdfd] flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full flex flex-col items-center gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-8 border border-gray-200"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-semibold text-gray-700"
              >
                Company Name
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter company name"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label
                htmlFor="mobile"
                className="block text-sm font-semibold text-gray-700"
              >
                Mobile <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter your mobile number"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>
            <div>
              <label
                htmlFor="website"
                className="block text-sm font-semibold text-gray-700"
              >
                Website
              </label>
              <input
                type="url"
                id="website"
                value={formData.website}
                onChange={handleChange}
                placeholder="Enter your website"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="3"
                placeholder="Your message..."
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-semibold text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Enter your city"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label
                htmlFor="state"
                className="block text-sm font-semibold text-gray-700"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="Enter your state"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div className="md:col-span-2">
              <label
                htmlFor="address"
                className="block text-sm font-semibold text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your full address"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
              >
                Send Now
              </button>
            </div>
          </form>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl mx-auto mt-12 px-4"
        >
          {[
            {
              icon: <FaWhatsapp className="text-5xl text-green-500" />,
              title: "WhatsApp",
              detail: "+91 94288 84897",
              link: "https://wa.me/919428884897",
            },
            {
              icon: <FaPhoneAlt className="text-5xl text-blue-500" />,
              title: "Phone",
              detail: "+91 75678 35879",
              link: "tel:+917567835879",
            },
            {
              icon: <FaEnvelope className="text-5xl text-red-500" />,
              title: "Email",
              detail: "optimawebdesigns12@gmail.com",
              link: "mailto:optimawebdesigns12@gmail.com",
            },
            {
              icon: <FaMapMarkerAlt className="text-5xl text-yellow-500" />,
              title: "Location",
              detail: "Ahmedabad, India",
              link: "https://www.google.com/maps/place/Ahmedabad,+Gujarat,+India/",
            },
          ].map((item, i) => (
            <motion.a
              href={item.link}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900 text-white rounded-2xl flex flex-col items-center justify-center p-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm mt-2 text-gray-400 text-center">
                {item.detail}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
