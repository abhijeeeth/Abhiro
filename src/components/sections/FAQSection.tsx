"use client";

import { motion } from "framer-motion";
import Accordion from "../ui/Accordion";

const faqItems = [
  {
    question: "How long does development take?",
    answer:
      "Our Budget Plan is delivered in just 3 to 5 days since we customize our existing pre-engineered premium templates. Our Custom Plan takes between 12 to 18 days depending on complexity, as we design the layout in Figma from scratch and code it line-by-line.",
  },
  {
    question: "What features are included in every website?",
    answer:
      "Every single website we launch comes standard with fully responsive layouts, SEO configuration, functional contact forms, SSL certificate configuration, direct WhatsApp chat links, and dynamic asset compression for speed.",
  },
  {
    question: "Do I need to pay for hosting?",
    answer:
      "For standard landing pages and portfolios, we can deploy you onto Vercel or Netlify's global CDN network for FREE. For e-commerce store databases or dynamic backend server pipelines, we can help set up affordable cloud hosting (starting around $3-$5/month).",
  },
  {
    question: "Can you register my domain name?",
    answer:
      "Yes, we can assist in registering your domain (e.g. through Cloudflare, GoDaddy, or Namecheap). The registration fee is charged separately at actual registrar cost (usually ₹800 - ₹1200/year for standard .com or .in domains).",
  },
  {
    question: "Can I start with the Budget Plan and upgrade later?",
    answer:
      "Absolutely! You can launch your website quickly with our Budget Plan and scale it with custom designs, additional pages, database dashboards, or online payment checkouts as your business grows.",
  },
  {
    question: "Do you provide search engine optimization (SEO)?",
    answer:
      "Yes. Every build includes Google search console verification, sitemap creation, meta tags, and accessibility markup. Our Custom Plan includes advanced keyword audits and JSON-LD schema configurations.",
  },
  {
    question: "How many revisions do I get?",
    answer:
      "Our Budget Plan includes 1 round of layout adjustments. Our Custom Plan features unlimited reviews during the design wireframing phase, and 3 development revision sweeps post-build.",
  },
  {
    question: "Do you redesign existing websites?",
    answer:
      "Yes. We can migrate slow, clunky WordPress or old HTML sites to modern Next.js + Tailwind setups, retaining your existing URL configurations to preserve your current Google search rankings.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "100% yes. Over 60% of web traffic is mobile. We design and test mobile-first, ensuring all grid breaks, graphics, headers, and click interfaces are perfectly sized for fingers and smaller screens.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/20 border-t border-card-border">
      {/* Background glow highlights */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gradient"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted text-base sm:text-lg"
          >
            Got questions about pricing, timeline, domain, or hosting? We have answers. Clear terms, no hidden surprises.
          </motion.p>
        </div>

        {/* Accordion Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <Accordion items={faqItems} />
        </motion.div>
      </div>
    </section>
  );
}
