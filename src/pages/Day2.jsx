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

            {/* Navbar */}
            <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                <nav className="pointer-events-auto flex items-center p-1.5 pl-6 pr-1.5 gap-8 max-w-4xl w-[90%] md:w-full justify-between rounded-full bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                    <Link to="/" className="flex items-center gap-3 shrink-0">
                        <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10">
                            <span className="material-symbols-outlined text-primary text-sm">terminal</span>
                            <div className="absolute inset-0 bg-primary/20 blur-sm rounded-lg animate-pulse"></div>
                        </div>
                        <span className="text-sm font-bold tracking-tight text-white/90">IMPACT <span className="text-primary">HACK</span></span>
                    </Link>
                    <div className="hidden md:flex items-center gap-1 text-xs font-medium text-gray-400">
                        <Link to="/" className="flex items-center gap-2 px-3 py-2 hover:text-white transition-colors rounded-full hover:bg-white/5">
                            <span className="material-symbols-outlined text-[16px]">home</span>
                            Overview
                        </Link>
                        <Link to="/day1" className="flex items-center gap-2 px-3 py-2 hover:text-white transition-colors rounded-full hover:bg-white/5">
                            <span className="material-symbols-outlined text-[16px]">eco</span>
                            Day 1
                        </Link>
                        <Link to="/day2" className="flex items-center gap-2 px-3 py-2 text-white bg-white/5 rounded-full border border-white/5 shadow-[0_0_10px_rgba(255,0,255,0.15)] transition-all">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
                            </span>
                            <span className="material-symbols-outlined text-[16px] text-fuchsia-500">psychology</span>
                            Day 2
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="hidden md:flex group relative items-center gap-2 bg-gradient-to-r from-primary to-cyan-500 hover:from-cyan-400 hover:to-primary text-black text-xs font-bold py-2.5 px-5 rounded-full transition-all shadow-[0_0_20px_rgba(0,210,230,0.3)] hover:shadow-[0_0_25px_rgba(0,210,230,0.5)] overflow-hidden">
                            <span className="relative z-10 flex items-center gap-1">
                                Register Now
                                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                            </span>
                        </button>
                    </div>
                </nav>
            </div>

            {/* Hero Section */}
            <main className="relative z-10 flex-grow flex flex-col items-center justify-center pt-32 pb-16 px-6">
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

            {/* Deliverables Section */}
            <section className="py-20 px-6 bg-black/20 relative">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-display font-bold mb-4">System Deliverables</h2>
                        <p className="text-gray-400 max-w-lg mx-auto">Your submission will be evaluated based on the integrity of the code, the viability of the model, and the user experience.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-[rgba(19,19,22,0.6)] backdrop-blur-xl border border-white/[0.08]">
                                <span className="material-symbols-outlined text-fuchsia-500 mt-1">code_blocks</span>
                                <div>
                                    <h4 className="font-bold text-white">Functional Prototype</h4>
                                    <p className="text-sm text-gray-400 mt-1">A working MVP deployed on a local server or cloud instance. Static mockups will not be accepted.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-[rgba(19,19,22,0.6)] backdrop-blur-xl border border-white/[0.08]">
                                <span className="material-symbols-outlined text-fuchsia-500 mt-1">dataset</span>
                                <div>
                                    <h4 className="font-bold text-white">Data Pipeline Documentation</h4>
                                    <p className="text-sm text-gray-400 mt-1">Clear documentation of data sources, cleaning methods, and model training parameters.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-[rgba(19,19,22,0.6)] backdrop-blur-xl border border-white/[0.08]">
                                <span className="material-symbols-outlined text-fuchsia-500 mt-1">verified_user</span>
                                <div>
                                    <h4 className="font-bold text-white">Privacy Impact Assessment</h4>
                                    <p className="text-sm text-gray-400 mt-1">A brief report outlining potential privacy risks and mitigation strategies used.</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 rounded-xl bg-[rgba(19,19,22,0.6)] backdrop-blur-xl border border-white/[0.08] flex flex-col justify-center relative">
                            <h3 className="text-lg font-bold mb-6 text-center border-b border-white/10 pb-4">Scoring Algorithm</h3>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-white">Technical Complexity</span>
                                        <span className="text-primary font-mono">40%</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-primary to-cyan-600 w-[40%] shadow-[0_0_10px_rgba(0,210,230,0.5)]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-white">Innovation & Impact</span>
                                        <span className="text-fuchsia-500 font-mono">35%</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-fuchsia-500 to-purple-600 w-[35%] shadow-[0_0_10px_rgba(255,0,255,0.5)]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-white">UI/UX & Accessibility</span>
                                        <span className="text-yellow-400 font-mono">25%</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 w-[25%]"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/10 text-center">
                                <p className="text-xs text-gray-500 font-mono">JUDGING PANEL: KERALA AI MISSION LEADERSHIP</p>
                            </div>
                        </div>
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
                        <button className="bg-primary hover:bg-cyan-300 text-background-dark text-lg font-bold py-4 px-10 rounded-xl transition-all shadow-[0_0_20px_rgba(0,210,230,0.3)] hover:shadow-[0_0_30px_rgba(0,210,230,0.6)]">
                            Register for Day 2
                        </button>
                        <button className="bg-transparent border border-white/20 hover:border-fuchsia-500 hover:text-fuchsia-500 text-white text-lg font-bold py-4 px-10 rounded-xl transition-all">
                            Join Discord Server
                        </button>
                    </div>
                    <p className="mt-6 text-xs text-gray-500 font-mono">REGISTRATION CLOSES IN: 04D : 12H : 45M</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-black/40 py-12 px-6 relative z-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xl font-bold mb-4">Impact Hackathon Series</h3>
                        <p className="text-gray-400 max-w-md text-sm mb-6">
                            Empowering local innovators to solve global challenges through technology.
                            A collaborative initiative for the future of Kottarakkara.
                        </p>
                        <div className="flex gap-4">
                            <a className="text-gray-400 hover:text-primary transition" href="#"><span className="material-symbols-outlined">public</span></a>
                            <a className="text-gray-400 hover:text-primary transition" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
                            <a className="text-gray-400 hover:text-primary transition" href="#"><span className="material-symbols-outlined">rss_feed</span></a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Events</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link className="hover:text-primary transition" to="/day1">Day 1: Green Tech</Link></li>
                            <li><Link className="text-fuchsia-500 font-medium" to="/day2">Day 2: AI & Data</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><a className="hover:text-primary transition" href="#">Kerala AI Mission</a></li>
                            <li><a className="hover:text-primary transition" href="#">Work Near Home</a></li>
                            <li><a className="hover:text-primary transition" href="#">API Documentation</a></li>
                            <li><a className="hover:text-primary transition" href="#">Code of Conduct</a></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-600 font-mono">
                    © 2024 Impact Hackathon Series. All systems nominal.
                </div>
            </footer>

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
