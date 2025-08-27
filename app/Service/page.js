"use client";
import { motion } from "framer-motion";
import {
  FaGlobe, FaBusinessTime, FaBlog, FaFileAlt, FaShoppingCart, FaUtensils,
  FaChalkboardTeacher, FaClinicMedical, FaHome, FaCalendarAlt, FaLanguage,
  FaRedoAlt, FaCogs, FaUsers, FaFileCode, FaBoxOpen, FaCashRegister,
  FaTasks, FaUserTie, FaMoneyCheckAlt, FaChartLine, FaEnvelope, FaComments,
  FaLayerGroup, FaBullhorn, FaSearch, FaCopy, FaShareAlt, FaEnvelopeOpen,
  FaStar, FaRobot, FaLightbulb, FaMicrophone, FaIdCard, FaBookOpen, FaImage
} from "react-icons/fa";

const services = [
  {
    category: "Web Development (Websites Only)",
    icon: <FaGlobe />,
    items: [
      { title: "Business/Corporate Website", icon: <FaBusinessTime /> },
      { title: "Portfolio Website", icon: <FaFileAlt /> },
      { title: "Blog/News Website", icon: <FaBlog /> },
      { title: "Landing Page/Microsite", icon: <FaFileAlt /> },
      { title: "E-commerce Website", icon: <FaShoppingCart /> },
      { title: "Restaurant/Food Ordering Website", icon: <FaUtensils /> },
      { title: "Education/Coaching Website", icon: <FaChalkboardTeacher /> },
      { title: "Healthcare/Clinic Website", icon: <FaClinicMedical /> },
      { title: "Real Estate Listing Website", icon: <FaHome /> },
      { title: "Event/Booking Website", icon: <FaCalendarAlt /> },
      { title: "Multi-language Website", icon: <FaLanguage /> },
      { title: "Website Redesign/Migration", icon: <FaRedoAlt /> },
    ],
  },
  {
    category: "Development Systems (Software/Modules)",
    icon: <FaCogs />,
    items: [
      { title: "Admin Dashboard", icon: <FaCogs /> },
      { title: "User Dashboard/Portal", icon: <FaUsers /> },
      { title: "Content Management System", icon: <FaFileCode /> },
      { title: "E-commerce Backend", icon: <FaBoxOpen /> },
      { title: "Point of Sale (POS)", icon: <FaCashRegister /> },
      { title: "CRM System", icon: <FaTasks /> },
      { title: "HR Management", icon: <FaUserTie /> },
      { title: "Payroll System", icon: <FaMoneyCheckAlt /> },
      { title: "Analytics Dashboard", icon: <FaChartLine /> },
      { title: "Email Automation", icon: <FaEnvelope /> },
      { title: "Chat/Support System", icon: <FaComments /> },
      { title: "Membership/Subscriptions", icon: <FaLayerGroup /> },
    ],
  },
  {
    category: "Marketing Services",
    icon: <FaBullhorn />,
    items: [
      { title: "SEO (Technical, On-Page, Off-Page, Local/GMB)", icon: <FaSearch /> },
      { title: "Content Ops (Copywriting, Blog Strategy, Calendar)", icon: <FaCopy /> },
      { title: "Social Media (Posts/Reels, Hashtags, Paid Ads)", icon: <FaShareAlt /> },
      { title: "Email Marketing (Templates, Campaigns)", icon: <FaEnvelopeOpen /> },
      { title: "Review & Reputation (Google Reviews, Feedback)", icon: <FaStar /> },
    ],
  },
  {
    category: "AI-Powered Features",
    icon: <FaRobot />,
    items: [
      { title: "AI Chatbot (WhatsApp, Website, Instagram)", icon: <FaRobot /> },
      { title: "AI Customer Support (24/7 Replies + Handoff)", icon: <FaComments /> },
      { title: "AI SEO Suggestions (Topics, Internal Links)", icon: <FaSearch /> },
      { title: "AI Content Ideas (Blogs, Captions, Ads)", icon: <FaLightbulb /> },
      { title: "Predictive Analytics (Traffic Forecasts)", icon: <FaChartLine /> },
      { title: "Voice Search Optimization", icon: <FaMicrophone /> },
    ],
  },
  {
    category: "Branding & Collateral",
    icon: <FaIdCard />,
    items: [
      { title: "Logo & Brand Guidelines", icon: <FaBookOpen /> },
      { title: "Business Card, Letterhead, Email Signature", icon: <FaIdCard /> },
      { title: "Brochure/Deck, Posters, Promo Reel", icon: <FaImage /> },
    ],
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-4,.,b;b;bbkk00 *:">
          Our Services
        </h2>

        {services.map((section, index) => (
          <div key={index} className="mb-14">
            <h3 className="text-2xl font-bold flex items-center gap-3 mb-6 text-gray-800">
              <span className="text-black text-3xl">{section.icon}</span>
              {section.category}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {section.items.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 shadow-md rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition duration-300"
                >
                  <div className="text-black text-4xl mb-3">{service.icon}</div>
                  <h4 className="text-lg font-semibold text-gray-800">{service.title}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
