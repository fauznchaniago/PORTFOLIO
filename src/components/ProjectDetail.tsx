import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { Project } from '../types';
import { cn } from '../lib/utils';

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-zinc-950/90 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="w-full max-w-5xl bg-zinc-900 border border-zinc-800 rounded-[2.5rem] overflow-hidden relative z-10 max-h-[90vh] flex flex-col group"
          >
            <div className="absolute inset-x-0 bottom-0 h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-3 bg-zinc-800 hover:bg-accent hover:text-white rounded-full transition-all z-20"
            >
              <X size={24} />
            </button>

            <div className="overflow-y-auto custom-scrollbar">
              <div className="relative w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto block"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-8 md:p-12 lg:p-16">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-mono text-accent uppercase tracking-[0.2em]">Case Study</span>
                      {project.period && (
                        <>
                          <div className="h-[1px] w-6 bg-zinc-800" />
                          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">{project.period}</span>
                        </>
                      )}
                      <div className="h-[1px] w-12 bg-zinc-800" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase text-white leading-tight">
                      {project.title}
                    </h2>
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      className="flex items-center gap-2 px-6 py-3 bg-white text-zinc-950 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-accent hover:text-white transition-all shadow-lg"
                    >
                      Live Demo <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.github || "#"}
                      className="flex items-center gap-2 px-6 py-3 bg-zinc-800 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:border-zinc-100 transition-all border border-zinc-700"
                    >
                      Github <Github size={16} />
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                  {/* Left Column: Content */}
                  <div className="lg:col-span-7 xl:col-span-8 space-y-16">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-[1px] bg-zinc-800" />
                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Overview</h3>
                      </div>
                      <p className="text-zinc-400 text-sm md:text-base font-light leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>

                    <div className="space-y-8">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-[1px] bg-zinc-800" />
                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Technical Scope</h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.features.map((feature, i) => (
                          <div key={i} className="flex items-start gap-4 p-6 bg-zinc-900/20 border border-white/5 rounded-[2rem] group/item hover:bg-zinc-900/40 transition-all duration-500">
                            <div className="mt-1 w-5 h-5 rounded-full border border-zinc-800 flex items-center justify-center group-hover/item:border-accent transition-colors">
                              <CheckCircle2 size={10} className="text-zinc-800 group-hover/item:text-accent transition-colors" />
                            </div>
                            <span className="text-xs text-zinc-400 font-medium leading-normal tracking-tight group-hover/item:text-zinc-200 transition-colors">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Sidebar */}
                  <div className="lg:col-span-5 xl:col-span-4">
                    <div className="sticky top-8 space-y-8">
                      <div className="p-10 bg-zinc-900/30 border border-white/5 rounded-[2.5rem] relative overflow-hidden group/arch">
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/[0.015] rounded-full blur-3xl group-hover/arch:scale-150 transition-transform duration-1000" />
                        
                        <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600 mb-10 relative z-10">System Architecture</h3>
                        
                        <div className="space-y-3 relative z-10">
                          {project.tags.map((tag) => (
                            <div 
                              key={tag} 
                              className="px-6 py-4 bg-zinc-950/50 border border-white/5 rounded-2xl flex items-center justify-between group/tag hover:border-white/20 transition-all duration-300"
                            >
                              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest group-hover/tag:text-white transition-colors">
                                {tag}
                              </span>
                              <div className="w-1 h-1 bg-zinc-800 rounded-full group-hover/tag:bg-accent group-hover/tag:scale-150 transition-all" />
                            </div>
                          ))}
                        </div>
                        
                        <div className="mt-10 pt-10 border-t border-white/5">
                          <p className="text-[9px] font-mono text-zinc-700 uppercase tracking-[0.2em] leading-relaxed">
                            Validated Architecture <br />
                            Industrial Grade Implementation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
