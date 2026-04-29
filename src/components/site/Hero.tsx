import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Search, Play, Volume2, Plus, Minus, Thermometer, ChevronDown } from 'lucide-react';
import { Link } from "@tanstack/react-router";

function TiltCard({ children, className }: { children: React.ReactNode, className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative ${className}`}
    >
      <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}

export function Hero() {
  const [activeMode, setActiveMode] = useState<string>('Live');
  const [statusView, setStatusView] = useState<'Live' | 'History'>('Live');
  const [timeMode, setTimeMode] = useState<'Peak' | 'Predict' | 'New'>('Peak');

  const modeData: Record<string, { value: number; label: string }> = {
    'Live': { value: 98, label: 'Optimization' },
    'AI': { value: 95, label: 'AI Predict' },
    'Auto': { value: 92, label: 'Auto Sync' },
    'Max': { value: 99, label: 'Max Power' }
  };

  const timeData = {
    'Peak': { time: '12m', status: 'emerald' },
    'Predict': { time: '8m', status: 'blue' },
    'New': { time: '4m', status: 'amber' }
  };

  const currentMode = modeData[activeMode as keyof typeof modeData] || modeData['Live'];
  const currentTime = timeData[timeMode];
  const radius = 100;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (currentMode.value / 100) * circumference;

  const handleWatchDemo = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-[var(--background)] overflow-hidden flex items-center justify-center pt-32 pb-20 lg:pt-24 lg:pb-12 px-4 md:px-6">
      {/* Background Gradients & Creative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[var(--gradient-bg)] opacity-50" />

        {/* Floating Creative Blobs */}
        <motion.div
          style={{ y: blob1Y }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 size-[1000px] bg-[var(--chrome)]/10 blur-[160px] rounded-full"
        />
        <motion.div
          style={{ y: blob2Y }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -120, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -right-1/4 size-[1000px] bg-[var(--accent)]/10 blur-[160px] rounded-full"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[1200px] bg-white/5 blur-[180px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto h-full max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 h-full items-start">

          {/* Middle Column: The Brand (Moved to top on mobile) */}
          <div className="order-1 lg:order-2 lg:col-span-6 flex flex-col items-center justify-center py-6 lg:py-12">

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full max-w-[700px] flex items-center justify-center"
            >
              <img
                src="/hero section.svg"
                alt="Synkloom System"
                className="w-full h-auto drop-shadow-[0_45px_100px_rgba(33,6,53,0.2)] scale-100 lg:scale-110"
              />
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-[var(--accent)]/10 blur-[80px] rounded-full" />
            </motion.div>

            <div className="text-center mt-12 lg:mt-20 space-y-6 lg:space-y-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-[32px] md:text-[50px] lg:text-[70px] xl:text-[80px] font-display font-black tracking-tighter leading-[0.9] lg:leading-[0.85] uppercase drop-shadow-[0_10px_30px_rgba(66,13,75,0.2)] flex flex-col items-center"
              >
                <span className="text-chrome">Intelligent</span>
                <span className="text-[#7B337E]">Queue Management</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="max-w-3xl mx-auto text-[var(--foreground)]/70 text-[11px] lg:text-sm font-bold uppercase tracking-[0.15em] leading-relaxed px-4"
              >
                <span className="block text-[#210635] mb-4 text-xs lg:text-base normal-case tracking-normal font-black">
                  Designed to eliminate waiting friction across service environments.
                </span>
                Transforming traditional queue systems into predictive, data-driven service flows powered by intelligent scheduling, live tracking, and demand optimization.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 mt-8 lg:mt-12"
              >
                <Link to="/linesync-ai" className="px-8 lg:px-12 py-4 lg:py-6 rounded-full bg-[var(--foreground)] text-[var(--background)] text-[10px] lg:text-xs font-display font-black uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-2xl shadow-black/20 flex items-center justify-center shine">
                  Book Your Slot
                </Link>
                <button
                  onClick={handleWatchDemo}
                  className="px-8 lg:px-12 py-4 lg:py-6 rounded-full border border-[var(--foreground)]/10 text-[var(--foreground)] text-[10px] lg:text-xs font-display font-black uppercase tracking-[0.2em] hover:bg-[var(--foreground)]/5 hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-all flex items-center gap-3 shine"
                >
                  <Play className="size-3 lg:size-4" /> Watch Demo
                </button>
              </motion.div>
            </div>
          </div>

          {/* Left Column: Controls */}
          <div className="order-2 lg:order-1 lg:col-span-3 space-y-6">
            {/* Efficiency Widget */}
            <TiltCard className="perspective-1000">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-card p-6 lg:p-8 rounded-[32px] lg:rounded-[48px] space-y-6 lg:space-y-8 border-beam"
              >
              <h3 className="text-[var(--foreground)]/40 text-[10px] lg:text-xs font-display font-bold uppercase tracking-widest">System Efficiency</h3>
              <div className="relative size-48 lg:size-56 mx-auto flex items-center justify-center">
                <svg className="size-full rotate-[-90deg]">
                  <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-[var(--foreground)]/5 lg:hidden" />
                  <circle cx="112" cy="112" r="100" stroke="currentColor" strokeWidth="16" fill="transparent" className="text-[var(--foreground)]/5 hidden lg:block" />
                  
                  {/* Mobile Circle */}
                  <motion.circle 
                    cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" 
                    strokeDasharray={2 * Math.PI * 88} 
                    animate={{ strokeDashoffset: (2 * Math.PI * 88) - (currentMode.value / 100) * (2 * Math.PI * 88) }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-[var(--accent)] drop-shadow-[0_0_10px_rgba(123,51,126,0.3)] lg:hidden" 
                  />
                  
                  {/* Desktop Circle */}
                  <motion.circle 
                    cx="112" cy="112" r="100" stroke="currentColor" strokeWidth="16" fill="transparent" 
                    strokeDasharray={circumference} 
                    animate={{ strokeDashoffset: offset }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-[var(--accent)] drop-shadow-[0_0_15px_rgba(123,51,126,0.3)] hidden lg:block" 
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.span 
                    key={currentMode.label}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[var(--foreground)]/40 text-[8px] lg:text-[10px] uppercase tracking-[0.2em] font-bold"
                  >
                    {currentMode.label}
                  </motion.span>
                  <motion.span 
                    key={currentMode.value}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-4xl lg:text-5xl font-display font-black text-[var(--foreground)]"
                  >
                    {currentMode.value}%
                  </motion.span>
                </div>
                <div className="absolute top-2 left-1/2 -translate-x-1/2 size-3 lg:size-4 bg-white rounded-full shadow-xl border-2 border-[var(--accent)]/20" />
              </div>
              <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
                {Object.keys(modeData).map(label => (
                  <button
                    key={label}
                    onClick={() => setActiveMode(label)}
                    className={`px-3 py-2 rounded-xl flex items-center justify-center text-[10px] font-black transition-all uppercase tracking-tighter ${
                      activeMode === label
                        ? 'bg-[var(--accent)] text-white shadow-lg shadow-[var(--accent)]/30 scale-105'
                        : 'bg-[var(--foreground)]/5 text-[var(--foreground)] hover:bg-[var(--accent)]/20 hover:text-[var(--accent)]'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </motion.div>
            </TiltCard>

            {/* Wait Time Widget */}
            <TiltCard className="perspective-1000">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 lg:p-8 rounded-[32px] lg:rounded-[48px] space-y-6 border-beam"
            >
              <h3 className="text-[var(--foreground)]/40 text-[10px] lg:text-xs font-display font-bold uppercase tracking-widest">Avg. Wait Time</h3>
              <div className="relative size-36 lg:size-44 mx-auto bg-white rounded-full flex items-center justify-center shadow-[inset_0_4px_12px_rgba(33,6,53,0.05)] border-4 border-white">
                <div className="flex flex-col items-center">
                  <motion.span 
                    key={currentTime.time}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-4xl lg:text-5xl font-display font-black text-[var(--foreground)]"
                  >
                    {currentTime.time}
                  </motion.span>
                </div>
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`absolute top-4 right-4 lg:top-5 lg:right-5 size-2 lg:size-3 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.2)] ${
                    currentTime.status === 'emerald' ? 'bg-emerald-500' :
                    currentTime.status === 'blue' ? 'bg-blue-500' : 'bg-amber-500'
                  }`} 
                />
              </div>
              <div className="grid grid-cols-3 gap-2 lg:gap-3">
                <button 
                  onClick={() => setTimeMode('Peak')}
                  className={`flex flex-col items-center gap-2 lg:gap-3 p-3 lg:p-4 rounded-2xl lg:rounded-3xl transition-all group ${timeMode === 'Peak' ? 'bg-white shadow-xl' : 'bg-white/40 hover:bg-white/60'}`}
                >
                  <Thermometer className={`size-4 lg:size-5 ${timeMode === 'Peak' ? 'text-amber-500' : 'text-[var(--foreground)]/30'}`} />
                  <span className={`text-[8px] lg:text-[10px] font-black uppercase tracking-tighter ${timeMode === 'Peak' ? 'text-[var(--foreground)]' : 'text-[var(--foreground)]/50'}`}>Peak</span>
                </button>
                <button 
                  onClick={() => setTimeMode('Predict')}
                  className={`flex flex-col items-center gap-2 lg:gap-3 p-3 lg:p-4 rounded-2xl lg:rounded-3xl transition-all group ${timeMode === 'Predict' ? 'bg-white shadow-xl' : 'bg-white/40 hover:bg-white/60'}`}
                >
                  <Search className={`size-4 lg:size-5 ${timeMode === 'Predict' ? 'text-blue-500' : 'text-[var(--foreground)]/30'}`} />
                  <span className={`text-[8px] lg:text-[10px] font-black uppercase tracking-tighter ${timeMode === 'Predict' ? 'text-[var(--foreground)]' : 'text-[var(--foreground)]/50'}`}>Predict</span>
                </button>
                <button 
                  onClick={() => setTimeMode('New')}
                  className={`flex flex-col items-center gap-2 lg:gap-3 p-3 lg:p-4 rounded-2xl lg:rounded-3xl transition-all group ${timeMode === 'New' ? 'bg-white shadow-xl' : 'bg-white/40 hover:bg-white/60'}`}
                >
                  <Plus className={`size-4 lg:size-5 ${timeMode === 'New' ? 'text-indigo-500' : 'text-[var(--foreground)]/30'}`} />
                  <span className={`text-[8px] lg:text-[10px] font-black uppercase tracking-tighter ${timeMode === 'New' ? 'text-[var(--foreground)]' : 'text-[var(--foreground)]/50'}`}>New</span>
                </button>
              </div>
            </motion.div>
            </TiltCard>
          </div>

          {/* Right Column: Queue Status */}
          <div className="order-3 lg:col-span-3 space-y-6">
            <TiltCard className="perspective-1000">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-6 lg:p-8 rounded-[32px] lg:rounded-[48px] space-y-6 lg:space-y-8 border-beam"
            >
              <div className="flex items-center gap-4 lg:gap-6 border-b border-[var(--foreground)]/5 pb-4 lg:pb-6">
                <button 
                  onClick={() => setStatusView('Live')}
                  className={`text-[9px] lg:text-xs font-black uppercase tracking-widest flex items-center gap-2 lg:gap-3 transition-colors ${statusView === 'Live' ? 'text-[var(--foreground)]' : 'text-[var(--foreground)]/40 hover:text-[var(--accent)]'}`}
                >
                  <Volume2 className={`size-3 lg:size-4 ${statusView === 'Live' ? 'fill-[var(--foreground)]' : 'fill-[var(--foreground)]/40'}`} /> Live
                </button>
                <button 
                  onClick={() => setStatusView('History')}
                  className={`text-[9px] lg:text-xs font-black uppercase tracking-widest flex items-center gap-2 lg:gap-3 transition-colors ${statusView === 'History' ? 'text-[var(--foreground)]' : 'text-[var(--foreground)]/40 hover:text-[var(--accent)]'}`}
                >
                  <Play className={`size-3 lg:size-4 ${statusView === 'History' ? 'fill-[var(--foreground)]' : 'fill-[var(--foreground)]/40'}`} /> History
                </button>
              </div>

              <div className="space-y-4 lg:space-y-5">
                {(statusView === 'Live' ? [
                  { title: "National Bank Center", rating: "Wait: 4m", votes: "Active: 12", img: "/National Bank Center.svg" },
                  { title: "General Hospital ER", rating: "Wait: 15m", votes: "Active: 45", img: "/General Hospital ER.svg" },
                  { title: "Government Plaza", rating: "Wait: 8m", votes: "Active: 28", img: "/Government Plaza.svg" },
                  { title: "Tech Hub Office", rating: "Wait: 2m", votes: "Active: 5", img: "/Tech Hub Office.svg" },
                  { title: "Main Post Office", rating: "Wait: 6m", votes: "Active: 18", img: "/Main Post Office.svg" }
                ] : [
                  { title: "City Mall", rating: "Wait: 0m", votes: "Closed", img: "/National Bank Center.svg" },
                  { title: "Public Library", rating: "Wait: 0m", votes: "Closed", img: "/General Hospital ER.svg" },
                  { title: "Service Center", rating: "Wait: 0m", votes: "Closed", img: "/Government Plaza.svg" }
                ]).map((item) => (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    key={item.title} 
                    className="flex items-center gap-4 lg:gap-5 bg-white/40 p-3 rounded-2xl lg:rounded-3xl hover:bg-white hover:shadow-lg transition-all cursor-pointer group border border-white/20"
                  >
                    <img src={item.img} alt="" className="size-14 lg:size-20 rounded-xl lg:rounded-2xl object-cover shadow-sm" />
                    <div>
                      <h4 className="text-[10px] lg:text-xs font-black text-[var(--foreground)] mb-1">{item.title}</h4>
                      <p className="text-[8px] lg:text-[10px] text-[var(--foreground)]/40 font-bold uppercase tracking-tighter">
                        <span className="text-[var(--foreground)]">{item.rating}</span> • {item.votes}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex justify-center gap-2">
                <div className={`h-1.5 lg:h-2 rounded-full transition-all ${statusView === 'Live' ? 'bg-[var(--accent)] w-4 lg:w-6' : 'bg-[var(--foreground)]/10 w-1.5 lg:w-2'}`} />
                <div className={`h-1.5 lg:h-2 rounded-full transition-all ${statusView === 'History' ? 'bg-[var(--accent)] w-4 lg:w-6' : 'bg-[var(--foreground)]/10 w-1.5 lg:w-2'}`} />
              </div>
            </motion.div>
            </TiltCard>
          </div>

        </div>
      </div>

      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[8px] font-black uppercase tracking-[0.3em] text-[var(--foreground)]/40">Scroll Explore</span>
        <ChevronDown className="size-4 text-[var(--accent)]" />
      </motion.div>
    </section>
  );
}
