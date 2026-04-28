import { motion } from 'framer-motion';

const features = [
  {
    id: "01",
    title: "DIGITAL QUEUE BOOKING",
    desc: "Users reserve time slots remotely, eliminating the need for physical waiting.",
    icon: "/DIGITAL QUEUE BOOKING.svg",
    color: "from-[var(--secondary)] to-[var(--accent)]",
    shadow: "rgba(102, 103, 171, 0.4)",
  },
  {
    id: "02",
    title: "REAL-TIME QUEUE TRACKING",
    desc: "View live queue status and position while monitoring estimated wait times.",
    icon: "/REAL-TIME QUEUE TRACKING.svg",
    color: "from-[var(--accent)] to-[var(--primary)]",
    shadow: "rgba(123, 51, 126, 0.4)",
  },
  {
    id: "03",
    title: "AI WAIT-TIME PREDICTION",
    desc: "Predicts queue length and waiting duration to optimize slot availability based on demand.",
    icon: "/AI WAIT-TIME PREDICTION.svg",
    color: "from-[var(--primary)] to-[var(--foreground)]",
    shadow: "rgba(66, 13, 75, 0.4)",
  },
  {
    id: "04",
    title: "SMART NOTIFICATIONS",
    desc: "Alerts users when their turn is approaching, significantly reducing idle waiting time.",
    icon: "/SMART NOTIFICATIONS.svg",
    color: "from-[var(--secondary)] to-[var(--primary)]",
    shadow: "rgba(102, 103, 171, 0.4)",
  },
  {
    id: "05",
    title: "BUSINESS DASHBOARD",
    desc: "Monitor queue flow and service performance to effectively manage appointments and capacity.",
    icon: "/BUSINESS DASHBOARD.svg",
    color: "from-[var(--accent)] to-[var(--foreground)]",
    shadow: "rgba(123, 51, 126, 0.4)",
  },
  {
    id: "06",
    title: "INTELLIGENT OPTIMIZATION",
    desc: "Combines digital queue booking with real-time tracking and AI-driven demand prediction.",
    icon: "/INTELLIGENT OPTIMIZATION.svg",
    color: "from-[var(--secondary)] to-[var(--accent)]",
    shadow: "rgba(66, 13, 75, 0.4)",
  },
];

export function Features() {
  return (
    <section id="features" className="relative px-4 md:px-6 py-32 z-10 w-full overflow-hidden bg-[var(--background)]">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[var(--accent)]/10 blur-[120px] rounded-full mix-blend-multiply animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-display font-black text-[var(--foreground)] opacity-[0.02] whitespace-nowrap select-none tracking-tighter">
          SYSTEMS
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl z-10 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24 flex flex-col items-center text-center px-4"
        >
          <div className="inline-flex items-center justify-center rounded-full border border-[var(--accent)]/30 bg-white/40 px-5 py-2 text-[10px] font-display font-black uppercase tracking-[0.2em] text-[var(--accent)] mb-8 backdrop-blur-md shadow-sm">
            Core Architecture
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-[var(--foreground)] tracking-tighter leading-[0.85] uppercase max-w-4xl drop-shadow-[0_10px_30px_rgba(66,13,75,0.2)] flex flex-col items-center">
            <span>Designed for peak</span>
            <span className="text-chrome">efficiency</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 w-full max-w-6xl mt-10">
          {features.map((feature, idx) => {
            return (
              <motion.div 
                key={feature.id}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                className="relative flex justify-center items-center group"
              >
                
                {/* The Colored Bracket / Shadow Background */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-[2rem] md:rounded-[3rem] transform translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 opacity-40 group-hover:opacity-90 group-hover:translate-x-6 group-hover:translate-y-6 transition-all duration-500 blur-xl group-hover:blur-3xl`}
                  style={{ 
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                />

                {/* The Main Glass Hexagon Card */}
                <div 
                  className="relative z-10 w-full aspect-[1/1.1] bg-white/40 backdrop-blur-2xl flex flex-col items-center justify-center p-6 md:p-10 text-center transition-all duration-500 group-hover:-translate-y-4 border border-white/30 group-hover:border-white/60 shadow-xl"
                  style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                >
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="mb-4 md:mb-6 flex items-center justify-center"
                  >
                    <img 
                      src={feature.icon} 
                      alt={feature.title} 
                      className="size-16 md:size-24 object-contain filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)] group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] transition-all group-hover:scale-110" 
                    />
                  </motion.div>
                  
                  <h3 className="font-display text-base md:text-lg font-black text-[var(--foreground)] tracking-tighter mb-2 md:mb-4 group-hover:text-[var(--accent)] transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-[10px] md:text-[11px] font-medium leading-relaxed md:leading-loose text-[var(--foreground)]/70 max-w-[160px] md:max-w-[200px]">
                    {feature.desc}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
