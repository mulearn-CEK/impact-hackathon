import { useState } from 'react';
import { Link } from 'react-router-dom';
import ChallengeCard from '../components/ChallengeCard';
import ChallengeModal from '../components/ChallengeModal';

const challenges = [
    {
        id: 'LSG-SD-01',
        title: 'Efficient Service Delivery',
        shortDescription: 'Streamlining certificate issuance and public grievance redressal through automated workflows and AI-assisted verification.',
        problemStatement: 'Citizens currently face significant delays and a lack of transparency when requesting essential certificates or filing grievances with local bodies. The existing manual processes are prone to administrative bottlenecks, human error, and require physical visits to government offices, which disproportionately affects the elderly and working professionals.',
        objectives: [
            'Automated workflows for certificate issuance',
            'AI-assisted citizen document verification',
            'Real-time status tracking dashboard',
            'Tamper-proof digital locker integration'
        ],
        impact: 'A successful solution will reduce service processing time by approximately 60%, significantly increase citizen trust through transparency, and establish a reliable audit trail for all government services provided at the Panchayat level.',
        icon: 'verified_user',
        color: 'teal',
        difficulty: 'Medium',
        featured: true
    },
    {
        id: 'LSG-DP-02',
        title: 'Digital Panchayat Interaction',
        shortDescription: 'Creating intuitive interfaces for citizens to engage with local gram sabhas virtually, ensuring inclusive democratic participation.',
        problemStatement: 'Many citizens, especially those with mobility issues or work constraints, cannot attend gram sabhas and local governance meetings. This leads to decreased civic participation and decisions that may not represent the full community voice.',
        objectives: [
            'Virtual meeting platform for gram sabhas',
            'Multi-language support (Malayalam/English)',
            'Accessible design for all age groups',
            'Real-time polling and feedback mechanisms'
        ],
        impact: 'Enabling virtual participation will increase citizen engagement by 40%, ensure more representative decision-making, and create a permanent record of all deliberations for transparency.',
        icon: 'connect_without_contact',
        color: 'purple',
        difficulty: 'Hard',
        featured: false
    },
    {
        id: 'LSG-WM-03',
        title: 'Waste Management Systems',
        shortDescription: 'IoT-based tracking solutions for real-time waste collection, segregation monitoring, and route optimization for LSG fleets.',
        problemStatement: 'Current waste collection is inefficient with fixed schedules that do not account for actual waste volumes. There is no visibility into collection status, segregation compliance is low, and routes are not optimized leading to increased costs and carbon emissions.',
        objectives: [
            'IoT sensors for bin fill-level monitoring',
            'Dynamic route optimization algorithm',
            'Citizen app for collection notifications',
            'Haritha Karma Sena coordination platform'
        ],
        impact: 'Optimized waste management will reduce collection costs by 30%, improve segregation compliance to 80%, and decrease the carbon footprint of LSG waste operations significantly.',
        icon: 'recycling',
        color: 'emerald',
        difficulty: 'Hard',
        featured: false
    }
];

