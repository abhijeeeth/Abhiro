"use client";

import { motion } from "framer-motion";
import Counter from "../ui/Counter";

const stats = [
  { value: 50, suffix: "+", label: "Websites Delivered" },
  { value: 30, suffix: "+", label: "Happy Clients" },
  { value: 99, suffix: "%", label: "Satisfaction Rate" },
  { value: 5, suffix: "+", label: "Years Combined Exp" },
];

const clientLogos = [
  "FarmSpice",
  "Morris English Academy",
  "Momeira Group",
  "Roshni Boutiques",
  "Sachu & Preksha",
  "Manasa Reddy",
  "Lotus Dental Clinic",
  "Organic Store Inc",
];

export default function TrustBar() {
  return (
    <section className="py-16 border-t border-b border-card-border bg-black/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center pb-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-1.5"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-primary font-mono tracking-tight">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-muted font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-card-border/50 my-6" />

        {/* Client Logos Slider Header */}
        <p className="text-center text-xs uppercase tracking-widest text-muted/80 font-bold mb-8">
          Trusted By Businesses &amp; Creators
        </p>

        {/* Infinite Logo Marquee */}
        <div className="relative flex overflow-x-hidden w-full pointer-events-none select-none">
          {/* First loop marquee */}
          <div className="flex animate-marquee whitespace-nowrap space-x-16 items-center">
            {clientLogos.concat(clientLogos).map((logo, index) => (
              <span
                key={index}
                className="text-muted hover:text-white text-xl sm:text-2xl font-bold font-mono tracking-widest uppercase opacity-45 transition-opacity duration-300"
              >
                {"// "}{logo}
              </span>
            ))}
          </div>

          {/* Absolute overlay fade left & right for premium look */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
