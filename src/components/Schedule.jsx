function Schedule() {
    return (
        <section className="w-full bg-background-dark py-20 px-4 md:px-8 border-t border-border-subtle relative" id="schedule">
            {/* Central Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 md:-ml-[1px]"></div>

            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-16">
                    <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2">Timeline</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight text-center">EVENT SCHEDULE</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-6"></div>
                </div>

                <div className="space-y-12 relative">
                    {/* 09:00 Item (Left on desktop) */}
                    <div className="relative flex flex-col md:flex-row items-center w-full group">
                        <div className="flex-1 w-full md:w-1/2 md:pr-12 md:text-right pl-16 md:pl-0">
                            <div className="p-6 rounded-xl border border-gray-800 bg-background-card hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,210,230,0.1)] group-hover:-translate-y-1">
                                <span className="text-primary font-bold text-2xl font-display">09:00</span>
                                <h3 className="text-white text-xl font-bold font-display mt-1">Registration & Kits</h3>
                                <p className="text-gray-400 text-sm mt-2">Get your badges, swag bags, and settle into your designated hacking zones.</p>
                            </div>
                        </div>
                        {/* Dot */}
                        <div className="absolute left-6 md:left-1/2 -ml-[9px] md:-ml-[9px] w-[18px] h-[18px] rounded-full border-4 border-background-dark bg-primary shadow-[0_0_10px_rgba(0,210,230,0.6)] z-10"></div>
                        <div className="flex-1 w-1/2 hidden md:block"></div>
                    </div>

                    {/* 10:00 Item (Right on desktop) */}
                    <div className="relative flex flex-col md:flex-row items-center w-full group">
                        <div className="flex-1 w-1/2 hidden md:block"></div>
                        {/* Dot */}
                        <div className="absolute left-6 md:left-1/2 -ml-[9px] md:-ml-[9px] w-[18px] h-[18px] rounded-full border-4 border-background-dark bg-secondary-green shadow-[0_0_10px_rgba(16,185,129,0.6)] z-10"></div>
                        <div className="flex-1 w-full md:w-1/2 md:pl-12 pl-16">
                            <div className="p-6 rounded-xl border border-gray-800 bg-background-card hover:border-secondary-green/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] group-hover:-translate-y-1 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-secondary-green/10 blur-2xl rounded-full -mr-10 -mt-10"></div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-secondary-green font-bold text-2xl font-display">10:00</span>
                                    <span className="px-2 py-0.5 rounded text-[10px] bg-secondary-green/20 text-secondary-green font-bold uppercase tracking-wider">Keynote</span>
                                </div>
                                <h3 className="text-white text-xl font-bold font-display">Opening Ceremony</h3>
                                <p className="text-gray-400 text-sm mt-2">Special address by LSG representatives followed by an AI in Governance keynote.</p>
                            </div>
                        </div>
                    </div>

                    {/* 11:00 Item (Left on desktop) */}
                    <div className="relative flex flex-col md:flex-row items-center w-full group">
                        <div className="flex-1 w-full md:w-1/2 md:pr-12 md:text-right pl-16 md:pl-0">
                            <div className="p-6 rounded-xl border border-gray-800 bg-background-card hover:border-secondary-magenta/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(217,70,239,0.1)] group-hover:-translate-y-1">
                                <div className="flex items-center md:justify-end gap-3 mb-2">
                                    <span className="text-secondary-magenta font-bold text-2xl font-display">11:00</span>
                                    <span className="px-2 py-0.5 rounded text-[10px] bg-secondary-magenta/20 text-secondary-magenta font-bold uppercase tracking-wider">Start</span>
                                </div>
                                <h3 className="text-white text-xl font-bold font-display">Hacking Begins</h3>
                                <p className="text-gray-400 text-sm mt-2">Teams start building. Mentors become available for initial consultation.</p>
                            </div>
                        </div>
                        {/* Dot */}
                        <div className="absolute left-6 md:left-1/2 -ml-[9px] md:-ml-[9px] w-[18px] h-[18px] rounded-full border-4 border-background-dark bg-secondary-magenta shadow-[0_0_10px_rgba(217,70,239,0.6)] z-10"></div>
                        <div className="flex-1 w-1/2 hidden md:block"></div>
                    </div>

                    {/* 13:00 Item (Right on desktop) - Break */}
                    <div className="relative flex flex-col md:flex-row items-center w-full group">
                        <div className="flex-1 w-1/2 hidden md:block"></div>
                        {/* Dot */}
                        <div className="absolute left-6 md:left-1/2 -ml-[9px] md:-ml-[9px] w-[18px] h-[18px] rounded-full border-4 border-background-dark bg-gray-500 z-10"></div>
                        <div className="flex-1 w-full md:w-1/2 md:pl-12 pl-16">
                            <div className="flex items-center gap-4 py-4">
                                <span className="text-gray-500 font-bold text-xl font-display">13:00</span>
                                <div className="h-px bg-gray-800 flex-grow"></div>
                                <span className="text-gray-300 font-medium">Lunch Break & Networking</span>
                                <span className="material-symbols-outlined text-gray-500">restaurant</span>
                            </div>
                        </div>
                    </div>

                    {/* 16:00 Item (Left on desktop) */}
                    <div className="relative flex flex-col md:flex-row items-center w-full group">
                        <div className="flex-1 w-full md:w-1/2 md:pr-12 md:text-right pl-16 md:pl-0">
                            <div className="p-6 rounded-xl border border-gray-800 bg-background-card hover:border-yellow-500/50 transition-all duration-300 group-hover:-translate-y-1">
                                <span className="text-yellow-400 font-bold text-2xl font-display">16:00</span>
                                <h3 className="text-white text-xl font-bold font-display mt-1">Mentorship Round</h3>
                                <p className="text-gray-400 text-sm mt-2">Technical experts review progress and provide critical feedback.</p>
                            </div>
                        </div>
                        {/* Dot */}
                        <div className="absolute left-6 md:left-1/2 -ml-[9px] md:-ml-[9px] w-[18px] h-[18px] rounded-full border-4 border-background-dark bg-yellow-500 z-10"></div>
                        <div className="flex-1 w-1/2 hidden md:block"></div>
                    </div>

                    {/* 18:00 Item (Right on desktop) */}
                    <div className="relative flex flex-col md:flex-row items-center w-full group">
                        <div className="flex-1 w-1/2 hidden md:block"></div>
                        {/* Dot */}
                        <div className="absolute left-6 md:left-1/2 -ml-[9px] md:-ml-[9px] w-[18px] h-[18px] rounded-full border-4 border-background-dark bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.6)] z-10"></div>
                        <div className="flex-1 w-full md:w-1/2 md:pl-12 pl-16">
                            <div className="p-6 rounded-xl border border-gray-800 bg-background-card hover:border-red-500/50 transition-all duration-300 group-hover:-translate-y-1 relative overflow-hidden">
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-transparent"></div>
                                <span className="text-red-400 font-bold text-2xl font-display">18:00</span>
                                <h3 className="text-white text-xl font-bold font-display mt-1">Submission & Closing</h3>
                                <p className="text-gray-400 text-sm mt-2">Code freeze followed by final presentations and judging.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Schedule;
