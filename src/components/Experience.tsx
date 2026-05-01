import { motion } from 'motion/react';
import { EXPERIENCES } from '../constants';

export function Experience() {
  return (
    <section id="work" className="py-32 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex items-center gap-4 mb-20">
        <span className="text-xs font-mono text-white">02 //</span>
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Career Log</span>
      </div>

      <div className="bento-card group overflow-hidden relative rounded-[2.5rem] p-10 lg:p-14 bg-zinc-900/10 border-white/5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />
        
        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-16">Professional Timeline</h3>
        
        <div className="space-y-16">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-12 border-l border-white/5 pb-16 last:pb-0 group/exp"
            >
              {/* Timeline marker */}
              <div className="absolute -left-[4px] top-0 w-2 h-2 bg-white rounded-full ring-4 ring-white/10 group-hover/exp:scale-150 transition-transform duration-500" />
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div>
                  <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-2 group-hover/exp:translate-x-2 transition-transform duration-500">{exp.role}</h4>
                  <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.2em]">{exp.company}</p>
                </div>
                <div className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em] px-6 py-2 bg-zinc-950 border border-white/5 rounded-full self-start">
                  {exp.period}
                </div>
              </div>

              <div className="space-y-4">
                {exp.description.map((item, i) => (
                  <p key={i} className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-3xl flex items-start gap-3">
                    <span className="text-zinc-700 mt-1.5 w-1 h-1 bg-zinc-700 rounded-full flex-shrink-0" /> 
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
