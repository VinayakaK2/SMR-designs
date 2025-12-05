import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  QrCode, 
  ShieldCheck, 
  Activity, 
  Smartphone, 
  Hospital, 
  ArrowRight, 
  Menu, 
  X, 
  CheckCircle, 
  Database,
  Lock,
  HeartPulse,
  Zap,
  Globe
} from 'lucide-react';

const SmartHealthQR = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050511] font-sans text-slate-200 overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Dynamic Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         {/* Animated Grid */}
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
         
         {/* Moving Orbs */}
         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[128px] animate-pulse-slow mix-blend-screen"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[128px] animate-pulse-slow mix-blend-screen"></div>
      </div>

      {/* Navigation Bar */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#050511]/80 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)] py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur opacity-40 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-black/50 backdrop-blur-sm border border-white/10 p-2 rounded-xl text-white">
                <QrCode size={24} className="text-cyan-400" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">SmartHealth<span className="text-cyan-400">QR</span></span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Features', 'How it Works', 'For Hospitals'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s/g, '-')}`} className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Sign In</button>
            <button className="relative group overflow-hidden px-6 py-2.5 rounded-full font-medium text-white shadow-lg shadow-cyan-500/20">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-600 to-blue-600 group-hover:from-cyan-500 group-hover:to-blue-500 transition-all"></span>
              <span className="relative flex items-center gap-2">Register Hospital <ArrowRight size={16} /></span>
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-white">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden z-10">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-cyan-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.1)]">
              <Zap size={12} className="fill-cyan-300" />
              Intelligent Emergency Response
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Medical History <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient-x">
                at Light Speed.
              </span>
            </h1>
            
            <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed border-l-2 border-white/10 pl-6">
              When seconds count, paramedics scan your QR to access vital data instantly. <span className="text-white">Encrypted. Instant. Life-saving.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-white text-black rounded-full font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center gap-2 group-hover:text-white transition-colors">
                  Get Your Card <QrCode size={18} />
                </span>
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-semibold hover:bg-white/5 transition-all backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <Globe size={18} /> Partner Hospitals
              </motion.button>
            </div>
          </motion.div>

          {/* 3D Glass Card Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative lg:h-[600px] flex items-center justify-center perspective-[2000px]"
          >
            {/* The Floating Card */}
            <motion.div 
              animate={{ 
                y: [0, -20, 0], 
                rotateX: [10, 0, 10], 
                rotateY: [-10, 10, -10] 
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[340px] h-[520px] rounded-[2rem] p-1 z-20 group"
            >
              {/* Neon Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-transparent to-purple-500 rounded-[2rem] opacity-50 blur-sm group-hover:opacity-80 transition-opacity duration-500"></div>
              
              {/* Card Body */}
              <div className="relative w-full h-full bg-[#0a0a1a]/90 backdrop-blur-xl rounded-[1.9rem] p-6 border border-white/10 overflow-hidden shadow-2xl">
                
                {/* Glossy Reflection */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>

                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                  <Activity className="text-cyan-400" size={28} />
                  <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[10px] tracking-widest uppercase text-slate-300">Emergency ID</div>
                </div>

                {/* QR Section */}
                <div className="relative w-56 h-56 mx-auto mb-6">
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl blur-xl animate-pulse"></div>
                  <div className="relative bg-white p-3 rounded-2xl shadow-lg">
                    <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center overflow-hidden relative">
                      <QrCode className="text-white w-40 h-40 relative z-10" />
                      {/* Scanning Laser */}
                      <motion.div 
                        animate={{ top: ['0%', '100%', '0%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_15px_#22d3ee] z-20"
                      />
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-1">Priya Desai</h3>
                    <p className="text-cyan-400 text-xs tracking-wider">ID: 9928-XA-22</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                      <p className="text-[10px] text-slate-400 uppercase">Blood</p>
                      <p className="text-lg font-bold text-red-400">O+</p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
                      <p className="text-[10px] text-slate-400 uppercase">Alerts</p>
                      <p className="text-lg font-bold text-yellow-400">Penicillin</p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* Back Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[600px] bg-gradient-to-b from-cyan-500/20 to-purple-500/20 blur-[80px] -z-10 rounded-full"></div>
          </motion.div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-white mb-4">Why SmartHealth<span className="text-cyan-400">QR</span>?</h2>
              <p className="text-slate-400 text-lg">The future of emergency response is connected, secure, and instantaneous.</p>
            </div>
            <button className="text-cyan-400 font-semibold hover:text-white transition-colors flex items-center gap-2">View all features <ArrowRight size={18} /></button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <GlassCard 
              icon={<Zap className="text-yellow-400" />}
              title="3-Second Access"
              desc="Optimized for zero-latency. Paramedics get critical data before the ambulance engine even starts."
            />
            <GlassCard 
              icon={<ShieldCheck className="text-cyan-400" />}
              title="Military-Grade Enc"
              desc="AES-256 encryption ensures your medical history is visible only when you want it to be."
            />
            <GlassCard 
              icon={<Database className="text-purple-400" />}
              title="Live Cloud Sync"
              desc="Update your allergies or meds on the app, and your QR code updates instantly. No re-printing."
            />
          </div>
        </div>
      </section>

      {/* Interactive Process Section */}
      <section className="py-24 bg-black/40 border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
             
             {/* Left: Text */}
             <div className="space-y-12">
               <div>
                  <h2 className="text-3xl font-bold text-white mb-6">How it works</h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
               </div>

               {[
                 { title: "Register", desc: "Create your secure medical profile.", active: true },
                 { title: "Generate", desc: "Get your unique digital & physical QR.", active: false },
                 { title: "Protect", desc: "Responders scan to save your life.", active: false }
               ].map((step, idx) => (
                 <div key={idx} className={`flex gap-6 transition-all duration-300 ${step.active ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}>
                   <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-bold ${step.active ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400' : 'border-slate-700 text-slate-500'}`}>
                        {idx + 1}
                      </div>
                      {idx !== 2 && <div className="w-0.5 h-16 bg-slate-800 my-2"></div>}
                   </div>
                   <div>
                     <h4 className={`text-xl font-bold mb-1 ${step.active ? 'text-white' : 'text-slate-400'}`}>{step.title}</h4>
                     <p className="text-slate-500">{step.desc}</p>
                   </div>
                 </div>
               ))}
             </div>

             {/* Right: Visual */}
             <div className="relative h-[500px] w-full bg-gradient-to-br from-[#0f172a] to-[#020617] rounded-3xl border border-white/10 p-8 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                
                {/* Central Pulse */}
                <div className="relative z-10 text-center">
                  <div className="relative inline-flex items-center justify-center">
                    <div className="absolute inset-0 bg-red-500/20 rounded-full blur-3xl animate-ping-slow"></div>
                    <HeartPulse className="w-32 h-32 text-red-500 animate-pulse drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]" />
                  </div>
                  <div className="mt-8 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-left w-64 mx-auto">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-slate-400 uppercase tracking-wider">Status</span>
                      <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></span>
                    </div>
                    <p className="text-white font-mono text-lg">Monitoring...</p>
                    <div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                       <div className="h-full bg-green-500 w-[70%] animate-pulse"></div>
                    </div>
                  </div>
                </div>

             </div>
           </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="relative bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border border-cyan-500/30 rounded-[3rem] p-16 overflow-hidden">
             
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
             <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/30 rounded-full blur-[100px]"></div>
             <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/30 rounded-full blur-[100px]"></div>

             <div className="relative z-10 max-w-2xl mx-auto">
               <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Your safety, upgraded.</h2>
               <button className="bg-white text-black px-10 py-5 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                 Start Free Trial
               </button>
               <p className="mt-6 text-slate-400 text-sm">No credit card required. Cancel anytime.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="border-t border-white/10 bg-black/20 pt-16 pb-8">
         <div className="container mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
             <div className="flex items-center gap-2">
                <div className="bg-cyan-500/20 p-2 rounded-lg border border-cyan-500/30 text-cyan-400">
                  <QrCode size={20} />
                </div>
                <span className="text-2xl font-bold text-white">SmartHealth<span className="text-cyan-400">QR</span></span>
             </div>
             <div className="flex gap-8 text-sm text-slate-400 font-medium">
               <a href="#" className="hover:text-white transition-colors">Privacy</a>
               <a href="#" className="hover:text-white transition-colors">Terms</a>
               <a href="#" className="hover:text-white transition-colors">Hospitals</a>
               <a href="#" className="hover:text-white transition-colors">Contact</a>
             </div>
           </div>
           <div className="text-center text-slate-600 text-sm">
             &copy; 2025 SmartHealth Technologies Inc. Built for the future of humanity.
           </div>
         </div>
      </footer>
    </div>
  );
};

// Reusable Components
const GlassCard = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-3xl overflow-hidden hover:bg-white/10 transition-colors"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="relative z-10">
      <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
    </div>
  </motion.div>
);

export default SmartHealthQR;