function Day1() {
    const [selectedChallenge, setSelectedChallenge] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (challenge) => {
        setSelectedChallenge(challenge);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedChallenge(null);
    };

    return (
        <div className="relative min-h-screen">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-0 left-0 w-full h-full opacity-40" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2314b8a6' fill-opacity='0.05'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20S0 28.954 0 40s8.954 20 20 20 20-8.954 20-20zm40 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zM20 70c0-5.523-4.477-10-10-10S0 64.477 0 70s4.477 10 10 10 10-4.477 10-10zm40 0c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10zM20 10c0-5.523-4.477-10-10-10S0 4.477 0 10s4.477 10 10 10 10-4.477 10-10zm40 0c0-5.523-4.477-10-10-10S40 4.477 40 10s4.477 10 10 10 10-4.477 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(20, 184, 166, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(20, 184, 166, 0.05) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}></div>
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-teal-500/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-green-500/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Navbar */}
            <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                <nav className="pointer-events-auto flex items-center p-1.5 pl-6 pr-1.5 gap-8 max-w-4xl w-[90%] md:w-full justify-between rounded-full bg-black/60 backdrop-blur-2xl border border-teal-500/30 shadow-[0_0_20px_rgba(20,184,166,0.2)]">
                    <Link to="/" className="flex items-center gap-3 shrink-0">
                        <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/30">
                            <span className="material-symbols-outlined text-teal-500 text-sm">temple_hindu</span>
                        </div>
                        <span className="text-sm font-bold tracking-tight text-white/90">IMPACT <span className="text-teal-500">HACK</span></span>
                    </Link>
                    <div className="hidden md:flex items-center gap-1 text-xs font-medium text-gray-400">
                        <Link to="/" className="flex items-center gap-2 px-3 py-2 hover:text-white transition-colors rounded-full hover:bg-white/5">
                            <span className="material-symbols-outlined text-[16px]">dashboard</span>
                            Overview
                        </Link>
                        <Link to="/day1" className="flex items-center gap-2 px-3 py-2 text-white bg-white/10 rounded-full border border-teal-500/20 shadow-[0_0_10px_rgba(20,184,166,0.1)]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="material-symbols-outlined text-[16px] text-green-500">potted_plant</span>
                            Day 1
                        </Link>
                        <Link to="/day2" className="flex items-center gap-2 px-3 py-2 hover:text-white transition-colors rounded-full hover:bg-white/5">
                            <span className="material-symbols-outlined text-[16px]">memory</span>
                            Day 2
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="hidden md:flex group relative items-center gap-2 bg-gradient-to-r from-teal-500 to-green-500 hover:brightness-110 text-black text-xs font-bold py-2.5 px-5 rounded-full transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] overflow-hidden">
                            <span className="relative z-10 flex items-center gap-1">
                                Register Now
                                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                            </span>
                        </button>
                    </div>
                </nav>
            </div>

            {/* Hero Section */}
            <main className="relative z-10 flex-grow flex flex-col items-center justify-center pt-48 pb-16 px-6">
                <div className="max-w-5xl w-full text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 backdrop-blur-sm mx-auto mb-4">
                        <span className="material-symbols-outlined text-green-500 text-sm">account_balance</span>
                        <span className="text-xs uppercase tracking-widest text-teal-500/80">Local Governance & Community Innovation</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">DAY 1:</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-white to-green-500" style={{ textShadow: '0 0 15px rgba(20, 184, 166, 0.4)' }}>
                            LOCAL GOVERNANCE & COMMUNITY
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        Empowering Kottarakkara through grassroots digital transformation.
                        Build solutions that bridge the gap between <span className="text-teal-500 font-medium">Local Governance</span> and citizens.
                    </p>

                    {/* Status Bar */}
                    <div className="w-full max-w-5xl mt-16 border-t border-white/10 pt-8 flex flex-wrap justify-center gap-8 text-teal-500/60 text-sm font-mono uppercase tracking-wider">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span>Active Panchayat Nodes</span>
                        </div>
                        <div>Connectivity: 98% Stable</div>
                        <div>Region: Kottarakkara Municipality</div>
                    </div>
                </div>
            </main>

            {/* Challenge Cards Section */}
            <section className="py-24 px-6 relative z-10 bg-black/40">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-end justify-between mb-12 border-b border-teal-500/20 pb-6">
                        <div>
                            <h2 className="text-3xl font-display font-bold mb-2">The Challenge Matrix</h2>
                            <p className="text-gray-400">Addressing local needs through modern technological intervention.</p>
                        </div>
                        <span className="material-symbols-outlined text-4xl text-teal-500/20">widgets</span>
                    </div>

                    {/* Challenge Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {challenges.map((challenge) => (
                            <ChallengeCard
                                key={challenge.id}
                                challenge={challenge}
                                theme="lsg"
                                onClick={() => openModal(challenge)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Scoring Section */}
            <section className="py-24 px-6 relative">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-display font-bold mb-4">Submission Framework</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Evaluated through the lens of local impact, accessibility, and sustainable implementation.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div className="space-y-6">
                            <div className="flex items-start gap-5 p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-teal-500">integration_instructions</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">Integrated Solution</h4>
                                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">A deployable digital tool that interacts with existing LSG data structures or provides a clear migration path.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-5 p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-teal-500">universal_currency</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">Accessibility Report</h4>
                                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">Demonstration of how the solution caters to diverse literacy levels and regional language speakers.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-5 p-6 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/10">
                                <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-teal-500">eco</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">Sustainability Roadmap</h4>
                                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">A plan on how the project can be maintained by local community leaders or municipality tech teams.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-10 rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-teal-500/20 flex flex-col justify-center bg-gradient-to-br from-teal-500/5 to-transparent">
                            <h3 className="text-xl font-bold mb-8 text-center uppercase tracking-widest text-teal-500">Scoring Algorithm</h3>
                            <div className="space-y-8">
                                <div>
                                    <div className="flex justify-between text-sm mb-3">
                                        <span className="text-white font-medium">Grassroots Impact</span>
                                        <span className="text-teal-500 font-mono font-bold">45%</span>
                                    </div>
                                    <div className="h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                                        <div className="h-full bg-gradient-to-r from-teal-500 to-green-500 w-[45%] shadow-[0_0_15px_rgba(20,184,166,0.5)]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-3">
                                        <span className="text-white font-medium">Localization & UI</span>
                                        <span className="text-green-500 font-mono font-bold">30%</span>
                                    </div>
                                    <div className="h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                                        <div className="h-full bg-gradient-to-r from-green-500 to-teal-400 w-[30%] shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-3">
                                        <span className="text-white font-medium">Technical Execution</span>
                                        <span className="text-white/60 font-mono font-bold">25%</span>
                                    </div>
                                    <div className="h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                                        <div className="h-full bg-white/30 w-[25%]"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 pt-8 border-t border-white/10 text-center">
                                <p className="text-[10px] text-gray-500 font-mono tracking-widest uppercase">Judiciary: Local Self Government Department Experts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden flex justify-center items-center">
                <div className="p-16 rounded-[3rem] max-w-4xl w-full mx-6 text-center border border-teal-500/30 relative z-10 bg-white/[0.03] backdrop-blur-xl bg-gradient-to-b from-teal-500/10 to-transparent">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white">Drive Local Change.</h2>
                    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        Registration for Day 1 is now open for students, professionals, and civic-tech enthusiasts.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button className="bg-teal-500 hover:bg-green-500 text-black text-lg font-bold py-5 px-12 rounded-2xl transition-all shadow-[0_0_25px_rgba(20,184,166,0.4)]">
                            Join Day 1 Hackathon
                        </button>
                        <button className="bg-transparent border-2 border-teal-500/30 hover:border-teal-500 text-white text-lg font-bold py-5 px-12 rounded-2xl transition-all">
                            Inquire for Teams
                        </button>
                    </div>
                    <p className="mt-8 text-[11px] text-teal-500/60 font-mono tracking-widest uppercase">System status: Applications Open • Kottarakkara Chapter</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-black/80 py-16 px-6 relative z-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-8 rounded bg-teal-500/20 border border-teal-500/30 flex items-center justify-center">
                                <span className="material-symbols-outlined text-teal-500 text-sm">hub</span>
                            </div>
                            <span className="text-lg font-bold tracking-tight">IMPACT <span className="text-teal-500">HACK</span> SERIES</span>
                        </div>
                        <p className="text-gray-400 max-w-md text-sm mb-8 leading-relaxed">
                            Building the future of Kottarakkara through sustainable innovation and local empowerment. A "Work Near Home" initiative.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Chapters</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link className="text-teal-500 font-bold" to="/day1">Day 1: LSG Innovation</Link></li>
                            <li><Link className="hover:text-primary transition" to="/day2">Day 2: AI & Data</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link className="hover:text-teal-500 transition" to="/">Home</Link></li>
                            <li><a className="hover:text-teal-500 transition" href="#">Mentors List</a></li>
                            <li><a className="hover:text-teal-500 transition" href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-[10px] text-gray-600 font-mono tracking-[0.2em] uppercase">
                    © 2024 Impact Hackathon Series • Kottarakkara Municipality • All Rights Reserved
                </div>
            </footer>

            {/* Modal */}
            <ChallengeModal
                isOpen={isModalOpen}
                onClose={closeModal}
                challenge={selectedChallenge}
                theme="lsg"
            />
        </div>
    );
}

export default Day1;
