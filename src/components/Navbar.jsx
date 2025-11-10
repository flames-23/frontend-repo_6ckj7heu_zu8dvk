import { Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <nav className="flex items-center justify-between rounded-2xl border border-white/30 bg-white/60 px-4 py-3 shadow-lg backdrop-blur-md">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-[#FFB148] to-[#FF4D4D] text-white shadow">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="text-lg font-extrabold tracking-tight text-slate-900">Maguru</span>
          </a>

          <div className="hidden items-center gap-6 md:flex">
            <a href="#courses" className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900">Courses</a>
            <a href="#community" className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900">Community</a>
            <a href="#about" className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900">About</a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#join"
              className="rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-md transition-transform duration-200 hover:scale-[1.03]"
              style={{ backgroundColor: '#FF4D4D' }}
            >
              Sign up
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
