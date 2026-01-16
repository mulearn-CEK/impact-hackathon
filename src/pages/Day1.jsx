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
        <div className="relative min-h-screen bg-[#161d1d]">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCcA-TY3dz1CLiBC2owPSPK7jMCcj-GU_jHJBtSe_QUbqnLEKu2qU2kHduGLoWxNv7Vr9lGI2YH22B4daeZNSPB4tNqmmIbBYukk2GG8DIkGXFOaYuL272xKF-tedYacK1WcAvVp31vcGWDKSH1ieFEUdliX1k_kWlz-EnzGLvCa53DuDpWKnK3qJUYiUJ5GG6HU80q1IoA3NV2177-y7UnAfiL0q2ml2LdTV6TOxo4rGThiFHXG6zTITEzvgmE-IrUiKK41XeP8Q')"
                }}></div>
            </div>

            {/* Navbar */}
            <nav className="sticky top-0 z-50 w-full px-6 py-4 bg-[rgba(22,29,29,0.85)] backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-10 rounded-lg bg-gradient-to-br from-teal-500 to-teal-700 shadow-lg shadow-teal-500/20">
                            <span className="material-symbols-outlined text-white" style={{ fontSize: '24px' }}>bolt</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold tracking-tight leading-none">Impact<span className="text-teal-500">Hack</span></h1>
                            <span className="text-xs text-gray-400">Global Series</span>
                        </div>
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/day1" className="text-teal-500 font-medium text-sm border-b-2 border-teal-500 pb-0.5">Day 1: LSG</Link>
                        <Link to="/day2" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Day 2: AI</Link>
                        <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Home</Link>
                    </div>
                    <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-5 rounded-lg transition-all text-sm">
                        Register Now
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="relative z-10 flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="w-full max-w-6xl flex flex-col gap-12">
                    {/* Header */}
                    <div className="flex flex-col items-center text-center gap-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-500 text-xs font-bold uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                            Live Challenge
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                            Reimagining <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-500">Local Governance</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl font-light leading-relaxed">
                            Day 1 focuses on transforming Local Self Government (LSG) bodies. Explore the problem statements below designed to enhance efficiency, transparency, and citizen engagement.
                        </p>
                    </div>

                    {/* Challenge Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-4">
                        {challenges.map((challenge) => (
                            <ChallengeCard
                                key={challenge.id}
                                challenge={challenge}
                                theme="lsg"
                                onClick={() => openModal(challenge)}
                            />
                        ))}
                    </div>

                    {/* Footer Status */}
                    <div className="w-full flex justify-between items-center border-t border-white/5 pt-8 mt-8 text-xs text-gray-500">
                        <div>
                            <p>Impact Hackathon Series 2024</p>
                        </div>
                        <div className="flex gap-6">
                            <span className="flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> System Operational
                            </span>
                            <span className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">schedule</span> 12h 45m remaining
                            </span>
                        </div>
                    </div>
                </div>
            </main>

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
