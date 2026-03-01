import React from 'react';
import { Brain } from 'lucide-react';
import { GlassCard, SectionTitle } from '../ui/LayoutComponents';
import { motion } from 'framer-motion';

export const AIConsensus = () => {
    return (
        <GlassCard className="p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>

            <SectionTitle icon={Brain} title="Whale AI Consensus" />

            <div className="space-y-5 relative z-10">
                <div className="flex gap-4">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="flex-1 p-4 bg-[#0B1120]/80 rounded-2xl border border-indigo-500/20 shadow-lg"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-7 h-7 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-xs text-white font-black shadow-[0_0_10px_rgba(34,211,238,0.5)]">G</div>
                            <span className="text-sm font-bold text-white">Gemini 3.0</span>
                        </div>
                        <p className="text-sm text-emerald-400 font-black tracking-wide">Bullish (88%)</p>
                        <p className="text-xs text-slate-400 mt-2 leading-relaxed">뉴스 심리 지표 개선 및 기관 수급 강화 포착.</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="flex-1 p-4 bg-[#0B1120]/80 rounded-2xl border border-white/10 shadow-lg"
                    >
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-7 h-7 bg-gradient-to-tr from-slate-600 to-slate-400 rounded-full flex items-center justify-center text-xs text-white font-black">G5</div>
                            <span className="text-sm font-bold text-white">GPT 5.2</span>
                        </div>
                        <p className="text-sm text-yellow-400 font-black tracking-wide">Neutral (52%)</p>
                        <p className="text-xs text-slate-400 mt-2 leading-relaxed">단기 과열 신호 발견. 눌림목 매수 전략 권장.</p>
                    </motion.div>
                </div>

                <div className="pt-5 border-t border-white/10">
                    <div className="flex justify-between items-end mb-3">
                        <span className="text-sm font-bold text-slate-300 uppercase tracking-widest">Final Verdict</span>
                        <motion.span
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-black px-3 py-1 rounded shadow-[0_0_12px_rgba(34,211,238,0.4)] tracking-wider"
                        >
                            STRONG BUY
                        </motion.span>
                    </div>

                    <div className="h-4 bg-slate-900 rounded-full overflow-hidden flex shadow-inner">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '70%' }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 relative"
                        >
                            <div className="absolute inset-0 bg-white/20 w-full animate-pulse"></div>
                        </motion.div>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '20%' }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                            className="h-full bg-slate-600"
                        ></motion.div>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '10%' }}
                            transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                            className="h-full bg-rose-500/50"
                        ></motion.div>
                    </div>
                </div>
            </div>
        </GlassCard>
    );
};
