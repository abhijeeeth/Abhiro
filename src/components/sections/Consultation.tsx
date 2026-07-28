"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, CheckCircle, MessageSquare } from "lucide-react";
import GlowCard from "../ui/GlowCard";
import * as analytics from "@/utils/analytics";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  business: z.string().min(1, "Please select your business type"),
  budget: z.string().min(1, "Please select your target budget"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function Consultation() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      business: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || result.error || "Failed to submit request.");
      }

      console.log("Form Submitted:", result);
      analytics.event("contact_form_submit", {
        category: "Contact",
        label: `${data.business} - ${data.budget}`,
      });
      setIsSubmitted(true);
      reset();
    } catch (err) {
      console.error("Submission error:", err);
      const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred. Please try again.";
      setSubmitError(errorMessage);
    }
  };

  const handleWhatsAppBooking = () => {
    analytics.event("whatsapp_click", {
      category: "Contact",
      label: "Consultation Form Sidebar",
    });
    const phoneNumber = "916238545696";
    const message = encodeURIComponent("Hi makePortfolio.in! I'd like to book a free web consultation. I want to discuss my website options.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black/40 border-t border-card-border">
      {/* Background radial spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Contact details & Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-widest text-primary font-mono bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient">
                Book A FREE Consultation
              </h2>
              <p className="text-sm sm:text-base text-muted leading-relaxed">
                Let's discuss your project goals, clarify technical scope, choose your budget preferences, and answer any development questions. No pressure, no obligations.
              </p>

              {/* Physical Contact Info Cards */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-card-border flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-muted font-mono">Call / Whatsapp</div>
                    <a href="tel:+916238545696" className="text-white hover:text-primary transition-colors font-medium">+91 62385 45696</a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-card-border flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-muted font-mono">Email Address</div>
                    <a href="mailto:st.abhijithh@gmail.com" className="text-white hover:text-primary transition-colors font-medium">st.abhijithh@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-card-border flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-muted font-mono">Location</div>
                    <span className="text-white font-medium">Bangalore, Karnataka, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Grayscale Frame */}
            <div className="w-full aspect-[16/9] rounded-2xl overflow-hidden border border-card-border grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <iframe
                title="makePortfolio.in Office Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9782500000003!2d77.59456270000001!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c0000001%3A0x7e0a0a0a0a0a0a0a!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Validated Consultation Form */}
          <div className="lg:col-span-7">
            <GlowCard className="h-full border border-card-border bg-zinc-950/20 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-center relative min-h-[500px]">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted font-mono">Full Name</label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Your name"
                          {...register("name")}
                          aria-invalid={errors.name ? "true" : "false"}
                          aria-describedby={errors.name ? "name-error" : undefined}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-card-border/80 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-primary transition-all duration-300"
                        />
                        {errors.name && (
                          <span id="name-error" role="alert" className="text-red-500 text-xs">
                            {errors.name.message}
                          </span>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted font-mono">Email Address</label>
                        <input
                          id="email"
                          type="email"
                          placeholder="you@example.com"
                          {...register("email")}
                          aria-invalid={errors.email ? "true" : "false"}
                          aria-describedby={errors.email ? "email-error" : undefined}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-card-border/80 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-primary transition-all duration-300"
                        />
                        {errors.email && (
                          <span id="email-error" role="alert" className="text-red-500 text-xs">
                            {errors.email.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div className="space-y-1.5">
                        <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-muted font-mono">Phone Number</label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="Contact phone"
                          {...register("phone")}
                          aria-invalid={errors.phone ? "true" : "false"}
                          aria-describedby={errors.phone ? "phone-error" : undefined}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-card-border/80 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-primary transition-all duration-300"
                        />
                        {errors.phone && (
                          <span id="phone-error" role="alert" className="text-red-500 text-xs">
                            {errors.phone.message}
                          </span>
                        )}
                      </div>

                      {/* Business Select */}
                      <div className="space-y-1.5">
                        <label htmlFor="business" className="text-xs font-semibold uppercase tracking-wider text-muted font-mono">Business Type</label>
                        <select
                          id="business"
                          {...register("business")}
                          aria-invalid={errors.business ? "true" : "false"}
                          aria-describedby={errors.business ? "business-error" : undefined}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-card-border/80 text-white text-sm focus:outline-none focus:border-primary transition-all duration-300"
                        >
                          <option value="">Select Option</option>
                          <option value="Student">Student</option>
                          <option value="Freelancer">Freelancer</option>
                          <option value="Startup">Startup</option>
                          <option value="Small Business">Small Business</option>
                          <option value="Personal Brand">Personal Brand</option>
                          <option value="Local Shop">Local Shop</option>
                          <option value="Agency">Agency</option>
                        </select>
                        {errors.business && (
                          <span id="business-error" role="alert" className="text-red-500 text-xs">
                            {errors.business.message}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Budget Select */}
                    <div className="space-y-1.5">
                      <label htmlFor="budget" className="text-xs font-semibold uppercase tracking-wider text-muted font-mono">Your Budget Target</label>
                      <select
                        id="budget"
                        {...register("budget")}
                        aria-invalid={errors.budget ? "true" : "false"}
                        aria-describedby={errors.budget ? "budget-error" : undefined}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-card-border/80 text-white text-sm focus:outline-none focus:border-primary transition-all duration-300"
                      >
                        <option value="">Select Option</option>
                        <option value="Budget Plan (₹3,999)">Budget Plan (₹3,999)</option>
                        <option value="Custom Plan (₹15,999)">Custom Plan (₹15,999)</option>
                        <option value="Enterprise / Other">Enterprise / Custom Request</option>
                      </select>
                      {errors.budget && (
                        <span id="budget-error" role="alert" className="text-red-500 text-xs">
                          {errors.budget.message}
                        </span>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted font-mono">Tell Us About Your Project</label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="What are your website goals, design ideas, or requested pages?"
                        {...register("message")}
                        aria-invalid={errors.message ? "true" : "false"}
                        aria-describedby={errors.message ? "message-error" : undefined}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-card-border/80 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-primary transition-all duration-300 resize-none"
                      />
                      {errors.message && (
                        <span id="message-error" role="alert" className="text-red-500 text-xs">
                          {errors.message.message}
                        </span>
                      )}
                    </div>

                    {submitError && (
                      <div className="p-3 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-xl">
                        {submitError}
                      </div>
                    )}

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 py-3 px-6 rounded-xl bg-primary text-black font-bold text-sm hover:bg-primary-hover transition-colors disabled:opacity-50 flex items-center justify-center"
                      >
                        {isSubmitting ? "Submitting Request..." : "Book FREE Consultation"}
                      </button>
                      <button
                        type="button"
                        onClick={handleWhatsAppBooking}
                        className="py-3 px-6 rounded-xl bg-zinc-900 border border-card-border hover:border-emerald-500/50 hover:text-emerald-400 text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-1.5"
                      >
                        <MessageSquare className="w-4 h-4 text-emerald-500" />
                        <span>Chat via WhatsApp</span>
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12 space-y-6 flex flex-col items-center justify-center h-full"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-primary">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-extrabold text-white">Consultation Booked!</h3>
                      <p className="text-sm text-muted max-w-sm leading-relaxed mx-auto">
                        Thank you for reaching out. We have received your project details. Abhijith Shaji or one of our design collaborators will review them and get back to you via email or WhatsApp within the next 24 hours to align on our call.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="py-2 px-6 rounded-xl bg-zinc-900 border border-card-border text-xs font-semibold text-white hover:text-primary transition-colors"
                    >
                      Fill Form Again
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlowCard>
          </div>
        </div>
      </div>
    </section>
  );
}
