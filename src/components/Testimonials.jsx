import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'Maguru turns complex topics into playful quests. I actually look forward to studying!',
    name: 'Aiko',
    role: 'Frontend Apprentice',
  },
  {
    quote: 'The animations feel magical, but the learning path is super clear and practical.',
    name: 'Rizky',
    role: 'Design Adept',
  },
  {
    quote: 'Mentors are kind and supportive. It feels like a cozy guild of learners.',
    name: 'Mei',
    role: 'Backend Novice',
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">What Learners Say</h2>
        <p className="mt-2 text-slate-700">Glassy panels, soft glow, modern layout.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.blockquote
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.05 }}
            className="relative overflow-hidden rounded-2xl border border-white/50 bg-white/40 p-6 shadow-2xl backdrop-blur-xl"
          >
            <div
              className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full blur-3xl opacity-60"
              style={{ background: 'radial-gradient(circle, #FFB14855, transparent 60%)' }}
            />
            <p className="text-slate-800">“{t.quote}”</p>
            <footer className="mt-4 text-sm text-slate-600">
              <span className="font-semibold text-slate-800">{t.name}</span> • {t.role}
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
