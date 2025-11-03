import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink, Smartphone, Shield, MessageSquare } from 'lucide-react';

const projects = [
  {
    title: 'Ekonomi',
    stack: 'Flutter • Dart • BLoC',
    description: 'Personal finance app with smooth state-driven UI.',
    icon: <Smartphone className="text-indigo-300" />,
    link: 'https://github.com/',
  },
  {
    title: 'BookRecky',
    stack: 'React Native • Node.js • Zustand • JWT • MongoDB',
    description: 'Cross-platform book tracker with secure auth.',
    icon: <ExternalLink className="text-emerald-300" />,
    link: 'https://github.com/',
  },
  {
    title: 'PDF Querying ChatBot',
    stack: 'LangChain • Python • Gemini API • React.js',
    description: 'Conversational assistant that reads your PDFs.',
    icon: <Shield className="text-fuchsia-300" />,
    link: 'https://github.com/',
  },
  {
    title: 'OnChat',
    stack: 'MERN Stack',
    description: 'Real-time chat with 3D message effects.',
    icon: <MessageSquare className="text-cyan-300" />,
    link: 'https://github.com/',
  },
];

export default function ProjectsTunnel() {
  const { scrollYProgress } = useScroll();
  const depth = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section className="relative bg-gradient-to-b from-black to-zinc-950 py-24 text-white overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_60%)]" />
      <motion.h2
        style={{ y: depth }}
        className="relative z-10 text-center text-3xl md:text-5xl font-extrabold"
      >
        Projects — The Showcase Tunnel
      </motion.h2>

      <div className="relative z-10 mt-14 perspective-[1200px]">
        <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {projects.map((p, idx) => (
            <TunnelCard key={p.title} {...p} idx={idx} />)
          )}
        </div>
      </div>
    </section>
  );
}

const TunnelCard = ({ title, stack, description, icon, link, idx }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 30, rotateX: 15 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    whileHover={{ y: -8, rotateX: -2, boxShadow: '0 20px 80px rgba(99,102,241,0.35)' }}
    transition={{ duration: 0.6, delay: idx * 0.08 }}
    viewport={{ once: true, margin: '-80px' }}
    className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-black/30 p-6 backdrop-blur-lg"
  >
    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-600/20 via-fuchsia-600/10 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-2xl">{icon}</div>
        <Github className="opacity-80 group-hover:opacity-100" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-1 text-xs text-zinc-300">{stack}</p>
      <p className="mt-3 text-sm text-zinc-300">{description}</p>
      <div className="mt-4 inline-flex items-center gap-2 text-indigo-300">
        <span className="text-sm">View Code</span>
      </div>
    </div>
  </motion.a>
);
