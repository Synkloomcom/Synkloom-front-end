import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions | Synkloom" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["introduction", "definitions", "third-party", "termination", "liability", "governing-law", "changes", "contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 400) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavItem = ({ id, label }: { id: string, label: string }) => (
    <li>
      <a 
        href={`#${id}`} 
        className={`block text-xs font-bold uppercase tracking-wide transition-all duration-300 flex items-center gap-3 ${activeSection === id ? "text-[#7B337E] translate-x-2" : "text-[#210635]/50 hover:text-[#7B337E] hover:translate-x-1"}`}
      >
        {activeSection === id && <span className="w-1.5 h-1.5 rounded-full bg-[#7B337E]" />}
        {label}
      </a>
    </li>
  );

  return (
    <div className="relative min-h-dvh overflow-x-clip bg-[color:var(--background)] selection:bg-[#7B337E]/20">
      {/* Decorative Background Effects */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#7B337E]/5 to-transparent -z-10 pointer-events-none" />
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#7B337E]/20 blur-[120px] -z-10 pointer-events-none opacity-60" />
      <div className="absolute top-[20%] left-[-5%] w-[30%] h-[30%] rounded-full bg-[#6667AB]/20 blur-[100px] -z-10 pointer-events-none opacity-60" />

      <Header />
      
      <main className="pt-40 pb-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 scroll-smooth">
        
        {/* Sticky Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-32 glass bg-white/40 border border-white/60 p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-[#6667AB] mb-8 pb-4 border-b border-[#210635]/10">On this page</h4>
            <ul className="space-y-5">
              <NavItem id="introduction" label="Acknowledgment" />
              <NavItem id="definitions" label="Definitions" />
              <NavItem id="third-party" label="Third-Party Links" />
              <NavItem id="termination" label="Termination" />
              <NavItem id="liability" label="Liability & Disclaimers" />
              <NavItem id="governing-law" label="Governing Law" />
              <NavItem id="changes" label="Changes" />
              <NavItem id="contact" label="Contact Us" />
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <div className="glass bg-white/60 border border-white/60 p-8 md:p-12 lg:p-16 rounded-[3rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden backdrop-blur-xl">
            
            {/* Top accent line */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#210635] via-[#7B337E] to-[#6667AB]" />

            <div className="mb-16">
              <div className="inline-block px-4 py-1.5 bg-[#7B337E]/10 text-[#7B337E] text-[10px] font-black uppercase tracking-widest rounded-full mb-8">
                Legal Document
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-[#210635] uppercase tracking-tighter mb-6 leading-[0.9]">
                Terms & <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B337E] to-[#6667AB]">Conditions</span>
              </h1>
              <p className="text-xs font-bold text-[#6667AB] uppercase tracking-widest flex items-center gap-2 border-b border-[#210635]/10 pb-8">
                <span className="w-2 h-2 rounded-full bg-[#7B337E] animate-pulse" />
                Last updated: April 28, 2026
              </p>
            </div>
            
            <div className="text-[15px] text-[#210635] leading-relaxed space-y-16">
              
              <section id="introduction" className="scroll-mt-32">
                <p className="text-lg opacity-80 mb-6 leading-relaxed font-medium">Please read these terms and conditions carefully before using Our Service. These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company.</p>
                <div className="p-6 bg-[#6667AB]/5 border border-[#6667AB]/10 rounded-2xl space-y-4 text-sm opacity-90">
                  <p>Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. By accessing or using the Service You agree to be bound by these Terms and Conditions.</p>
                  <p>You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.</p>
                  <p>Your access is also subject to Our Privacy Policy. Please read Our Privacy Policy carefully before using Our Service.</p>
                </div>
              </section>

              <section id="definitions" className="scroll-mt-32 relative group">
                <div className="absolute -left-12 top-0 bottom-0 w-1 bg-[#7B337E]/0 group-hover:bg-[#7B337E]/10 transition-colors rounded-full hidden md:block" />
                <h2 className="text-2xl md:text-3xl font-black text-[#210635] uppercase tracking-tight mb-8">Interpretation and Definitions</h2>
                
                <div className="space-y-10">
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#7B337E] mb-4 flex items-center gap-3">
                      <span className="w-6 h-px bg-[#7B337E]" /> Interpretation
                    </h3>
                    <p className="opacity-80 pl-9">The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#7B337E] mb-4 flex items-center gap-3">
                      <span className="w-6 h-px bg-[#7B337E]" /> Definitions
                    </h3>
                    <p className="opacity-80 pl-9 mb-6">For the purposes of these Terms and Conditions:</p>
                    <div className="pl-9 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: "Company", desc: 'Refers to Synk Loom, 647 Fifth Ave, San Diego, CA 92101, United States.' },
                        { title: "Service", desc: "Refers to the Website (https://synkloom.com/)." },
                        { title: "You", desc: "The individual or legal entity accessing or using the Service." },
                        { title: "Device", desc: "Any device that can access the Service such as a computer, a cell phone or a digital tablet." },
                      ].map((item, idx) => (
                        <div key={idx} className="p-4 bg-white/50 border border-white shadow-sm rounded-xl hover:shadow-md transition-shadow">
                          <strong className="block text-[#210635] mb-1">{item.title}</strong>
                          <span className="text-sm opacity-70 leading-tight block">{item.desc}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pl-9 mt-6 space-y-4 text-sm opacity-80">
                      <p><strong>Affiliate:</strong> an entity that controls, is controlled by, or is under common control with a party.</p>
                      <p><strong>Third-Party Social Media Service:</strong> any services or content provided by a third party displayed, included, or linked to through the Service.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="third-party" className="scroll-mt-32 relative group">
                <div className="absolute -left-12 top-0 bottom-0 w-1 bg-[#7B337E]/0 group-hover:bg-[#7B337E]/10 transition-colors rounded-full hidden md:block" />
                <h2 className="text-2xl md:text-3xl font-black text-[#210635] uppercase tracking-tight mb-8">Links to Other Websites</h2>
                
                <div className="space-y-6">
                  <div className="pl-0 md:pl-9 border-l-0 md:border-l border-[#210635]/10 space-y-4 opacity-80 text-sm">
                    <p>Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.</p>
                    <p>The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit.</p>
                  </div>
                  
                  <div className="pl-0 md:pl-9 pt-4">
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#7B337E] mb-4 flex items-center gap-3">
                      Links from a Third-Party Social Media Service
                    </h3>
                    <p className="opacity-80 text-sm border-l-2 border-[#7B337E] pl-4">The Service may display, include, make available, or link to content or services provided by a Third-Party Social Media Service. You acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with Your access to or use of any Third-Party Social Media Service.</p>
                  </div>
                </div>
              </section>

              <section id="termination" className="scroll-mt-32 relative group">
                <div className="absolute -left-12 top-0 bottom-0 w-1 bg-[#7B337E]/0 group-hover:bg-[#7B337E]/10 transition-colors rounded-full hidden md:block" />
                <h2 className="text-2xl md:text-3xl font-black text-[#210635] uppercase tracking-tight mb-6">Termination</h2>
                <div className="opacity-80 space-y-4 pl-0 md:pl-9 border-l-0 md:border-l border-[#210635]/10">
                  <p>We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.</p>
                  <p>Upon termination, Your right to use the Service will cease immediately.</p>
                </div>
              </section>

              <section id="liability" className="scroll-mt-32 relative group">
                <div className="absolute -left-12 top-0 bottom-0 w-1 bg-[#7B337E]/0 group-hover:bg-[#7B337E]/10 transition-colors rounded-full hidden md:block" />
                <h2 className="text-2xl md:text-3xl font-black text-[#210635] uppercase tracking-tight mb-8">Liability & Disclaimers</h2>
                
                <div className="space-y-10">
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#7B337E] mb-4 flex items-center gap-3">
                      <span className="w-6 h-px bg-[#7B337E]" /> Limitation of Liability
                    </h3>
                    <div className="pl-9 opacity-80 space-y-4 text-sm">
                      <p>Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.</p>
                      <p>To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever.</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#7B337E] mb-4 flex items-center gap-3">
                      <span className="w-6 h-px bg-[#7B337E]" /> "AS IS" and "AS AVAILABLE" Disclaimer
                    </h3>
                    <div className="pl-9 p-6 bg-[#6667AB]/5 border border-[#6667AB]/10 rounded-2xl space-y-4 text-sm opacity-90">
                      <p>The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. The Company expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service.</p>
                      <p>Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind: (i) as to the operation or availability of the Service; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy or reliability of any information; or (iv) that the Service is free of harmful components.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="governing-law" className="scroll-mt-32 relative group">
                <div className="absolute -left-12 top-0 bottom-0 w-1 bg-[#7B337E]/0 group-hover:bg-[#7B337E]/10 transition-colors rounded-full hidden md:block" />
                <h2 className="text-2xl md:text-3xl font-black text-[#210635] uppercase tracking-tight mb-8">Governing Law & Compliance</h2>
                
                <div className="space-y-8 pl-0 md:pl-9 border-l-0 md:border-l border-[#210635]/10">
                  <div>
                    <strong className="block text-[#210635] mb-2 font-black uppercase tracking-widest text-xs">Governing Law</strong>
                    <p className="opacity-80 text-sm">The laws of the Country, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.</p>
                  </div>
                  <div>
                    <strong className="block text-[#210635] mb-2 font-black uppercase tracking-widest text-xs">United States Legal Compliance</strong>
                    <p className="opacity-80 text-sm">You represent and warrant that (i) You are not located in a country that is subject to the US government embargo, or designated as a "terrorist supporting" country, and (ii) You are not listed on any US government list of prohibited or restricted parties.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="p-4 bg-white/40 rounded-xl border border-white">
                      <strong className="block text-[#210635] mb-1 text-sm font-black uppercase tracking-widest">Severability</strong>
                      <p className="opacity-80 text-xs">If any provision is held to be unenforceable, such provision will be changed and interpreted to accomplish the objectives under applicable law.</p>
                    </div>
                    <div className="p-4 bg-white/40 rounded-xl border border-white">
                      <strong className="block text-[#210635] mb-1 text-sm font-black uppercase tracking-widest">Waiver</strong>
                      <p className="opacity-80 text-xs">The failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right thereafter.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="changes" className="scroll-mt-32 relative group">
                <div className="absolute -left-12 top-0 bottom-0 w-1 bg-[#7B337E]/0 group-hover:bg-[#7B337E]/10 transition-colors rounded-full hidden md:block" />
                <h2 className="text-2xl md:text-3xl font-black text-[#210635] uppercase tracking-tight mb-6">Changes to these Terms</h2>
                <div className="opacity-80 space-y-4 pl-0 md:pl-9 border-l-0 md:border-l border-[#210635]/10">
                  <p>We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect.</p>
                  <p>By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the Service.</p>
                </div>
              </section>

              <section id="contact" className="scroll-mt-32 relative group">
                <div className="absolute -left-12 top-0 bottom-0 w-1 bg-[#7B337E]/0 group-hover:bg-[#7B337E]/10 transition-colors rounded-full hidden md:block" />
                <h2 className="text-2xl md:text-3xl font-black text-[#210635] uppercase tracking-tight mb-8">Contact Us</h2>
                <div className="p-8 bg-[#210635] text-white rounded-[2rem] shadow-xl relative overflow-hidden">
                  <div className="absolute top-[-50%] right-[-10%] w-[60%] h-[200%] bg-gradient-to-bl from-[#7B337E]/40 to-transparent rotate-12 pointer-events-none" />
                  
                  <p className="opacity-90 mb-8 font-medium text-lg relative z-10">If you have any questions about these Terms and Conditions, You can contact us:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                    <a href="mailto:help@synkloom.com" className="flex flex-col p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/10">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-1">Email Us</span>
                      <span className="font-medium">help@synkloom.com</span>
                    </a>
                    
                    <a href="tel:+16192342758" className="flex flex-col p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/10">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-1">Call Us</span>
                      <span className="font-medium">+1 619 234 2758</span>
                    </a>
                    
                    <a href="https://synkloom.com/" target="_blank" rel="noopener noreferrer" className="flex flex-col p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/10">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-1">Website</span>
                      <span className="font-medium">synkloom.com</span>
                    </a>
                    
                    <div className="flex flex-col p-4 rounded-xl bg-white/10 border border-white/10">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/50 mb-1">Mail</span>
                      <span className="font-medium text-sm">647 Fifth Ave, San Diego, CA 92101, US</span>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
