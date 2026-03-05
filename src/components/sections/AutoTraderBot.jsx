import React, { useState, useEffect, useRef } from 'react';
import { Bot, Play, Square, ShieldAlert, CheckCircle2, Zap, Loader2, ArrowRight } from 'lucide-react';
import { SectionTitle, GlassCard } from '../ui/LayoutComponents';
import { motion, AnimatePresence } from 'framer-motion';

const STEPS = [
    { id: 1, name: "Macro Check", desc: "물때 파악 중..." },
    { id: 2, name: "Scanner", desc: "수급 고래 종목 탐색..." },
    { id: 3, name: "AI Consensus", desc: "GPT & Gemini 더블 체크..." },
    { id: 4, name: "Quant Simulator", desc: "RRR 및 켈리 비중 계산..." },
    { id: 5, name: "Monitoring", desc: "자동 대응 시스템 등록..." }
];

export const AutoTraderBot = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [autoBuyEnabled, setAutoBuyEnabled] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [logs, setLogs] = useState([]);
    const [signal, setSignal] = useState(null);
    const [boughtStatus, setBoughtStatus] = useState(null);
    const logsEndRef = useRef(null);

    const addLog = (msg, type = 'info') => {
        setLogs(prev => [...prev, { time: new Date().toLocaleTimeString(), msg, type }]);
    };

    useEffect(() => {
        if (logsEndRef.current) {
            logsEndRef.current.scrollTop = logsEndRef.current.scrollHeight;
        }
    }, [logs]);

    useEffect(() => {
        let timer;
        if (isRunning) {
            if (currentStep === 0) {
                setLogs([]);
                setSignal(null);
                setBoughtStatus(null);
                addLog("퀀트 자동매매 봇을 시작합니다. (5-Step Algorithm)", 'info');
                timer = setTimeout(() => setCurrentStep(1), 1000);
            } else if (currentStep <= 5) {
                const stepInfo = STEPS[currentStep - 1];
                addLog(`[Step ${stepInfo.id}] ${stepInfo.name}: ${stepInfo.desc}`, 'warning');

                timer = setTimeout(() => {
                    if (currentStep === 4) {
                        // Mocking discovery of good asset
                        addLog("적합 종목 발견: [NVDA] (RRR 1:2.5, 승률 85%, Kelly 12%)", 'success');
                        setSignal({ name: 'NVIDIA (NVDA)', price: '$124.50', rr: '1:2.5', kelly: '12%' });
                        setCurrentStep(5);
                    } else if (currentStep === 5) {
                        addLog("알람 설정 완료 및 모니터링 시작.", 'info');
                        if (autoBuyEnabled) {
                            setTimeout(() => {
                                addLog("자동 매수(Auto-Buy) 기능 활성화됨: NVDA 매수 집행 중...", 'warning');
                                setTimeout(() => {
                                    addLog("NVDA 포지션 진입 완료 (Kelly 비중 12%)", 'success');
                                    setBoughtStatus('success');
                                    setIsRunning(false);
                                }, 1500);
                            }, 1000);
                        } else {
                            setIsRunning(false);
                        }
                    } else {
                        setCurrentStep(prev => prev + 1);
                    }
                }, 2000);
            }
        } else {
            if (currentStep > 0 && currentStep <= 5 && !signal) {
                addLog("사용자에 의해 자동매매가 중지되었습니다.", 'error');
                setCurrentStep(0);
            }
        }
        return () => clearTimeout(timer);
    }, [isRunning, currentStep, autoBuyEnabled]);

    const toggleRun = () => {
        if (isRunning) {
            setIsRunning(false);
        } else {
            setIsRunning(true);
            setCurrentStep(0);
        }
    };

    const handleManualBuy = () => {
        setBoughtStatus('processing');
        addLog("수동 매수(Manual-Buy) 모드: 매수 집행 중...", 'warning');
        setTimeout(() => {
            addLog(`${signal.name} 포지션 진입 완료`, 'success');
            setBoughtStatus('success');
        }, 1000);
    };

    return (
        <GlassCard className="p-6 border border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.1)] relative overflow-hidden group">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-700"></div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                <SectionTitle icon={Bot} title="Whale Auto-Trading Bot" />

                <div className="flex items-center gap-4 bg-[#020617]/50 p-2 rounded-xl border border-white/10">
                    <label className="flex items-center gap-2 cursor-pointer text-sm font-bold text-slate-300">
                        <input
                            type="checkbox"
                            checked={autoBuyEnabled}
                            onChange={(e) => setAutoBuyEnabled(e.target.checked)}
                            className="w-4 h-4 rounded border-slate-600 text-cyan-500 focus:ring-cyan-500 bg-slate-900 cursor-pointer"
                        />
                        <span className={autoBuyEnabled ? "text-cyan-400" : ""}>자동 매수 (Auto-Buy)</span>
                    </label>
                    <div className="w-px h-6 bg-white/10"></div>
                    <button
                        onClick={toggleRun}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-black text-sm transition-all shadow-lg active:scale-95 ${isRunning ? 'bg-rose-500/20 text-rose-400 border border-rose-500/50 hover:bg-rose-500/30' :
                                'bg-cyan-500 text-slate-950 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]'
                            }`}
                    >
                        {isRunning ? <><Square size={16} /> STOP</> : <><Play size={16} /> START BOT</>}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
                {/* Left: Terminal & Steps */}
                <div className="space-y-4">
                    <div className="flex justify-between">
                        {STEPS.map((step) => {
                            const isActive = currentStep === step.id;
                            const isPassed = currentStep > step.id || (signal && step.id <= 5);
                            return (
                                <div key={step.id} className="flex flex-col items-center gap-2 relative z-10">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-black text-xs transition-all duration-500 ${isActive ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.8)] scale-110' :
                                            isPassed ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50' :
                                                'bg-[#020617] text-slate-600 border border-white/10'
                                        }`}>
                                        {isPassed && !isActive ? <CheckCircle2 size={14} /> : step.id}
                                    </div>
                                    <span className={`text-[10px] uppercase font-bold tracking-widest hidden sm:block ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>{step.name}</span>
                                </div>
                            );
                        })}
                        <div className="absolute top-4 left-4 right-4 h-0.5 bg-white/5 z-0">
                            <div className="h-full bg-cyan-500 transition-all duration-500" style={{ width: `${Math.min(100, Math.max(0, (currentStep - 1) * 25))}%` }}></div>
                        </div>
                    </div>

                    <div
                        ref={logsEndRef}
                        className="h-40 bg-[#020617]/80 rounded-xl border border-white/5 p-4 overflow-y-auto space-y-2 font-mono text-xs custom-scrollbar shadow-inner"
                    >
                        {logs.length === 0 && <span className="text-slate-600">Waiting to start...</span>}
                        {logs.map((log, i) => (
                            <div key={i} className="flex gap-3">
                                <span className="text-slate-500 shrink-0">[{log.time}]</span>
                                <span className={`${log.type === 'error' ? 'text-rose-400' :
                                        log.type === 'success' ? 'text-emerald-400' :
                                            log.type === 'warning' ? 'text-yellow-400' : 'text-cyan-100'
                                    }`}>
                                    {log.msg}
                                </span>
                            </div>
                        ))}
                        {isRunning && (
                            <div className="flex items-center gap-2 mt-2 text-cyan-400 opacity-70">
                                <Loader2 size={12} className="animate-spin" />
                                <span>Processing...</span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Right: Signal Card */}
                <div className="h-full flex items-center justify-center">
                    <AnimatePresence mode="popLayout">
                        {!signal ? (
                            <motion.div
                                key="waiting"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="flex flex-col items-center justify-center h-full text-slate-500 gap-3"
                            >
                                <ShieldAlert size={48} className="opacity-20" />
                                <p className="text-sm font-medium">봇이 최적의 종목을 탐색 중입니다.</p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="signal"
                                initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }}
                                className="w-full h-full bg-gradient-to-br from-cyan-950/40 to-indigo-950/40 border border-cyan-500/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(34,211,238,0.15)] relative overflow-hidden flex flex-col justify-between"
                            >
                                {boughtStatus === 'success' && (
                                    <div className="absolute inset-0 bg-emerald-500/20 backdrop-blur-sm z-20 flex flex-col items-center justify-center">
                                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} type="spring">
                                            <CheckCircle2 size={64} className="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.8)] mb-4" />
                                        </motion.div>
                                        <h3 className="text-2xl font-black text-white">매수 완료</h3>
                                        <p className="text-emerald-200 mt-2 font-bold">{signal.name} • 비중 {signal.kelly}</p>
                                    </div>
                                )}
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <Zap size={16} className="text-yellow-400 fill-yellow-400" />
                                                <span className="text-xs font-bold text-yellow-400 tracking-widest uppercase">Target Found</span>
                                            </div>
                                            <h3 className="text-xl font-black text-white">{signal.name}</h3>
                                        </div>
                                        <span className="text-xl font-bold font-mono text-cyan-400">{signal.price}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        <div className="bg-[#020617]/50 p-3 rounded-xl border border-white/5">
                                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Risk/Reward</p>
                                            <p className="text-lg font-black text-emerald-400">{signal.rr}</p>
                                        </div>
                                        <div className="bg-[#020617]/50 p-3 rounded-xl border border-white/5">
                                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Kelly Size</p>
                                            <p className="text-lg font-black text-cyan-400">{signal.kelly}</p>
                                        </div>
                                    </div>
                                </div>

                                {!autoBuyEnabled && boughtStatus !== 'success' && (
                                    <button
                                        onClick={handleManualBuy}
                                        disabled={boughtStatus === 'processing'}
                                        className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black rounded-xl transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] active:scale-95 flex justify-center items-center gap-2 disabled:opacity-50 disabled:scale-100"
                                    >
                                        {boughtStatus === 'processing' ? <Loader2 className="animate-spin" size={20} /> : <><Activity size={20} /> MANUAL BUY EXECUTE</>}
                                    </button>
                                )}
                                {autoBuyEnabled && boughtStatus !== 'success' && (
                                    <div className="w-full py-3 bg-white/5 border border-white/10 text-cyan-400 font-bold rounded-xl flex justify-center items-center gap-2">
                                        <Loader2 className="animate-spin" size={18} /> 시스템 자동 매수 대기 중...
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </GlassCard>
    );
};
