import React from 'react';
import { TrendingUp } from 'lucide-react';
import { GlassCard, SectionTitle } from '../ui/LayoutComponents';
import { motion } from 'framer-motion';

const SMART_MONEY_STOCKS = [
    { id: 1, name: 'Samsung Electronics', ticker: '005930', score: 92, vcp: 'Stage 2 - Contraction', grade: 'S' },
    { id: 2, name: 'NVIDIA', ticker: 'NVDA', score: 98, vcp: 'Breakout Confirmed', grade: 'SSS' },
    { id: 3, name: 'Apple', ticker: 'AAPL', score: 85, vcp: 'Stage 1 - Base', grade: 'A' },
    { id: 4, name: 'SK Hynix', ticker: '000660', score: 89, vcp: 'Stage 3 - Near Pivot', grade: 'S' },
];

export const SmartMoneyScanner = () => {
    return (
        <GlassCard className="p-6">
            <SectionTitle icon={TrendingUp} title="Whale Smart Money Scanner" />
            <div className="overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-slate-500 text-sm border-b border-white/10">
                            <th className="pb-4 font-semibold uppercase tracking-widest">Asset</th>
                            <th className="pb-4 font-semibold uppercase tracking-widest hidden sm:table-cell">Whale Score</th>
                            <th className="pb-4 font-semibold uppercase tracking-widest">VCP Stage</th>
                            <th className="pb-4 font-semibold uppercase tracking-widest text-right">Grade</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {SMART_MONEY_STOCKS.map((stock, idx) => (
                            <motion.tr
                                key={stock.id}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                className="group hover:bg-white/5 transition-colors cursor-pointer"
                            >
                                <td className="py-4">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-white group-hover:text-cyan-400 transition-colors">{stock.name}</span>
                                        <span className="text-xs text-slate-500">{stock.ticker}</span>
                                    </div>
                                </td>
                                <td className="py-4 hidden sm:table-cell">
                                    <div className="w-full max-w-[120px] h-2 bg-slate-800 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${stock.score}%` }}
                                            transition={{ duration: 1, ease: "easeOut" }}
                                            viewport={{ once: true }}
                                            className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 relative"
                                        >
                                            <div className="absolute inset-0 bg-white/20 w-full animate-pulse"></div>
                                        </motion.div>
                                    </div>
                                </td>
                                <td className="py-4 text-sm font-medium">
                                    <span className={`px-3 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap ${stock.vcp.includes('Breakout') ? 'bg-emerald-500/20 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]' : 'bg-white/5 text-slate-300'}`}>
                                        {stock.vcp}
                                    </span>
                                </td>
                                <td className="py-4 text-right">
                                    <span className="text-lg font-black bg-gradient-to-br from-yellow-300 to-orange-500 bg-clip-text text-transparent drop-shadow-md">
                                        {stock.grade}
                                    </span>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </GlassCard>
    );
};
