import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Synkloom" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["introduction", "definitions", "data-collection", "children", "links", "changes", "contact"];
      
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
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#7B337E]/20 blur-[120px] -z-10 pointer-events-none opacity-60" />
      <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-[#6667AB]/20 blur-[100px] -z-10 pointer-events-none opacity-60" />

      <Header />
      
      <main className="pt-40 pb-24 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 scroll-smooth">
        
        {/* Sticky Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-32 glass bg-white/40 border border-white/60 p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-[#6667AB] mb-8 pb-4 border-b border-[#210635]/10">On this page</h4>
            <ul className="space-y-5">
              <NavItem id="introduction" label="Introduction" />
              <NavItem id="definitions" label="Definitions" />
              <NavItem id="data-collection" label="Data Collection" />
              <NavItem id="children" label="Children's Privacy" />
              <NavItem id="links" label="External Links" />
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
                Privacy <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7B337E] to-[#6667AB]">Policy</span>
              </h1>
              <p className="text-xs font-bold text-[#6667AB] uppercase tracking-widest flex items-center gap-2 border-b border-[#210635]/10 pb-8">
                <span className="w-2 h-2 rounded-full bg-[#7B337E] animate-pulse" />
                Last updated: April 28, 2026
              </p>
            </div>
            
            <div className="text-[15px] text-[#210635] leading-relaxed space-y-16">
              
              <section id="introduction" className="scroll-mt-32">
                <p className="text-lg opacity-80 mb-6 leading-relaxed font-medium">This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
                <div className="p-6 bg-[#6667AB]/5 border border-[#6667AB]/10 rounded-2xl">
                  <p className="opacity-80">We use Your Personal Data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the <a href="https://www.termsfeed.com/privacy-policy-generator/" target="_blank" rel="noopener noreferrer" className="text-[#7B337E] font-bold hover:underline decoration-2 underline-offset-4 transition-all">Privacy Policy Generator</a>.</p>
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
                    <p className="opacity-80 pl-9 mb-6">For the purposes of this Privacy Policy:</p>
                    <div className="pl-9 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { title: "Account", desc: "A unique account created for You to access our Service or parts of our Service." },
                        { title: "Company", desc: "Refers to Synk Loom, 647 Fifth Ave, San Diego, CA 92101, United States." },
                        { title: "Cookies", desc: "Small files placed on Your Device containing the details of Your browsing history." },
                        { title: "Device", desc: "Any device that can access the Service such as a computer, a cell phone or a digital tablet." },
                        { title: "Service", desc: "Refers to the Website (https://synkloom.com/)." },
                        { title: "You", desc: "The individual accessing or using the Service, or the company on behalf of which such individual is accessing the Service." },
                      ].map((item, idx) => (
                        <div key={idx} className="p-4 bg-white/50 border border-white shadow-sm rounded-xl hover:shadow-md transition-shadow">
                          <strong className="block text-[#210635] mb-1">{item.title}</strong>
                          <span className="text-sm opacity-70 leading-tight block">{item.desc}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pl-9 mt-6 space-y-4 text-sm opacity-80">
                      <p><strong>Affiliate:</strong> an entity that controls, is controlled by, or is under common control with a party (50% or more ownership).</p>
                      <p><strong>Personal Data:</strong> any information that relates to an identified or identifiable individual.</p>
                      <p><strong>Service Provider:</strong> any natural or legal person who processes the data on behalf of the Company to facilitate the Service.</p>
                      <p><strong>Usage Data:</strong> data collected automatically, generated by the use of the Service or from the Service infrastructure itself.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="data-collection" className="scroll-mt-32 relative group">
                <div className="absolute -left-12 top-0 bottom-0 w-1 bg-[#7B337E]/0 group-hover:bg-[#7B337E]/10 transition-colors rounded-full hidden md:block" />
                <h2 className="text-2xl md:text-3xl font-black text-[#210635] uppercase tracking-tight mb-8">Collecting and Using Your Personal Data</h2>
                
                <div className="space-y-12">
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#7B337E] mb-6 flex items-center gap-3">
                      <span className="w-6 h-px bg-[#7B337E]" /> Types of Data Collected
                    </h3>
                    
                    <div className="pl-9 space-y-8">
                      <div className="p-6 bg-gradient-to-br from-[#7B337E]/5 to-transparent border border-[#7B337E]/10 rounded-2xl">
                        <h4 className="text-sm font-bold text-[#210635] uppercase tracking-wider mb-3">Personal Data</h4>
                        <p className="opacity-80 mb-4 text-sm">We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You, including but not limited to:</p>
                        <ul className="grid grid-cols-2 gap-2 text-sm opacity-90 font-medium">
                          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6667AB]" /> Email address</li>
                          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6667AB]" /> First and last name</li>
                          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6667AB]" /> Phone number</li>
                          <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#6667AB]" /> Address details</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-[#210635] uppercase tracking-wider mb-3">Usage Data & Tracking Technologies</h4>
                        <div className="opacity-80 space-y-4 text-sm">
                          <p>Usage Data is collected automatically when using the Service. It may include Your Device's IP address, browser type, pages visited, time and date of visit, and unique device identifiers.</p>
                          <p>We use Cookies and similar tracking technologies (beacons, tags, scripts) to track the activity on Our Service. Cookies can be "Persistent" or "Session" Cookies.</p>
                          <p>We use Necessary/Essential Cookies, Cookies Policy Acceptance Cookies, and Functionality Cookies to provide You with a more personal experience.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#7B337E] mb-6 flex items-center gap-3">
                      <span className="w-6 h-px bg-[#7B337E]" /> Use of Your Personal Data
                    </h3>
                    <div className="pl-9">
                      <p className="opacity-80 mb-4">The Company may use Personal Data for purposes including:</p>
                      <ul className="space-y-3 opacity-80 text-sm">
                        <li className="flex items-start gap-3"><strong className="text-[#7B337E]">Maintain Service:</strong> <span>To provide and monitor the usage of our Service.</span></li>
                        <li className="flex items-start gap-3"><strong className="text-[#7B337E]">Manage Account:</strong> <span>To manage Your registration as a user.</span></li>
                        <li className="flex items-start gap-3"><strong className="text-[#7B337E]">Contract Performance:</strong> <span>Development, compliance and undertaking of purchase contracts.</span></li>
                        <li className="flex items-start gap-3"><strong className="text-[#7B337E]">Communication:</strong> <span>To contact You regarding updates, security, and informative communications.</span></li>
                        <li className="flex items-start gap-3"><strong className="text-[#7B337E]">Business Transfers:</strong> <span>To evaluate or conduct mergers, sales, or asset transfers.</span></li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#7B337E] mb-4 flex items-center gap-3">
                      <span className="w-6 h-px bg-[#7B337E]" /> Retention & Transfer
                    </h3>
                    <div className="pl-9 opacity-80 space-y-4 text-sm">
                      <p>We will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. User Accounts are retained for the duration of the relationship plus up to 24 months. Support and Usage Data are retained for up to 24 months.</p>
                      <p>Your information may be transferred to and maintained on computers located outside of Your governmental jurisdiction where data protection laws may differ.</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#7B337E] mb-4 flex items-center gap-3">
                      <span className="w-6 h-px bg-[#7B337E]" /> Deletion & Disclosure
                    </h3>
                    <div className="pl-9 opacity-80 space-y-4 text-sm">
                      <p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You. You may update, amend, or delete Your information from Your Account settings.</p>
                      <p>We may disclose Your Personal Data in connection with Business Transactions, Law Enforcement requests, or other Legal Requirements to protect the rights, property, and safety of the Company and its users.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="children" className="scroll-mt-32 relative group">
                <div className="absolute -left-12 top-0 bottom-0 w-1 bg-[#7B337E]/0 group-hover:bg-[#7B337E]/10 transition-colors rounded-full hidden md:block" />
                <h2 className="text-2xl md:text-3xl font-black text-[#210635] uppercase tracking-tight mb-6">Children's Privacy</h2>
                <div className="opacity-80 space-y-4 pl-0 md:pl-9 border-l-0 md:border-l border-[#210635]/10">
                  <p>Our Service does not address anyone under the age of 16. We do not knowingly collect personally identifiable information from anyone under the age of 16. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us.</p>
                  <p>If We become aware that We have collected Personal Data from anyone under the age of 16 without verification of parental consent, We take steps to remove that information from Our servers.</p>
                </div>
              </section>

              <section id="links" className="scroll-mt-32 relative group">
                <div className="absolute -left-12 top-0 bottom-0 w-1 bg-[#7B337E]/0 group-hover:bg-[#7B337E]/10 transition-colors rounded-full hidden md:block" />
                <h2 className="text-2xl md:text-3xl font-black text-[#210635] uppercase tracking-tight mb-6">Links to Other Websites</h2>
                <div className="opacity-80 space-y-4 pl-0 md:pl-9 border-l-0 md:border-l border-[#210635]/10">
                  <p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
                  <p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
                </div>
              </section>

              <section id="changes" className="scroll-mt-32 relative group">
                <div className="absolute -left-12 top-0 bottom-0 w-1 bg-[#7B337E]/0 group-hover:bg-[#7B337E]/10 transition-colors rounded-full hidden md:block" />
                <h2 className="text-2xl md:text-3xl font-black text-[#210635] uppercase tracking-tight mb-6">Changes to this Privacy Policy</h2>
                <div className="opacity-80 space-y-4 pl-0 md:pl-9 border-l-0 md:border-l border-[#210635]/10">
                  <p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
                  <p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.</p>
                </div>
              </section>

              <section id="contact" className="scroll-mt-32 relative group">
                <div className="absolute -left-12 top-0 bottom-0 w-1 bg-[#7B337E]/0 group-hover:bg-[#7B337E]/10 transition-colors rounded-full hidden md:block" />
                <h2 className="text-2xl md:text-3xl font-black text-[#210635] uppercase tracking-tight mb-8">Contact Us</h2>
                <div className="p-8 bg-[#210635] text-white rounded-[2rem] shadow-xl relative overflow-hidden">
                  <div className="absolute top-[-50%] right-[-10%] w-[60%] h-[200%] bg-gradient-to-bl from-[#7B337E]/40 to-transparent rotate-12 pointer-events-none" />
                  
                  <p className="opacity-90 mb-8 font-medium text-lg relative z-10">If you have any questions about this Privacy Policy, You can contact us:</p>
                  
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
