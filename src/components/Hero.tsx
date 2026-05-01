import { motion } from 'motion/react';
import { ArrowDownRight, Github, Linkedin, Twitter, User } from 'lucide-react';
import { MediumIcon } from './Icons';

export function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-12 gap-4">
        {/* Intro Block */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="col-span-12 lg:col-span-8 bg-zinc-900/20 border border-white/5 backdrop-blur-3xl rounded-[2.5rem] p-10 lg:p-14 flex flex-col justify-between group overflow-hidden relative min-h-[500px]"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 h-full flex flex-col">
            <div className="w-12 h-12 bg-white rounded-xl mb-12 flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.15)] group-hover:scale-110 transition-transform duration-500">
              <User className="text-black" size={24} />
            </div>
            
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-zinc-700" />
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-500">Engineer Profile</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black leading-[0.9] tracking-tighter mb-8 group-hover:tracking-tight transition-all duration-700">
                <span className="text-white block">M.Fauzan Alfariz</span>
              </h1>
              
              <div className="space-y-6">
                <p className="text-2xl md:text-4xl text-white font-bold leading-tight tracking-tight">
                  Instrument & Control <br className="hidden md:block" /> 
                  <span className="text-zinc-600 font-light italic">System Engineer</span>
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 pt-10 border-t border-white/5 mt-10">
                  <div className="space-y-5">
                    {[
                      { label: "Deep Learning", active: true },
                      { label: "Robotics & AI", active: true },
                      { label: "Machine Learning", active: true }
                    ].map((skill, i) => (
                      <div key={i} className="flex items-center gap-4 group/item">
                        <div className="w-1.5 h-1.5 bg-white ring-4 ring-white/10 rounded-full" />
                        <span className="text-zinc-100 font-mono text-[11px] uppercase tracking-[0.2em] group-hover/item:translate-x-2 transition-transform">{skill.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-5">
                    {[
                      { label: "Instrumentation & System Control", active: true },
                      { label: "Workflow (n8n)", active: true },
                      { label: "Cisco Systems", active: true },
                      { label: "Troubleshooting", active: true }
                    ].map((skill, i) => (
                      <div key={i} className="flex items-center gap-4 group/item">
                        <div className="w-1.5 h-1.5 bg-white ring-4 ring-white/10 rounded-full" />
                        <span className="text-zinc-100 font-mono text-[11px] uppercase tracking-[0.2em] group-hover/item:translate-x-2 transition-transform">{skill.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-auto pt-14">
              <div className="px-6 py-2.5 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-[0.3em] shadow-xl hover:scale-105 transition-transform cursor-default">Status: Active</div>
              <div className="px-6 py-2.5 bg-zinc-900 border border-white/10 text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-zinc-800 transition-colors cursor-default">Remote Ops</div>
            </div>
          </div>
        </motion.div>

        <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
          {/* Connect Block */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex-1 bg-zinc-900 border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-between group overflow-hidden relative"
          >
            <div className="relative z-10">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-10">Network Hub</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { Icon: Github, url: "https://github.com/alfarizmfauzan" },
                  { Icon: Linkedin, url: "https://www.linkedin.com/in/fauznalfariz/" },
                  { Icon: Twitter, url: "https://twitter.com/alfarizmfauzan" },
                  { Icon: MediumIcon, url: "https://medium.com/@alfarizmfauzan" },
                ].map((social, i) => (
                  <motion.a 
                    key={i} 
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, backgroundColor: '#ffffff', color: '#000000' }}
                    className="aspect-square bg-zinc-950 border border-white/5 rounded-3xl flex items-center justify-center text-zinc-500 transition-all duration-300 shadow-2xl"
                  >
                    <social.Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
            <p className="mt-8 text-[10px] uppercase font-mono tracking-widest text-zinc-600">Available for collaborations</p>
          </motion.div>

          {/* Quote Block */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-zinc-900/50 border border-white/5 rounded-[2.5rem] p-10 flex items-center justify-center text-center italic group overflow-hidden relative"
          >
            <p className="text-zinc-500 text-lg md:text-xl font-serif leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-700">
              "Reliability is the foundation of every automated system."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
