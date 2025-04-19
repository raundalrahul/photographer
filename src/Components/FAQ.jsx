import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqData = [
  {
    id: 1,
    question: "What types of photography do you specialize in?",
    answer:
      "I specialize in wedding, portrait, and landscape photography, capturing both posed and candid moments.",
  },
  {
    id: 2,
    question: "How can I book a session?",
    answer:
      "You can book a session by filling out the contact form on the Contact page or emailing me directly at photographer@example.com.",
  },
  {
    id: 3,
    question: "Do you travel for shoots?",
    answer:
      "Yes! I am available for destination shoots and love traveling to new locations. Travel fees may apply.",
  },
  {
    id: 4,
    question: "What is your turnaround time for edited photos?",
    answer:
      "Typically, edited photos are delivered within 2-3 weeks. Expedited delivery is available upon request.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg mb-14">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map(({ id, question, answer }) => (
          <div key={id} className="border-b border-gray-200">
            <button
              onClick={() => toggleOpen(id)}
              className="w-full text-left py-3 flex justify-between items-center focus:outline-none"
            >
              <span className="text-lg font-medium">{question}</span>
              <span className="text-2xl font-bold">
                {openId === id ? "-" : "+"}
              </span>
            </button>
            <AnimatePresence>
              {openId === id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden pb-3"
                >
                  <p className="text-gray-700">{answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
