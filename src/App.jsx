import Hero from './components/Hero';
import About from './components/About';
import FeaturedCourses from './components/FeaturedCourses';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ backgroundColor: '#F5EDE0' }} className="min-h-screen text-slate-800">
      <Hero />
      <About />
      <FeaturedCourses />

      {/* Learning Journey / CTA combo */}
      <section id="join" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Your Learning Journey</h2>
          <p className="mt-2 text-slate-700">
            Follow a playful path: spark → practice → mastery. Bounce through milestones with gentle guidance.
          </p>
        </div>
        <div className="relative grid gap-6 md:grid-cols-3">
          {["Spark", "Practice", "Mastery"].map((step, i) => (
            <div
              key={step}
              className="relative rounded-2xl border border-white/40 bg-white/60 p-6 shadow-xl backdrop-blur-md transition-transform duration-200 hover:scale-[1.03]"
            >
              <div
                className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-slate-700 shadow-sm"
                style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}
              >
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: i === 0 ? '#FFB148' : i === 1 ? '#70CE98' : '#FF4D4D' }}
                />
                Step {i + 1}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{step}</h3>
              <p className="mt-1 text-sm text-slate-700">
                {i === 0 && 'Ignite curiosity with short, whimsical lessons.'}
                {i === 1 && 'Practice with quests, checkpoints, and friendly hints.'}
                {i === 2 && 'Show mastery, earn a badge, and unlock the next realm.'}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#courses"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-white shadow-lg transition-transform duration-200 hover:scale-[1.03]"
            style={{ backgroundColor: '#FF4D4D' }}
          >
            Join Maguru Now
          </a>
        </div>
      </section>

      <Community />
      <Footer />
    </div>
  );
}

export default App;
