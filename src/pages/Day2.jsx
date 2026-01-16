import { useState } from 'react';
import { Link } from 'react-router-dom';
import ChallengeCard from '../components/ChallengeCard';
import ChallengeModal from '../components/ChallengeModal';

const challenges = [
    {
        id: 'AI-PH-01',
        title: 'AI for Public Health',
        shortDescription: 'Build a predictive AI engine that forecasts disease outbreaks 72 hours in advance using diverse datasets.',
        problemStatement: 'Current epidemiological models often fail to account for hyper-local variables in densely populated urban centers. The challenge is to build a predictive AI engine that ingests diverse datasets—ranging from hospital admission records to social media sentiment and sewage surveillance data—to forecast disease outbreaks 72 hours in advance. Your solution must not only predict the "where" and "when" but also suggest optimal resource allocation strategies for local health bodies.',
        datasets: [
            { name: 'Anonymized Patient Records (2.5GB)', icon: 'csv' },
            { name: 'Environmental Sensor Logs (JSON)', icon: 'data_object' },
            { name: 'Outbreak Heatmaps (GeoJSON)', icon: 'map' }
        ],
        stack: ['Python 3.9+', 'PyTorch', 'FastAPI', 'Apache Spark'],
        ethicalNote: 'Models must demonstrate zero bias against specific demographic groups. All submissions must include a fairness audit report. Black-box models without an explainability (XAI) layer will be disqualified.',
        icon: 'psychology',
        color: 'fuchsia',
        difficulty: 'Hard',
        featured: true
    },
    {
        id: 'AI-GA-02',
        title: 'Generative AI for Governance',
        shortDescription: 'Develop LLM-based interfaces that simplify complex government notifications for citizens in Malayalam and English.',
        problemStatement: 'Government notifications and circulars are often written in complex legal language that is difficult for common citizens to understand. Build an LLM-based system using Retrieval-Augmented Generation (RAG) that can parse official documents and provide clear, localized explanations in both Malayalam and English.',
        datasets: [
            { name: 'Government Circulars Archive', icon: 'description' },
            { name: 'Kerala Gazette Repository', icon: 'library_books' },
            { name: 'FAQ Database (CSV)', icon: 'csv' }
        ],
        stack: ['LangChain', 'OpenAI/Gemini API', 'Vector DB', 'React'],
        ethicalNote: 'Solutions must ensure factual accuracy and cite sources. Any generated content must be traceable to official documents.',
        icon: 'smart_toy',
        color: 'blue',
        difficulty: 'Medium',
        featured: false
    },
    {
        id: 'AI-CV-03',
        title: 'Computer Vision for Safety',
        shortDescription: 'Real-time anomaly detection in public spaces using CCTV feeds while preserving individual privacy.',
        problemStatement: 'Public safety monitoring requires quick detection of accidents, hazards, or unusual activities. Build a computer vision system that can analyze CCTV feeds in real-time to detect anomalies and alert authorities, while implementing privacy-preserving techniques like face blurring.',
        datasets: [
            { name: 'Simulated CCTV Footage', icon: 'videocam' },
            { name: 'Anomaly Labels Dataset', icon: 'label' },
            { name: 'Traffic Patterns (Time-series)', icon: 'timeline' }
        ],
        stack: ['OpenCV', 'YOLO v8', 'TensorFlow', 'Redis'],
        ethicalNote: 'All face detection must implement automatic blurring. No personally identifiable information should be stored or transmitted.',
        icon: 'visibility',
        color: 'emerald',
        difficulty: 'Hard',
        featured: false
    }
];

function Day2() {
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
        <div className="relative min-h-screen bg-[#0a0f14]">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCcA-TY3dz1CLiBC2owPSPK7jMCcj-GU_jHJBtSe_QUbqnLEKu2qU2kHduGLoWxNv7Vr9lGI2YH22B4daeZNSPB4tNqmmIbBYukk2GG8DIkGXFOaYuL272xKF-tedYacK1WcAvVp31vcGWDKSH1ieFEUdliX1k_kWlz-EnzGLvCa53DuDpWKnK3qJUYiUJ5GG6HU80q1IoA3NV2177-y7UnAfiL0q2ml2LdTV6TOxo4rGThiFHXG6zTITEzvgmE-IrUiKK41XeP8Q')"
                }}></div>
                <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
            </div>

            {/* Navbar */}
            <nav className="sticky top-0 z-50 w-full px-6 py-4 bg-[rgba(10,15,20,0.85)] backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="flex items-center justify-center size-10 rounded-lg bg-gradient-to-br from-fuchsia-500 to-blue-600 shadow-lg shadow-fuchsia-500/20">
                            <span className="material-symbols-outlined text-white" style={{ fontSize: '24px' }}>bolt</span>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold tracking-tight leading-none">Impact<span className="text-fuchsia-500">Hack</span></h1>
                            <span className="text-xs text-gray-400">Global Series</span>
                        </div>
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/day1" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Day 1: LSG</Link>
                        <Link to="/day2" className="text-fuchsia-500 font-medium text-sm border-b-2 border-fuchsia-500 pb-0.5">Day 2: AI</Link>
                        <Link to="/" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Home</Link>
                    </div>
                    <button className="bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:from-fuchsia-500 hover:to-blue-500 text-white font-bold py-2 px-5 rounded-lg transition-all text-sm shadow-[0_0_20px_rgba(217,70,239,0.3)]">
                        Register Now
                    </button>
                </div>
            </nav>

            {/* Main Content */}
            <main className="relative z-10 flex flex-col items-center justify-start px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="w-full max-w-6xl flex flex-col gap-12">
                    {/* Header */}
                    <div className="flex flex-col items-center text-center gap-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 text-xs font-bold uppercase tracking-wider">
                            <span className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse"></span>
                            Live Challenge
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                            AI & Data <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-fuchsia-300 to-fuchsia-500">Innovation Track</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl font-light leading-relaxed">
                            Day 2 focuses on leveraging Artificial Intelligence and Data Science to solve complex local challenges. Build intelligent systems that make a real impact.
                        </p>
                    </div>

                    {/* Challenge Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-4">
                        {challenges.map((challenge) => (
                            <ChallengeCard
                                key={challenge.id}
                                challenge={challenge}
                                theme="ai"
                                onClick={() => openModal(challenge)}
                            />
                        ))}
                    </div>

                    {/* Footer Status */}
                    <div className="w-full flex justify-between items-center border-t border-white/5 pt-8 mt-8 text-xs text-gray-500 font-mono">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span>SYSTEM ONLINE</span>
                        </div>
                        <div className="flex gap-6">
                            <span>NODES: 1,240 ACTIVE</span>
                            <span>LATENCY: 12ms</span>
                        </div>
                    </div>
                </div>
            </main>

            {/* Modal */}
            <ChallengeModal
                isOpen={isModalOpen}
                onClose={closeModal}
                challenge={selectedChallenge}
                theme="ai"
            />
        </div>
    );
}

export default Day2;
