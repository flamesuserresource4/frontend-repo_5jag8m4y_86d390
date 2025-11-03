import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail, Globe, Phone, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const OrbitIcon = ({ href, children, delay = 0, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    aria-label={label}
    className="absolute size-10 md:size-12 rounded-full grid place-items-center bg-white/10 backdrop-blur border border-white/20 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.8)] transition-shadow"
    style={{
      animation: `orbit 10s linear infinite`,
      animationDelay: `${delay}s`,
    }}
  >
    {children}
  </a>
);

export default function Hero3D() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.18),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.18),transparent_35%)]" />

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Hi, I’m <span className="text-indigo-400">Kandiah</span> <span className="inline-block">👋</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mt-3 text-lg sm:text-xl md:text-2xl text-zinc-200"
        >
          AI & Web Developer crafting immersive, intelligent experiences
        </motion.p>

        {/* Orbiting contact icons */}
        <div className="relative mt-10 h-40 w-40 sm:h-56 sm:w-56">
          <div className="absolute inset-0 rounded-full border border-white/20" />
          <OrbitIcon href="mailto:kandiah@example.com" label="Email" delay={0}>
            <Mail className="size-5" />
          </OrbitIcon>
          <OrbitIcon href="tel:+910000000000" label="Phone" delay={1.5}>
            <Phone className="size-5" />
          </OrbitIcon>
          <OrbitIcon href="https://github.com/" label="GitHub" delay={3}>
            <Github className="size-5" />
          </OrbitIcon>
          <OrbitIcon href="https://linkedin.com/" label="LinkedIn" delay={4.5}>
            <Linkedin className="size-5" />
          </OrbitIcon>
          <OrbitIcon href="https://your-portfolio.example.com" label="Portfolio" delay={6}>
            <Globe className="size-5" />
          </OrbitIcon>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-6 flex flex-col items-center"
        >
          <span className="text-sm text-zinc-300">Scroll</span>
          <ChevronDown className="mt-1 animate-bounce" />
        </motion.div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(10rem) rotate(0deg); }
          50% { transform: rotate(180deg) translateX(10rem) rotate(-180deg); }
          100% { transform: rotate(360deg) translateX(10rem) rotate(-360deg); }
        }
      `}</style>
    </section>
  );
}
