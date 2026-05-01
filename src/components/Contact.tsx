import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, ArrowRight, MapPin, Phone, Github, Linkedin, Twitter, MessageSquare, Send, MessageCircle } from 'lucide-react';
import { MediumIcon } from './Icons';

export function Contact() {
  const [message, setMessage] = useState('');

  const handleWhatsApp = () => {
    const phone = '6285269847245';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message || 'Hello!')}`;
    window.open(url, '_blank');
  };

  const handleEmail = () => {
    const email = 'alfarizmfauzan16@gmail.com';
    const url = `mailto:${email}?body=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-xs font-mono text-accent">04 //</span>
        <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Initiate Contact</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-4 bento-card bg-zinc-900 flex flex-col justify-between items-start min-h-[300px] border border-zinc-800 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-x-0 bottom-0 h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500">Contact</h3>
          <div className="text-white font-bold leading-tight relative z-10 mt-4">
            <div className="text-4xl tracking-tighter uppercase mb-4 leading-none text-white">Let's build <br/> something.</div>
            <div className="space-y-3">
              <a href="mailto:alfarizmfauzan16@gmail.com" className="block text-base font-mono text-zinc-400 hover:text-white transition-colors">
                alfarizmfauzan16@gmail.com
              </a>
              <a href="tel:085268947245" className="block text-base font-mono text-zinc-400 hover:text-white transition-colors">
                085268947245
              </a>
            </div>
          </div>
          
          <div className="w-full space-y-4 relative z-10 pt-8">
             <div className="flex justify-between items-center text-[10px] font-mono text-zinc-600 uppercase tracking-widest border-b border-zinc-800 pb-2">
                <span>Availability</span>
                <span className="text-green-500">Available Now</span>
             </div>
             <div className="flex justify-between items-center text-[10px] font-mono text-zinc-600 uppercase tracking-widest border-b border-zinc-800 pb-2">
                <span>Response Time</span>
                <span className="text-zinc-400">&lt; 24 Hours</span>
             </div>
          </div>
        </div>

        <div className="md:col-span-8 bento-card flex flex-col border-zinc-800 bg-zinc-900/40 p-8 md:p-10 relative overflow-hidden group">
          <div className="absolute inset-x-0 bottom-0 h-1 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          <div className="flex flex-col h-full relative z-10">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-zinc-500 flex items-center gap-2">
                <MessageSquare size={14} className="text-accent" />
                Quick Message
              </h3>
              <div className="flex gap-4">
                 <div className="flex flex-col items-end">
                    <span className="text-[10px] font-mono text-zinc-600 uppercase">Location</span>
                    <span className="text-xs text-white font-bold">Indonesia</span>
                 </div>
              </div>
            </div>

            <div className="flex-grow flex flex-col gap-6">
              <textarea 
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full flex-grow bg-zinc-950/50 border border-zinc-800 rounded-2xl p-6 text-white placeholder:text-zinc-700 focus:outline-none focus:border-accent transition-all resize-none font-medium text-lg leading-relaxed shadow-inner"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button 
                  onClick={handleEmail}
                  className="group flex items-center justify-center gap-3 bg-white text-zinc-950 py-5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-accent hover:text-white transition-all shadow-xl"
                >
                  <Mail size={18} className="group-hover:scale-110 transition-transform" />
                  Send via Email
                </button>
                <button 
                  onClick={handleWhatsApp}
                  className="group flex items-center justify-center gap-3 bg-zinc-800 text-white py-5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-green-600 border border-zinc-700 hover:border-green-500 transition-all shadow-xl"
                >
                  <MessageCircle size={18} className="group-hover:scale-110 transition-transform text-green-500 group-hover:text-white" />
                  WhatsApp Me
                </button>
              </div>
            </div>

            <div className="mt-8 flex justify-between items-center">
              <div className="flex gap-6 items-center">
                <motion.a 
                  href="https://github.com/alfarizmfauzan" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group/social"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} className="text-zinc-600 group-hover/social:text-accent transition-colors duration-300" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/fauznalfariz/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group/social"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={20} className="text-zinc-600 group-hover/social:text-accent transition-colors duration-300" />
                </motion.a>
                <motion.a 
                  href="https://twitter.com/alfarizmfauzan" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group/social"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter size={20} className="text-zinc-600 group-hover/social:text-accent transition-colors duration-300" />
                </motion.a>
                <motion.a 
                  href="https://medium.com/@alfarizmfauzan" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group/social"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <MediumIcon size={20} className="text-zinc-600 group-hover/social:text-accent transition-colors duration-300" />
                </motion.a>
              </div>
              <p className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest hidden sm:block">
                Secure_Channel_Active
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
      <div>© {currentYear} PROJECT DASHBOARD</div>
      <div className="flex gap-8 mt-4 md:mt-0">
        <span>Local Time: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })} GMT+7</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
          Status: Active_Session_04
        </span>
      </div>
    </footer>
  );
}

export function Marquee() {
  return (
    <div className="py-20 bg-accent text-zinc-950 overflow-hidden select-none">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-20 text-6xl md:text-8xl font-black italic tracking-tighter uppercase pr-20"
        >
          <span>Available for hire</span>
          <span className="opacity-30">Open for collaboration</span>
          <span>Strategic consulting</span>
          <span className="opacity-30">Full stack architecture</span>
          <span>Available for hire</span>
          <span className="opacity-30">Open for collaboration</span>
        </motion.div>
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex items-center gap-20 text-6xl md:text-8xl font-black italic tracking-tighter uppercase pr-20"
        >
          <span>Available for hire</span>
          <span className="opacity-30">Open for collaboration</span>
          <span>Strategic consulting</span>
          <span className="opacity-30">Full stack architecture</span>
          <span>Available for hire</span>
          <span className="opacity-30">Open for collaboration</span>
        </motion.div>
      </div>
    </div>
  );
}
