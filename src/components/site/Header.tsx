import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Engine', href: '#how' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.replace('#', ''));
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 250 && rect.bottom >= 250) {
            current = section;
            break;
          }
        }
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <header className={`fixed top-4 lg:top-8 left-0 right-0 z-50 pointer-events-none transition-all duration-300 ${isScrolled ? 'translate-y-[-10px] opacity-100' : 'translate-y-0 opacity-100'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-center">
        {/* Center Floating Navigation - Desktop */}
        <nav className="pointer-events-auto hidden lg:flex items-center gap-8 glass rounded-full px-8 py-4 shadow-chrome transition-all hover:bg-white/40">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:scale-105 transition-transform mr-6 flex items-center justify-center outline-none">
            <img src="/logo.svg" alt="Synkloom Logo" className="h-12 w-auto" />
          </Link>

          <div className="flex items-center gap-6 border-l border-white/30 pl-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 text-[10px] font-black uppercase tracking-widest transition-colors whitespace-nowrap ${isActive ? 'text-[var(--accent)]' : 'text-[var(--foreground)]/70 hover:text-[var(--accent)]'}`}
                >
                  {link.name}
                  <span className={`absolute left-0 right-0 -bottom-1 h-[2px] rounded-full bg-[var(--accent)] transition-transform duration-300 origin-center ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></span>
                </a>
              );
            })}
          </div>
        </nav>

        {/* Mobile Nav Button */}
        <div className="w-full lg:hidden flex items-center justify-between pointer-events-auto glass rounded-full px-6 py-3 shadow-chrome">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center justify-center outline-none">
            <img src="/logo.svg" alt="Synkloom Logo" className="h-16 w-auto" />
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed top-[-16px] left-0 w-screen h-[100dvh] z-[-1] lg:hidden pointer-events-auto bg-[var(--background)]/98 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 p-12 transition-all">
            <div className="flex flex-col items-center gap-8 w-full max-w-xs">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`relative py-1 text-lg font-black uppercase tracking-[0.3em] transition-colors ${isActive ? 'text-[var(--accent)]' : 'text-[var(--foreground)] hover:text-[var(--accent)]'}`}
                  >
                    {link.name}
                    <span className={`absolute left-0 right-0 -bottom-2 h-[2px] rounded-full bg-[var(--accent)] transition-transform duration-300 origin-center ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></span>
                  </a>
                );
              })}
              <div className="w-full h-[1px] bg-[var(--foreground)]/10 my-4" />
              <button className="w-full py-4 rounded-full bg-[var(--foreground)] text-[var(--background)] text-xs font-black uppercase tracking-widest">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
