import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const courses = [
  {
    title: 'Mystic TypeScript',
    desc: 'Enchant types and tame dragons with generics.',
    color: '#FFB148',
  },
  {
    title: 'React Scrolls',
    desc: 'Compose magical interfaces with hooks and wisdom.',
    color: '#70CE98',
  },
  {
    title: 'Next.js Portals',
    desc: 'Warp through routes and prefetch realms.',
    color: '#FF4D4D',
  },
  {
    title: 'Design Sigils',
    desc: 'Craft hand‑drawn icons and glass panels.',
    color: '#FFB148',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 14 } },
};

export default function FeaturedCourses() {
  return (
    <section id="courses" className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Featured Courses</h2>
          <p className="mt-2 text-slate-700">Explore handpicked adventures to kickstart your journey.</p>
        </div>
        <a
          href="#join"
          className="hidden rounded-xl px-4 py-2 text-white shadow-md md:inline-block"
          style={{ backgroundColor: '#FF4D4D' }}
        >
          View All
        </a>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {courses.map((c) => (
          <motion.div
            key={c.title}
            variants={item}
            whileHover={{ scale: 1.03 }}
            className="group relative overflow-hidden rounded-2xl bg-white/70 p-5 shadow-xl backdrop-blur-md"
          >
            <div className="absolute right-0 top-0 h-24 w-24 -translate-y-1/2 translate-x-1/3 rounded-full blur-2xl opacity-60" style={{ backgroundColor: c.color + '55' }} />
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
              <Star className="h-3 w-3" style={{ color: c.color }} />
              Popular
            </div>
            <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
            <p className="mt-1 text-sm text-slate-700">{c.desc}</p>
            <button
              className="mt-4 inline-flex items-center rounded-lg px-3 py-2 text-sm text-white shadow-md"
              style={{ backgroundColor: '#FF4D4D' }}
            >
              Enroll
            </button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
