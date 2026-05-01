/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact, Footer, Marquee } from './components/Contact';
import { TrustedBy } from './components/TrustedBy';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [view, setView] = useState<'main' | 'projects'>('main');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-accent selection:text-zinc-950">
      <Navbar onProjectClick={() => setView('projects')} onHomeClick={() => setView('main')} currentView={view} />
      
      <AnimatePresence mode="wait">
        {view === 'main' ? (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <Projects onLoadMore={() => setView('projects')} />
            <Experience />
            <Marquee />
            <Skills />
            <Contact />
            <TrustedBy />
            <Footer />
          </motion.div>
        ) : (
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="pt-24 pb-20"
          >
            <div className="max-w-7xl mx-auto px-6 mb-12">
              <button 
                onClick={() => setView('main')}
                className="group flex items-center gap-2 text-zinc-500 hover:text-white transition-colors"
              >
                <span className="text-xs font-mono uppercase tracking-[0.3em]">← Back to Overview</span>
              </button>
            </div>
            <Projects isFullscreen />
            <Contact />
            <TrustedBy />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

