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
                            College of Engineering<br />Kottarakkara
                        </h3>
                        <p className="text-gray-400 max-w-md mb-8">
                            The hub of innovation in the district. Join us at the new CS Block seminar hall for the event.
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
                    <div className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap justify-between items-center gap-4">
                        <div className="flex gap-4">
                            <a className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-background-dark transition-all" href="#">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path>
                                </svg>
                            </a>
                            <a className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-background-dark transition-all" href="#">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fillRule="evenodd"></path>
                                </svg>
                            </a>
                        </div>
                        <span className="text-xs text-gray-500">© 2024 MuLearn CEK</span>
                    </div>
                </div>

                {/* Map Side */}
                <div className="relative w-full h-full min-h-[400px] order-1 lg:order-2 bg-gray-900 overflow-hidden group">
                    {/* Placeholder Map Image with Dark Mode Styling */}
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                        style={{
                            backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFDrCkOiWkYo2be6HtvG5JcXtvy5leEKyp5pNcfOwzkZub4WKAi201nJJshPN0Jbtbx89Ve3NiTaWNaTNwmOstjE-EMg7XxNEz32ma4YD0y10YSD2HjtjKCQefCzOY_pCz7p9KBeVTgX5Fe0T0J9If-oDTMd4UdIlAxSkQg5jJyE7cEnPFrzQePMESq1Bjo82PilvTTdaDrhmSG8vPMV-mA6U0_GBDUExH3Y9UaOv11P0gOsQreDSalgYemCwTxVmUnTphhLQfMQ')",
                            filter: "grayscale(100%) invert(1) contrast(1.2) brightness(0.6)"
                        }}
                    ></div>

                    {/* Decorative Map Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
                        <div className="relative">
                            <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute top-0 left-0"></div>
                            <div className="w-4 h-4 bg-primary rounded-full relative z-10 border-2 border-white"></div>
                        </div>
                        <div className="bg-black/80 text-white text-xs px-3 py-1 rounded backdrop-blur-sm border border-gray-700">
                            CEK Campus
                        </div>
                    </div>

                    {/* Gradient Overlay for smooth transition */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0f1113]/20 to-[#0f1113] pointer-events-none lg:block hidden"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f1113] via-transparent to-transparent pointer-events-none lg:hidden block"></div>
                </div>
            </div>
        </section>
    );
}

export default Venue;
