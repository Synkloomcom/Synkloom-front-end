import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  const SITE_KEY = "0x4AAAAAADC0cXQns8edHHMA";

  useEffect(() => {
    // Load Cloudflare Turnstile script
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section id="contact" className="relative px-6 py-32 z-10 overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[30%] left-[20%] text-[28vw] font-display font-black text-[var(--foreground)] opacity-[0.02] whitespace-nowrap select-none tracking-tighter uppercase">
          CONNECT
        </div>
        <div className="absolute -left-32 -top-32 w-96 h-96 bg-[var(--holo-cyan)]/10 blur-[120px] rounded-full animate-pulse" />
      </div>

      <div className="relative mx-auto max-w-7xl z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 flex flex-col items-center text-center px-4"
        >
          <div className="inline-flex items-center justify-center rounded-full border border-[var(--accent)]/30 bg-white/40 px-5 py-2 text-[10px] font-display font-black uppercase tracking-[0.25em] text-[var(--accent)] mb-8 backdrop-blur-md shadow-sm">
            Connectivity
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-[var(--foreground)] tracking-tighter leading-[0.85] uppercase max-w-4xl drop-shadow-[0_10px_30px_rgba(66,13,75,0.2)] flex flex-col items-center">
            <span>Connect with our</span>
            <span className="text-chrome">Strategists</span>
          </h2>
          <p className="mt-8 max-w-2xl text-[var(--foreground)]/60 text-xs font-bold uppercase tracking-[0.25em] leading-loose opacity-80">
            Whether you're looking for technical support, enterprise solutions, or future queue optimization roadmaps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 flex flex-col gap-6">
            {[
              { icon: Mail, label: "Email Us", val: "hello@synkloom.com", color: "var(--accent)" },
              { icon: Phone, label: "Call Support", val: "+1 (888) SYNK-542", color: "var(--secondary)" },
              { icon: MapPin, label: "Synkloom HQ", val: "525 Market St, San Francisco", color: "var(--primary)" }
            ].map((info, i) => (
              <div key={i} className="glass group rounded-[2.5rem] p-8 flex items-start gap-6 hover:translate-x-3 transition-all cursor-pointer">
                <div className="size-14 rounded-2xl bg-white/40 flex items-center justify-center text-[var(--foreground)] group-hover:bg-[var(--accent)] group-hover:text-white transition-all shadow-inner border border-white/60">
                  <info.icon size={22} />
                </div>
                <div>
                  <h4 className="font-display font-black text-[10px] tracking-widest text-[var(--secondary)] uppercase mb-1">{info.label}</h4>
                  <p className="text-lg font-black text-[var(--foreground)] uppercase tracking-tighter">{info.val}</p>
                </div>
              </div>
            ))}

            <div className="mt-8 flex gap-3">
               {['fb', 'tw', 'ln', 'ig'].map((social) => (
                 <div key={social} className="size-12 rounded-2xl border border-white/60 bg-white/20 backdrop-blur-md flex items-center justify-center text-[var(--foreground)] hover:bg-white hover:text-[var(--accent)] transition-all cursor-pointer shadow-sm uppercase font-black text-[10px] tracking-tighter">
                   {social}
                 </div>
               ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="glass-card p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 size-96 bg-[var(--accent)]/5 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 size-96 bg-[var(--secondary)]/5 rounded-full blur-[100px] pointer-events-none" />

              <form 
                action="https://formspree.io/f/myklovad" 
                method="POST" 
                className="relative z-10 flex flex-col gap-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[var(--foreground)] ml-1">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="Jane Doe"
                      className="w-full bg-white/40 border border-white/80 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-[var(--accent)]/10 focus:bg-white transition-all placeholder:text-[var(--foreground)]/30 text-[var(--foreground)] font-black uppercase text-xs tracking-widest"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[var(--foreground)] ml-1">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full bg-white/40 border border-white/80 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-[var(--accent)]/10 focus:bg-white transition-all placeholder:text-[var(--foreground)]/30 text-[var(--foreground)] font-black uppercase text-xs tracking-widest"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[var(--foreground)] ml-1">Subject</label>
                  <select 
                    name="subject"
                    className="w-full bg-white/40 border border-white/80 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-[var(--accent)]/10 focus:bg-white transition-all text-[var(--foreground)] font-black uppercase text-xs tracking-widest appearance-none"
                  >
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership Proposal</option>
                  </select>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[var(--foreground)] ml-1">Your Message</label>
                  <textarea 
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us what's on your mind..."
                    className="w-full bg-white/40 border border-white/80 rounded-[2.5rem] px-8 py-6 focus:outline-none focus:ring-4 focus:ring-[var(--accent)]/10 focus:bg-white transition-all placeholder:text-[var(--foreground)]/30 text-[var(--foreground)] font-black uppercase text-xs tracking-widest resize-none"
                  ></textarea>
                </div>

                {/* Cloudflare Turnstile Widget */}
                <div className="cf-turnstile" data-sitekey={SITE_KEY}></div>

                <button 
                  type="submit"
                  className="group relative mt-4 inline-flex items-center justify-center gap-4 bg-[var(--foreground)] text-white px-12 py-5 rounded-2xl font-black tracking-[0.3em] uppercase hover:bg-[var(--primary)] transition-all overflow-hidden shadow-2xl"
                >
                  <div className="absolute inset-0 w-0 group-hover:w-full bg-white/10 transition-all duration-700" />
                  <span className="relative z-10 flex items-center gap-4">
                    Submit <Send size={18} />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
