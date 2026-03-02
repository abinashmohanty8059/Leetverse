import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Leaderboard from './components/Leaderboard';
import Connect from './components/Connect';
import Particles from './components/Particles';

function App() {
  useEffect(() => {
    // Custom cursor or other global effects could go here
    console.log("%c LEETVERSE v1.0 %c INITIATED ", "color: #050505; background: #00ff9d; font-weight: bold;", "color: #00ff9d; background: #111111;");
  }, []);

  return (
    <div className="min-h-screen bg-background selection:bg-accent selection:text-background">
      {/* Visual background layers */}
      <div className="fixed inset-0 cyber-grid pointer-events-none opacity-30" />
      <div className="fixed inset-0 bg-gradient-to-tr from-background via-transparent to-accent/10 pointer-events-none" />

      {/* Right Side Gradient Flash - More Vibrant */}
      <div className="fixed top-0 right-0 w-[50vw] h-full bg-gradient-to-l from-accent/20 to-transparent pointer-events-none z-0 blur-[120px] opacity-60" />

      <Particles />

      {/* Navigation (Quick scaffold) */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md border-b border-white/5 bg-background/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-sm flex items-center justify-center font-black text-background text-xl">L</div>
          <span className="font-display font-bold text-xl tracking-tighter">LEET<span className="text-accent underline decoration-accent/30 underline-offset-4">VERSE</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest">
          <a href="#" className="hover:text-accent transition-colors">Home</a>
          <a href="#leaderboard" className="hover:text-accent transition-colors">Leaderboard</a>
          <button className="px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-background transition-all">
            REGISTER
          </button>
        </div>
      </nav>

      <main className="relative z-10">
        <Hero />
        <Leaderboard />
        <Connect />
      </main>

      {/* Background terminal scan-line effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-20 opacity-[0.03]">
        <div className="w-full h-1 bg-accent/50 animate-scanline shadow-[0_0_10px_rgba(0,255,157,0.5)]" />
      </div>
    </div>
  );
}

export default App;
