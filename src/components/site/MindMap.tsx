import React, { useEffect, useState } from 'react';

const archNodes = [
  { id: "01", side: "left", label: "DEMAND PREDICTOR", desc: "AI models forecasting branch wait times.", icon: "/DEMAND PREDICTOR.svg" },
  { id: "02", side: "left", label: "LOAD BALANCER", desc: "Real-time spatial distribution across counters.", icon: "/LOAD BALANCER.svg" },
  { id: "03", side: "left", label: "QUEUE MANAGER", desc: "Dynamic ticketing and service prioritization.", icon: "/QUEUE MANAGER.svg" },
  { id: "04", side: "left", label: "SYNC ENGINE", desc: "Live data streaming to digital dashboards.", icon: "/SYNC ENGINE.svg" },
  { id: "05", side: "left", label: "APPOINTMENT API", desc: "High-speed scheduling & reservation matrix.", icon: "/APPOINTMENT API.svg" },
  { id: "06", side: "right", label: "ANALYTICS HUB", desc: "Real-time performance metrics and flow insights.", icon: "/ANALYTICS HUB.svg" },
  { id: "07", side: "right", label: "NOTIFICATION BUS", desc: "Ultra-low latency SMS and app notifications.", icon: "/NOTIFICATION BUS.svg" },
  { id: "08", side: "right", label: "KIOSK CONTROL", desc: "Master terminal configuration and hardware integration.", icon: "/KIOSK CONTROL.svg" },
  { id: "09", side: "right", label: "CAPACITY SCALER", desc: "Redundant cloud architecture for peak burst events.", icon: "/CAPACITY SCALER.svg" },
  { id: "10", side: "right", label: "REPORTING SUITE", desc: "Automated logging and branch efficiency auditing.", icon: "/REPORTING SUITE.svg" },
];

