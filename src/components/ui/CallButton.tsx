"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function CallButton() {
  const phoneNumber = "+916238545696";
  const url = `tel:${phoneNumber}`;

  return (
    <motion.a
      href={url}
      className="fixed bottom-24 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-blue-500/20 transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 border border-blue-500/30"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Call Us"
    >
      <Phone className="w-6 h-6 fill-current text-white" />
    </motion.a>
  );
}
