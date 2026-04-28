import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  const safeStorage = {
    getItem: (key: string) => {
      try {
        return localStorage.getItem(key);
      } catch (e) {
        console.warn("Storage access blocked by tracking prevention or browser settings");
        return null;
      }
    },
    setItem: (key: string, value: string) => {
      try {
        localStorage.setItem(key, value);
      } catch (e) {
        console.warn("Storage access blocked by tracking prevention or browser settings");
      }
    }
  };

  useEffect(() => {
    // Check if user already accepted
    const consent = safeStorage.getItem("aura-cookie-consent");
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1500); // Slight delay for smooth entry
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    safeStorage.setItem("aura-cookie-consent", accepted ? "accepted" : "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 150, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-28 md:w-[400px] z-[60] glass bg-white/40 border-white/60 p-6 rounded-[2rem] shadow-[0_20px_50px_rgba(33,6,53,0.15)] flex flex-col gap-4"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 size-10 rounded-full bg-[#7B337E]/10 border border-[#7B337E]/30 flex items-center justify-center text-[#7B337E]">
                <Cookie size={18} />
              </div>
              <div>
                <h3 className="font-black text-[#210635] text-sm uppercase tracking-wider mb-1">Notice of Cookies</h3>
                <p className="text-[11px] text-[#210635]/70 leading-relaxed font-bold">
                  We use neural cookies to enhance your browsing construct, providing peak performance inside and outside the baseline architecture.
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsVisible(false)} 
              className="text-[#6667AB] hover:text-[#7B337E] transition-colors"
            >
              <X size={16} />
            </button>
          </div>
          
          <div className="flex gap-3 mt-2">
            <button 
              onClick={() => handleConsent(true)}
              className="flex-1 bg-[#210635] text-white rounded-xl py-3 text-[10px] uppercase font-black tracking-widest hover:bg-[#420D4B] transition-all shadow-lg"
            >
              Accept All
            </button>
            <button 
              onClick={() => handleConsent(false)}
              className="flex-1 bg-white/50 border border-white/80 text-[#210635] rounded-xl py-3 text-[10px] uppercase font-black tracking-widest hover:bg-white transition-all shadow-sm"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
