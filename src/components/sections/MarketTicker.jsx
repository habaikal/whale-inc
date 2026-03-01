import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { GlassCard } from '../ui/LayoutComponents';
import { motion } from 'framer-motion';

export const MACRO_DATA = [
    { name: 'KOSPI', value: '2,561.23', change: '+0.45%', up: true },
    { name: 'S&P 500', value: '4,783.45', change: '+1.12%', up: true },
    { name: 'BTC/USD', value: '43,210', change: '-2.31%', up: false },
    { name: 'USD/KRW', value: '1,324.50', change: '+0.10%', up: true },
];

export const MarketTicker = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {MACRO_DATA.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                >
                    <GlassCard className="p-4 group glass-panel-hover">
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">{item.name}</p>
                        <div className="flex items-end justify-between">
                            <span className="text-lg font-bold text-white tracking-tight">{item.value}</span>
                            <span className={`text-sm flex items-center gap-1 font-medium ${item.up ? 'text-emerald-400' : 'text-rose-400'}`}>
                                {item.up ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                {item.change}
                            </span>
                        </div>
                    </GlassCard>
                </motion.div>
            ))}
        </div>
    );
};
