import React, { useState } from 'react';
import { Activity, Brain, Info } from 'lucide-react';
import { SectionTitle, GlassCard } from '../ui/LayoutComponents';

export const RiskRewardCalculator = () => {
    const [entry, setEntry] = useState(100);
    const [target, setTarget] = useState(150);
    const [stop, setStop] = useState(90);
    const [winStatus, setWinStatus] = useState(55);

    const r = (entry - stop) > 0 ? (target - entry) / (entry - stop) : 0;
    const rrRatio = r.toFixed(2);
    const rrColor = r >= 2 ? 'text-emerald-400' : (r >= 1 ? 'text-yellow-400' : 'text-rose-400');

    const w = winStatus / 100;
    const kelly = r > 0 ? (w - ((1 - w) / r)) * 100 : 0;
    const kellyStr = kelly > 0 ? kelly.toFixed(1) + "%" : "0.0% (No Trade)";

    return (
        <GlassCard className="p-6 relative overflow-hidden group mt-8">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[50px] mix-blend-screen pointer-events-none group-hover:bg-cyan-400/20 transition-all duration-500"></div>
            <SectionTitle icon={Activity} title="Quant Risk & Reward Simulator" />

            <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Entry Price</label>
                        <input type="number" value={entry} onChange={(e) => setEntry(Number(e.target.value))} className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white font-mono mt-2 focus:ring-1 focus:ring-cyan-500 outline-none transition-all shadow-inner" />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Target (TP)</label>
                        <input type="number" value={target} onChange={(e) => setTarget(Number(e.target.value))} className="w-full bg-emerald-500/5 border border-emerald-500/20 rounded-xl p-3 text-white font-mono mt-2 focus:ring-1 focus:ring-emerald-500 outline-none transition-all shadow-inner" />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-rose-500 uppercase tracking-widest">Stop Loss (SL)</label>
                        <input type="number" value={stop} onChange={(e) => setStop(Number(e.target.value))} className="w-full bg-rose-500/5 border border-rose-500/20 rounded-xl p-3 text-white font-mono mt-2 focus:ring-1 focus:ring-rose-500 outline-none transition-all shadow-inner" />
                    </div>
                </div>

                <div className="pt-2">
                    <div className="flex justify-between items-center mb-4">
                        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">AI Expected Win Rate</label>
                        <span className="text-lg font-black text-cyan-400">{winStatus}%</span>
                    </div>
                    <input
                        type="range"
                        min="10" max="90"
                        value={winStatus}
                        onChange={(e) => setWinStatus(Number(e.target.value))}
                        className="w-full accent-cyan-400 bg-white/10 h-2 rounded-full appearance-none cursor-pointer"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <div className="p-5 bg-[#020617]/50 rounded-2xl border border-white/5 shadow-lg group-hover:border-white/10 transition-colors">
                        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-2">Risk / Reward Ratio</p>
                        <p className={`text-4xl font-black ${rrColor}`}>1 : {rrRatio}</p>
                        <p className="text-xs text-slate-500 mt-3 font-medium">권장: 최소 1:2 이상의 손익비</p>
                    </div>
                    <div className="p-5 bg-gradient-to-br from-cyan-950/40 to-indigo-950/40 rounded-2xl border border-cyan-500/20 shadow-lg relative overflow-hidden group-hover:border-cyan-500/40 transition-colors">
                        <div className="absolute -right-4 -bottom-4 opacity-20 text-cyan-400">
                            <Brain size={80} />
                        </div>
                        <p className="text-[10px] text-cyan-400 uppercase tracking-widest font-bold mb-2">Kelly Criterion (Position Size)</p>
                        <p className={`text-4xl font-black ${kelly > 0 ? "text-white" : "text-rose-500 drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]"}`}>{kellyStr}</p>
                        <p className="text-xs text-slate-400 mt-3 font-medium">총 자본 대비 수학적 최적 투자 비중</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-indigo-500/10 to-transparent rounded-xl border-l-4 border-indigo-500">
                    <Info className="text-indigo-400 shrink-0 mt-0.5" size={20} />
                    <p className="text-sm text-slate-300 leading-relaxed font-medium">
                        <strong className="text-indigo-300 mr-2">보고서 기술 고도화 반영:</strong>
                        단순 방향성 예측의 제약을 극복하고 하락장에서도 파산을 방지하기 위해 <strong>켈리 공식(Kelly Criterion)</strong>을 도입했습니다. 수학적 확률 기반의 동적 포지션 사이징(Dynamic Position Sizing)을 통해 실제 계좌의 장기 우상향을 유도합니다.
                    </p>
                </div>
            </div>
        </GlassCard>
    );
};
