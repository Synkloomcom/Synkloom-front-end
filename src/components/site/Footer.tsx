import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative px-6 pb-20 pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="glass bg-white/40 border-white/60 rounded-[3rem] p-10 md:p-16 shadow-[0_20px_60px_rgba(33,6,53,0.08)]">
          <div className="grid gap-16 md:grid-cols-4">
            <div className="md:col-span-1">
              <a href="#" className="flex items-center justify-start hover:scale-105 transition-transform">
                <img src="/logo.svg" alt="Synkloom Logo" className="h-20 w-auto" />
              </a>
              <p className="mt-6 text-[11px] font-black uppercase tracking-[0.2em] text-[var(--secondary)] opacity-80 leading-relaxed">
                Intelligent Queue & Appointment Optimization.
              </p>
              <div className="mt-8 flex gap-3">
                {["X", "IG", "LN", "DC"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="flex size-11 items-center justify-center rounded-2xl border border-white/80 bg-white/40 text-[10px] font-black uppercase tracking-[0.2em] text-[var(--foreground)] transition-all hover:bg-[var(--foreground)] hover:text-white shadow-sm"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {[
              { 
                t: "Platform", 
                l: [
                  { name: "Features", href: "#features" },
                  { name: "Engine", href: "#how" },
                  { name: "Architecture", href: "#architecture" },
                  { name: "Pricing", href: "#pricing" }
                ] 
              },
              { 
                t: "Resources", 
                l: [
                  { name: "Testimonials", href: "#testimonials" },
                  { name: "FAQ", href: "#faq" },
                  { name: "Contact", href: "#contact" },
                  { name: "Support", href: "#contact" }
                ] 
              },
              { 
                t: "App", 
                l: [
                  { name: "Book Slot", href: "/product" },
                  { name: "Dashboard", href: "/dashboard" },
                  { name: "Privacy", href: "/privacy" },
                  { name: "Terms", href: "/terms" }
                ] 
              },
            ].map((col) => (
              <div key={col.t}>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[var(--accent)]">
                  {col.t}
                </p>
                <ul className="mt-8 space-y-4">
                  {col.l.map((i) => (
                    <li key={i.name}>
                      {i.href.startsWith('/') ? (
                        <Link
                          to={i.href}
                          className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--secondary)] transition-all hover:text-[var(--foreground)]"
                        >
                          {i.name}
                        </Link>
                      ) : (
                        <a
                          href={i.href}
                          className="text-[11px] font-black uppercase tracking-[0.2em] text-[var(--secondary)] transition-all hover:text-[var(--foreground)]"
                        >
                          {i.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/40 pt-10 md:flex-row">
            <p className="text-[9px] font-black uppercase tracking-[0.25em] text-[var(--secondary)]/60">
              © {new Date().getFullYear()} SYNKLOOM — All queues optimized.
            </p>
            <div className="flex gap-8 text-[9px] font-black uppercase tracking-[0.25em] text-[var(--secondary)]/60 items-center">
              <Link to="/privacy" className="hover:text-[var(--accent)] transition-colors outline-none cursor-pointer">Privacy</Link>
              <Link to="/terms" className="hover:text-[var(--accent)] transition-colors outline-none cursor-pointer">Terms</Link>
              <a href="#" className="hover:text-[var(--accent)] transition-colors outline-none cursor-pointer">API Status</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
