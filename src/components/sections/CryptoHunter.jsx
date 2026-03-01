import React, { useState } from 'react';
import { Coins, ShieldAlert } from 'lucide-react';
import { GlassCard, SectionTitle } from '../ui/LayoutComponents';
import { PositionSizer } from '../ui/PositionSizer';
import { motion, AnimatePresence } from 'framer-motion';

const VCPChart = () => (
    <div className="relative w-full h-32 mt-4">
        <svg viewBox="0 0 400 150" className="w-full h-full overflow-visible absolute inset-0">
            <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M0,100 C50,20 80,110 130,80 C180,50 220,130 270,95 C320,60 360,98 400,20"
                fill="none"
                stroke="url(#cryptoGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                className="drop-shadow-[0_0_12px_rgba(34,211,238,0.9)]"
            />
            <defs>
                <linearGradient id="cryptoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="50%" stopColor="#818cf8" />
                    <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
            </defs>
            <motion.circle
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2, type: "spring" }}
                cx="400" cy="20" r="6" fill="#fff"
                className="shadow-[0_0_15px_#22d3ee]"
            />
            <motion.text
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
                x="300" y="15" fill="#22d3ee" fontSize="12" fontWeight="900" letterSpacing="2"
            >
                BREAKOUT
            </motion.text>
        </svg>
    </div>
);

export const CryptoHunter = () => {
    const [showRisk, setShowRisk] = useState(false);

    return (
        <GlassCard className="p-6 relative overflow-hidden group">
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-700"></div>

            <SectionTitle icon={Coins} title="Crypto Breakout Hunter" />
            <div className="flex items-center justify-between mb-4 relative z-10">
                <div>
                    <h3 className="text-xl font-black text-white tracking-tight">SOL/USDT</h3>
                    <p className="text-sm text-slate-400 mt-1">VCP 패턴 분석 중...</p>
                </div>
                <div className="text-right">
                    <p className="text-3xl font-black text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">92.4%</p>
                    <p className="text-xs text-slate-500 uppercase tracking-widest mt-1">Breakout Prob.</p>
                </div>
            </div>

            <VCPChart />

            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-6 p-4 bg-gradient-to-r from-cyan-950/40 to-[#020617] rounded-xl border border-cyan-500/20 text-sm leading-relaxed relative z-10 backdrop-blur-sm"
            >
                <div className="flex items-start gap-2">
                    <span className="text-cyan-400 font-black uppercase text-xs mt-0.5 whitespace-nowrap tracking-wider">Insight</span>
                    <p className="text-slate-300">변동성 수축 3단계 진입. 거래량 감소와 함께 피벗 포인트(Pivot) 근접. 강한 상방 돌파가 예상됩니다.</p>
                </div>
            </motion.div>

            <button
                onClick={() => setShowRisk(!showRisk)}
                className="mt-4 w-full py-3 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 rounded-xl font-bold text-sm text-rose-400 transition-all flex items-center justify-center gap-2 relative z-10"
            >
                <ShieldAlert size={16} />
                {showRisk ? 'Hide Risk Analysis' : 'Show AI Risk Analysis'}
            </button>

            <AnimatePresence>
                {showRisk && <PositionSizer assetName="SOL" currentPrice={145000} />}
            </AnimatePresence>
        </GlassCard>
    );
};
