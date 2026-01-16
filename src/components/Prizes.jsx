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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end max-w-5xl mx-auto">
                    {/* 2nd Place (Left) */}
                    <div className="order-2 md:order-1 flex flex-col bg-background-card border border-gray-800 rounded-2xl p-6 relative overflow-hidden group hover:border-secondary-magenta/40 transition-all duration-300">
                        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-secondary-magenta to-transparent opacity-50"></div>
                        <div className="flex justify-between items-start mb-4">
                            <div className="bg-secondary-magenta/10 text-secondary-magenta px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-secondary-magenta/20">2nd Place</div>
                            <span className="material-symbols-outlined text-gray-600 group-hover:text-secondary-magenta transition-colors">trophy</span>
                        </div>
                        <div className="flex flex-col gap-1 mb-6">
                            <span className="text-4xl font-bold font-display text-white tracking-tight">₹5,000</span>
                            <span className="text-gray-400 text-sm font-medium">Cash Prize</span>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-sm text-gray-300">
                                <span className="material-symbols-outlined text-secondary-magenta text-[18px]">check_circle</span>
                                Swag Kit
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-300">
                                <span className="material-symbols-outlined text-secondary-magenta text-[18px]">check_circle</span>
                                Certificate of Excellence
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-300">
                                <span className="material-symbols-outlined text-secondary-magenta text-[18px]">check_circle</span>
                                Pro License
                            </li>
                        </ul>
                    </div>

                    {/* 1st Place (Center - Elevated) */}
                    <div className="order-1 md:order-2 flex flex-col bg-[#1a2324] border border-primary/40 rounded-2xl p-8 relative overflow-hidden shadow-[0_0_40px_rgba(0,210,230,0.1)] scale-100 md:scale-110 md:-translate-y-4 z-10 group">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
                        <div className="flex justify-between items-start mb-6">
                            <div className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider border border-primary/30 shadow-[0_0_10px_rgba(0,210,230,0.2)]">1st Place</div>
                            <span className="material-symbols-outlined text-yellow-400 text-3xl animate-pulse">emoji_events</span>
                        </div>
                        <div className="flex flex-col gap-1 mb-8">
                            <span className="text-5xl font-bold font-display text-white tracking-tight">₹10,000</span>
                            <span className="text-primary text-base font-medium">Cash Prize + Grand Trophy</span>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-base text-white">
                                <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
                                Internship Opportunity
                            </li>
                            <li className="flex items-center gap-3 text-base text-white">
                                <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
                                Exclusive Meridian Swag Box
                            </li>
                            <li className="flex items-center gap-3 text-base text-white">
                                <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
                                Direct Entry to State Finals
                            </li>
                        </ul>
                        <button className="mt-8 w-full py-3 rounded-lg bg-primary hover:bg-primary-dark text-background-dark font-bold transition-colors">
                            Aim for Gold
                        </button>
                    </div>

                    {/* 3rd Place (Right) */}
                    <div className="order-3 md:order-3 flex flex-col bg-background-card border border-gray-800 rounded-2xl p-6 relative overflow-hidden group hover:border-secondary-green/40 transition-all duration-300">
                        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-secondary-green to-transparent opacity-50"></div>
                        <div className="flex justify-between items-start mb-4">
                            <div className="bg-secondary-green/10 text-secondary-green px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-secondary-green/20">3rd Place</div>
                            <span className="material-symbols-outlined text-gray-600 group-hover:text-secondary-green transition-colors">military_tech</span>
                        </div>
                        <div className="flex flex-col gap-1 mb-6">
                            <span className="text-4xl font-bold font-display text-white tracking-tight">₹2,000</span>
                            <span className="text-gray-400 text-sm font-medium">Cash Prize</span>
                        </div>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-sm text-gray-300">
                                <span className="material-symbols-outlined text-secondary-green text-[18px]">check_circle</span>
                                Certificate
                            </li>
                            <li className="flex items-center gap-3 text-sm text-gray-300">
                                <span className="material-symbols-outlined text-secondary-green text-[18px]">check_circle</span>
                                T-Shirt
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Powered By Section */}
                <div className="mt-24 text-center">
                    <span className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase mb-8 block">Powered By</span>
                    <div className="flex justify-center items-center gap-12">
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-48 h-24 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-4">
                                <img src="/kdisc_logo.png" alt="K-DISC Logo" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-gray-400 text-sm font-medium">K-DISC</span>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="w-48 h-24 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-4">
                                <img src="/partner_logo_2.png" alt="Partner Logo" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-gray-400 text-sm font-medium">Kerala Startup Mission</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Prizes;
