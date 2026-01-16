import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function HelpCenter() {
    return (
        <div className="bg-background-dark min-h-screen flex flex-col font-sans text-white">
            <Header />

            <main className="flex-grow pt-32 pb-16 px-6 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-[100px]"></div>
                </div>

                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mx-auto mb-6">
                            <span className="material-symbols-outlined text-gray-300 text-sm">support_agent</span>
                            <span className="text-xs uppercase tracking-widest text-gray-400">Support & Contact</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                            How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">help?</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Got questions about the hackathon? We're here to assist you every step of the way.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* General Inquiries */}
                        <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-primary/30 transition-colors group">
                            <span className="material-symbols-outlined text-4xl text-primary mb-4 group-hover:scale-110 transition-transform">mail</span>
                            <h3 className="text-xl font-bold font-display text-white mb-2">General Inquiries</h3>
                            <p className="text-gray-400 mb-6 text-sm">For registration issues, schedule questions, and general event information.</p>
                            <a href="mailto:hello@impacthackathon.com" className="text-primary font-medium hover:text-white transition-colors flex items-center gap-2">
                                hello@impacthackathon.com
                                <span className="material-symbols-outlined text-sm">arrow_outward</span>
                            </a>
                        </div>

                        {/* Technical Support */}
                        <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-fuchsia-500/30 transition-colors group">
                            <span className="material-symbols-outlined text-4xl text-fuchsia-500 mb-4 group-hover:scale-110 transition-transform">terminal</span>
                            <h3 className="text-xl font-bold font-display text-white mb-2">Technical Support</h3>
                            <p className="text-gray-400 mb-6 text-sm">Facing issues with the submission portal or API keys? Reach out to our dev team.</p>
                            <a href="mailto:support@impacthackathon.com" className="text-fuchsia-400 font-medium hover:text-white transition-colors flex items-center gap-2">
                                support@impacthackathon.com
                                <span className="material-symbols-outlined text-sm">arrow_outward</span>
                            </a>
                        </div>

                        {/* Sponsorships */}
                        <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-emerald-500/30 transition-colors group">
                            <span className="material-symbols-outlined text-4xl text-emerald-500 mb-4 group-hover:scale-110 transition-transform">handshake</span>
                            <h3 className="text-xl font-bold font-display text-white mb-2">Sponsorships</h3>
                            <p className="text-gray-400 mb-6 text-sm">Interested in partnering with us? Let's discuss collaboration opportunities.</p>
                            <a href="mailto:partners@impacthackathon.com" className="text-emerald-400 font-medium hover:text-white transition-colors flex items-center gap-2">
                                partners@impacthackathon.com
                                <span className="material-symbols-outlined text-sm">arrow_outward</span>
                            </a>
                        </div>

                        {/* Venue */}
                        <div className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-yellow-500/30 transition-colors group">
                            <span className="material-symbols-outlined text-4xl text-yellow-500 mb-4 group-hover:scale-110 transition-transform">location_on</span>
                            <h3 className="text-xl font-bold font-display text-white mb-2">Visit Us</h3>
                            <p className="text-gray-400 mb-6 text-sm">Commune - Work Near Home<br />Kottarakkara, Kerala</p>
                            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 font-medium hover:text-white transition-colors flex items-center gap-2">
                                Get Directions
                                <span className="material-symbols-outlined text-sm">map</span>
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default HelpCenter;
