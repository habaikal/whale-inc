import React, { useState } from 'react';
import { Activity, Bell, Menu, X, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCenterModal } from '../components/ui/HelpCenterModal';

export const Navbar = ({ activeTab, setActiveTab }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHelpOpen, setIsHelpOpen] = useState(false);
    const tabs = ['Dashboard', 'Stocks', 'Crypto', 'Dividends', 'AI Consensus'];

    return (
        <>
            <nav className="sticky top-0 z-50 bg-[#020617]/80 backdrop-blur-xl border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20">
                            <Activity className="text-white" />
                        </div>
                        <h1 className="text-2xl font-black tracking-tighter text-white">
                            WHALE <span className="text-cyan-400">INVEST</span>
                        </h1>
                    </div>

                    <div className="hidden md:flex items-center gap-8 font-medium">
                        {tabs.map((tab) => {
                            const tabKey = tab.toLowerCase().replace(' ', '');
                            return (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tabKey)}
                                    className={`relative transition-colors hover:text-cyan-400 py-2 ${activeTab === tabKey ? 'text-cyan-400' : 'text-slate-400'
                                        }`}
                                >
                                    {tab}
                                    {activeTab === tabKey && (
                                        <motion.div
                                            layoutId="activeTabIndicator"
                                            className="absolute -bottom-[26px] left-0 right-0 h-0.5 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsHelpOpen(true)}
                            className="hidden md:flex items-center gap-2 p-2 hover:text-cyan-400 text-slate-400 hover:bg-white/5 rounded-full transition-colors font-bold text-sm tracking-wider uppercase"
                        >
                            <HelpCircle size={18} />
                            <span>Help Center</span>
                        </button>
                        <button className="p-2 hover:bg-white/5 rounded-full transition-colors relative">
                            <Bell size={20} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#020617]"></span>
                        </button>
                        <button className="hidden md:block bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-2 px-6 rounded-full transition-all shadow-lg shadow-cyan-500/20 active:scale-95">
                            Start Free Trial
                        </button>
                        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-lg pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6 text-xl font-bold">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => {
                                        setActiveTab(tab.toLowerCase().replace(' ', ''));
                                        setIsMenuOpen(false);
                                    }}
                                    className="text-left py-4 border-b border-white/5 text-slate-200 hover:text-cyan-400 flex justify-between items-center"
                                >
                                    {tab}
                                </button>
                            ))}
                            <button className="w-full mt-4 bg-cyan-500 text-slate-950 font-bold py-4 rounded-xl active:scale-95 transition-transform">
                                Start Free Trial
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <HelpCenterModal isOpen={isHelpOpen} onClose={() => setIsHelpOpen(false)} />
        </>
    );
};
