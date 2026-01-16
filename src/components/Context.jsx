function Context() {
    return (
        <section className="w-full bg-background-dark py-20 px-4 md:px-8 border-t border-border-subtle relative">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 relative">
                    <div className="aspect-video rounded-xl overflow-hidden bg-background-card relative border border-border-subtle">
                        <img
                            alt="Collaboration workspace"
                            className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzX7ALozhoI2kxeCg8zzC3ZN5ftfClOvU-otLPVP7Rc-wRmFv4E34tC1foiWU0-0OFW5Txqxpu94fTPu6mXS7rGTuF59y9_uCCRpE36fBYYaDMgU8ZX85ZtxeftxHBY-ljtITrjsBD_mYyCvU5R7LlBz1dJJT6MWKkrH_24aGNkFOMF0ZSN87B3RY85vuv7X8wx5RKn2js7xryFDx47mvecA-57__Vibu7chPuJGXgz0jFwtsN_pGVzoCTggkzRZC6kcDiGiawzg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
                        {/* Decorative Graphic Overlay */}
                        <div className="absolute bottom-4 left-4 p-3 border border-white/20 bg-background-dark/60 backdrop-blur rounded text-white text-xs font-mono">
                            <div>LAT: 9.000 N</div>
                            <div>LONG: 76.000 E</div>
                        </div>
                    </div>
                </div>
                <div className="order-1 md:order-2">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                        Building the Future of <br />
                        <span className="text-primary">Local Connectivity</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        The "Work Near Home" initiative fosters local innovation by creating dedicated workspaces that reduce commutes and spark community collaboration. Join us to build digital solutions that empower the future of Kottarakkara, bridging the gap between civic needs and technological prowess.
                    </p>
                    <div className="flex gap-8 border-t border-border-subtle pt-6">
                        <div>
                            <div className="text-3xl font-display font-bold text-white">24h</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Hacking</div>
                        </div>
                        <div>
                            <div className="text-3xl font-display font-bold text-white">₹50k+</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Prizes</div>
                        </div>
                        <div>
                            <div className="text-3xl font-display font-bold text-white">200+</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">Hackers</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Context;
