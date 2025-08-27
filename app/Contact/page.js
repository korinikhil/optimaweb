"use client";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen bg-[#fdfdfd] flex items-center justify-center px-6 py-16">
      <div className="max-w-6xl w-full flex flex-col items-center gap-12">
        
        
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-8 border border-gray-200"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                placeholder="Enter company name"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            
            <div>
              <label htmlFor="mobile" className="block text-sm font-semibold text-gray-700">
                Mobile
              </label>
              <input
                type="tel"
                id="mobile"
                placeholder="Enter your mobile number"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            
            <div>
              <label htmlFor="website" className="block text-sm font-semibold text-gray-700">
                Website
              </label>
              <input
                type="url"
                id="website"
                placeholder="Enter your website"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                placeholder="Your message..."
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="city" className="block text-sm font-semibold text-gray-700">
                City
              </label>
              <input
                type="text"
                id="city"
                placeholder="Enter your city"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            
            <div>
              <label htmlFor="state" className="block text-sm font-semibold text-gray-700">
                State
              </label>
              <input
                type="text"
                id="state"
                placeholder="Enter your state"
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="address" className="block text-sm font-semibold text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
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

        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl mt-8"
        >
          {[
            { 
              icon: <FaWhatsapp className="text-4xl text-green-500" />, 
              title: "WhatsApp", 
              detail: "+91 94288 84897", 
              link: "https://wa.me/919428884897" 
            },
            { 
              icon: <FaPhoneAlt className="text-4xl text-blue-500" />, 
              title: "Phone", 
              detail: "+91 75678 35879", 
              link: "tel:+917567835879" 
            },
            { 
              icon: <FaEnvelope className="text-4xl text-red-500" />, 
              title: "Email", 
              detail: "optimawebdesigns12@gmail.com", 
              link: "mailto:optimawebdesigns12@gmail.com" 
            },
            { 
              icon: <FaMapMarkerAlt className="text-4xl text-yellow-500" />, 
              title: "Location", 
              detail: "Ahmedabad, India", 
              link: "https://www.google.com/maps/place/Sumel+Business+park-+7/@23.0207582,72.6346619,17z/data=!3m1!5s0x395e87acd3d32585:0x2b7304b405866fae!4m10!1m2!2m1!1ssumel+business+park+7,+C-317,+Narol+-+Naroda+Rd,+Soni+ni+chali,+Rehmat+Nagar,+Bapunagar,+Ahmedabad,+Gujarat+380023!3m6!1s0x395e86608b0799b7:0x38a5a7367226ea4a!8m2!3d23.0207254!4d72.6375089!15sCnJzdW1lbCBidXNpbmVzcyBwYXJrIDcsIEMtMzE3LCBOYXJvbCAtIE5hcm9kYSBSZCwgU29uaSBuaSBjaGFsaSwgUmVobWF0IE5hZ2FyLCBCYXB1bmFnYXIsIEFobWVkYWJhZCwgR3VqYXJhdCAzODAwMjNaayJpc3VtZWwgYnVzaW5lc3MgcGFyayA3IGMgMzE3IG5hcm9sIG5hcm9kYSByZCBzb25pIG5pIGNoYWxpIHJlaG1hdCBuYWdhciBiYXB1bmFnYXIgYWhtZWRhYmFkIGd1amFyYXQgMzgwMDIzkgEQY29ycG9yYXRlX29mZmljZZoBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsdlQydFdNRlZFVG5SWlZ6RlFZekpHYUZKSFRraGtlbEpNWkZab1ZGUkhZeEFCqgGzARABKh8iG3N1bWVsIGJ1c2luZXNzIHBhcmsgNyBjIDMxNygAMh8QASIb3bdkdIt7WqpRyw51oW3Hh_3ui_6dGAmt6EbfMm0QAiJpc3VtZWwgYnVzaW5lc3MgcGFyayA3IGMgMzE3IG5hcm9sIG5hcm9kYSByZCBzb25pIG5pIGNoYWxpIHJlaG1hdCBuYWdhciBiYXB1bmFnYXIgYWhtZWRhYmFkIGd1amFyYXQgMzgwMDIz4AEA-gEECAAQHQ!16s%2Fg%2F11g8cybfmf?authuser=0&entry=ttu&g_ep=EgoyMDI1MDgxOC4wIKXMDSoASAFQAw%3D%3D" 
            },
          ].map((item, i) => (
            <motion.a
              href={item.link}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black text-white rounded-xl flex flex-col items-center justify-center p-6 hover:scale-105 transition duration-300 cursor-pointer"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm mt-1 text-gray-300">{item.detail}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
