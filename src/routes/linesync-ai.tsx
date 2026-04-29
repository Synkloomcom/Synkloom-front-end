import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  Brain,
  Zap,
  TrendingUp,
  Users,
  Clock,
  BarChart3,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Database,
  Activity,
  Shield,
  Smartphone,
  Globe,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/linesync-ai")({
  head: () => ({
    meta: [
      { title: "LineSync AI | Synkloom — Real-Time Queue Intelligence" },
      {
        name: "description",
        content: "Experience the future of queue management with LineSync AI. Real-time predictions, smart wait times, and AI-powered analytics for seamless customer experiences.",
      },
    ],
  }),
  component: LineSyncAIPage,
});

function LineSyncAIPage() {
  return (
    <div className="relative min-h-dvh overflow-x-clip bg-white">
      <Header />

      <main className="pt-24 relative z-10">
        <LineSyncHero />
        <KeyBenefits />
        <CoreFeatures />
        <TechnicalStack />
        <UseCases />
        <LineSyncCTA />
      </main>

      <Footer />
    </div>
  );
}

// 1. Hero Section
function LineSyncHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section
      ref={containerRef}
      className="relative px-6 py-20 lg:py-32 overflow-hidden flex flex-col items-center min-h-screen"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          style={{ y: blob1Y }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -left-1/4 size-[1000px] bg-[var(--accent)]/15 blur-[160px] rounded-full"
        />
        <motion.div
          style={{ y: blob2Y }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -120, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -right-1/4 size-[1000px] bg-[var(--chrome)]/15 blur-[160px] rounded-full"
        />
      </div>

      <div className="mx-auto max-w-7xl w-full text-center z-10 flex flex-col justify-center min-h-[80vh]">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/20 bg-white/40 px-5 py-2 backdrop-blur-xl mb-10 shadow-sm mx-auto"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
          </span>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--accent)]">
            AI-Powered Intelligence
          </p>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-5xl font-black tracking-tight text-[#210635] md:text-7xl lg:text-8xl uppercase leading-none mb-6"
        >
          LineSync <br />
          <span className="text-chrome">AI</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-10 max-w-3xl text-lg md:text-xl text-[#6667AB] font-medium"
        >
          The intelligent queue management system that learns, predicts, and adapts in real-time. Say goodbye to long waits and unpredictable service flows.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 items-center justify-center"
        >
          <a
            href="https://app.synkloom.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#7B337E] px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-black hover:shadow-[0_10px_40px_rgba(123,51,126,0.5)] hover:-translate-y-1 flex items-center gap-2"
          >
            Launch LineSync AI <ArrowRight size={16} />
          </a>
          <a
            href="#features"
            className="rounded-full border-2 border-[#7B337E]/30 bg-white/40 px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#210635] backdrop-blur-xl transition-all hover:bg-white/60 hover:border-[#7B337E] hover:-translate-y-1"
          >
            Learn More
          </a>
        </motion.div>

        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row gap-8 justify-center text-sm"
        >
          <div className="text-center">
            <p className="text-[#7B337E] font-black text-2xl">500+</p>
            <p className="text-[#6667AB]/70 text-xs uppercase font-semibold tracking-widest">
              Active Enterprises
            </p>
          </div>
          <div className="w-px h-16 bg-[#7B337E]/20 hidden sm:block" />
          <div className="text-center">
            <p className="text-[#7B337E] font-black text-2xl">99.9%</p>
            <p className="text-[#6667AB]/70 text-xs uppercase font-semibold tracking-widest">
              Uptime Guaranteed
            </p>
          </div>
          <div className="w-px h-16 bg-[#7B337E]/20 hidden sm:block" />
          <div className="text-center">
            <p className="text-[#7B337E] font-black text-2xl">8M+</p>
            <p className="text-[#6667AB]/70 text-xs uppercase font-semibold tracking-widest">
              Wait Times Optimized
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// 2. Key Benefits Section
function KeyBenefits() {
  const benefits = [
    {
      icon: Brain,
      title: "Predictive Intelligence",
      description:
        "AI learns from historical patterns to predict queue times with 94% accuracy, helping customers plan their visits.",
    },
    {
      icon: Zap,
      title: "Real-Time Optimization",
      description:
        "Dynamic queue adjustments happen in milliseconds, ensuring optimal service flow and reduced bottlenecks.",
    },
    {
      icon: TrendingUp,
      title: "Revenue Growth",
      description:
        "Improve customer satisfaction by 40% and increase service capacity by better managing peak hours.",
    },
    {
      icon: Users,
      title: "Customer Empowerment",
      description:
        "Give customers accurate wait time estimates and booking options that reduce no-shows and improve experience.",
    },
  ];

  return (
    <section id="features" className="relative px-6 py-24 bg-gradient-to-br from-white via-[#FAFBFC] to-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-[#210635] uppercase tracking-tight mb-6">
            Why LineSync AI
          </h2>
          <p className="text-lg text-[#6667AB]/70 max-w-2xl mx-auto">
            Purpose-built for businesses that value their customers' time and their own efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-2xl p-8 border border-white/40 hover:border-[var(--accent)]/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center group-hover:bg-[var(--accent)]/20 transition-colors">
                    <Icon className="w-6 h-6 text-[var(--accent)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-[#210635] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-[#6667AB]/70 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 3. Core Features Section
function CoreFeatures() {
  const features = [
    {
      icon: Clock,
      title: "Intelligent Wait-Time Prediction",
      description:
        "Machine learning models that analyze real-time and historical data to provide accurate, up-to-the-minute wait time predictions that customers can trust.",
      benefits: ["94% prediction accuracy", "Updates every 10 seconds", "Mobile app integration"],
    },
    {
      icon: BarChart3,
      title: "Advanced Business Analytics",
      description:
        "Comprehensive dashboards that reveal insights into peak patterns, service efficiency, and customer behavior to drive data-driven decisions.",
      benefits: ["Real-time metrics", "Trend analysis", "Performance benchmarks"],
    },
    {
      icon: Activity,
      title: "Smart Appointment Scheduling",
      description:
        "AI-powered booking system that optimizes time slots based on predicted demand, ensuring balanced queues and maximum resource utilization.",
      benefits: ["Automatic load balancing", "No-show reduction", "Waste minimization"],
    },
    {
      icon: AlertCircle,
      title: "Proactive Notifications",
      description:
        "Keep customers informed with timely, personalized alerts about their position, wait time, and service readiness—reducing anxiety and improving satisfaction.",
      benefits: ["Email & SMS alerts", "Customizable preferences", "Multi-channel support"],
    },
  ];

  return (
    <section className="relative px-6 py-24 bg-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-[#210635] uppercase tracking-tight mb-6">
            Core Features
          </h2>
          <p className="text-lg text-[#6667AB]/70 max-w-2xl mx-auto">
            Everything you need to transform your queue experience, all in one platform.
          </p>
        </motion.div>

        <div className="space-y-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={isEven ? "order-1" : "order-2 lg:order-1"}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-gradient-to-br from-[var(--accent)]/20 to-[var(--chrome)]/20 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[var(--accent)]" />
                    </div>
                    <h3 className="text-2xl font-black text-[#210635]">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-[#6667AB]/70 text-base leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="space-y-3">
                    {feature.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[var(--accent)] flex-shrink-0" />
                        <span className="text-sm font-medium text-[#210635]">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={`order-2 lg:order-2 relative h-80 rounded-2xl glass border border-white/40 flex items-center justify-center p-8 ${
                    isEven ? "lg:order-3" : ""
                  }`}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--accent)]/5 to-[var(--chrome)]/5" />
                  <div className="relative z-10 text-center">
                    <Icon className="w-24 h-24 text-[var(--accent)]/30 mx-auto mb-4" />
                    <p className="text-sm text-[#6667AB]/50 font-medium">
                      Smart {feature.title.split(" ")[0]} System
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 4. Technical Stack Section
function TechnicalStack() {
  const sdks = [
    {
      name: "NVIDIA RAPIDS",
      focus: "AI & Prediction Engine",
      description:
        "GPU-accelerated data science for training machine learning models that power accurate wait-time predictions.",
      highlights: ["cuML for forecasting", "cuDF for analytics", "High-speed processing"],
    },
    {
      name: "NVIDIA Morpheus",
      focus: "Real-Time Pipeline",
      description:
        "Processes live queue events and instantly updates predictions, enabling real-time tracking and smart notifications.",
      highlights: ["Event streaming", "Live predictions", "Instant alerts"],
    },
    {
      name: "NVIDIA NeMo",
      focus: "Intelligent Reporting",
      description:
        "Generative AI transforms raw operational metrics into human-readable insights and automated reports.",
      highlights: ["Custom LLM", "Natural reports", "Deep analysis"],
    },
    {
      name: "NVIDIA Triton & TensorRT",
      focus: "Production Deployment",
      description:
        "Unified server architecture for deploying all AI models with optimized latency and maximum throughput.",
      highlights: ["Single deployment", "Low latency", "High throughput"],
    },
  ];

  return (
    <section className="relative px-6 py-24 bg-gradient-to-br from-[#210635]/5 via-white to-[var(--chrome)]/5">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-[#210635] uppercase tracking-tight mb-4">
            Powered by NVIDIA
          </h2>
          <p className="text-sm text-[#6667AB]/70 max-w-2xl mx-auto uppercase tracking-widest font-semibold mb-6">
            Enterprise-Grade AI Infrastructure
          </p>
          <p className="text-base text-[#6667AB]/70 max-w-2xl mx-auto">
            LineSync AI leverages cutting-edge NVIDIA technologies for unmatched performance and reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {sdks.map((sdk, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-xl p-6 border border-white/40 hover:border-[var(--accent)]/30 transition-all"
            >
              <div className="flex items-start gap-3 mb-4">
                <Cpu className="w-6 h-6 text-[var(--accent)] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-black text-[#210635] text-lg">{sdk.name}</h3>
                  <p className="text-xs text-[var(--accent)] font-semibold uppercase tracking-widest">
                    {sdk.focus}
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#6667AB]/70 mb-4 leading-relaxed">
                {sdk.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {sdk.highlights.map((highlight, i) => (
                  <span
                    key={i}
                    className="inline-block text-xs font-semibold text-[var(--accent)] bg-[var(--accent)]/10 rounded-full px-3 py-1"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 glass rounded-2xl border border-white/40 text-center"
        >
          <p className="text-sm text-[#6667AB]/70 uppercase tracking-widest font-semibold mb-3">
            Technical Architecture
          </p>
          <p className="text-[#210635] font-medium">
            {" "}
            All components work together in a unified system: RAPIDS trains the models, Morpheus processes real-time
            data, NeMo generates insights, and Triton/TensorRT optimize deployment for maximum reliability and speed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// 5. Use Cases Section
function UseCases() {
  const useCases = [
    {
      industry: "Healthcare",
      challenge: "Emergency rooms and clinics face unpredictable patient arrivals",
      solution:
        "AI predicts patient flow patterns, optimizes triage efficiency, and reduces wait times in ERs by up to 35%.",
      icon: AlertCircle,
    },
    {
      industry: "Retail",
      challenge: "Long checkout lines during peak shopping hours frustrate customers",
      solution:
        "Dynamic staffing recommendations and real-time queue management ensure smooth checkout experiences even during peak season.",
      icon: Users,
    },
    {
      industry: "Government Services",
      challenge: "Unpredictable citizen arrivals lead to overcrowding and service delays",
      solution:
        "Smart appointment scheduling and queue predictions transform chaotic office visits into organized, efficient service delivery.",
      icon: Globe,
    },
    {
      industry: "Hospitality",
      challenge: "Restaurant wait times create poor customer experiences and lost revenue",
      solution:
        "Accurate wait predictions, reservation optimization, and notification systems maximize table utilization and guest satisfaction.",
      icon: Clock,
    },
  ];

  return (
    <section className="relative px-6 py-24 bg-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-[#210635] uppercase tracking-tight mb-6">
            Industry Applications
          </h2>
          <p className="text-lg text-[#6667AB]/70 max-w-2xl mx-auto">
            LineSync AI transforms queue management across every industry, improving both customer satisfaction and operational efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-8 border border-white/40 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <h3 className="text-xl font-black text-[#210635]">
                    {useCase.industry}
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-[var(--accent)] font-black uppercase tracking-widest mb-2">
                      Challenge
                    </p>
                    <p className="text-sm text-[#6667AB]/70">
                      {useCase.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--accent)] font-black uppercase tracking-widest mb-2">
                      Solution
                    </p>
                    <p className="text-sm text-[#210635] font-medium">
                      {useCase.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// 6. Final CTA Section
function LineSyncCTA() {
  return (
    <section className="relative px-6 py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] glass px-8 py-20 text-center md:px-16 md:py-28 group border-2 border-[var(--accent)]/20">
        {/* Glows */}
        <div className="pointer-events-none absolute -top-32 -left-20 size-[400px] rounded-full bg-[var(--accent)] opacity-20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-20 size-[400px] rounded-full bg-[var(--chrome)] opacity-15 blur-[120px]" />

        <div className="relative z-10">
          <p className="mb-6 text-[10px] font-display font-black uppercase tracking-[0.35em] text-[var(--accent)] drop-shadow-sm">
            // START TRANSFORMING YOUR QUEUES TODAY
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-[#210635] tracking-tighter leading-[0.85] uppercase drop-shadow-[0_10px_30px_rgba(123,51,126,0.1)]">
            Ready for <br /> <span className="text-[var(--accent)]">Queue Intelligence?</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-[#6667AB]/70 text-lg font-medium">
            Join hundreds of enterprises already using LineSync AI to eliminate wait time chaos and create seamless customer experiences.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href="https://app.synkloom.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[var(--accent)] px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-[#210635] hover:shadow-[0_10px_40px_rgba(33,6,53,0.5)] hover:-translate-y-1"
            >
              Launch LineSync AI Now
            </a>
            <a
              href="/"
              className="rounded-full border-2 border-[var(--accent)]/30 bg-white/40 px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-[#210635] backdrop-blur-xl transition-all hover:bg-white/60 hover:border-[var(--accent)] hover:-translate-y-1"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
