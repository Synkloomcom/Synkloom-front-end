import { useState } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Welcome to Synkloom. How can I assist with your queue optimization today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { role: 'user', text: input }]);
    setInput('');
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: 'I am processing your command through the neural engine. Please hold while reconnecting.' }]);
    }, 1000);
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 size-[60px] rounded-full bg-[#1A112C] shadow-[0_10px_30px_rgba(123,51,126,0.3)] flex items-center justify-center text-white transition-all duration-300 hover:shadow-glow ${isOpen ? 'opacity-0 pointer-events-none scale-0' : 'opacity-100 scale-100'}`}
      >
        <MessageSquare size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-[70] w-[350px] max-w-[calc(100vw-3rem)] h-[550px] max-h-[80vh] flex flex-col glass bg-white/50 border-white/60 rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_rgba(33,6,53,0.15)]"
          >
            <div className="bg-gradient-to-r from-[#420D4B] to-[#7B337E] p-6 flex justify-between items-center text-white shadow-md relative z-10">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-white/20 border border-white/40 flex items-center justify-center backdrop-blur-sm shadow-inner">
                   <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-sm tracking-widest uppercase text-white">Synkloom Intelligence</h3>
                  <p className="text-[10px] text-white/70 uppercase font-bold tracking-widest flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5 pb-2 flex flex-col gap-4 bg-gradient-to-b from-white/30 to-white/10 custom-scrollbar">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}>
                  <div className={`shrink-0 size-7 rounded-full flex items-center justify-center mt-1 shadow-sm ${msg.role === 'user' ? 'bg-[#210635] text-white' : 'bg-white/80 text-[#7B337E] border border-white'}`}>
                    {msg.role === 'user' ? <User size={12} /> : <Bot size={12} />}
                  </div>
                  <div className={`p-4 rounded-3xl text-[13px] leading-relaxed font-bold shadow-sm ${msg.role === 'user' ? 'bg-[#210635] text-white rounded-tr-[4px]' : 'bg-white text-[#210635] border border-[#7B337E]/10 rounded-tl-[4px]'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 bg-white/40 border-t border-white/60 backdrop-blur-xl">
              <form onSubmit={handleSend} className="relative flex items-center">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Query parameters..."
                  className="w-full bg-white/80 border border-white/80 rounded-full pl-6 pr-14 py-4 text-xs text-[#210635] font-bold placeholder:text-[#210635]/30 placeholder:uppercase placeholder:tracking-widest focus:outline-none focus:ring-4 ring-[#7B337E]/10 transition-shadow"
                />
                <button type="submit" className="absolute right-2 w-10 h-10 rounded-full bg-[#7B337E] hover:bg-[#420D4B] text-white flex items-center justify-center transition-all shadow-md disabled:opacity-50 disabled:hover:bg-[#7B337E]" disabled={!input.trim()}>
                  <Send size={16} className="ml-0.5" />
                </button>
              </form>
            </div>
            
            <style>{`
              .custom-scrollbar::-webkit-scrollbar {
                width: 4px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: transparent;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: rgba(123, 51, 126, 0.2);
                border-radius: 10px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: rgba(123, 51, 126, 0.4);
              }
            `}</style>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
