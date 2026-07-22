"use client";

import { motion } from "framer-motion";
import GlowCard from "../ui/GlowCard";

const team = [
  {
    name: "Abhiroop",
    role: "Founder & Full Stack Developer",
    bio: "Passionate about creating accessible, beautiful, and hyper-optimized websites. Over 5 years of engineering experience.",
    skills: ["Next.js", "TypeScript", "Node.js", "Docker"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    avatarGrad: "from-emerald-500 to-green-600",
  },
  {
    name: "Sarah Chen",
    role: "UI/UX Designer",
    bio: "Focuses on minimalist aesthetics, accessible design hierarchies, and interactive wireframes that convert.",
    skills: ["Figma", "Photoshop", "Wireframing", "Aesthetics"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    avatarGrad: "from-purple-500 to-indigo-600",
  },
  {
    name: "Rohan Das",
    role: "Frontend Developer",
    bio: "Specializes in motion graphics, Framer Motion animations, GSAP timing charts, and responsive UI scaling.",
    skills: ["React", "Framer Motion", "GSAP", "Tailwind CSS"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    avatarGrad: "from-cyan-500 to-blue-600",
  },
  {
    name: "Alex Mercer",
    role: "Backend Developer",
    bio: "Handles API structure routing, PostgreSQL database schemas, Stripe webhook integrations, and server deployments.",
    skills: ["Node.js", "Postgres", "Redis", "Cloudflare"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    avatarGrad: "from-red-500 to-orange-600",
  },
  {
    name: "Priya Sharma",
    role: "SEO Specialist",
    bio: "Dedicated to index search optimization, JSON-LD schema layouts, dynamic meta tags audits, and search rankings.",
    skills: ["SEO Audits", "JSON-LD", "Search Console", "Copywriting"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    avatarGrad: "from-pink-500 to-rose-600",
  },
  {
    name: "Liam O'Connor",
    role: "Digital Marketing Exec",
    bio: "Designs landing pages workflows, monitors user event analytics, and runs retargeting campaigns.",
    skills: ["Analytics", "AdWords", "Email Flows", "Copywriting"],
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    avatarGrad: "from-yellow-500 to-amber-600",
  },
];

export default function Team() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/40 border-t border-card-border">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gradient"
          >
            Meet The Craftspeople
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted text-base sm:text-lg"
          >
            A dedicated team of designers, engineers, and search index strategists combining forces to ship premium web products.
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="h-full"
            >
              <GlowCard className="h-full border border-card-border/80 hover:border-zinc-700 bg-zinc-950/20 backdrop-blur-sm p-6 flex flex-col justify-between items-start group min-h-[340px]">
                <div className="space-y-6 w-full">
                  {/* Premium Abstract Visual Avatar */}
                  <div className="flex items-center space-x-4">
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-tr ${member.avatarGrad} flex items-center justify-center font-bold text-white shadow-lg text-lg select-none uppercase shrink-0`}>
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-xs text-primary font-semibold font-mono">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-muted leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {member.skills.map((skill) => (
                      <span key={skill} className="px-2 py-0.5 rounded bg-zinc-900 border border-card-border/60 text-[10px] font-semibold text-muted">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social links footer */}
                <div className="flex items-center space-x-3 pt-6 border-t border-card-border/30 w-full mt-6">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-zinc-900 border border-card-border text-muted hover:text-white hover:border-zinc-700 transition-colors flex items-center justify-center"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-zinc-900 border border-card-border text-muted hover:text-white hover:border-zinc-700 transition-colors flex items-center justify-center"
                    aria-label={`${member.name}'s GitHub`}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </a>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
