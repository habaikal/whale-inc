import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe, Search, Brain, Activity, Target, AlertTriangle } from 'lucide-react';
import { GlassCard } from './LayoutComponents';

export const HelpCenterModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const steps = [
        {
            icon: Globe,
            color: "text-blue-400",
            bg: "bg-blue-400/10",
            title: "Step 1: 시장의 '물때' 파악하기 (Macro Check)",
            content: "대시보드 우측의 탐욕/공포(Market Sentiment) 지수와 AI 매크로 브리핑을 확인하여 전체 시장의 투자 적합 환경을 파악합니다."
        },
        {
            icon: Search,
            color: "text-cyan-400",
            bg: "bg-cyan-400/10",
            title: "Step 2: '고래'가 올라탄 종목 찾기 (Scanner)",
            content: "Whale Smart Money Scanner에서 Whale Score 90점 이상 및 VCP 패턴(Stage 3 / Breakout) 종목을 우선순위로 탐색합니다."
        },
        {
            icon: Brain,
            color: "text-indigo-400",
            bg: "bg-indigo-400/10",
            title: "Step 3: AI 더블 체크 (Consensus Verification)",
            content: "AI Consensus Widget을 통해 다중 AI(Gemini, GPT)의 분석 의견을 정합성 검증합니다. 두 AI 모두 매수일 경우 강력한 신호입니다."
        },
        {
            icon: Activity,
            color: "text-emerald-400",
            bg: "bg-emerald-400/10",
            title: "Step 4: 기계적 설계 (Quant Simulator)",
            content: "하단의 Risk & Reward Simulator를 켜서 목표가 및 손절가를 입력하고 기대 손익비 1:2 이상을 확인한 후 켈리 베팅 공식 기반 최적 수량만 매수합니다."
        },
        {
            icon: Target,
            color: "text-rose-400",
            bg: "bg-rose-400/10",
            title: "Step 5: 대응과 복기 (Monitoring & Exit)",
            content: "목표가 도달 시 절반을 익절하고 손절가를 본절가로 수정하여 무위험 수익을 추구하며, 모든 기록은 시스템에 남겨 AI 복기에 사용합니다."
        }
    ];

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-[#020617]/80 backdrop-blur-sm"
                />

                {/* Modal content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="relative w-full max-w-3xl max-h-[90vh] flex flex-col mx-auto"
                >
                    <GlassCard className="flex flex-col h-full bg-[#0f172a]/95 border-cyan-500/30 shadow-[0_0_50px_rgba(34,211,238,0.15)] overflow-hidden rounded-2xl">
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-gradient-to-r from-cyan-950/30 to-indigo-950/30 shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                                    <Activity className="text-[#020617]" size={20} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-black text-white tracking-tight">WHALE INVEST <span className="text-cyan-400">GUIDE</span></h2>
                                    <p className="text-xs text-cyan-200/70 font-bold tracking-widest uppercase">실전 수익 실현 5단계 워크플로우</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 bg-white/5 hover:bg-rose-500/20 hover:text-rose-400 text-slate-400 rounded-full transition-colors group"
                            >
                                <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                            </button>
                        </div>

                        {/* Content Body (Scrollable) */}
                        <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-4">
                            <p className="text-sm text-slate-300 mb-6 leading-relaxed bg-white/5 p-4 rounded-xl border-l-2 border-cyan-400 font-medium">
                                본 가이드는 감정에 휘둘리지 않고 플랫폼의 데이터와 AI를 활용하여 승률을 높이고 수익을 극대화하는 체계적인 퀀트 지침입니다.
                            </p>

                            {steps.map((step, idx) => (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * idx }}
                                    key={idx}
                                    className="flex gap-5 p-5 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors border border-white/5 group"
                                >
                                    <div className={`shrink-0 w-12 h-12 rounded-full ${step.bg} ${step.color} flex items-center justify-center mt-1 group-hover:scale-110 transition-transform`}>
                                        <step.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                                        <p className="text-sm text-slate-400 leading-relaxed font-medium">{step.content}</p>
                                    </div>
                                </motion.div>
                            ))}

                            <div className="mt-8 p-5 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-2xl border border-amber-500/20">
                                <div className="flex gap-3">
                                    <AlertTriangle className="text-amber-400 shrink-0" size={24} />
                                    <div>
                                        <h4 className="text-amber-400 font-bold mb-1">수석 아키텍트의 한 마디</h4>
                                        <p className="text-sm text-slate-300 leading-relaxed font-medium italic">
                                            "기계적으로 이 5단계를 20번만 반복해 보십시오. 나쁜 거래의 비중을 줄이고 좋은 거래를 필터링해주는 강력한 플랫폼의 힘을 빌려 계좌의 색깔이 본질적으로 바뀔 것입니다."
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="p-4 border-t border-white/10 bg-[#0f172a] flex justify-end shrink-0">
                            <button
                                onClick={onClose}
                                className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-[#020617] font-bold rounded-xl transition-colors active:scale-95"
                            >
                                가이드 확인완료
                            </button>
                        </div>
                    </GlassCard>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};
