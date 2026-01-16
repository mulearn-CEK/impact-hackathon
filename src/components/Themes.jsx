function Themes() {
    return (
        <section className="w-full bg-background-dark py-24 px-4 md:px-8 relative overflow-hidden" id="themes">
            {/* Decoration */}
            <div className="absolute right-0 top-20 w-1/3 h-full border-l border-border-subtle/30 pointer-events-none"></div>
            <div className="absolute left-10 bottom-10 size-64 border border-border-subtle rounded-full opacity-20 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto flex flex-col">
                <div className="mb-16 max-w-2xl">
                    <span className="text-primary font-mono text-sm tracking-widest uppercase mb-2 block">Event Tracks</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Dual Focus Challenge</h2>
                    <p className="text-gray-400 mt-4 text-lg">Two days, two distinct problem statements. Choose your battlefield.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                    {/* Day 01 Card */}
                    <div className="group relative flex flex-col h-full mt-0 md:mt-0">
                        <div className="absolute -inset-0.5 bg-gradient-to-b from-secondary-green to-transparent opacity-20 rounded-2xl blur group-hover:opacity-40 transition duration-500"></div>
                        <div className="relative flex flex-col h-full bg-[#17201d] border border-secondary-green/30 hover:border-secondary-green/60 rounded-xl p-8 transition-colors duration-300">
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-3 bg-secondary-green/10 rounded-lg text-secondary-green border border-secondary-green/20">
                                    <span className="material-symbols-outlined text-3xl">account_balance</span>
                                </div>
                                <span className="font-mono text-secondary-green text-sm border border-secondary-green/30 px-3 py-1 rounded-full bg-secondary-green/5">DAY 01</span>
                            </div>
                            <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-secondary-green transition-colors">Local Self Government</h3>
                            <p className="text-gray-400 mb-8 flex-grow">
                                Develop civic tech solutions that streamline local governance, improve public service delivery, and enhance citizen engagement. Focus on real-world bureaucratic bottlenecks.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm text-gray-300">
                                    <span className="material-symbols-outlined text-secondary-green text-lg">check_circle</span>
                                    <span>Civic Growth</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-300">
                                    <span className="material-symbols-outlined text-secondary-green text-lg">check_circle</span>
                                    <span>Public Data</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-300">
                                    <span className="material-symbols-outlined text-secondary-green text-lg">check_circle</span>
                                    <span>Service Delivery</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Day 02 Card (Staggered down on desktop) */}
                    <div className="group relative flex flex-col h-full mt-0 md:mt-24">
                        <div className="absolute -inset-0.5 bg-gradient-to-b from-secondary-magenta to-transparent opacity-20 rounded-2xl blur group-hover:opacity-40 transition duration-500"></div>
                        <div className="relative flex flex-col h-full bg-[#1e1a24] border border-secondary-magenta/30 hover:border-secondary-magenta/60 rounded-xl p-8 transition-colors duration-300">
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-3 bg-secondary-magenta/10 rounded-lg text-secondary-magenta border border-secondary-magenta/20">
                                    <span className="material-symbols-outlined text-3xl">psychology</span>
                                </div>
                                <span className="font-mono text-secondary-magenta text-sm border border-secondary-magenta/30 px-3 py-1 rounded-full bg-secondary-magenta/5">DAY 02</span>
                            </div>
                            <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-secondary-magenta transition-colors">AI-Based Solutions</h3>
                            <p className="text-gray-400 mb-8 flex-grow">
                                Leverage Neural Networks and Machine Learning to solve complex optimization problems. Build predictive models and intelligent agents for smarter resource management.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-sm text-gray-300">
                                    <span className="material-symbols-outlined text-secondary-magenta text-lg">check_circle</span>
                                    <span>Neural Networks</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-300">
                                    <span className="material-symbols-outlined text-secondary-magenta text-lg">check_circle</span>
                                    <span>Predictive Analysis</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-gray-300">
                                    <span className="material-symbols-outlined text-secondary-magenta text-lg">check_circle</span>
                                    <span>Automation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Themes;
