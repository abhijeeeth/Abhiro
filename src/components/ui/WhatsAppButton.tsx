"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "916238545696";
  const message = encodeURIComponent("Hi makePortfolio.in! I'm interested in building a website. I'd love to chat.");
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-emerald-500/20 transition-shadow duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contact us on WhatsApp"
    >
      <svg
        className="w-7 h-7 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.49 1.966 14.022 1.91 12.01 1.91c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.463 3.39 1.337 4.842l-.99 3.613 3.7-.967zM17.47 15.3c-.3-.15-1.77-.874-2.034-.972-.263-.099-.455-.147-.646.15-.19.293-.737.97-.904 1.162-.166.195-.331.22-.63.07-.3-.15-1.257-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.3-.347.45-.52.149-.174.198-.298.298-.497.1-.2.05-.374-.025-.524-.075-.15-.646-1.56-.884-2.133-.233-.564-.488-.488-.67-.497-.172-.007-.37-.009-.567-.009-.197 0-.518.073-.79.37-.272.296-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.77-.724 2.02-1.424.25-.7.25-1.3 0-1.424-.075-.125-.27-.225-.57-.375z" />
      </svg>
    </motion.a>
  );
}
