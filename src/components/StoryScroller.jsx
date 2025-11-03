import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, GraduationCap, Cpu, Code, Layers } from 'lucide-react';

const Panel = ({ title, subtitle, children, accent = 'from-indigo-500 to-purple-600' }) => (
  <div className="relative min-h-[90vh] flex items-center justify-center py-20">
    <div className={`absolute inset-0 bg-gradient-to-b ${accent} opacity-10`} />
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8 }}
      className="relative z-10 mx-auto max-w-5xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 md:p-12 text-white shadow-[0_0_60px_rgba(99,102,241,0.15)]"
    >
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-2 text-zinc-300">{subtitle}</p>}
      <div className="mt-6">{children}</div>
    </motion.div>
  </div>
);

export default function StoryScroller() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const parallax = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section ref={containerRef} className="relative bg-black text-white">
      <motion.div style={{ y: parallax }} className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 right-10 size-40 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-10 size-56 rounded-full bg-emerald-500/20 blur-3xl" />
      </motion.div>

      {/* Education */}
      <Panel
        title="Education"
        subtitle="B.Tech in Information Technology — Chennai Institute of Technology"
        accent="from-indigo-500 to-cyan-500"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <GraduationCap className="text-indigo-400" />
              <span className="text-zinc-200">Sep 2023 – Present • Chennai, India</span>
            </div>
            <div className="h-3 w-full rounded-full bg-white/10 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '90%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-emerald-400 shadow-[0_0_30px_rgba(99,102,241,0.6)]"
              />
            </div>
            <p className="text-sm text-zinc-300">CGPA: 9.03 / 10</p>
          </div>
          <div className="grid grid-cols-3 gap-4 opacity-90">
            <IconTile icon={<Award />} label="Merit" />
            <IconTile icon={<Layers />} label="IT" />
            <IconTile icon={<Code />} label="Projects" />
          </div>
        </div>
      </Panel>

      {/* Experience */}
      <Panel title="Experience" subtitle="Internships & Impact" accent="from-purple-600 to-pink-600">
        <div className="grid md:grid-cols-2 gap-8">
          <ExpCard
            title="AI/ML Intern — Icanio Technologies"
            time="May 2025 – Jun 2025"
            points={[
              'Built CNN/RNN prototypes and deep learning pipelines',
              'Experimented with LangChain + TensorFlow',
              'Shipped insights with interactive dashboards',
            ]}
            badges={["CNN", "RNN", "LangChain", "TensorFlow"]}
          />
          <ExpCard
            title="Web Developer — Icanio Technologies"
            time="Nov 2024 – Dec 2024"
            points={[
              'Developed responsive UI with React & MUI',
              'Implemented routing and form validation with Formik',
              'Optimized performance and code quality',
            ]}
            badges={["React", "MUI", "Formik", "Routing"]}
          />
        </div>
      </Panel>

      {/* Achievements timeline */}
      <Panel title="Achievements" subtitle="Milestones & Leadership" accent="from-emerald-500 to-teal-500">
        <div className="relative pl-6">
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400/60 to-transparent" />
          <TimelineItem title="CITIL SDG Hackathon Finalist" subtitle="Top 30 of 250 teams" />
          <TimelineItem title="Team Leader — Web Development Team" subtitle="Symposium Website" />
          <TimelineItem title="Event Organizer — Innovest’25" subtitle="Campus-wide innovation fest" />
        </div>
      </Panel>
    </section>
  );
}

const IconTile = ({ icon, label }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4"
  >
    <div className="text-indigo-300">{icon}</div>
    <div className="text-xs text-zinc-300">{label}</div>
  </motion.div>
);

const ExpCard = ({ title, time, points, badges }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-6"
  >
    <div className="flex items-center justify-between gap-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <span className="text-xs text-zinc-300">{time}</span>
    </div>
    <ul className="mt-4 space-y-2 text-sm text-zinc-300 list-disc list-inside">
      {points.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>
    <div className="mt-4 flex flex-wrap gap-2">
      {badges.map((b) => (
        <span key={b} className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10 text-zinc-200">
          {b}
        </span>
      ))}
    </div>
  </motion.div>
);

const TimelineItem = ({ title, subtitle }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6 }}
    className="relative ml-4 pl-6 py-5"
  >
    <div className="absolute left-0 top-5 size-3 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.8)]" />
    <div className="text-base font-medium">{title}</div>
    <div className="text-sm text-zinc-400">{subtitle}</div>
  </motion.div>
);
