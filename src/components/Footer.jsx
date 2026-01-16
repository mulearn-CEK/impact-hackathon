function Footer() {
    return (
        <footer className="w-full bg-background-dark py-12 px-4 border-t border-border-subtle">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-3">
                    <div className="size-8 bg-gray-800 rounded flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-xl">code_blocks</span>
                    </div>
                    <div>
                        <h3 className="text-white font-bold font-display">MuLearn CEK</h3>
                        <p className="text-gray-500 text-xs">Empowering Student Developers</p>
                    </div>
                </div>
                <div className="flex gap-6">
                    <a className="text-gray-400 hover:text-white text-sm transition-colors" href="#">Code of Conduct</a>
                    <a className="text-gray-400 hover:text-white text-sm transition-colors" href="#">Privacy</a>
                    <a className="text-gray-400 hover:text-white text-sm transition-colors" href="#">Contact Us</a>
                </div>
                <div className="text-gray-600 text-sm text-center md:text-right">
                    © 2024 MuLearn CEK. <br className="hidden md:block" /> All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
