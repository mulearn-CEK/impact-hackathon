function ChallengeCard({ challenge, onClick, theme = 'lsg' }) {
    const isAI = theme === 'ai';

    const colorMap = {
        teal: { bg: 'bg-primary/10', text: 'text-primary', glow: 'bg-primary/20', hover: 'group-hover:text-primary' },
        purple: { bg: 'bg-purple-500/10', text: 'text-purple-300', glow: 'bg-purple-500/10', hover: 'group-hover:text-purple-300' },
        emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-300', glow: 'bg-emerald-500/10', hover: 'group-hover:text-emerald-300' },
        fuchsia: { bg: 'bg-fuchsia-500/10', text: 'text-fuchsia-300', glow: 'bg-fuchsia-500/10', hover: 'group-hover:text-fuchsia-300' },
        blue: { bg: 'bg-blue-500/10', text: 'text-blue-300', glow: 'bg-blue-500/10', hover: 'group-hover:text-blue-300' },
    };

    const colors = colorMap[challenge.color] || colorMap.teal;

    return (
        <div
            className={`group rounded-xl p-6 flex flex-col gap-6 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden bg-[rgba(22,29,29,0.6)] backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] ${challenge.featured ? 'ring-2 ring-primary ring-offset-2 ring-offset-[#161d1d] shadow-[0_0_30px_rgba(22,156,145,0.2)]' : ''
                }`}
        >
            {/* Glow effect */}
            <div className={`absolute -top-10 -right-10 w-32 h-32 ${colors.glow} blur-3xl rounded-full group-hover:opacity-60 transition-all`}></div>

            {/* Header */}
            <div className="flex justify-between items-start z-10">
                <div className={`p-3 rounded-lg bg-[#253836] ${colors.text} border border-white/5`}>
                    <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>{challenge.icon}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${challenge.difficulty === 'Medium'
                        ? 'bg-yellow-500/10 border border-yellow-500/20 text-yellow-400'
                        : 'bg-red-500/10 border border-red-500/20 text-red-400'
                    }`}>
                    {challenge.difficulty}
                </span>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 z-10 flex-grow">
                <h3 className={`text-xl font-bold text-white ${colors.hover} transition-colors`}>
                    {challenge.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                    {challenge.shortDescription}
                </p>
            </div>

            {/* Footer */}
            <div className="pt-4 mt-auto z-10 border-t border-white/5">
                <button
                    onClick={onClick}
                    className={`w-full flex items-center justify-center gap-2 font-bold py-2.5 px-4 rounded-lg transition-colors text-sm ${challenge.featured || isAI
                            ? 'bg-primary hover:bg-primary-dark text-white'
                            : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white'
                        }`}
                >
                    View Details
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
            </div>
        </div>
    );
}

export default ChallengeCard;
