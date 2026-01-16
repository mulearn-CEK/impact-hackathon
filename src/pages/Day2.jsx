import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
        <div className="relative min-h-screen">
            {/* Background Effects */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}></div>
                <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[80px] animate-pulse"></div>
                <div className="absolute bottom-[-100px] left-[-200px] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[80px]"></div>
            </div>

            {/* Shared Header */}
            <Header />

            {/* Hero Section */}
            <main className="relative z-10 flex-grow flex flex-col items-center justify-center pt-48 pb-16 px-6">
                <div className="max-w-5xl w-full text-center space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mx-auto mb-4">
                        <span className="material-symbols-outlined text-fuchsia-500 text-sm">hub</span>
                        <span className="text-xs uppercase tracking-widest text-gray-300">In Partnership with Kerala AI Mission</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">DAY 2:</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-fuchsia-500" style={{ filter: 'drop-shadow(0 0 10px rgba(255,0,255,0.3))' }}>
                            AI & DATA INNOVATION
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light">
                        Redefining local ecosystems through the lens of artificial intelligence.
                        Join the <span className="text-white font-medium">Work Near Home</span> initiative to build smarter, data-driven communities.
                    </p>

                    {/* Status Bar */}
                    <div className="w-full max-w-5xl mt-20 border-t border-white/10 pt-8 flex flex-wrap justify-center gap-8 text-gray-400 text-sm font-mono">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span>SYSTEM ONLINE</span>
                        </div>
                        <div>NODES: 1,240 ACTIVE</div>
                        <div>DATASTREAM: KERALA_OPEN_DATA_V2</div>
                        <div>LATENCY: 12ms</div>
                    </div>
                </div>
            </main>

            {/* Challenge Cards Section */}
            <section className="py-20 px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-end justify-between mb-12 border-b border-white/10 pb-4">
                        <div>
                            <h2 className="text-3xl font-display font-bold mb-2">The Challenge Matrix</h2>
                            <p className="text-gray-400">Identify, Analyze, Solve. Key focus areas for the hackathon.</p>
                        </div>
                        <span className="material-symbols-outlined text-4xl text-white/20">grid_view</span>
                    </div>

                    {/* Challenge Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {challenges.map((challenge) => (
                            <ChallengeCard
                                key={challenge.id}
                                challenge={challenge}
                                theme="ai"
                                onClick={() => openModal(challenge)}
                            />
                        ))}
                    </div>
                </div>
            </section>



            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden flex justify-center items-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="p-12 rounded-3xl max-w-4xl w-full mx-6 text-center border border-primary/20 relative z-10 bg-[rgba(19,19,22,0.6)] backdrop-blur-xl">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">Ready to Deploy?</h2>
                    <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Secure your spot for Day 2. Spaces are limited to ensuring high-quality mentorship and resource allocation.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to="/register" className="inline-block bg-primary hover:bg-cyan-300 text-background-dark text-lg font-bold py-4 px-10 rounded-xl transition-all shadow-[0_0_20px_rgba(0,210,230,0.3)] hover:shadow-[0_0_30px_rgba(0,210,230,0.6)]">
                            Register for Day 2
                        </Link>
                        <button className="bg-transparent border border-white/20 hover:border-fuchsia-500 hover:text-fuchsia-500 text-white text-lg font-bold py-4 px-10 rounded-xl transition-all">
                            Join Discord Server
                        </button>
                    </div>
                    <p className="mt-6 text-xs text-gray-500 font-mono">REGISTRATION CLOSES IN: 04D : 12H : 45M</p>
                </div>
            </section>

            {/* Footer */}
            <Footer />

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
