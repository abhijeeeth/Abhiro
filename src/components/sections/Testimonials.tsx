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
    text: "We went with the Custom Plan for our academy's site. The Figma wireframing stage was super collaborative, and the final Next.js build loading times are incredible. Our online inquiries grew immediately.",
    rating: 5,
    avatarGrad: "from-blue-500 to-indigo-500",
  },
  {
    name: "Zachariah Mathai",
    company: "FarmSpice Spices",
    text: "Setting up our online storefront was a breeze. They handled SSL setup, product catalog optimization, and even connected a direct WhatsApp purchase flow. Reliable and prompt post-launch support.",
    rating: 5,
    avatarGrad: "from-teal-500 to-emerald-500",
  },
  {
    name: "Roshni Nair",
    company: "Roshni Boutiques",
    text: "As a boutique owner, visual appeal is everything. The team at makePortfolio.in translated our vision into a responsive, elegant fashion catalog with clean animations. Exceeded all expectations!",
    rating: 5,
    avatarGrad: "from-pink-500 to-rose-500",
  },
  {
    name: "Blesson Varghese",
    company: "Momeira Group",
    text: "makePortfolio.in built our corporate site in just a few weeks. The speed, design quality, and technical SEO structure are top-notch. Our brand credibility has definitely been boosted.",
    rating: 5,
    avatarGrad: "from-amber-500 to-orange-500",
  },
  {
    name: "Sachu & Preksha",
    company: "Personal Brand & Creative Creators",
    text: "Our personal site is lightning fast and ranks highly on search engines out of the box. They implemented clean scroll transitions, custom SVG shapes, and analytics tracking in no time. Great service!",
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
