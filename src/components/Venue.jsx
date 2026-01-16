function Venue() {
    return (
        <section className="w-full border-t border-gray-800 bg-[#0f1113] relative" id="venue">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]">
                {/* Info Side */}
                <div className="p-10 md:p-16 flex flex-col justify-between order-2 lg:order-1">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <span className="material-symbols-outlined text-primary">location_on</span>
                            <span className="text-white font-bold tracking-wide uppercase">Venue Location</span>
                        </div>
                        <h3 className="text-3xl font-bold font-display text-white mb-4">
                            Commune - Work Near Home<br />Kottarakkara
                        </h3>
                        <p className="text-gray-400 max-w-md mb-8">
                            The hub of innovation in the district. Join us at the Commune co-working space for the event.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4 p-4 rounded-lg bg-[#1a1d21] border border-gray-800">
                                <div className="bg-blue-500/20 p-2 rounded-md text-blue-400">
                                    <span className="material-symbols-outlined">work</span>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">Work Near Home</h4>
                                    <p className="text-xs text-gray-400">Official Initiative Partner</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Side */}
                <div className="relative w-full h-full min-h-[400px] order-1 lg:order-2 bg-gray-900 overflow-hidden group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.626824962661!2d76.77098497589576!3d8.914220090280963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e1005697677d%3A0x6336e4f043806c9a!2sCommune%20-%20Work%20Near%20Home!5e0!3m2!1sen!2sin!4v1705469458235!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0 w-full h-full"
                    ></iframe>

                    {/* Gradient Overlay for seamless blend (optional, reduced opacity) */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0f1113]/10 to-[#0f1113] pointer-events-none lg:block hidden"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1113] via-transparent to-transparent pointer-events-none lg:hidden block"></div>
                </div>
            </div>
        </section>
    );
}

export default Venue;
