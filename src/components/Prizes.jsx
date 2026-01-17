function Prizes() {
    return (
        <section className="w-full bg-background-dark py-24 px-4 md:px-8" id="prizes">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center mb-16">
                    <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2">Rewards</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight text-center">PRIZES & SWAG</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-6"></div>
                </div>

                {/* Podium Layout for Desktop, Stack for Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center md:items-end max-w-5xl mx-auto">
                    {/* 2nd Place (Left) */}
                    <div className="order-2 md:order-1 flex flex-col bg-background-card border border-gray-800 rounded-2xl p-6 relative overflow-hidden group hover:border-secondary-magenta/40 transition-all duration-300 items-center text-center h-full justify-center min-h-[220px]">
                        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-secondary-magenta to-transparent opacity-50"></div>
                        <div className="flex flex-col items-center mb-6">
                            <span className="material-symbols-outlined text-gray-600 group-hover:text-secondary-magenta transition-colors text-4xl mb-3">trophy</span>
                            <div className="bg-secondary-magenta/10 text-secondary-magenta px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-secondary-magenta/20">2nd Place</div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-5xl font-bold font-display text-white tracking-tight group-hover:scale-110 transition-transform duration-300">₹5,000</span>
                            <span className="text-gray-400 text-sm font-medium">Cash Prize</span>
                        </div>
                    </div>

                    {/* 1st Place (Center - Elevated) */}
                    <div className="order-1 md:order-2 flex flex-col bg-[#1a2324] border border-primary/40 rounded-2xl p-8 relative overflow-hidden shadow-[0_0_40px_rgba(0,210,230,0.1)] scale-100 md:scale-110 md:-translate-y-4 z-10 group items-center text-center min-h-[280px] justify-center">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
                        <div className="flex flex-col items-center mb-6">
                            <span className="material-symbols-outlined text-yellow-400 text-6xl animate-pulse mb-4 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]">emoji_events</span>
                            <div className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider border border-primary/30 shadow-[0_0_10px_rgba(0,210,230,0.2)]">1st Place</div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-7xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 tracking-tight drop-shadow-[0_0_25px_rgba(0,210,230,0.3)] group-hover:scale-105 transition-transform duration-300">₹10,000</span>
                            <span className="text-primary text-lg font-medium tracking-wide">Cash Prize</span>
                        </div>
                    </div>

                    {/* 3rd Place (Right) */}
                    <div className="order-3 md:order-3 flex flex-col bg-background-card border border-gray-800 rounded-2xl p-6 relative overflow-hidden group hover:border-secondary-green/40 transition-all duration-300 items-center text-center h-full justify-center min-h-[220px]">
                        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-secondary-green to-transparent opacity-50"></div>
                        <div className="flex flex-col items-center mb-6">
                            <span className="material-symbols-outlined text-gray-600 group-hover:text-secondary-green transition-colors text-4xl mb-3">military_tech</span>
                            <div className="bg-secondary-green/10 text-secondary-green px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-secondary-green/20">3rd Place</div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-4xl font-bold font-display text-white tracking-tight group-hover:scale-110 transition-transform duration-300">₹2,000</span>
                            <span className="text-gray-400 text-sm font-medium">Cash Prize</span>
                        </div>
                    </div>
                </div>

                {/* Powered By Section */}
                <div className="mt-24 text-center">
                    <span className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase mb-8 block">Powered By</span>
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
                        <img src="/kdisc_logo.png" alt="K-DISC" className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105" />
                        <img src="/partner_logo_2.png" alt="MuLearn CEK" className="h-28 md:h-32 w-auto object-contain transition-transform duration-300 hover:scale-105" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Prizes;
