import React, { useState } from 'react';
import { Globe, TrendingUp, Search, Coins, Wallet } from 'lucide-react';
import { Navbar } from './layouts/Navbar';
import { MarketTicker } from './components/sections/MarketTicker';
import { SmartMoneyScanner } from './components/sections/SmartMoneyScanner';
import { CryptoHunter } from './components/sections/CryptoHunter';
import { AIConsensus } from './components/sections/AIConsensus';
import { MarketSentiment } from './components/sections/MarketSentiment';
import { DividendHub } from './components/sections/DividendHub';
import { RiskRewardCalculator } from './components/sections/RiskRewardCalculator';
import { AutoTraderBot } from './components/sections/AutoTraderBot';
import { GlassCard } from './components/ui/LayoutComponents';
import { motion } from 'framer-motion';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-50">
      {/* Immersive Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-cyan-600/15 rounded-full blur-[150px]"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-indigo-600/15 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[40%] bg-purple-600/10 rounded-full blur-[150px]"></div>
      </div>

      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8 relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AutoTraderBot />
        </motion.div>

        <MarketTicker />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

          {/* Left Column: Smart Money & AI */}
          <div className="xl:col-span-2 space-y-8 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1"
            >
              <SmartMoneyScanner />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <CryptoHunter />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <AIConsensus />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <RiskRewardCalculator />
            </motion.div>
          </div>

          {/* Right Column: Sentiment & Dividends */}
          <div className="space-y-8 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-1"
            >
              <MarketSentiment />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex-1"
            >
              <DividendHub />
            </motion.div>
          </div>

        </div>
      </main>

      {/* Quick Action Footer (Mobile) */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-50">
        <GlassCard className="flex justify-around items-center px-2 py-4 !rounded-full shadow-[0_10px_40px_rgba(34,211,238,0.15)] bg-[#020617]/90 border-cyan-500/30">
          <button className="text-cyan-400 p-2 hover:bg-white/10 rounded-full transition-colors"><Globe size={24} /></button>
          <button className="text-slate-400 p-2 hover:text-cyan-400 hover:bg-white/10 rounded-full transition-colors"><TrendingUp size={24} /></button>
          <button className="w-14 h-14 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(34,211,238,0.5)] -mt-10 border-4 border-[#020617] active:scale-95 transition-transform hover:shadow-[0_0_30px_rgba(34,211,238,0.8)]">
            <Search size={28} />
          </button>
          <button className="text-slate-400 p-2 hover:text-cyan-400 hover:bg-white/10 rounded-full transition-colors"><Coins size={24} /></button>
          <button className="text-slate-400 p-2 hover:text-cyan-400 hover:bg-white/10 rounded-full transition-colors"><Wallet size={24} /></button>
        </GlassCard>
      </div>

      {/* Footer */}
      <footer className="relative z-10 max-w-7xl mx-auto px-4 py-12 border-t border-white/10 mt-12 text-center text-slate-500 text-sm">
        <p>© 2026 Whale Investment Consulting. All rights reserved.</p>
        <p className="mt-2 text-xs">개별 투자 자산의 가격 변동 및 손실 위험은 전적으로 투자자 본인에게 있습니다.</p>
        <div className="flex justify-center gap-4 mt-6">
          {['Terms of Service', 'Privacy Policy', 'Cookie Settings'].map(link => (
            <a key={link} href="#" className="hover:text-cyan-400 transition-colors uppercase tracking-widest text-[10px] font-bold">{link}</a>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;
