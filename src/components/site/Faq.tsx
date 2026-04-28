import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How does a Smart Queue Management System improve customer satisfaction?",
    a: "A Smart Queue Management System reduces waiting frustration by organizing customer flow efficiently, providing accurate wait times, and creating a smoother service experience that increases trust and loyalty.",
  },
  {
    q: "Why should businesses invest in queue automation solutions?",
    a: "Queue automation helps businesses save time, reduce operational bottlenecks, and improve staff productivity while delivering faster and more professional customer service.",
  },
  {
    q: "Can Smart Queue Systems handle high customer traffic periods?",
    a: "Yes, Smart Queue Systems are designed to manage peak-hour demand by distributing queues intelligently, minimizing congestion, and ensuring steady service performance.",
  },
  {
    q: "How does queue management increase employee efficiency?",
    a: "By automating customer flow, employees can focus on service quality rather than manually controlling lines, leading to better productivity and less workplace stress.",
  },
  {
    q: "Is Smart Queue Management suitable for small businesses?",
    a: "Absolutely. Small businesses can use queue systems to create a professional customer experience, reduce crowding, and optimize limited staff resources.",
  },
  {
    q: "Can the system provide real-time queue insights?",
    a: "Yes, modern Smart Queue Management Systems offer dashboards and analytics that help businesses monitor wait times, service speed, and customer demand instantly.",
  },
  {
    q: "How does queue technology help business growth?",
    a: "Better queue experiences improve customer retention, increase repeat visits, strengthen brand reputation, and support long-term revenue growth.",
  },
  {
    q: "Is Smart Queue Management customizable for different industries?",
    a: "Yes, these systems can be tailored for banks, hospitals, retail stores, telecom centers, government offices, and many other industries with unique service needs.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative px-6 py-32 overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] right-[-10%] text-[24vw] font-display font-black text-[var(--foreground)] opacity-[0.02] whitespace-nowrap select-none tracking-tighter uppercase">
          KNOWLEDGE
        </div>
        <div className="absolute top-1/4 right-1/4 size-64 bg-white/10 blur-[1px] border border-white/20 rounded-full shadow-2xl animate-[float_8s_ease-in-out_infinite] backdrop-blur-md" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-[var(--holo-blue)]/5 blur-[120px] rounded-full mix-blend-multiply" />
      </div>

      <div className="relative mx-auto max-w-4xl z-10">
        <div className="mb-24 flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center rounded-full border border-[var(--accent)]/30 bg-white/40 px-5 py-2 text-[10px] font-display font-black uppercase tracking-[0.2em] text-[var(--accent)] mb-8 backdrop-blur-md shadow-sm">
            Knowledge
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-[var(--foreground)] tracking-tighter leading-[0.85] uppercase max-w-4xl drop-shadow-[0_10px_30px_rgba(66,13,75,0.2)] flex flex-col items-center">
            <span>Customer Flow</span>
            <span className="text-chrome">Excellence</span>
          </h2>
          <p className="mt-8 max-w-xl text-[11px] text-[var(--secondary)] font-black uppercase tracking-[0.25em] leading-loose opacity-60">
            Find answers to common questions about how our smart queue management solutions optimize your business operations and customer experience.
          </p>
        </div>

        <div className="glass rounded-3xl p-2 md:p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-chrome-deep/10 last:border-0"
              >
                <AccordionTrigger className="px-4 py-5 text-left font-display text-sm tracking-tight text-chrome-deep hover:no-underline md:text-base">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-5 text-sm leading-relaxed text-chrome-deep/70">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
