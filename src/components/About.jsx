import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">About Maguru</h2>
          <p className="text-slate-700">
            Maguru is a whimsical e-learning realm where ancient fantasy meets modern skills. Learn through quests,
            collect badges, and unlock scrolls guided by friendly mentors. Our hand-drawn aesthetic and lighthearted
            animations make each lesson feel like a small adventure.
          </p>
          <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              'Quest-based lessons',
              'Mentor-guided paths',
              'Hand‑drawn UI',
              'Community support',
            ].map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
                className="flex items-center gap-2 rounded-xl bg-white/70 p-3 shadow-sm backdrop-blur-md"
              >
                <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: '#70CE98' }} />
                <span className="text-slate-800">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative mx-auto aspect-[4/3] w-full max-w-md rounded-3xl bg-gradient-to-br from-[#FFB14833] via-white/40 to-[#70CE9833] p-4 shadow-xl">
            <div className="h-full w-full rounded-2xl border border-white/50 bg-white/60 shadow-inner" />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-black/5" />
          </div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -right-6 -top-6 rounded-2xl bg-white/80 px-3 py-2 text-sm shadow-md backdrop-blur"
          >
            ✨ Playful by design
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
