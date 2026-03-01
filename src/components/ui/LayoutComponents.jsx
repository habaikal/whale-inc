import React from 'react';

export const GlassCard = ({ children, className = "" }) => (
  <div className={`glass-panel rounded-2xl ${className}`}>
    {children}
  </div>
);

export const SectionTitle = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-2 mb-6 text-white font-bold text-xl">
    <Icon className="text-cyan-400" size={24} />
    <h2>{title}</h2>
  </div>
);
