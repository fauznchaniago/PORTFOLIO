import { motion } from 'motion/react';
import { SKILLS } from '../constants';

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-xs font-mono text-accent">03 //</span>
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Technical Arsenal</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-8 bento-card group overflow-hidden relative">
          <div className="absolute inset-x-0 bottom-0 h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 mb-8">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill, index) => (
              <motion.span
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-xl text-xs font-bold font-mono tracking-tight text-white hover:border-accent hover:text-accent transition-all cursor-default"
              >
                {skill.name}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="md:col-span-4 bento-card bg-accent/5 border-accent/20 flex flex-col justify-center text-center group overflow-hidden relative">
          <div className="absolute inset-x-0 bottom-0 h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          <div className="text-4xl font-bold text-accent mb-2">99.9%</div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-accent/60">Uptime Reliability</div>
          <div className="mt-8 text-sm text-zinc-400 font-medium">Focused on building stable, scalable architectural patterns.</div>
        </div>
      </div>
    </section>
  );
}
