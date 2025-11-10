import { Github, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-black/5 bg-white/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-xl font-extrabold text-slate-900">Maguru</span>
            <span className="text-sm text-slate-600">© {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="rounded-full p-2 transition-transform hover:scale-[1.03]" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-slate-700" />
            </a>
            <a href="#" className="rounded-full p-2 transition-transform hover:scale-[1.03]" aria-label="YouTube">
              <Youtube className="h-5 w-5 text-slate-700" />
            </a>
            <a href="#" className="rounded-full p-2 transition-transform hover:scale-[1.03]" aria-label="GitHub">
              <Github className="h-5 w-5 text-slate-700" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
