"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import GlowCard from "../ui/GlowCard";

const testimonials = [
  {
    name: "George Morris",
    company: "Morris English Academy",
    text: "We chose the Custom Plan for our academy's website. The Figma wireframing phase allowed us to map out the courses and admissions portals perfectly, and the final Next.js build is remarkably fast. It has made managing online student inquiries much simpler.",
    rating: 5,
    avatarGrad: "from-blue-500 to-indigo-500",
  },
  {
    name: "Zachariah Mathai",
    company: "FarmSpice Spices",
    text: "Setting up our spice catalog was very smooth. They set up our products, configured the CDN hosting, and integrated a direct WhatsApp checkout that our customers find extremely convenient. The support during setup was excellent.",
    rating: 5,
    avatarGrad: "from-teal-500 to-emerald-500",
  },
  {
    name: "Roshni Nair",
    company: "Roshni Boutiques",
    text: "For our boutique, visual layout is everything. The team designed a clean, mobile-first collection gallery with subtle transitions. It displays our clothing designs beautifully on mobile screens without slowing down.",
    rating: 5,
    avatarGrad: "from-pink-500 to-rose-500",
  },
  {
    name: "Blesson Varghese",
    company: "Momeira Group",
    text: "Our corporate site was delivered on schedule. The code footprint is lightweight, and the structured search metadata has helped establish a professional online presence for our business.",
    rating: 5,
    avatarGrad: "from-amber-500 to-orange-500",
  },
  {
    name: "Sachu & Preksha",
    company: "Personal Brand & Creative Creators",
    text: "Our portfolio is highly responsive and ranks for our names on search engines. They implemented clean layout animations and connected our analytics tools in under two weeks. The direct collaboration was transparent and professional.",
    rating: 5,
    avatarGrad: "from-purple-500 to-violet-500",
  },
];

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  return (
    <section className="py-24 relative overflow-hidden bg-black/20 border-t border-card-border">
      {/* Background glow highlights */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gradient"
          >
            Loved By Business Owners
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted text-base sm:text-lg"
          >
            Don't just take our word for it. Read genuine feedback from the business owners, creators, and brands who have launched websites with us.
          </motion.p>
        </div>

        {/* Embla Carousel viewport */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-4">
            {testimonials.map((t, idx) => (
              <div key={idx} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4 h-full">
                <GlowCard className="h-full border border-card-border/80 bg-zinc-950/20 backdrop-blur-md p-6 flex flex-col justify-between items-start min-h-[300px] relative glow-effect">
                  {/* Quote icon background */}
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-card-border/40 pointer-events-none" />

                  <div className="space-y-4 w-full">
                    {/* Stars */}
                    <div className="flex space-x-0.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>

                    <p className="text-sm sm:text-base text-white/90 leading-relaxed italic">
                      "{t.text}"
                    </p>
                  </div>

                  {/* Profile block */}
                  <div className="flex items-center space-x-3.5 pt-6 border-t border-card-border/20 w-full mt-6">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${t.avatarGrad} flex items-center justify-center font-bold text-white shadow-md text-sm uppercase shrink-0`}>
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{t.name}</h4>
                      <p className="text-[11px] text-muted font-medium">{t.company}</p>
                    </div>
                  </div>
                </GlowCard>
              </div>
            ))}
          </div>
        </div>

        {/* Grab swipe tips */}
        <p className="text-center text-[10px] uppercase tracking-widest text-muted/65 mt-8 select-none">
          ← Swipe or Drag to Navigate →
        </p>
      </div>
    </section>
  );
}
