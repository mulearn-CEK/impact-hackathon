function Hero() {
    return (
        <section className="relative min-h-screen w-full flex flex-col justify-center items-center pt-24 pb-12 overflow-hidden" id="hero">
            {/* Background Grid Effect */}
            <div className="absolute inset-0 z-0 grid-bg opacity-20 pointer-events-none"></div>

            {/* Abstract Glow Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-magenta/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

            <div className="flex flex-col max-w-5xl w-full px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col gap-6 text-center lg:text-left flex-1">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 w-fit mx-auto lg:mx-0">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-primary text-xs font-mono tracking-widest uppercase font-bold">Innovating for Kottarakkara</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-display font-bold leading-[0.9] tracking-tighter text-white">
                            IMPACT <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">HACKATHON</span> <br />
                            SERIES
                        </h1>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mt-2">
                            <div className="flex items-center gap-2 text-gray-400">
                                <span className="material-symbols-outlined text-primary">calendar_month</span>
                                <span className="font-mono">JAN 24 & 25</span>
                            </div>
                            <div className="hidden sm:block w-px h-4 bg-gray-600"></div>
                            <div className="flex items-center gap-2 text-gray-400">
                                <span className="material-symbols-outlined text-primary">location_on</span>
                                <span className="font-mono">KOTTARAKKARA</span>
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start w-full">
                            <button className="h-12 px-8 bg-primary hover:bg-primary-dark text-background-dark font-bold text-base rounded-lg transition-all hover-glow flex items-center justify-center gap-2 w-full sm:w-auto">
                                <span>Register Now</span>
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                            <button className="h-12 px-8 bg-transparent border border-gray-600 hover:border-white text-white font-medium text-base rounded-lg transition-all w-full sm:w-auto">
                                View Schedule
                            </button>
                        </div>
                    </div>

                    {/* Right Visual */}
                    <div className="flex-1 w-full max-w-[500px] aspect-square relative group">
                        {/* Decorative futuristic frame */}
                        <div className="absolute inset-0 border border-border-subtle rounded-2xl rotate-3 scale-95 opacity-50 transition-transform duration-700 group-hover:rotate-6"></div>
                        <div className="absolute inset-0 border border-primary/20 rounded-2xl -rotate-2 scale-100 transition-transform duration-700 group-hover:-rotate-3"></div>
                        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-background-card border border-border-subtle shadow-2xl flex flex-col">
                            {/* Image representing tech/connectivity */}
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay transition-opacity duration-500 hover:opacity-80"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRAy5gbJRKKa-ZRBG1N1C08kFm2oxI8PY8E90pgvs_XJc9SGBhx3Kwjb7l2HP8tiYKScxRuuJ3jKTV-wMjMV1eAKqAdPsQ1QOjpqnjZK9UnUAOnhPaNpHN5ckx9N5D3tc0ur2yDfPzzqgrBXM4p1mqjIzdIB-WryCWfZ3UxQG2-ilBUPQRO2Em2NClqFnVdOIA-a3LTQM7e8NLsg6IB4vPK4oxf3GfILRoOs4gN3Bllkev7oEeHFUzmb9YR-rVqo5HrAi08_XVKQ')" }}
                            ></div>
                            {/* Overlay Content in "Card" */}
                            <div className="mt-auto p-6 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent relative z-10">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-xs font-mono text-primary mb-1">Theme Focus</p>
                                        <h3 className="text-xl font-display font-bold text-white">Work Near Home</h3>
                                    </div>
                                    <div className="size-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center border border-white/20">
                                        <span className="material-symbols-outlined text-white">hub</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
