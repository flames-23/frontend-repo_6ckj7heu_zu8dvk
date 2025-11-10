import { motion } from 'framer-motion';
import { User } from 'lucide-react';

const mentors = Array.from({ length: 8 }).map((_, i) => ({
  name: `Sage ${i + 1}`,
}));

export default function Community() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Community & Mentors</h2>
        <p className="mt-2 text-slate-700">Learn with friendly sages and fellow travelers.</p>
      </div>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 md:gap-6">
        {mentors.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.04 }}
            whileHover={{ scale: 1.03 }}
            className="flex flex-col items-center rounded-2xl bg-white/70 p-4 shadow-xl backdrop-blur-md"
          >
            <div className="relative mb-3 h-16 w-16">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFB14866] via-white/60 to-[#70CE9866]" />
              <div className="relative flex h-full w-full items-center justify-center rounded-full border border-white/60 bg-white/80 shadow-inner">
                <User className="h-7 w-7 text-slate-600" />
              </div>
            </div>
            <div className="text-sm font-medium text-slate-800">{m.name}</div>
            <div className="text-xs text-slate-600">Arcane Mentor</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
