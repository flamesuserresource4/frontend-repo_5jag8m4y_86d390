import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Database, Code, Wrench, MessageCircle, Github, Linkedin, Mail, Globe } from 'lucide-react';

const skills = {
  Languages: ['Python', 'Java', 'C++', 'JavaScript', 'Dart'],
  'Web Dev': ['HTML5', 'CSS3', 'REST API', 'Responsive UI'],
  Frameworks: ['Flutter', 'React.js', 'Node.js', 'React Native', 'LangChain', 'TensorFlow'],
  Databases: ['MySQL', 'MongoDB'],
  Tools: ['Git', 'VS Code', 'Figma', 'Google Colab'],
};

const certificates = [
  'AWS Cloud Practitioner',
  'MongoDB Basics',
  'Accenture Job Simulation',
  'UX Design — Google',
  'Cloud Computing — IIT Kharagpur',
  'DSA — University of San Diego',
];

export default function SkillsAndContact() {
  return (
    <section className="bg-gradient-to-b from-zinc-950 to-black text-white">
      {/* Skill Orbit */}
      <div className="relative py-24">
        <h2 className="text-center text-3xl md:text-5xl font-extrabold">Skill Matrix</h2>
        <div className="relative mx-auto mt-12 h-72 w-72 md:h-96 md:w-96">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <Core />
          {Object.entries(skills).map(([group, list], i) => (
            <Orbit key={group} index={i} label={group} items={list} />
          ))}
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 px-6 text-zinc-300">
          {Object.values(skills).flat().slice(0, 15).map((s) => (
            <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">{s}</span>
          ))}
        </div>
      </div>

      {/* Certificates */}
      <div className="relative py-20">
        <h3 className="text-center text-2xl md:text-4xl font-bold">Certificates</h3>
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {certificates.map((c, i) => (
            <motion.a
              key={c}
              href="#"
              whileHover={{ rotateX: -6, y: -6 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-600/20 via-fuchsia-600/10 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-sm text-zinc-300">Badge</div>
                <div className="mt-1 text-lg font-semibold">{c}</div>
                <div className="mt-3 text-xs text-indigo-300">View credential →</div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Profiles */}
      <div className="relative py-16">
        <h3 className="text-center text-2xl md:text-4xl font-bold">Technical Profiles</h3>
        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 sm:grid-cols-2 gap-6 px-6">
          <ProfileCard title="LeetCode" subtitle="1700+ rating • Top 10% • 500+ problems" />
          <ProfileCard title="CodeChef" subtitle="2-Star • Rating 1447" />
        </div>
      </div>

      {/* Contact */}
      <div className="relative py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_60%)]" />
        <h3 className="relative z-10 text-center text-2xl md:text-4xl font-bold">Let’s build the future together — One line of code at a time 💡</h3>
        <div className="relative z-10 mx-auto mt-10 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <form className="grid gap-4">
            <input className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-indigo-400" placeholder="Your email" type="email" />
            <textarea className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-indigo-400" placeholder="Your message" rows={4} />
            <button type="submit" className="rounded-lg bg-indigo-600 hover:bg-indigo-500 px-4 py-3 font-medium">Send</button>
          </form>
          <div className="mt-6 flex items-center justify-center gap-4 text-zinc-300">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white"><Github /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white"><Linkedin /></a>
            <a href="mailto:kandiah@example.com" className="hover:text-white"><Mail /></a>
            <a href="https://your-portfolio.example.com" target="_blank" rel="noreferrer" className="hover:text-white"><Globe /></a>
          </div>
        </div>
      </div>
    </section>
  );
}

const Core = () => (
  <div className="absolute inset-0 grid place-items-center">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
      className="size-28 md:size-36 grid place-items-center rounded-full bg-gradient-to-br from-indigo-500/30 to-emerald-500/30 border border-white/10 shadow-[0_0_60px_rgba(99,102,241,0.25)]"
    >
      <Cpu />
      <div className="text-xs mt-1">AI Core</div>
    </motion.div>
  </div>
);

const Orbit = ({ index, label, items }) => {
  const radius = 120 + index * 28;
  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{ transform: `translate(-50%, -50%)` }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 40 - index * 4, ease: 'linear' }}
        className="relative"
        style={{ width: radius * 2, height: radius * 2 }}
      >
        <div className="absolute inset-0 rounded-full border border-white/10" />
        {items.slice(0, 6).map((it, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const x = radius + Math.cos(angle) * radius - 20;
          const y = radius + Math.sin(angle) * radius - 20;
          return (
            <motion.div
              key={it}
              whileHover={{ scale: 1.1 }}
              className="absolute w-10 h-10 grid place-items-center rounded-full bg-white/10 border border-white/10 text-xs"
              style={{ left: x, top: y }}
              title={it}
            >
              {it}
            </motion.div>
          );
        })}
      </motion.div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -mt-[calc(0.5rem+2px)] text-[10px] text-zinc-300 bg-black/40 px-1.5 rounded border border-white/10">
        {label}
      </div>
    </div>
  );
};

const ProfileCard = ({ title, subtitle }) => (
  <motion.div
    whileHover={{ y: -6 }}
    className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
  >
    <div className="text-lg font-semibold">{title}</div>
    <div className="text-sm text-zinc-300 mt-1">{subtitle}</div>
    <div className="mt-4 h-2 w-full rounded-full bg-white/10 overflow-hidden">
      <motion.div initial={{ width: '20%' }} whileInView={{ width: '80%' }} viewport={{ once: true }} className="h-full bg-gradient-to-r from-indigo-400 to-emerald-400" />
    </div>
  </motion.div>
);
