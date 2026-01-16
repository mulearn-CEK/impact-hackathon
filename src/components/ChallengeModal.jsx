import { useState } from 'react';

function ChallengeModal({ isOpen, onClose, challenge, theme = 'lsg' }) {
    if (!isOpen) return null;

    const isAI = theme === 'ai';

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}></div>

            {isAI ? (
                // AI Theme Modal
                <div className="relative w-full max-w-4xl rounded-2xl border border-white/10 flex flex-col overflow-hidden bg-[rgba(10,15,20,0.75)] backdrop-blur-2xl shadow-[0_0_40px_rgba(59,130,246,0.15)]">
                    {/* Gradient top border */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-fuchsia-500 via-blue-500 to-cyan-400 z-20 shadow-[0_0_20px_rgba(217,70,239,0.5)]"></div>

                    {/* Neural pattern background */}
                    <div className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-600/20 blur-[100px] rounded-full mix-blend-screen"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full mix-blend-screen"></div>
                    </div>

                    {/* Header */}
                    <div className="relative z-10 flex items-start justify-between p-6 sm:p-8 border-b border-white/5 bg-gradient-to-b from-white/5 to-transparent">
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase bg-blue-500/10 text-blue-400 border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]">AI Track</span>
                                <span className="px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/30 shadow-[0_0_10px_rgba(217,70,239,0.2)]">Day 2</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                                {challenge.title.split(' ').slice(0, -2).join(' ')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-fuchsia-300">{challenge.title.split(' ').slice(-2).join(' ')}</span>
                            </h2>
                            <p className="text-gray-400 text-sm font-light flex items-center gap-2">
                                <span className="material-symbols-outlined text-[16px]">tag</span> Challenge ID: #{challenge.id}
                            </p>
                        </div>
                        <button onClick={onClose} className="group p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition-all hover:rotate-90">
                            <span className="material-symbols-outlined text-gray-400 group-hover:text-white">close</span>
                        </button>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-6 sm:p-8 overflow-y-auto max-h-[60vh] space-y-8">
                        <section>
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                                <div className="p-1.5 rounded bg-fuchsia-500/20 border border-fuchsia-500/30">
                                    <span className="material-symbols-outlined text-fuchsia-300 text-[20px]">psychology</span>
                                </div>
                                Problem Statement Deep-Dive
                            </h3>
                            <div className="text-gray-300 leading-relaxed text-sm space-y-4">
                                <p>{challenge.problemStatement}</p>
                            </div>
                        </section>

                        <div className="grid md:grid-cols-2 gap-6">
                            <section className="bg-[#0f1518]/50 rounded-xl p-5 border border-white/5 hover:border-blue-500/30 transition-colors">
                                <h3 className="text-sm font-bold text-blue-300 mb-4 uppercase tracking-wider flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[18px]">database</span>
                                    Dataset Overview
                                </h3>
                                <ul className="space-y-3 text-sm text-gray-400">
                                    {challenge.datasets?.map((dataset, idx) => (
                                        <li key={idx} className="flex items-center gap-3 p-2 rounded hover:bg-white/5 transition-colors">
                                            <span className={`material-symbols-outlined text-[18px] ${['text-blue-500', 'text-yellow-500', 'text-green-500'][idx % 3]}`}>{dataset.icon}</span>
                                            <span>{dataset.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            <section className="bg-[#0f1518]/50 rounded-xl p-5 border border-white/5 hover:border-fuchsia-500/30 transition-colors">
                                <h3 className="text-sm font-bold text-fuchsia-300 mb-4 uppercase tracking-wider flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[18px]">terminal</span>
                                    Stack Recommendations
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {challenge.stack?.map((tech, idx) => (
                                        <span key={idx} className="px-3 py-1.5 rounded-lg bg-[#1a2228] border border-white/10 text-xs text-gray-300 font-mono hover:border-blue-500/50 hover:text-blue-300 transition-colors cursor-pointer">{tech}</span>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {challenge.ethicalNote && (
                            <section className="relative p-5 rounded-xl border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-900/10 to-transparent overflow-hidden">
                                <div className="absolute top-0 right-0 p-3 opacity-20">
                                    <span className="material-symbols-outlined text-fuchsia-500 text-[64px]">balance</span>
                                </div>
                                <h3 className="text-sm font-bold text-fuchsia-200 mb-2 flex items-center gap-2 relative z-10">
                                    <span className="material-symbols-outlined text-[18px]">gavel</span>
                                    Ethical AI Constraints
                                </h3>
                                <p className="text-xs text-fuchsia-100/70 leading-relaxed relative z-10 max-w-2xl">
                                    {challenge.ethicalNote}
                                </p>
                            </section>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="relative z-10 p-6 sm:px-8 sm:py-6 border-t border-white/5 bg-[#0a0f0f]/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-4 text-xs text-gray-500 font-mono">
                            <span className="flex items-center gap-1.5">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                Data Stream Live
                            </span>
                            <span className="flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-[14px]">group</span>
                                142 Teams Joined
                            </span>
                        </div>
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <button className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-white border border-white/5 hover:border-white/10 transition-colors bg-white/5 hover:bg-white/10">
                                Docs
                            </button>
                            <button className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg text-sm font-bold text-white bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:from-fuchsia-500 hover:to-blue-500 shadow-[0_0_20px_rgba(217,70,239,0.3)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
                                Join Challenge
                                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                // LSG Theme Modal
                <div className="relative w-full max-w-3xl rounded-2xl bg-[#1d2626] border border-white/10 shadow-2xl flex flex-col overflow-hidden max-h-[90vh]">
                    {/* Background pattern */}
                    <div className="absolute inset-0 z-0 opacity-5 pointer-events-none mix-blend-overlay">
                        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCcA-TY3dz1CLiBC2owPSPK7jMCcj-GU_jHJBtSe_QUbqnLEKu2qU2kHduGLoWxNv7Vr9lGI2YH22B4daeZNSPB4tNqmmIbBYukk2GG8DIkGXFOaYuL272xKF-tedYacK1WcAvVp31vcGWDKSH1ieFEUdliX1k_kWlz-EnzGLvCa53DuDpWKnK3qJUYiUJ5GG6HU80q1IoA3NV2177-y7UnAfiL0q2ml2LdTV6TOxo4rGThiFHXG6zTITEzvgmE-IrUiKK41XeP8Q')" }}></div>
                    </div>

                    {/* Header */}
                    <div className="relative z-10 flex items-start justify-between p-6 sm:p-8 border-b border-white/5 bg-[#253836]/30 backdrop-blur-md">
                        <div className="flex gap-4">
                            <div className="hidden sm:flex items-center justify-center size-14 rounded-xl bg-[#253836] text-teal-500 border border-white/5 shadow-inner shrink-0">
                                <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>{challenge.icon}</span>
                            </div>
                            <div>
                                <div className="flex flex-wrap items-center gap-3 mb-1">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{challenge.title}</h2>
                                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${challenge.difficulty === 'Medium'
                                            ? 'bg-yellow-500/10 border border-yellow-500/20 text-yellow-400'
                                            : 'bg-red-500/10 border border-red-500/20 text-red-400'
                                        }`}>{challenge.difficulty}</span>
                                </div>
                                <p className="text-gray-400 text-sm">Category: Local Self Government (LSG) • Track 1</p>
                            </div>
                        </div>
                        <button onClick={onClose} className="text-gray-400 hover:text-white hover:bg-white/5 p-2 rounded-lg transition-colors">
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-6 sm:p-8 overflow-y-auto bg-[#1d2626]/80 backdrop-blur-md">
                        <div className="space-y-8">
                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-teal-200 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-teal-500 text-xl">help</span>
                                    Problem Statement
                                </h3>
                                <p className="text-gray-300 leading-relaxed text-sm sm:text-base border-l-2 border-teal-500/30 pl-4">
                                    {challenge.problemStatement}
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-teal-200 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-teal-500 text-xl">target</span>
                                    Key Objectives
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-3">
                                    {challenge.objectives?.map((obj, idx) => (
                                        <div key={idx} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-teal-500/30 transition-colors">
                                            <span className="material-symbols-outlined text-teal-500 text-sm mt-1 bg-teal-500/10 rounded-full p-1">check</span>
                                            <span className="text-gray-300 text-sm">{obj}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-lg font-bold text-teal-200 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-teal-500 text-xl">trending_up</span>
                                    Expected Impact
                                </h3>
                                <div className="p-5 rounded-xl bg-gradient-to-r from-[#2e5c58]/30 to-teal-500/10 border border-teal-500/20 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4 opacity-10">
                                        <span className="material-symbols-outlined text-6xl">insights</span>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed relative z-10">
                                        {challenge.impact}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="relative z-10 p-6 sm:px-8 sm:py-6 border-t border-white/10 bg-[#161d1d] flex flex-col sm:flex-row gap-4 justify-end items-center">
                        <span className="text-xs text-gray-500 mr-auto hidden sm:flex items-center">
                            <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                            Accepting submissions
                        </span>
                        <button className="w-full sm:w-auto px-6 py-2.5 rounded-lg border border-white/10 text-gray-400 font-medium hover:bg-white/5 hover:text-white transition-colors text-sm">
                            Download Assets
                        </button>
                        <button className="w-full sm:w-auto px-8 py-2.5 rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-bold shadow-lg shadow-teal-500/25 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 text-sm">
                            Join Challenge
                            <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChallengeModal;
