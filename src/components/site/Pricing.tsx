import { Check, ChevronLeft, ChevronRight } from "lucide-react";

const tiers = [
  {
    name: "Branch",
    price: "$299.00 USD / month",
    features: ["1 Active Branch", "Digital Queue Booking", "Real-Time Tracking"],
    cta: "SELECT",
    highlighted: false,
    link: "https://buy.stripe.com/test_6oUfZh6Vlcac3IoeT4fYY01"
  },
  {
    name: "Network",
    price: "$799.00 USD / month",
    features: ["Up to 10 Branches", "AI Wait Prediction", "Smart Alerts"],
    cta: "SELECT",
    highlighted: true,
    link: "https://buy.stripe.com/test_4gM4gz5Rh4HK7YE26ifYY00"
  },
  {
    name: "Enterprise",
    price: "Custom Pricing",
    features: ["Unlimited Branches", "Full API Access", "24/7 Priority Support"],
    cta: "CONTACT US",
    highlighted: false,
    link: "#contact"
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-40 bg-[var(--background)]">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00d4ff]/5 blur-[150px] rounded-full mix-blend-multiply" />
        <div className="absolute top-[20%] left-[-10%] text-[25vw] font-display font-black text-[var(--foreground)] opacity-[0.03] whitespace-nowrap select-none tracking-tighter transform -rotate-12 uppercase">
          SCALE
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl z-10 flex flex-col items-center">
        <div className="mb-32 flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center rounded-full border border-[var(--accent)]/30 bg-white/40 px-5 py-2 text-[10px] font-display font-black uppercase tracking-[0.2em] text-[var(--accent)] mb-8 backdrop-blur-md shadow-sm">
            Acquisition
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-[var(--foreground)] tracking-tighter leading-[0.85] uppercase max-w-4xl drop-shadow-[0_10px_30px_rgba(66,13,75,0.2)] flex flex-col items-center">
            <span>Subscription</span>
            <span className="text-chrome">Models</span>
          </h2>
        </div>

        <div className="relative w-full max-w-5xl flex items-center justify-center mt-10">
          <button className="hidden lg:flex absolute -left-20 text-[var(--secondary)]/30 hover:text-[var(--secondary)] transition-colors">
            <ChevronLeft size={80} strokeWidth={1} />
          </button>

          <div className="grid gap-10 md:gap-6 lg:gap-8 lg:grid-cols-3 items-center w-full relative z-10">
            {tiers.map((t) => {
              const isHigh = t.highlighted;
              return (
                <div
                  key={t.name}
                  className={`relative flex flex-col items-center px-8 pt-10 pb-12 rounded-[2.5rem] transition-all duration-500 w-full max-w-sm mx-auto ${
                    isHigh
                      ? "bg-gradient-to-b from-[var(--secondary)] to-[var(--accent)] text-white shadow-[0_40px_100px_rgba(123,51,126,0.4)] lg:scale-110 z-20"
                      : "bg-white text-[var(--secondary)] shadow-[0_20px_60px_rgba(33,6,53,0.08)] z-10"
                  }`}
                >
                  {/* Drips for highlighted card */}
                  {isHigh && (
                    <div className="hidden lg:block">
                      <div className="absolute -top-12 left-[25%] w-10 h-16 bg-[var(--secondary)] rounded-t-full -z-10" />
                      <div className="absolute -top-20 right-[30%] w-12 h-24 bg-[var(--secondary)] rounded-t-full -z-10" />
                      <div className="absolute -top-28 right-[30%] w-8 h-8 bg-[var(--secondary)] rounded-full -z-10" />

                      <div className="absolute -bottom-16 right-[25%] w-10 h-24 bg-[var(--accent)] rounded-b-full -z-10" />
                      <div className="absolute -bottom-24 left-[35%] w-12 h-32 bg-[var(--accent)] rounded-b-full -z-10" />
                      <div className="absolute -bottom-36 left-[35%] w-10 h-10 bg-[var(--accent)] rounded-full -z-10" />
                    </div>
                  )}

                  {/* Top Section */}
                  <h3 className="text-3xl font-light tracking-wide mb-3">{t.name}</h3>
                  <p className={`text-[13px] font-medium tracking-wider mb-2 ${isHigh ? "text-white/90" : "text-[var(--secondary)]/60"}`}>
                    {t.price}
                  </p>

                  {/* Divider with Ticket Cutouts */}
                  <div className="relative w-full h-8 my-6 flex items-center justify-center">
                    <div className={`absolute top-1/2 -left-8 -right-8 border-b-[1.5px] border-dashed ${isHigh ? "border-white/50" : "border-[var(--secondary)]/30"}`} />
                    {/* Cutouts faked using background color */}
                    <div className="absolute top-1/2 -translate-y-1/2 -left-11 w-6 h-6 bg-[var(--background)] rounded-full z-10" />
                    <div className="absolute top-1/2 -translate-y-1/2 -right-11 w-6 h-6 bg-[var(--background)] rounded-full z-10" />
                  </div>

                  {/* Features */}
                  <ul className="w-full space-y-5 mb-10 px-2">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-center gap-4 text-[13px]">
                        <div
                          className={`flex-shrink-0 size-[18px] rounded-full flex items-center justify-center ${
                            isHigh ? "bg-white text-[var(--accent)]" : "bg-[var(--secondary)] text-white"
                          }`}
                        >
                          <Check size={12} strokeWidth={4} />
                        </div>
                        <span className={`font-medium ${isHigh ? "text-white" : "text-[var(--secondary)]/80"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <a
                    href={t.link}
                    className={`mt-auto rounded-full py-3 px-10 text-[11px] font-bold uppercase tracking-widest transition-transform hover:scale-105 shadow-xl text-center inline-block ${
                      isHigh
                        ? "bg-white text-[var(--accent)]"
                        : "bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] text-white"
                    }`}
                  >
                    {t.cta}
                  </a>
                </div>
              );
            })}
          </div>

          <button className="hidden lg:flex absolute -right-20 text-[var(--secondary)]/30 hover:text-[var(--secondary)] transition-colors">
            <ChevronRight size={80} strokeWidth={1} />
          </button>
        </div>
      </div>
    </section>
  );
}
