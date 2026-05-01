import { motion } from 'motion/react';

const LOGOS = [
  { name: 'Jadestone Energy', url: 'https://www.openkerja.id/wp-content/uploads/2023/03/Lowongan-Kerja-Jadestone-Energy.jpg' },
  { name: 'Pertamina', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6O3xpyEPeePC6_wVCjdvIccQ_BKCpprKGmw&s' },
  { name: 'Petrochina', url: 'https://download.logo.wine/logo/PetroChina/PetroChina-Logo.wine.png' },
  { name: 'Fluid Science Dynamics', url: 'https://fsd.co.id/assets/upload/md/logo-fsd-af1ca.png' },
  { name: 'Mitsubishi Chemical Group', url: 'https://upload.wikimedia.org/wikipedia/commons/3/39/MITSUBISHI_CHEMICAL_GROUP.png' },
  { name: 'Cimory', url: 'https://menara165.com/wp-content/uploads/2021/01/logo-cimory-web.png' },
  { name: 'Bukit Asam', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRObs0m8q4WhNvGMwVGR7phoFspsc2lixBntg&s' },
];

export const TrustedBy = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] p-16 md:p-24 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] relative z-10 border border-white/10">
          <div className="text-center mb-16">
            <h3 className="text-[10px] md:text-sm font-black uppercase tracking-[0.6em] text-zinc-400">
              Projects I Have Worked On
            </h3>
          </div>

          <div className="relative overflow-hidden">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/95 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/95 to-transparent z-10 pointer-events-none" />

            <div className="flex">
              <motion.div
                className="flex items-center gap-16 md:gap-32 shrink-0 px-24"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  duration: 30, // Slightly slower duration for a smoother, less frantic feel
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {/* Double the logos for seamless loop */}
                {[...LOGOS, ...LOGOS].map((logo, i) => (
                  <div key={`${logo.name}-${i}`} className="flex items-center justify-center">
                    <img
                      src={logo.url}
                      alt={logo.name}
                      referrerPolicy="no-referrer"
                      className="h-16 md:h-28 w-auto object-contain max-w-[280px] md:max-w-[400px]"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Accent */}
      <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-full h-full bg-accent/10 blur-[160px] rounded-full pointer-events-none" />
    </section>
  );
};
