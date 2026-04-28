export function HowItWorks() {
  return (
    <section id="how" className="relative px-4 py-20 z-10 overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/architecture-map.png')] bg-cover bg-center opacity-0 mix-blend-multiply" />
      </div>

      <div className="mb-16 flex flex-col items-center text-center z-30">
        <div className="inline-flex items-center justify-center rounded-full border border-[var(--accent)]/30 bg-white/40 px-5 py-2 text-[10px] font-display font-black uppercase tracking-[0.2em] text-[var(--accent)] mb-6 backdrop-blur-md shadow-sm">
          Infrastructure
        </div>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-[var(--foreground)] tracking-tighter leading-[0.85] uppercase max-w-4xl drop-shadow-[0_10px_30px_rgba(66,13,75,0.2)] flex flex-col items-center">
          <span>Queue Intelligence</span>
          <span className="text-chrome">Engine</span>
        </h2>
        <p className="mt-8 max-w-xl text-[11px] text-[var(--secondary)] font-black uppercase tracking-[0.25em] leading-loose opacity-60">
          A multi-layered AI approach to optimize peak high-traffic demands and service flow.
        </p>
      </div>

      <div className="relative w-full max-w-[1200px] mx-auto mt-6 flex flex-col items-center scale-90 lg:scale-100 transform-gpu">
        <div className="flex flex-col lg:flex-row justify-center items-end gap-10 lg:gap-0 w-full z-20 mb-12 lg:mb-0 relative px-4">
          <div className="glass-card p-10 lg:w-[360px] transform lg:-rotate-6 lg:translate-x-12 lg:translate-y-12 z-10 transition-all">
            <h3 className="font-display text-xl font-black text-[var(--foreground)] mb-4 uppercase tracking-tighter">Real-Time Data</h3>
            <p className="text-[11px] font-bold leading-relaxed text-[var(--secondary)] opacity-80 uppercase tracking-wide">Live telemetry streaming processes incoming queue requests instantly for immediate tracking.</p>
          </div>

          <div className="glass-card bg-white/60 border-2 border-white lg:w-[420px] z-20 lg:-translate-y-12 shadow-2xl p-10">
            <h3 className="font-display text-2xl font-black text-[var(--foreground)] mb-4 text-center uppercase tracking-tighter">Demand Forecasting</h3>
            <p className="text-[12px] font-black leading-relaxed text-[var(--primary)] text-center uppercase tracking-widest">Our AI systems adapt queue availability based on historical and live crowd flow patterns.</p>
          </div>

          <div className="glass-card p-10 lg:w-[360px] transform lg:rotate-6 lg:-translate-x-12 lg:translate-y-12 z-10 transition-all">
            <h3 className="font-display text-xl font-black text-[var(--foreground)] mb-4 uppercase tracking-tighter">Seamless Flow</h3>
            <p className="text-[11px] font-bold leading-relaxed text-[var(--secondary)] opacity-80 uppercase tracking-wide">Customers arrive exactly when needed, eliminating service bottlenecks entirely.</p>
          </div>
        </div>

        <div className="relative w-[1000px] h-[400px] flex items-center justify-center mt-[-40px] lg:mt-[-80px] z-10 scale-[0.4] sm:scale-75 lg:scale-100 origin-top">
          <div className="absolute w-[1000px] h-[340px] rounded-[50%] bg-[var(--primary)]/5 backdrop-blur-[4px] border border-white/40 shadow-[0_30px_60px_rgba(33,6,53,0.1),inset_0_2px_20px_rgba(255,255,255,0.4)] flex items-end justify-center pb-12 group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--secondary)]/10 to-transparent group-hover:opacity-100 opacity-50 transition-opacity" />
            <span className="text-[var(--foreground)] font-black text-[11px] tracking-[0.4em] z-10 relative uppercase opacity-80">Load Balancing</span>
          </div>

          <div className="absolute w-[750px] h-[250px] rounded-[50%] bg-white/20 backdrop-blur-3xl border border-white/50 shadow-[0_20px_40px_rgba(33,6,53,0.1),inset_0_2px_15px_rgba(255,255,255,0.5)] flex items-end justify-center translate-y-[5px] pb-10">
            <span className="text-[var(--foreground)] font-black text-[11px] tracking-[0.4em] z-10 relative uppercase opacity-100">Wait Time Analytics</span>
          </div>

          <div className="absolute w-[500px] h-[160px] rounded-[50%] bg-white/40 backdrop-blur-[50px] border border-white/70 shadow-[0_10px_30px_rgba(33,6,53,0.15),inset_0_2px_10px_rgba(255,255,255,0.6)] flex items-end justify-center translate-y-[20px] pb-8">
            <span className="text-[var(--primary)] font-black text-[11px] tracking-[0.4em] z-10 relative uppercase">Intelligent Scheduling</span>
          </div>

          <div className="absolute w-[200px] h-[200px] rounded-full bg-gradient-to-b from-white to-[var(--background)] backdrop-blur-[60px] border-4 border-white shadow-[0_0_80px_rgba(123,51,126,0.3),inset_0_0_40px_rgba(255,255,255,1)] z-20 translate-y-[-70px] flex items-center justify-center text-center p-8">
            <div className="absolute -bottom-[30px] w-[110%] h-[80px] bg-[var(--primary)]/10 rounded-[50%] blur-2xl -z-10"></div>
            <div className="absolute -bottom-[60px] w-[140px] h-[100px] bg-gradient-to-b from-white/40 to-transparent blur-md rounded-b-[50%] -z-10 border-x border-white/30"></div>
            <span className="text-[var(--foreground)] font-display font-black text-[10px] leading-relaxed uppercase tracking-[0.2em]">Peak<br />Efficiency</span>
          </div>

        </div>
      </div>
    </section>
  );
}