export function MindMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="architecture" className="relative z-10 w-full overflow-hidden py-20 flex flex-col items-center bg-[var(--background)] font-tech">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Background Image Layer - Original Reference */}
        <div className="absolute inset-0 bg-[url('/architecture-map.png')] bg-cover bg-center opacity-0 mix-blend-multiply" />

        {/* Main Background Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[var(--accent)]/10 blur-[150px] rounded-full" />
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-[var(--secondary)]/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] bg-[var(--primary)]/5 blur-[120px] rounded-full" />

        {/* Floor texture - Light Version */}
        <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-white/40 to-transparent opacity-80" />
        <div className="absolute bottom-0 left-0 w-full h-64 opacity-30"
          style={{
            backgroundImage: 'linear-gradient(rgba(123,51,126,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(123,51,126,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            transform: 'perspective(1000px) rotateX(70deg) scale(3)',
            transformOrigin: 'bottom'
          }} />
      </div>

      {/* Header */}
      <div className={`relative z-10 mb-16 flex flex-col items-center text-center px-4 transition-all duration-1000 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-[var(--foreground)] tracking-tighter leading-[0.85] uppercase max-w-4xl drop-shadow-[0_10px_30px_rgba(66,13,75,0.2)] flex flex-col items-center mb-6">
          <span>System Architecture</span>
          <span className="text-chrome">Map</span>
        </h2>
        <p className="max-w-2xl text-[9px] md:text-[11px] text-[var(--secondary)] font-black uppercase tracking-[0.4em] leading-loose opacity-60">
          The AI models evaluating queue telemetry in real time.
        </p>
      </div>

      <div className="relative w-full max-w-[1400px] min-h-[700px] flex flex-col lg:flex-row items-center justify-center scale-90 lg:scale-100 transform-gpu">

        {/* SVG Connectors - Solid lines with subtle glow - HIDDEN ON MOBILE */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden lg:block" viewBox="0 0 1500 900">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--secondary)" stopOpacity="0.4" />
              <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          {mounted && archNodes.map((node, i) => {
            const isLeft = node.side === 'left';
            const index = isLeft ? i : i - 5;
            const yPos = 120 + index * 160;
            const xEnd = isLeft ? 380 : 1120;
            const xStart = isLeft ? 680 : 820;
            const coreY = 450;

            return (
              <g key={node.id} className="transition-opacity duration-1000" style={{ transitionDelay: `${i * 100}ms`, opacity: mounted ? 1 : 0 }}>
                <path
                  d={`M ${xStart} ${coreY} L ${xStart + (isLeft ? -80 : 80)} ${yPos} L ${xEnd} ${yPos}`}
                  fill="none"
                  stroke="url(#lineGrad)"
                  strokeWidth="1.5"
                  opacity="0.25"
                />
                <circle cx={xEnd} cy={yPos} r="3" fill="var(--accent)" style={{ filter: 'drop-shadow(0 0 4px var(--accent))' }} opacity="0.6" />

                {/* Data stream label */}
                {i % 3 === 0 && (
                  <text
                    x={xStart + (isLeft ? -150 : 150)}
                    y={yPos - 10}
                    fill="var(--foreground)"
                    fontSize="7"
                    fontWeight="900"
                    textAnchor="middle"
                    className="uppercase tracking-[0.2em] opacity-20"
                  >
                    data stream
                  </text>
                )}
              </g>
            );
          })}
        </svg>

        {/* AI Background Labels - Light Version */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.03] flex items-center justify-center">
          <span className="text-[200px] font-black text-[var(--foreground)] absolute top-0 left-[10%] rotate-12">AI</span>
          <span className="text-[150px] font-black text-[var(--foreground)] absolute bottom-[10%] right-[15%] -rotate-6">AI</span>
          <span className="text-[120px] font-black text-[var(--foreground)] absolute top-[20%] right-[10%] rotate-3">AI</span>
        </div>

        {/* Left Side Modules */}
        <div className="hidden lg:flex flex-col gap-14 absolute left-10 xl:left-32 z-20">
          {archNodes.filter(n => n.side === 'left').map((node, i) => (
            <ArchitectureNode key={node.id} node={node} index={i} mounted={mounted} />
          ))}
        </div>

        {/* Central Hub - Light High Fidelity Orb */}
        <div className={`relative z-30 transition-all duration-1000 delay-500 transform ${mounted ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
          <div className="relative size-72 md:size-[400px] flex items-center justify-center">
            {/* Soft Outer Glow */}
            <div className="absolute inset-[-100px] rounded-full bg-[var(--accent)]/5 blur-[120px]" />

            {/* Spinning Rings - Light */}
            <div className="absolute inset-0 rounded-full border-[1px] border-[var(--accent)]/10 animate-[spin_30s_linear_infinite]" />
            <div className="absolute inset-10 rounded-full border-[2px] border-dashed border-[var(--secondary)]/10 animate-[spin_40s_linear_infinite_reverse]" />
            <div className="absolute inset-20 rounded-full border-[1px] border-[var(--accent)]/20 animate-[spin_20s_linear_infinite]" />

            {/* The Orb Layers - Light Glassmorphism */}
            <div className="absolute size-56 md:size-80 rounded-full bg-white/40 backdrop-blur-3xl border-4 border-white shadow-[0_20px_80px_rgba(33,6,53,0.08),inset_0_0_60px_rgba(255,255,255,1)] flex flex-col items-center justify-center">
              {/* Internal Glows - Soft */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[var(--accent)]/5 to-[var(--secondary)]/5 blur-xl" />

              {/* ARCHITECTURE CORE Content */}
              <div className="relative z-10 flex flex-col items-center">
                {/* Microchip Effect - Light */}
                <div className="mb-6 relative">
                  <div className="absolute inset-[-15px] bg-[var(--accent)]/10 blur-2xl rounded-full animate-pulse" />
                  <div className="">
                    <img
                      src="/ARCHITECTURE.svg"
                      alt="Architecture Core"
                      className="size-10 md:size-28 drop-shadow-[0_2px_10px_rgba(255,255,255,1)]"
                    />
                  </div>
                </div>

                <div className="relative">
                  <h3 className="text-[10px] md:text-xs font-black text-[var(--secondary)] uppercase tracking-[0.6em] mb-2 text-center opacity-60">Architecture Core</h3>
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent mb-3" />
                  <h3 className="text-sm md:text-xl font-black text-[var(--foreground)] uppercase tracking-[0.3em] leading-tight text-center">
                    ARCHITECTURE<br />CORE
                  </h3>
                  <div className="mt-4 flex gap-1.5 items-center justify-center">
                    {[1, 2, 3, 4, 5].map(n => (
                      <div key={n} className={`h-1 w-4 rounded-full ${n < 4 ? 'bg-[var(--accent)]' : 'bg-[var(--secondary)]/10'} animate-pulse`} style={{ animationDelay: `${n * 200}ms` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Modules */}
        <div className="hidden lg:flex flex-col gap-14 absolute right-10 xl:right-32 z-20">
          {archNodes.filter(n => n.side === 'right').map((node, i) => (
            <ArchitectureNode key={node.id} node={node} index={i} mounted={mounted} />
          ))}
        </div>

        {/* Mobile View */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8 mt-24 w-full z-20 px-6">
          {archNodes.map((node, i) => (
            <ArchitectureNode key={node.id} node={node} index={i} mounted={mounted} mobile />
          ))}
        </div>
      </div>

      <style>{`
        .hex-clip {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
        .hexagon-glass-light {
          position: relative;
          width: 90px;
          height: 105px;
          background: rgba(255, 255, 255, 0.5);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid white;
          box-shadow: 0 10px 30px rgba(33,6,53,0.05);
        }
        .node-container:hover .hexagon-glass-light {
          transform: scale(1.15) rotateY(15deg);
          background: white;
          border-color: var(--accent);
          box-shadow: 0 20px 40px rgba(123, 51, 126, 0.15);
        }
        .node-container:hover .node-icon {
          transform: scale(1.1);
          color: var(--accent) !important;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .float-node {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

function ArchitectureNode({ node, index, mounted, mobile }) {
  const isLeft = node.side === 'left';

  return (
    <div className={`node-container flex items-center gap-4 md:gap-8 transition-all duration-1000 ${isLeft && !mobile ? 'flex-row' : 'flex-row-reverse'} ${mounted ? 'translate-x-0 opacity-100' : (isLeft ? '-translate-x-12' : 'translate-x-12') + ' opacity-0'} ${!mobile ? 'float-node' : ''}`}
      style={{ transitionDelay: `${index * 150}ms`, animationDelay: `${index * 500}ms` }}>

      {!mobile && (
        <div className={`flex flex-col max-w-[240px] ${isLeft ? 'text-right' : 'text-left'}`}>
          <div className={`flex items-center gap-3 mb-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
            <span className="text-[var(--secondary)] font-black text-[10px] uppercase tracking-[0.4em] opacity-60">MODULE {node.id}</span>
          </div>
          <h4 className="text-[var(--foreground)] font-black text-sm md:text-base uppercase tracking-[0.1em] mb-3 leading-tight">{node.label}</h4>
          <p className="text-[10px] text-[var(--secondary)] font-bold leading-relaxed tracking-wide opacity-50">{node.desc}</p>
        </div>
      )}

      {mobile && (
        <div className="flex flex-col flex-1 text-left">
          <span className="text-[var(--secondary)] font-black text-[9px] uppercase tracking-[0.3em] mb-1 opacity-70">MODULE {node.id}</span>
          <h4 className="text-[var(--foreground)] font-black text-xs uppercase tracking-wider mb-2">{node.label}</h4>
          <p className="text-[10px] text-[var(--secondary)] font-bold leading-tight opacity-60">{node.desc}</p>
        </div>
      )}

      <div className="relative group">
        {/* Soft Glow behind hexagon */}
        <div className="absolute inset-0 bg-[var(--accent)]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

        <div className="hexagon-glass-light hex-clip">
          <img
            src={node.icon}
            alt={node.label}
            className="node-icon size-16 object-contain transition-all duration-500 p-1"
          />
          {/* Inner hexagon border */}
          <div className="absolute inset-[6px] border border-[var(--secondary)]/5 hex-clip pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
