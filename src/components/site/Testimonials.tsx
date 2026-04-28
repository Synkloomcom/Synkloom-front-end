import { Quote, Star, Heart, MessageCircle, ThumbsUp } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonials" className="relative px-6 py-32 overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[40%] left-[-5%] text-[26vw] font-display font-black text-[var(--foreground)] opacity-[0.02] whitespace-nowrap select-none tracking-tighter uppercase">
          TRUST
        </div>
        <div className="absolute top-10 left-10 size-32 bg-[var(--holo-mag)]/10 blur-[60px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-10 size-[400px] bg-white/20 blur-[10px] border border-white/40 rounded-full shadow-2xl animate-[float_10s_ease-in-out_infinite] backdrop-blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl z-10">
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center rounded-full border border-[var(--accent)]/30 bg-white/40 px-5 py-2 text-[10px] font-display font-black uppercase tracking-[0.2em] text-[var(--accent)] mb-8 backdrop-blur-md shadow-sm">
            Community
          </div>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-[var(--foreground)] tracking-tighter leading-[0.85] uppercase max-w-4xl drop-shadow-[0_10px_30px_rgba(66,13,75,0.2)] flex flex-col items-center">
            <span>Beyond Waiting</span>
            <span className="text-chrome">Experience</span>
          </h2>
          <p className="mt-8 max-w-xl text-[11px] text-[var(--secondary)] font-black uppercase tracking-[0.25em] leading-loose opacity-60">
            Real stories from business leaders who have transformed their service operations with our smart queue technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 pt-10">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-14">
            
            {/* Card 1: James Anderson */}
            <div className="glass rounded-[2.5rem] rounded-tl-none relative p-8 mt-4 shadow-sm hover:-translate-y-1 transition-transform">
              <div className="absolute -left-6 -top-6">
                <img src="/Victoria Linton.svg" alt="James Anderson" className="w-20 h-20 rounded-full border-[5px] border-white/80 shadow-md object-cover bg-white" />
              </div>
              <div className="absolute right-6 -top-10 text-[color:var(--chrome-deep)] opacity-10">
                <Quote size={80} fill="currentColor" strokeWidth={0} />
              </div>
              <h4 className="font-display font-medium text-xl text-chrome-deep text-center mb-1">James Anderson</h4>
              <div className="flex justify-center mb-5 text-[#f59e0b]">
                <Star size={16} fill="currentColor" strokeWidth={0} /><Star size={16} fill="currentColor" strokeWidth={0} /><Star size={16} fill="currentColor" strokeWidth={0} /><Star size={16} fill="currentColor" strokeWidth={0} /><Star size={16} fill="currentColor" strokeWidth={0} />
              </div>
              <p className="text-[15px] leading-relaxed text-chrome-deep/80 text-center tracking-wide">
                “Since implementing the Smart Queue Management System, our service flow has become incredibly smooth. Customers no longer complain about waiting times, and our staff can manage peak hours efficiently.”
              </p>
            </div>

            {/* Card 2: Emily Carter */}
            <div className="glass rounded-full px-10 py-8 relative pl-8 pr-24 shadow-sm hover:-translate-y-1 transition-transform">
              <p className="italic text-[14px] text-chrome-deep/80 mb-5 tracking-wide leading-relaxed">
                “This system has completely changed how we handle customer traffic. The real-time queue updates and digital ticketing have reduced confusion and long lines.”
              </p>
              <div className="flex justify-between items-end">
                <div>
                  <h4 className="text-xs font-bold text-chrome-deep uppercase tracking-widest">Emily Carter</h4>
                  <span className="text-[10px] text-chrome-deep/60">Business Owner</span>
                </div>
                <div className="flex text-[#f59e0b]">
                  <Star fill="currentColor" size={12} strokeWidth={0}/><Star fill="currentColor" size={12} strokeWidth={0}/><Star fill="currentColor" size={12} strokeWidth={0}/><Star fill="currentColor" size={12} strokeWidth={0}/><Star fill="currentColor" size={12} strokeWidth={0}/>
                </div>
              </div>
              <div className="absolute -right-6 top-1/2 -translate-y-1/2">
                <img src="/Dmitri Woodhouse.svg" alt="Emily Carter" className="w-24 h-24 rounded-full border-[5px] border-white/80 shadow-md object-cover bg-white" />
              </div>
            </div>

          </div>


          {/* Column 2 */}
          <div className="flex flex-col gap-14 lg:-mt-10">
            
            {/* Card 3: Sophia Williams */}
            <div className="glass rounded-[3rem] p-10 pt-16 relative text-center shadow-md hover:-translate-y-1 transition-transform mt-10">
              <div className="absolute left-1/2 -top-12 -translate-x-1/2">
                <div className="rounded-full border-[6px] border-[color:var(--holo-mag)] p-[2px] bg-white shadow-xl overflow-hidden">
                  <img src="/Fanny Dean.svg" alt="Sophia Williams" className="w-24 h-24 rounded-full object-cover bg-white" />
                </div>
              </div>
              <h3 className="font-display font-bold text-2xl text-chrome-deep mb-3 uppercase tracking-widest leading-tight">Modern & Efficient</h3>
              <div className="flex justify-center mb-6 text-chrome-deep/30 items-center gap-1">
                <Star fill="currentColor" size={20} strokeWidth={0}/><Star fill="currentColor" size={20} strokeWidth={0}/><Star fill="currentColor" size={20} strokeWidth={0}/><Star fill="currentColor" size={20} strokeWidth={0}/><Star fill="currentColor" size={20} strokeWidth={0}/>
              </div>
              <p className="text-[15px] italic text-chrome-deep/70 mb-8 px-2 leading-relaxed">
                “Our customers love the convenience of digital queue booking. It reduced physical crowding and improved their overall experience. The system has given our brand a modern image.”
              </p>
              <div className="font-serif italic text-4xl text-chrome-deep/80 drop-shadow-sm pr-4">Sophia Williams</div>
            </div>

            {/* Card 4: Daniel Thompson */}
            <div className="glass rounded-[2rem] rounded-bl-sm p-8 relative ml-4 shadow-sm hover:-translate-y-1 transition-transform">
              <div className="absolute -left-10 top-6">
                <div className="w-24 h-28 rounded-full overflow-hidden border-[5px] border-white/80 bg-white shadow-md">
                   <img src="/CatherineDoe.svg" alt="Daniel Thompson" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="absolute -bottom-4 left-6 w-0 h-0 border-l-[16px] border-l-transparent border-t-[16px] border-t-white/30 border-r-[16px] border-r-transparent"></div>
              
              <div className="pl-12">
                <h4 className="font-display font-bold text-[13px] tracking-widest text-chrome-deep uppercase mb-3">Remarkable Control</h4>
                <p className="text-[14px] text-chrome-deep/80 italic mb-5 leading-relaxed">
                  “The Smart Queue Management System brought a new level of control to our business. We can now monitor performance in real time.”
                </p>
                <div className="text-right text-[11px] text-[color:var(--holo-mag)] font-bold mb-4 tracking-widest">Daniel Thompson</div>
                <div className="bg-white/40 border border-white/50 w-min whitespace-nowrap ml-auto px-4 py-2 rounded-full flex gap-1 text-[#f59e0b] shadow-inner">
                  <Star fill="currentColor" size={12} strokeWidth={0}/><Star fill="currentColor" size={12} strokeWidth={0}/><Star fill="currentColor" size={12} strokeWidth={0}/><Star fill="currentColor" size={12} strokeWidth={0}/><Star fill="currentColor" size={12} strokeWidth={0}/>
                </div>
              </div>
            </div>

          </div>


          {/* Column 3 */}
          <div className="flex flex-col gap-10">
            
            {/* Card 5: Michael Roberts */}
            <div className="glass rounded-[1.5rem] overflow-hidden shadow-sm hover:-translate-y-1 transition-transform">
              <div className="bg-white/50 border-b border-white/40 px-6 py-4 flex justify-between items-center backdrop-blur-xl">
                <span className="font-display font-semibold text-[15px] text-chrome-deep opacity-90">Branch Manager</span>
                <span className="text-[11px] font-bold tracking-wider text-[color:var(--holo-mag)]">Michael Roberts</span>
              </div>
              <div className="p-8 bg-white/10">
                <p className="text-[14px] text-chrome-deep/80 italic mb-6 leading-relaxed">
                  “We saw immediate improvements after integrating this system. Customer wait times dropped significantly, and service delivery became more structured.”
                </p>
                <div className="flex justify-between items-center text-[10px] uppercase font-bold text-chrome-deep/60 tracking-widest pt-2">
                  <div className="flex gap-1 text-[#f59e0b]">
                    <Star fill="currentColor" size={12} strokeWidth={0}/><Star fill="currentColor" size={12} strokeWidth={0}/><Star fill="currentColor" size={12} strokeWidth={0}/><Star fill="currentColor" size={12} strokeWidth={0}/><Star fill="currentColor" size={12} strokeWidth={0}/>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Heart size={16} className="text-[color:var(--holo-mag)] fill-[color:var(--holo-mag)]" /> 
                    <MessageCircle size={16} className="text-[color:var(--chrome)] fill-[color:var(--chrome)]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6: Olivia Martinez */}
            <div className="glass rounded-[2rem] rounded-br-sm p-10 relative mb-12 shadow-sm hover:-translate-y-1 transition-transform mt-4">
              <div className="absolute -right-3 -top-3 bg-[color:var(--chrome-deep)] text-[color:var(--holo-mag)] p-[10px] rounded-full border-4 border-white shadow-lg z-20">
                <ThumbsUp size={20} strokeWidth={2.5}/>
              </div>
              <p className="text-[16px] text-chrome-deep/80 italic mb-6 leading-relaxed tracking-wide">
                “After using this system, our customer handling capacity increased without adding extra stress to staff. The analytics tools are very helpful for decision-making.”
              </p>
              <div className="text-right flex flex-col items-end pr-2">
                <div className="font-serif italic text-3xl text-chrome-deep tracking-wide opacity-90 pr-2">Olivia Martinez</div>
                <div className="text-[11px] mt-1 font-bold tracking-widest text-[color:var(--chrome)] uppercase">Operations Manager</div>
              </div>
              <div className="absolute -bottom-8 right-6 text-chrome-deep/20 -scale-x-100 rotate-180 mix-blend-overlay">
                 <Quote size={80} fill="currentColor" strokeWidth={0}/>
              </div>
              <div className="absolute -bottom-4 right-10 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-white/30 border-r-[0px] border-r-transparent"></div>
              
              <div className="absolute -bottom-8 right-24">
                <div className="w-20 h-20 rounded-full overflow-hidden border-[5px] border-white/80 bg-white shadow-md">
                  <img src="/Jane.svg" alt="Olivia Martinez" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
