function Header() {
    return (
        <div className="fixed top-0 left-0 w-full z-50 px-4 py-4 md:px-8 flex justify-center">
            <header className="w-full max-w-6xl backdrop-blur-md bg-background-dark/80 border border-border-subtle rounded-xl flex items-center justify-between px-6 py-3 shadow-2xl">
                <div className="flex items-center gap-3">
                    <div className="size-8 bg-primary rounded flex items-center justify-center text-background-dark">
                        <span className="material-symbols-outlined text-xl font-bold">code_blocks</span>
                    </div>
                    <h2 className="text-white text-lg font-display font-bold leading-tight tracking-tight hidden sm:block">MuLearn CEK</h2>
                </div>
                <nav className="hidden md:flex items-center gap-8">
                    <a className="text-gray-300 hover:text-primary text-sm font-medium transition-colors" href="#hero">Home</a>
                    <a className="text-gray-300 hover:text-primary text-sm font-medium transition-colors" href="#themes">Themes</a>
                    <a className="text-gray-300 hover:text-primary text-sm font-medium transition-colors" href="#schedule">Schedule</a>
                </nav>
                <button className="bg-primary hover:bg-primary-dark text-background-dark text-sm font-bold h-9 px-5 rounded-lg transition-all transform hover:scale-105 neon-glow-primary">
                    Register Now
                </button>
            </header>
        </div>
    );
}

export default Header;
