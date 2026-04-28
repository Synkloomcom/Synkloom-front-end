import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { 
  Cpu, 
  Zap, 
  Box, 
  ShieldCheck, 
  Activity, 
  Users, 
  Clock, 
  TrendingUp, 
  Database, 
  LayoutDashboard, 
  Bell, 
  Smartphone, 
  Server, 
  Globe, 
  BarChart3,
  ChevronRight,
  ArrowRight
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Command Center | Synkloom — Smart Queue Intelligence" },
      {
        name: "description",
        content: "Live system interface for real-time queue flow monitoring, AI demand prediction, and infrastructure health.",
      },
    ],
  }),
  component: ProductPage,
});

function ProductPage() {
  return (
    <div className="relative min-h-dvh overflow-x-clip bg-white">
      <Header />
      
      <main className="pt-24 relative z-10">
        <ProductHero />
        <SystemOverview />
        <AIEngine />
        <WorkflowVisualization />
        <SystemModules />
        <DashboardBreakdown />
        <PerformanceMetrics />
        <NotificationExperience />
        <IntegrationScalability />
        <ReliabilitySecurity />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}

// 1. Product Hero (System Entry)
function ProductHero() {
  return (
    <section className="relative px-6 py-20 lg:py-32 overflow-hidden flex flex-col items-center">
      <div className="mx-auto max-w-7xl w-full text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-[#7B337E]/20 bg-white/40 px-5 py-2 backdrop-blur-xl mb-10 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7B337E] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7B337E]"></span>
          </span>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#7B337E]">
            System Status: Operational
          </p>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl font-black tracking-tight text-[#210635] md:text-8xl lg:text-9xl uppercase leading-none"
        >
          SYNKLOOM <br />
          <span className="text-chrome">COMMAND CENTER</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-10 max-w-2xl text-[11px] md:text-[13px] font-black uppercase tracking-[0.3em] text-[#6667AB] opacity-70"
        >
          Monitor, predict, and optimize queue flow in real time.
        </motion.p>
      </div>
    </section>
  );
}

// 2. Live System Overview
function SystemOverview() {
  const stats = [
    { label: "Active Queues", val: "1,284", color: "#7B337E" },
    { label: "Avg Wait Time", val: "4.2m", color: "#210635" },
    { label: "Current Demand", val: "HIGH", color: "#6667AB" },
    { label: "Throughput", val: "98.2%", color: "#7B337E" }
  ];

  return (
    <section className="px-6 py-20 lg:py-32 bg-[#210635]/5">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((s, i) => (
            <motion.div 
              key={s.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card bg-white/60 p-8 border border-white shadow-sm flex flex-col items-center text-center"
            >
              <span className="text-[10px] font-black uppercase tracking-widest text-[#6667AB] mb-4">{s.label}</span>
              <span className="text-3xl md:text-5xl font-black text-[#210635]">{s.val}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 3. AI Queue Intelligence Engine
function AIEngine() {
  return (
    <section className="px-6 py-20 lg:py-32 overflow-hidden relative">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2">
          <div className="inline-flex items-center justify-center rounded-full border border-[#7B337E]/30 bg-white/40 px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#7B337E] mb-8 backdrop-blur-md">
            AI Core
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight text-[#210635] uppercase leading-[0.9] sm:leading-none mb-10">
            PREDICTIVE <br /><span className="text-chrome">DEMAND MATRIX.</span>
          </h2>
          <p className="text-[13px] font-black uppercase tracking-[0.2em] text-[#6667AB] opacity-70 leading-relaxed mb-12 max-w-lg">
            Our AI engine evaluates millions of data points to forecast branch traffic and optimize staff allocation before the rush starts.
          </p>
          <div className="space-y-8">
            {[
              { label: "Prediction Accuracy", val: "99.2%" },
              { label: "Sync Latency", val: "0.04ms" },
              { label: "Node Coverage", val: "Global" }
            ].map(f => (
              <div key={f.label} className="flex items-center gap-6">
                <div className="size-2 rounded-full bg-[#7B337E]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#210635] w-40">{f.label}</span>
                <span className="text-lg font-black text-[#7B337E]">{f.val}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 relative">
           <div className="aspect-square glass bg-[#210635] rounded-[4rem] border border-white/20 p-12 overflow-hidden flex flex-col justify-center">
              <div className="space-y-10">
                 {[70, 92, 45].map((w, i) => (
                   <div key={i} className="space-y-4">
                      <div className="flex justify-between text-[10px] font-black uppercase text-white/40 tracking-widest">
                        <span>Node_{400+i} Processing</span>
                        <span>{w}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${w}%` }}
                          className="h-full bg-gradient-to-r from-[#7B337E] to-[#6667AB]" 
                        />
                      </div>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}

// 4. Workflow Visualization
function WorkflowVisualization() {
  return (
    <section className="px-6 py-20 lg:py-32 bg-[#210635]">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-[0.9] sm:leading-none mb-24">
          SYSTEM <br /><span className="text-chrome">WORKFLOW</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {[
            { icon: Smartphone, t: "Customer Entry", d: "Digital ticketing and mobile check-in." },
            { icon: Cpu, t: "AI Calculation", d: "Real-time demand and wait-time prediction." },
            { icon: Bell, t: "Service Sync", d: "Automated notifications and counter routing." }
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="size-24 rounded-3xl bg-white/10 flex items-center justify-center text-[#7B337E] mb-10 border border-white/10">
                <s.icon size={40} />
              </div>
              <h3 className="text-xl font-black uppercase text-white mb-4 tracking-tight">{s.t}</h3>
              <p className="text-[11px] font-black uppercase tracking-widest text-white/40 leading-relaxed max-w-[200px]">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 5. System Modules
function SystemModules() {
  return (
    <section className="px-6 py-20 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="grid grid-cols-2 gap-6">
             {[LayoutDashboard, Server, Globe, ShieldCheck].map((Icon, i) => (
               <div key={i} className="aspect-square glass-card bg-[#210635]/5 p-8 border border-[#210635]/10 flex flex-col justify-center items-center">
                  <Icon size={32} className="text-[#7B337E] mb-4" />
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#210635]">Module {100+i}</span>
               </div>
             ))}
          </div>
          <div>
            <div className="inline-flex items-center justify-center rounded-full border border-[#7B337E]/30 bg-white/40 px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#7B337E] mb-8 backdrop-blur-md">
              Architecture
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight text-[#210635] uppercase leading-[0.9] sm:leading-none mb-10">
              MODULAR <br /><span className="text-chrome">INFRASTRUCTURE.</span>
            </h2>
            <p className="text-[13px] font-black uppercase tracking-[0.2em] text-[#6667AB] opacity-70 leading-relaxed max-w-lg mb-10">
              Synkloom is built on a distributed micro-services architecture that ensures 99.99% uptime and infinite scalability for global enterprises.
            </p>
            <button className="group flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] text-[#7B337E]">
              Explore Documentation <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// 6. Full Dashboard Breakdown
function DashboardBreakdown() {
  return (
    <section className="px-6 py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-24">
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight text-[#210635] uppercase leading-[0.9] sm:leading-none">
            DASHBOARD <span className="text-chrome">ARCHITECTURE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Panel A */}
          <div className="flex flex-col gap-6">
            <div className="glass-card bg-white/20 p-10 border border-white/60 h-full">
              <h3 className="text-[12px] font-black uppercase tracking-[0.3em] text-[#7B337E] mb-8">Panel A – Queue Input</h3>
              <ul className="space-y-6">
                {["Live Bookings", "Service Config", "Queue Inflow", "Customer Data"].map(l => (
                  <li key={l} className="flex items-center justify-between border-b border-black/10 pb-4">
                    <span className="text-[11px] font-black uppercase tracking-widest text-[#210635]">{l}</span>
                    <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                  </li>
                ))}
              </ul>
              <div className="mt-12 aspect-video glass bg-white/10 rounded-2xl border border-white/30" />
            </div>
          </div>

          {/* Panel B (Central AI) */}
          <div className="lg:scale-105 z-10">
            <div className="bg-[#210635]/90 backdrop-blur-3xl text-white rounded-[3rem] p-12 shadow-2xl h-full flex flex-col border border-white/20">
              <h3 className="text-[12px] font-black uppercase tracking-[0.3em] text-[#7B337E] mb-10">Panel B – AI Processing</h3>
              <div className="flex-1 flex flex-col gap-10">
                 <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-60">Demand Prediction</span>
                      <span className="text-xl font-black">94.8%</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: "94.8%" }} className="h-full bg-[#7B337E]" />
                    </div>
                 </div>
                 <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-60">Wait-Time Calcs</span>
                      <span className="text-xl font-black">0.02ms</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: "30%" }} className="h-full bg-[#6667AB]" />
                    </div>
                 </div>
                 <div className="mt-auto p-6 glass bg-white/5 rounded-2xl border border-white/10 font-mono text-[8px] text-green-400/70 overflow-hidden">
                    <div className="animate-pulse opacity-50 space-y-2">
                      <div>{">"} INITIALIZING PREDICTION CORE...</div>
                      <div>{">"} PROCESSING BRANCH_ID_482...</div>
                      <div>{">"} SYNC COMPLETE.</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Panel C */}
          <div className="flex flex-col gap-6">
            <div className="glass-card bg-white/20 p-10 border border-white/60 h-full">
              <h3 className="text-[12px] font-black uppercase tracking-[0.3em] text-[#7B337E] mb-8">Panel C – System Health</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Zap, label: "Latency", val: "12ms" },
                  { icon: ShieldCheck, label: "Security", val: "SSL/TLS" },
                  { icon: Database, label: "Storage", val: "Cloud" },
                  { icon: Activity, label: "Uptime", val: "99.9%" }
                ].map(item => (
                  <div key={item.label} className="p-4 bg-white/40 rounded-2xl border border-white flex flex-col gap-2">
                    <item.icon size={16} className="text-[#6667AB]" />
                    <span className="text-[8px] font-black uppercase text-[#210635]/40 tracking-widest">{item.label}</span>
                    <span className="text-xs font-black text-[#210635]">{item.val}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-10">
                <div className="w-full h-1 bg-black/10 rounded-full relative overflow-hidden">
                  <motion.div 
                    animate={{ x: [-100, 100] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-[#7B337E] w-1/4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 7. Performance Metrics
function PerformanceMetrics() {
  const metrics = [
    { val: "-60%", label: "Avg. Waiting Time", color: "#7B337E" },
    { val: "+45%", label: "Service Efficiency", color: "#210635" },
    { val: "98%", label: "Prediction Accuracy", color: "#6667AB" },
  ];

  return (
    <section className="px-6 py-16 lg:py-24">
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {metrics.map((m, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="text-5xl md:text-7xl font-black mb-4" style={{ color: m.color }}>{m.val}</div>
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#6667AB]">{m.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// 8. Real-Time Notification Experience
function NotificationExperience() {
  return (
    <section className="px-6 py-20 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2">
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight text-[#210635] uppercase leading-[0.9] sm:leading-none mb-10">
            PERSONALIZED <br /><span className="text-chrome">SERVICE SYNC.</span>
          </h2>
          <p className="text-[13px] font-black uppercase tracking-[0.2em] text-[#6667AB] opacity-70 leading-relaxed max-w-lg mb-10">
            Customers receive real-time updates and personalized service notifications via SMS, WhatsApp, or the Synkloom mobile app.
          </p>
          <div className="flex gap-4">
            <div className="px-6 py-3 bg-[#210635] text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">Mobile App</div>
            <div className="px-6 py-3 border border-black/10 text-[10px] font-black uppercase tracking-widest rounded-full">SMS Gateway</div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="relative">
             <div className="absolute -inset-10 bg-[#7B337E]/10 rounded-full blur-3xl -z-10" />
             <div className="glass-card bg-white/40 p-8 border border-white rounded-[3rem] shadow-xl max-w-sm mx-auto">
                <div className="flex items-center gap-4 mb-8">
                   <div className="size-10 rounded-full bg-[#7B337E]" />
                   <div>
                      <div className="text-[10px] font-black text-[#210635]">SYNKLOOM SYNC</div>
                      <div className="text-[8px] text-[#6667AB] font-bold">Just now</div>
                   </div>
                </div>
                <p className="text-sm font-bold text-[#210635] mb-6">"You are next in line. Please proceed to Counter 4."</p>
                <div className="h-1 w-full bg-black/5 rounded-full" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 9. Integration & Scalability
function IntegrationScalability() {
  return (
    <section className="px-6 py-20 lg:py-32 bg-[#F8F9FA]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-24">
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight text-[#210635] uppercase leading-[0.9] sm:leading-none mb-8">
            ENTERPRISE <span className="text-chrome">SCALE.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-[12px] font-black uppercase tracking-[0.3em] text-[#6667AB] opacity-70">
            Seamlessly integrate with your existing CRM, POS, and ERP systems.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 grayscale contrast-125">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div key={i} className="h-16 bg-black/10 rounded-xl" />
          ))}
        </div>
      </div>
    </section>
  );
}

// 10. Reliability & Security
function ReliabilitySecurity() {
  return (
    <section className="px-6 py-24 bg-white">
      <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-20">
        <div className="lg:w-1/2">
          <div className="size-80 rounded-[4rem] bg-[#210635] relative overflow-hidden flex items-center justify-center">
             <ShieldCheck size={120} className="text-white opacity-20 absolute" />
             <div className="relative z-10 text-center">
                <div className="text-6xl font-black text-white mb-2">99.9</div>
                <div className="text-[10px] font-black text-[#7B337E] uppercase tracking-[0.4em]">Uptime Guarantee</div>
             </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="font-display text-4xl md:text-6xl font-black tracking-tight text-[#210635] uppercase leading-[0.9] sm:leading-none mb-10">
            BANK-GRADE <br /><span className="text-chrome">SECURITY.</span>
          </h2>
          <p className="text-[13px] font-black uppercase tracking-[0.2em] text-[#6667AB] opacity-70 leading-relaxed max-w-lg mb-10">
            We use end-to-end encryption and comply with global security standards including GDPR, SOC2, and HIPAA.
          </p>
          <div className="space-y-4">
            {["SOC2 Type II Compliant", "GDPR & HIPAA Ready", "256-bit AES Encryption"].map(s => (
              <div key={s} className="flex items-center gap-4">
                <div className="size-1.5 rounded-full bg-green-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-[#210635]">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// 11. Final CTA
function FinalCTA() {
  return (
    <section className="px-6 py-20 lg:py-32 overflow-hidden relative">
       <div className="mx-auto max-w-4xl text-center relative z-10">
          <h2 className="font-display text-5xl md:text-8xl font-black tracking-tighter text-[#210635] uppercase leading-[0.8] sm:leading-none mb-12">
            RUN YOUR QUEUE <br /><span className="text-chrome">LIKE A SMART SYSTEM.</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-12 py-6 bg-[#210635] text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-full shadow-2xl hover:scale-105 transition-transform">
              Book System Demo
            </button>
            <button className="w-full sm:w-auto px-12 py-6 border-2 border-black text-[#210635] text-[11px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-black hover:text-white transition-all">
              Contact Sales
            </button>
          </div>
       </div>
       
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-[#7B337E]/5 rounded-full blur-[120px] -z-0" />
    </section>
  );
}
