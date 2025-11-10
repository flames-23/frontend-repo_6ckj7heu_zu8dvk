import { motion } from 'framer-motion';
import { Rocket, Star } from 'lucide-react';

const floatingVariant = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          variants={floatingVariant}
          animate="animate"
          className="absolute -top-10 -left-10 h-72 w-72 rounded-full blur-3xl opacity-60"
          style={{ background: 'radial-gradient(circle at 30% 30%, #FFB14855, transparent 60%)' }}
        />
        <motion.div
          variants={floatingVariant}
          animate="animate"
          className="absolute -bottom-16 -right-10 h-80 w-80 rounded-full blur-3xl opacity-60"
          style={{ background: 'radial-gradient(circle at 70% 70%, #70CE9855, transparent 60%)' }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 shadow-sm backdrop-blur-md">
            <Star className="h-4 w-4 text-[#FFB148]" />
            <span className="text-sm font-medium text-slate-700">Ancient Fantasy Asia • Learn with wonder</span>
          </div>

          <h1 className="font-extrabold leading-tight text-slate-900" style={{ fontFamily: 'Mona Sans, Inter, system-ui, -apple-system' }}>
            <span className="block text-4xl sm:text-5xl md:text-6xl">Maguru</span>
            <span className="mt-2 block bg-gradient-to-r from-[#FFB148] via-[#70CE98] to-[#FF4D4D] bg-clip-text text-3xl text-transparent sm:text-4xl md:text-5xl">E-Learning, reimagined with a mystical twist</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base text-slate-700 sm:text-lg">
            Step into a lighthearted realm of scrolls, sages, and sparkles. Master modern skills through whimsical, hand‑drawn worlds and playful quests.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#courses"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-white shadow-lg transition-transform duration-200 hover:scale-[1.03]"
              style={{ backgroundColor: '#FF4D4D' }}
            >
              <Rocket className="h-5 w-5" />
              Start Learning
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-6 py-3 text-slate-800 shadow-sm backdrop-blur-md transition-transform duration-200 hover:scale-[1.03]"
            >
              Explore the Realm
            </a>
          </div>

          <div className="relative mt-14 w-full max-w-4xl rounded-2xl border border-white/40 bg-white/40 p-4 shadow-xl backdrop-blur-md">
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.02 * i }}
                  className="aspect-square rounded-xl bg-gradient-to-br from-white/70 to-white/30 shadow-inner"
                />
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
