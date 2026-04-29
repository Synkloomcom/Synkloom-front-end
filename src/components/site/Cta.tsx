import chromeBlob from "@/assets/chrome-blob.png";

export function Cta() {
  return (
    <section className="relative px-6 py-24">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] glass px-8 py-20 text-center text-chrome-deep md:px-16 md:py-28 group border-beam">
        {/* Glows */}
        <div className="pointer-events-none absolute -top-32 -left-20 size-[400px] rounded-full bg-[color:var(--cyber)] opacity-20 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-20 size-[400px] rounded-full bg-[color:var(--holo-mag)] opacity-30 blur-[120px]" />

        <img
          src={chromeBlob}
          alt=""
          aria-hidden
          className="float-slow pointer-events-none absolute -left-10 top-10 hidden w-32 opacity-50 md:block"
        />
        <img
          src={chromeBlob}
          alt=""
          aria-hidden
          className="float-slow pointer-events-none absolute -right-8 bottom-12 hidden w-28 opacity-50 md:block"
          style={{ animationDelay: "-2s" }}
        />

        <div className="relative z-10">
          <p className="mb-6 text-[10px] font-display font-black uppercase tracking-[0.35em] text-[color:var(--holo-mag)] drop-shadow-sm">
            // OPTIMIZE YOUR SERVICE FLOW
          </p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-[var(--foreground)] tracking-tighter leading-[0.85] uppercase drop-shadow-[0_10px_30px_rgba(66,13,75,0.2)] flex flex-col items-center">
            <span>THE FUTURE OF</span>
            <span className="text-chrome">QUEUES.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-chrome-deep/80 text-lg font-medium">
            Join 500+ enterprises already optimizing their physical service delivery.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href="/linesync-ai"
              className="rounded-full bg-chrome-deep px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all hover:bg-black hover:shadow-[0_10px_40px_rgba(33,6,53,0.5)] hover:-translate-y-1"
            >
              Deploy LineSync AI
            </a>
            <a
              href="/linesync-ai"
              className="rounded-full border-[2px] border-white/60 bg-white/40 px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-chrome-deep backdrop-blur-xl transition-all hover:bg-white/90 hover:border-white hover:shadow-[0_10px_40px_rgba(255,255,255,0.7)] hover:-translate-y-1"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
