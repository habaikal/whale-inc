import React from 'react';
import { Wallet, ChevronRight, BarChart3 } from 'lucide-react';
import { GlassCard, SectionTitle } from '../ui/LayoutComponents';
import { motion } from 'framer-motion';

const DIVIDEND_PLANS = [
    { title: 'Monthly Income Focus', yield: '8.4%', target: '500k KRW/mo', risk: 'Low', riskColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
    { title: 'Growth & Dividend', yield: '4.2%', target: '300k KRW/mo', risk: 'Medium', riskColor: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20' },
    { title: 'Aggressive Yield', yield: '12.8%', target: '1000k KRW/mo', risk: 'High', riskColor: 'text-rose-400 bg-rose-500/10 border-rose-500/20' },
];

export const DividendHub = () => {
    return (
        <GlassCard className="p-6 bg-gradient-to-br from-cyan-900/10 to-[#020617] h-full flex flex-col justify-between">
            <div>
                <SectionTitle icon={Wallet} title="Dividend Hub" />
                <p className="text-xs text-slate-400 mb-6 uppercase tracking-[0.2em] font-bold">Optimized Portfolio</p>

                <div className="space-y-4">
                    {DIVIDEND_PLANS.map((plan, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.02 }}
                            className="p-5 bg-[#0B1120]/60 border border-white/10 rounded-2xl hover:border-cyan-500/40 transition-all cursor-pointer group shadow-lg"
                        >
                            <div className="flex justify-between items-start mb-3">
                                <h4 className="font-bold text-white tracking-wide group-hover:text-cyan-400 transition-colors">{plan.title}</h4>
                                <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase border ${plan.riskColor}`}>
                                    {plan.risk}
                                </span>
                            </div>
                            <div className="flex justify-between items-end">
                                <div className="flex flex-col">
                                    <span className="text-3xl font-black text-white tracking-tighter">{plan.yield}</span>
                                    <span className="text-[10px] text-slate-500 uppercase tracking-widest mt-1">Yield (Annual)</span>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                                    <ChevronRight size={18} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <button className="w-full mt-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]">
                <BarChart3 size={18} />
                GENERATE DETAILED REPORT
            </button>
        </GlassCard>
    );
};
