export default function TrustStrip() {
  return (
    <section className="relative py-12 border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm text-slate-400 mb-8">
          Early access interest from
        </p>

        <div className="flex flex-wrap items-center justify-center gap-12 opacity-40">
          <div className="w-24 h-12 bg-slate-700/30 rounded flex items-center justify-center">
            <span className="text-slate-500 text-xs font-mono">FUND A</span>
          </div>
          <div className="w-24 h-12 bg-slate-700/30 rounded flex items-center justify-center">
            <span className="text-slate-500 text-xs font-mono">DESK B</span>
          </div>
          <div className="w-24 h-12 bg-slate-700/30 rounded flex items-center justify-center">
            <span className="text-slate-500 text-xs font-mono">PROTO C</span>
          </div>
          <div className="w-24 h-12 bg-slate-700/30 rounded flex items-center justify-center">
            <span className="text-slate-500 text-xs font-mono">TEAM D</span>
          </div>
        </div>
      </div>
    </section>
  );
}
