import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function RegisterPage() {
    return (
        <div className="bg-background-dark min-h-screen flex flex-col font-sans text-white">
            <Header />

            <main className="flex-grow flex flex-col pt-24 pb-24 px-4 md:px-8 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-1/4 -left-64 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"></div>
                    <div className="absolute bottom-1/4 -right-64 w-[500px] h-[500px] bg-secondary-magenta/10 rounded-full blur-[100px]"></div>
                </div>

                <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col flex-grow justify-center">
                    <div className="text-center mb-16 space-y-4">
                        <span className="text-secondary-green font-mono text-sm tracking-widest uppercase mb-2 block animate-pulse">Join the Revolution</span>
                        <h1 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tight">
                            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary-magenta">Battlefield</span>
                        </h1>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            Select the track you wish to participate in. Be part of the change.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto w-full">
                        {/* Day 01 Card - LSG */}
                        <div className="group relative flex flex-col h-full hover:-translate-y-2 transition-transform duration-500">
                            <div className="absolute -inset-0.5 bg-gradient-to-b from-secondary-green to-transparent opacity-20 rounded-2xl blur group-hover:opacity-40 transition duration-500"></div>
                            <div className="relative flex flex-col h-full bg-[#17201d] border border-secondary-green/30 hover:border-secondary-green/60 rounded-xl overflow-hidden transition-colors duration-300 shadow-2xl shadow-green-900/10">
                                {/* Header Image/Illustration area */}
                                <div className="h-48 relative overflow-hidden bg-secondary-green/5 group-hover:bg-secondary-green/10 transition-colors">
                                    <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                                        <span className="material-symbols-outlined text-[120px] text-secondary-green">account_balance</span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#17201d] to-transparent"></div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="flex flex-col">
                                            <span className="font-mono text-secondary-green text-sm mb-1 opacity-80">January 25, 2025</span>
                                            <h2 className="text-3xl font-display font-bold text-white group-hover:text-secondary-green transition-colors">Day 01</h2>
                                        </div>
                                        <span className="border border-secondary-green/30 text-secondary-green px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-secondary-green/5">LSG Track</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4">Local Self Government</h3>
                                    <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                                        Focus on civic tech solutions. Streamline governance, improve public service delivery, and solve real-world bureaucratic bottlenecks.
                                    </p>

                                    <a
                                        href="#register-day1"
                                        className="w-full py-4 rounded-lg bg-secondary-green hover:bg-[#00a88d] text-background-dark font-bold uppercase tracking-wider text-center transition-all shadow-[0_0_20px_rgba(0,210,180,0.3)] hover:shadow-[0_0_30px_rgba(0,210,180,0.5)] flex items-center justify-center gap-2 group-hover:gap-3"
                                    >
                                        Register for Day 1
                                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Day 02 Card - AI */}
                        <div className="group relative flex flex-col h-full hover:-translate-y-2 transition-transform duration-500 delay-100">
                            <div className="absolute -inset-0.5 bg-gradient-to-b from-secondary-magenta to-transparent opacity-20 rounded-2xl blur group-hover:opacity-40 transition duration-500"></div>
                            <div className="relative flex flex-col h-full bg-[#1e1a24] border border-secondary-magenta/30 hover:border-secondary-magenta/60 rounded-xl overflow-hidden transition-colors duration-300 shadow-2xl shadow-purple-900/10">
                                {/* Header Image/Illustration area */}
                                <div className="h-48 relative overflow-hidden bg-secondary-magenta/5 group-hover:bg-secondary-magenta/10 transition-colors">
                                    <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                                        <span className="material-symbols-outlined text-[120px] text-secondary-magenta">psychology</span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e1a24] to-transparent"></div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="flex flex-col">
                                            <span className="font-mono text-secondary-magenta text-sm mb-1 opacity-80">January 26, 2025</span>
                                            <h2 className="text-3xl font-display font-bold text-white group-hover:text-secondary-magenta transition-colors">Day 02</h2>
                                        </div>
                                        <span className="border border-secondary-magenta/30 text-secondary-magenta px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-secondary-magenta/5">AI Track</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4">AI Innovation</h3>
                                    <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                                        Leverage Neural Networks and ML. Build predictive models, intelligent agents, and solve complex optimization problems.
                                    </p>

                                    <a
                                        href="#register-day2"
                                        className="w-full py-4 rounded-lg bg-secondary-magenta hover:bg-[#d026c0] text-white font-bold uppercase tracking-wider text-center transition-all shadow-[0_0_20px_rgba(235,59,215,0.3)] hover:shadow-[0_0_30px_rgba(235,59,215,0.5)] flex items-center justify-center gap-2 group-hover:gap-3"
                                    >
                                        Register for Day 2
                                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default RegisterPage;
