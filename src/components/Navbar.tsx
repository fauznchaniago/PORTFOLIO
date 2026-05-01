import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#work' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

interface NavbarProps {
  onProjectClick: () => void;
  onHomeClick: () => void;
  currentView: 'main' | 'projects';
}

export function Navbar({ onProjectClick, onHomeClick, currentView }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-6',
        isScrolled || currentView === 'projects' ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 py-4' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.button
          onClick={onHomeClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg font-black tracking-tighter text-white uppercase flex items-center gap-2"
        >
          PROJECT <span className="text-accent underline decoration-2 underline-offset-4">LOG</span> 
        </motion.button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <motion.button
            onClick={onHomeClick}
            className={cn(
              "text-[10px] font-bold uppercase tracking-widest transition-colors",
              currentView === 'main' ? "text-accent" : "text-zinc-400 hover:text-white"
            )}
          >
            Overview
          </motion.button>
          
          <motion.button
            onClick={onProjectClick}
            className={cn(
              "text-[10px] font-bold uppercase tracking-widest transition-colors",
              currentView === 'projects' ? "text-accent" : "text-zinc-400 hover:text-white"
            )}
          >
            Projects Archive
          </motion.button>

          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-zinc-800 border border-zinc-700 rounded-full text-[10px] font-bold uppercase tracking-widest text-white hover:border-accent hover:text-accent transition-all"
          >
            Connect
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden fixed inset-0 top-[72px] bg-zinc-950 flex flex-col p-8 z-50 overflow-y-auto"
          >
            <div className="flex flex-col gap-8 mt-12">
              <motion.button
                onClick={() => { onHomeClick(); setIsMobileMenuOpen(false); }}
                className={cn(
                  "text-4xl font-bold uppercase tracking-tighter transition-colors flex items-center justify-between group",
                  currentView === 'main' ? "text-accent" : "text-zinc-100 hover:text-accent"
                )}
              >
                Overview
                <ChevronRight size={32} />
              </motion.button>

              <motion.button
                onClick={() => { onProjectClick(); setIsMobileMenuOpen(false); }}
                className={cn(
                  "text-4xl font-bold uppercase tracking-tighter transition-colors flex items-center justify-between group",
                  currentView === 'projects' ? "text-accent" : "text-zinc-100 hover:text-accent"
                )}
              >
                Projects Archive
                <ChevronRight size={32} />
              </motion.button>
            </div>
            
            <div className="mt-auto pt-12 border-t border-zinc-900">
               <motion.a 
                 href="#contact"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.4 }}
                 onClick={() => setIsMobileMenuOpen(false)}
                 className="w-full py-5 bg-accent text-white flex items-center justify-center gap-2 rounded-2xl font-bold uppercase tracking-widest text-sm"
               >
                 Let's Talk <ArrowRight size={20} />
               </motion.a>
               <div className="mt-8 text-[10px] font-mono text-zinc-600 uppercase tracking-widest text-center">
                 Available for strategic partnerships • 2026_LOG
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
