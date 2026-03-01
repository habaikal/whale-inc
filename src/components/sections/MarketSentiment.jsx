import React from 'react';
import { Globe } from 'lucide-react';
import { GlassCard, SectionTitle } from '../ui/LayoutComponents';
import { motion } from 'framer-motion';

export const MarketSentiment = () => {
    return (
        <GlassCard className="p-6 relative overflow-hidden h-full">
            <SectionTitle icon={Globe} title="Market Sentiment" />

            <div className="flex items-center justify-center py-8 relative">
                <div className="w-56 h-56 rounded-full border-[12px] border-slate-800/80 flex items-center justify-center overflow-hidden relative shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent mix-blend-screen"></div>
                    <div className="flex flex-col items-center z-10">
                        <motion.span
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring" }}
                            className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-200 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                        >
                            74
                        </motion.span>
                        <span className="text-sm font-black text-cyan-400 uppercase tracking-[0.3em] mt-2">Greed</span>
                    </div>
                </div>

                {/* Animated Gauge Indicator */}
                <motion.div
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 120 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[248px] h-[248px] border-t-[12px] border-cyan-400 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                ></motion.div>
            </div>

            <ul className="space-y-4 mt-4">
                {['연준 금리 동결 가능성 72%', '반도체 섹터 자금 유입 가속', '달러 인덱스 하향 안정화'].map((msg, i) => (
                    <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="flex items-center gap-3 text-sm text-slate-300 bg-white/5 p-3 rounded-lg border border-white/5"
                    >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_5px_rgba(34,211,238,0.8)]"></div>
                        <span className="font-medium">{msg}</span>
                    </motion.li>
                ))}
            </ul>
        </GlassCard>
    );
};
