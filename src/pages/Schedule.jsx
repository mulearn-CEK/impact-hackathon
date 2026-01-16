import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function SchedulePage() {
    return (
        <div className="relative min-h-screen">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(0, 210, 230, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 210, 230, 0.03) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}></div>
                <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-100px] right-[-100px] w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[100px]"></div>
            </div>

            <Header />

            {/* Hero Section */}
            <main className="relative z-10 pt-32 pb-16 px-6">
                <div className="max-w-5xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mx-auto mb-4">
                        <span className="material-symbols-outlined text-primary text-sm">schedule</span>
                        <span className="text-xs uppercase tracking-widest text-primary/80">Event Timeline</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight mb-6">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">EVENT</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-fuchsia-500">SCHEDULE</span>
                    </h1>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        A day of innovation, coding, and impact in Kottarakkara. Join the movement to build near home.
                    </p>
                    <div className="flex justify-center gap-3 mt-8">
                        <span className="px-3 py-1 rounded-full border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider">Jan 25, 2025</span>
                        <span className="px-3 py-1 rounded-full border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">In-Person</span>
                    </div>
                </div>

                {/* Timeline Section */}
                <section className="max-w-5xl mx-auto relative">
                    {/* Central Line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 md:-ml-[1px]"></div>

                    <div className="space-y-12 relative py-8">
                        {/* 09:00 */}
                        <div className="relative flex flex-col md:flex-row items-center w-full group">
                            <div className="flex-1 w-full md:w-1/2 md:pr-12 md:text-right pl-16 md:pl-0">
                                <div className="p-6 rounded-xl border border-gray-800 bg-[#1e1e24] hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,210,230,0.1)] group-hover:-translate-y-1">
                                    <span className="text-primary font-bold text-2xl font-display">09:00</span>
                                    <h3 className="text-white text-xl font-bold font-display mt-1">Registration & Kits</h3>
                                    <p className="text-gray-400 text-sm mt-2">Get your badges, swag bags, and settle into your designated hacking zones.</p>
                                </div>
                            </div>
                            <div className="absolute left-6 md:left-1/2 -ml-[9px] md:-ml-[9px] w-[18px] h-[18px] rounded-full border-4 border-[#131316] bg-primary shadow-[0_0_10px_rgba(0,210,230,0.6)] z-10"></div>
                            <div className="flex-1 w-1/2 hidden md:block"></div>
                        </div>

                        {/* 10:00 */}
                        <div className="relative flex flex-col md:flex-row items-center w-full group">
                            <div className="flex-1 w-1/2 hidden md:block"></div>
                            <div className="absolute left-6 md:left-1/2 -ml-[9px] md:-ml-[9px] w-[18px] h-[18px] rounded-full border-4 border-[#131316] bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.6)] z-10"></div>
                            <div className="flex-1 w-full md:w-1/2 md:pl-12 pl-16">
                                <div className="p-6 rounded-xl border border-gray-800 bg-[#1e1e24] hover:border-emerald-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.1)] group-hover:-translate-y-1 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 blur-2xl rounded-full -mr-10 -mt-10"></div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-emerald-400 font-bold text-2xl font-display">10:00</span>
                                        <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 font-bold uppercase tracking-wider">Keynote</span>
                                    </div>
                                    <h3 className="text-white text-xl font-bold font-display">Opening Ceremony</h3>
                                    <p className="text-gray-400 text-sm mt-2">Special address by LSG representatives followed by an AI in Governance keynote.</p>
                                </div>
                            </div>
                        </div>

                        {/* 11:00 */}
                        <div className="relative flex flex-col md:flex-row items-center w-full group">
                            <div className="flex-1 w-full md:w-1/2 md:pr-12 md:text-right pl-16 md:pl-0">
                                <div className="p-6 rounded-xl border border-gray-800 bg-[#1e1e24] hover:border-fuchsia-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(217,70,239,0.1)] group-hover:-translate-y-1">
                                    <div className="flex items-center md:justify-end gap-3 mb-2">
                                        <span className="text-fuchsia-400 font-bold text-2xl font-display">11:00</span>
                                        <span className="px-2 py-0.5 rounded text-[10px] bg-fuchsia-500/20 text-fuchsia-300 font-bold uppercase tracking-wider">Start</span>
                                    </div>
                                    <h3 className="text-white text-xl font-bold font-display">Hacking Begins</h3>
                                    <p className="text-gray-400 text-sm mt-2">Teams start building. Mentors become available for initial consultation.</p>
                                </div>
                            </div>
                            <div className="absolute left-6 md:left-1/2 -ml-[9px] md:-ml-[9px] w-[18px] h-[18px] rounded-full border-4 border-[#131316] bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.6)] z-10"></div>
                            <div className="flex-1 w-1/2 hidden md:block"></div>
                        </div>

                        {/* 13:00 - Break */}
                        <div className="relative flex flex-col md:flex-row items-center w-full group">
                            <div className="flex-1 w-1/2 hidden md:block"></div>
                            <div className="absolute left-6 md:left-1/2 -ml-[9px] md:-ml-[9px] w-[18px] h-[18px] rounded-full border-4 border-[#131316] bg-gray-500 z-10"></div>
                            <div className="flex-1 w-full md:w-1/2 md:pl-12 pl-16">
                                <div className="flex items-center gap-4 py-4">
                                    <span className="text-gray-500 font-bold text-xl font-display">13:00</span>
                                    <div className="h-px bg-gray-800 flex-grow"></div>
                                    <span className="text-gray-300 font-medium">Lunch Break & Networking</span>
                                    <span className="material-symbols-outlined text-gray-500">restaurant</span>
                                </div>
                            </div>
                        </div>

                        {/* 16:00 */}
                        <div className="relative flex flex-col md:flex-row items-center w-full group">
                            <div className="flex-1 w-full md:w-1/2 md:pr-12 md:text-right pl-16 md:pl-0">
                                <div className="p-6 rounded-xl border border-gray-800 bg-[#1e1e24] hover:border-yellow-500/50 transition-all duration-300 group-hover:-translate-y-1">
                                    <span className="text-yellow-400 font-bold text-2xl font-display">16:00</span>
                                    <h3 className="text-white text-xl font-bold font-display mt-1">Mentorship Round</h3>
                                    <p className="text-gray-400 text-sm mt-2">Technical experts review progress and provide critical feedback.</p>
                                </div>
                            </div>
                            <div className="absolute left-6 md:left-1/2 -ml-[9px] md:-ml-[9px] w-[18px] h-[18px] rounded-full border-4 border-[#131316] bg-yellow-500 z-10"></div>
                            <div className="flex-1 w-1/2 hidden md:block"></div>
                        </div>

                        {/* 18:00 */}
                        <div className="relative flex flex-col md:flex-row items-center w-full group">
                            <div className="flex-1 w-1/2 hidden md:block"></div>
                            <div className="absolute left-6 md:left-1/2 -ml-[9px] md:-ml-[9px] w-[18px] h-[18px] rounded-full border-4 border-[#131316] bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.6)] z-10"></div>
                            <div className="flex-1 w-full md:w-1/2 md:pl-12 pl-16">
                                <div className="p-6 rounded-xl border border-gray-800 bg-[#1e1e24] hover:border-red-500/50 transition-all duration-300 group-hover:-translate-y-1 relative overflow-hidden">
                                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-transparent"></div>
                                    <span className="text-red-400 font-bold text-2xl font-display">18:00</span>
                                    <h3 className="text-white text-xl font-bold font-display mt-1">Submission & Closing</h3>
                                    <p className="text-gray-400 text-sm mt-2">Code freeze followed by final presentations and judging.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="max-w-4xl mx-auto mt-24 text-center">
                    <div className="p-12 rounded-3xl border border-primary/20 bg-[rgba(19,19,22,0.6)] backdrop-blur-xl">
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">Ready to Join?</h2>
                        <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                            Secure your spot and be part of Kottarakkara's biggest hackathon event!
                        </p>
                        <Link to="/register" className="inline-block bg-primary hover:bg-cyan-300 text-background-dark text-lg font-bold py-4 px-10 rounded-xl transition-all shadow-[0_0_20px_rgba(0,210,230,0.3)] hover:shadow-[0_0_30px_rgba(0,210,230,0.6)]">
                            Register Now
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default SchedulePage;
