import type { ReactNode } from "react";

type ShowcaseCardProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  image?: string;
  imageAlt?: string;
  children?: ReactNode;
  reverse?: boolean;
  compact?: boolean;
};

/**
 * Wide rounded outlined card with content on one side and a visual on the other.
 * Mirrors the LEKE-VR reference: thick rounded border, soft inner glass,
 * left-side label/title/description, right-side showcase panel.
 */
export function ShowcaseCard({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  children,
  reverse = false,
  compact = false,
}: ShowcaseCardProps) {
  return (
    <div className="relative group perspective-1000">
      {/* Outer hairline frame */}
      <div className="rounded-[3rem] glass p-3 transition-all duration-700 hover:rotate-1 hover:scale-[1.02]">
        {/* Inner glass surface */}
        <div
          className={`relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-white/80 via-white/50 to-white/30 shadow-inner ${
            compact ? "p-6 md:p-8" : "p-8 md:p-10"
          }`}
        >
          <div
            className={`grid items-center gap-6 md:gap-10 ${
              reverse ? "md:grid-cols-[1.2fr_1fr]" : "md:grid-cols-[1fr_1.4fr]"
            }`}
          >
            {/* Text side */}
            <div className={reverse ? "md:order-2" : "md:order-1"}>
              {eyebrow && (
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[color:var(--cyber)]">
                  {eyebrow}
                </p>
              )}
              <h3
                className={`mt-3 font-display tracking-tight text-chrome-deep ${
                  compact ? "text-lg md:text-xl" : "text-2xl md:text-3xl"
                }`}
              >
                {title}
              </h3>
              {description && (
                <p className="mt-3 text-sm leading-relaxed text-chrome-deep/65 md:text-[15px]">
                  {description}
                </p>
              )}
              {children && <div className="mt-5">{children}</div>}
            </div>

            {/* Visual side */}
            <div className={reverse ? "md:order-1" : "md:order-2"}>
              <div className="relative aspect-[16/8] overflow-hidden rounded-2xl border border-chrome-deep/10 bg-chrome-deep/5">
                {/* Tech accent corners */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 size-10 border-l-2 border-t-2 border-[color:var(--cyber)]/60 rounded-tl-2xl" />
                <div className="pointer-events-none absolute right-0 bottom-0 z-10 size-10 border-r-2 border-b-2 border-[color:var(--cyber)]/60 rounded-br-2xl" />
                {image && (
                  <img
                    src={image}
                    alt={imageAlt}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                )}
                {/* Cyan glow overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[color:var(--cyber)]/15 via-transparent to-[color:var(--holo-mag)]/10 mix-blend-screen" />
                {/* Bottom label strip */}
                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-full border border-white/30 bg-chrome-deep/70 px-4 py-1.5 backdrop-blur-md">
                  <span className="font-tech text-[9px] uppercase tracking-[0.25em] text-[color:var(--holo-cyan)]">
                    LEKE.SYS
                  </span>
                  <span className="font-tech text-[9px] uppercase tracking-[0.25em] text-white/60">
                    LIVE
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Subtle corner glows */}
          <div className="pointer-events-none absolute -left-20 -top-20 size-60 rounded-full bg-[color:var(--holo-cyan)] opacity-40 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 size-60 rounded-full bg-[color:var(--holo-mag)] opacity-30 blur-3xl" />
        </div>
      </div>
    </div>
  );
}
