import React, { useState } from 'react';
import { Target, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const PositionSizer = ({ assetName, currentPrice, riskTolerance = 0.02 }) => {
    const [capital, setCapital] = useState(10000000); // 1,000만 원 기본 시드 머니

    // 30년 투자 전문가의 2% 룰(2% Rule) 기반 비중 조절 알고리즘
    const stopLossPrice = currentPrice * 0.95; // 5% 하락 시 손절 가정
    const riskPerShare = currentPrice - stopLossPrice;
    const maxRiskCapital = capital * riskTolerance;
    const sharesToBuy = Math.floor(maxRiskCapital / riskPerShare);
    const positionSize = sharesToBuy * currentPrice;

    return (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="p-4 bg-[#020617]/90 rounded-xl border border-rose-500/30 shadow-[0_5px_20px_rgba(244,63,94,0.15)] mt-4 backdrop-blur-md"
        >
            <h4 className="text-white font-bold mb-2 flex items-center gap-2 tracking-wide">
                <Target size={16} className="text-rose-400" /> AI Risk-Adjusted Sizing
            </h4>
            <p className="text-xs text-slate-400 mb-4 font-medium leading-relaxed">
                투자자님의 기본 자본금(1,000만 원) 비례 안전 접근 비중(2% 손실 감내 룰)을 실시간으로 산출했습니다.
            </p>

            <div className="space-y-3">
                <div className="flex justify-between items-center p-2 bg-white/5 rounded-lg border border-white/5">
                    <span className="text-xs font-bold text-slate-300">권장 진입 비중:</span>
                    <span className="text-base font-black text-emerald-400 drop-shadow-[0_0_5px_rgba(52,211,153,0.5)]">
                        {((positionSize / capital) * 100).toFixed(1)}%
                    </span>
                </div>

                <div className="flex justify-between items-center p-2 bg-rose-500/10 rounded-lg border border-rose-500/20 text-rose-400">
                    <span className="text-xs flex items-center gap-1 font-bold">
                        <AlertTriangle size={14} /> AI 자동 손절 라인:
                    </span>
                    <span className="text-xs font-black tracking-wider">
                        {stopLossPrice.toLocaleString()} KRW
                    </span>
                </div>
            </div>
        </motion.div>
    );
};
