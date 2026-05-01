import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { cn } from '../lib/utils';
import { ProjectDetail } from './ProjectDetail';
import { Project } from '../types';

interface ProjectsProps {
  isFullscreen?: boolean;
  onLoadMore?: () => void;
}

export function Projects({ isFullscreen, onLoadMore }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [visibleCount, setVisibleCount] = useState(isFullscreen ? PROJECTS.length : 2);
  const bottomRef = useRef<HTMLDivElement>(null);
  
  const hasMore = !isFullscreen && visibleCount < PROJECTS.length;

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 2, PROJECTS.length));
    // Focus on the newly revealed items
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, 100);
  };

  return (
    <section id="projects" className={cn(
      "py-32 px-6 max-w-7xl mx-auto",
      isFullscreen ? "pt-0" : "border-t border-white/5"
    )}>
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-mono text-white">01 //</span>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              {isFullscreen ? "Full Inventory" : "Selected Works"}
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic">
            {isFullscreen ? "ARCHIVE" : "CONTROL"} <br />
            <span className="text-zinc-600 block mt-2">PROJECTS</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {(isFullscreen ? PROJECTS : PROJECTS.slice(0, visibleCount)).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: (index % 2) * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className={cn(
              "bento-card group flex flex-col justify-end min-h-[450px] md:min-h-[550px] overflow-hidden p-0 relative cursor-pointer"
            )}
          >
            <div className="absolute inset-x-0 bottom-0 h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20" />
            
            <div className="absolute inset-0 z-0">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 group-hover:translate-x-8 group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
            </div>
            
            <div className="relative z-10 p-8 lg:p-10">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-zinc-900/60 backdrop-blur-md border border-zinc-800/50 rounded text-[9px] font-bold uppercase tracking-widest text-zinc-400">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
                <div className="space-y-3">
                  {project.period && (
                    <div className="text-[9px] font-mono text-accent uppercase tracking-[0.2em] mb-1">
                      {project.period}
                    </div>
                  )}
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight uppercase leading-tight group-hover:text-accent transition-colors max-w-sm">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 text-xs md:text-sm max-w-md leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>
                <div className="w-12 h-12 bg-white/10 hover:bg-white backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:text-zinc-950 transition-all transform group-hover:rotate-45 shrink-0">
                  <ExternalLink size={20} />
                </div>
              </div>
            </div>

            {/* Interaction hint */}
            <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent font-mono bg-zinc-950/80 backdrop-blur-md px-4 py-2 rounded-full border border-accent/20">
              Explore Details <ArrowRight size={14} />
            </div>
          </motion.div>
        ))}
      </div>

      <div ref={bottomRef} className="h-px" />

      {hasMore && (
        <div className="mt-16 flex justify-center">
          <button 
            onClick={onLoadMore || showMore}
            className="group relative px-12 py-4 bg-transparent border border-white/10 rounded-full overflow-hidden transition-all hover:border-white/40"
          >
            <div className="absolute inset-0 bg-white transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 text-xs font-black uppercase tracking-[0.3em] text-white group-hover:text-black transition-colors flex items-center gap-3">
              Load More Projects <ArrowRight size={14} />
            </span>
          </button>
        </div>
      )}

      <ProjectDetail 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
}
