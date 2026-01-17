import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
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

            {/* Shared Header */}
            <Header />

            {/* Hero Section */}
            <main className="relative z-10 flex-grow flex flex-col items-center justify-center pt-48 pb-16 px-6">
                <div className="max-w-5xl w-full text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/5 backdrop-blur-sm mx-auto mb-4">
                        <span className="material-symbols-outlined text-green-500 text-sm">account_balance</span>
                        <span className="text-xs uppercase tracking-widest text-teal-500/80">Local Governance & Community Innovation</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-display font-bold leading-tight tracking-tight">
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





            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden flex justify-center items-center">
                <div className="p-16 rounded-[3rem] max-w-4xl w-full mx-6 text-center border border-teal-500/30 relative z-10 bg-white/[0.03] backdrop-blur-xl bg-gradient-to-b from-teal-500/10 to-transparent">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-white">Drive Local Change.</h2>
                    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                        Registration for Day 1 is now open for students, professionals, and civic-tech enthusiasts.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/register" className="inline-block bg-teal-500 hover:bg-green-500 text-black text-lg font-bold py-5 px-12 rounded-2xl transition-all shadow-[0_0_25px_rgba(20,184,166,0.4)]">
                            Join Day 1 Hackathon
                        </Link>

                    </div>
                    <p className="mt-8 text-[11px] text-teal-500/60 font-mono tracking-widest uppercase">System status: Applications Open • Kottarakkara Chapter</p>
                </div>
            </section>

            {/* Footer */}
            <Footer />

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
