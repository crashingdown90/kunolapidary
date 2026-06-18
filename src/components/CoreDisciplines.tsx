"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Lapidary",
    description: "Master the art of cutting, shaping, and polishing stones into beautiful gems.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12l5.25 5 2.625-7.5L12 2l2.125 7.5L16.75 17l5.25-5" />
        <path d="M12 2v20" />
        <path d="M7.25 17l4.75 5 4.75-5" />
      </svg>
    ),
    color: "bg-teal-500/10 border-teal-500/20",
    textColor: "text-teal-400",
    glowColor: "group-hover:shadow-[0_0_50px_rgba(20,184,166,0.15)]",
  },
  {
    name: "Gemstones",
    description: "Discover the world's most precious and semi-precious gemstones and their properties.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
    color: "bg-purple-500/10 border-purple-500/20",
    textColor: "text-purple-400",
    glowColor: "group-hover:shadow-[0_0_50px_rgba(168,85,247,0.15)]",
  },
  {
    name: "Geology",
    description: "Explore Earth's geological wonders, from rock formations to mineral deposits.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 19h20L12 2z" />
        <path d="M12 2v17" />
        <path d="M9 14l3 3 3-3" />
      </svg>
    ),
    color: "bg-blue-500/10 border-blue-500/20",
    textColor: "text-blue-400",
    glowColor: "group-hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] as const },
  },
};

export default function CoreDisciplines() {
  return (
    <section className="py-20 md:py-32 relative bg-light/30 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic text-text mb-6">
              Core Disciplines
            </h2>
            <p className="text-text-soft text-xl font-light">
              Our content is meticulously organized into three pillars of earth science and artistic mastery.
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-12"
        >
          {categories.map((cat) => (
            <motion.div key={cat.name} variants={itemVariants}>
              <Link
                href={`/blog?category=${cat.name}`}
                className={`group glass-card block p-8 md:p-12 rounded-[40px] border border-border transition-all duration-700 ${cat.glowColor}`}
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl ${cat.color} ${cat.textColor} mb-10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6`}>
                  {cat.icon}
                </div>
                <h3 className={`text-3xl font-serif italic ${cat.textColor} mb-6`}>
                  {cat.name}
                </h3>
                <p className="text-text-soft leading-relaxed font-light text-base">
                  {cat.description}
                </p>
                <div className="mt-10 h-[1px] w-full bg-border relative overflow-hidden">
                  <div className="absolute inset-0 bg-current opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-current to-transparent" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
