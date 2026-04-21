import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="text-center relative z-10">
        <div className="text-[12rem] font-bold text-white/5 leading-none select-none">404</div>
        <div className="relative -mt-20">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent mb-6">
            The Stone Is Hidden
          </h1>
          <p className="text-gray-400 mb-10 max-w-md mx-auto text-lg">
            The page you are looking for has returned to the earth, or maybe it was just a mirage. Let&apos;s guide you back to the light.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="px-8 py-3.5 bg-teal-500 text-white font-bold rounded-xl shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300 hover:bg-teal-400 hover:scale-105"
            >
              Back to Surface
            </Link>
            <Link
              href="/blog"
              className="px-8 py-3.5 glass-card text-white font-bold rounded-xl border border-white/10 hover:bg-white/5 transition-all duration-300"
            >
              Explore Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
