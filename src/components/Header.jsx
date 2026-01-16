import { Link, useLocation } from 'react-router-dom';

function Header() {
    const location = useLocation();
    const isDay1 = location.pathname === '/day1';
    const isDay2 = location.pathname === '/day2';
    const isHome = location.pathname === '/';
    const isSchedule = location.pathname === '/schedule';

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
            <nav className="pointer-events-auto flex items-center p-1.5 pl-6 pr-1.5 gap-8 max-w-4xl w-[90%] md:w-full justify-between rounded-full bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-3 shrink-0">
                    <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-primary/20 border border-primary/30">
                        <span className="material-symbols-outlined text-primary text-sm">bolt</span>
                    </div>
                    <span className="text-sm font-bold tracking-tight text-white/90">IMPACT <span className="text-primary">HACK</span></span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-1 text-xs font-medium text-gray-400">
                    <Link
                        to="/"
                        className={`flex items-center gap-2 px-3 py-2 transition-colors rounded-full ${isHome
                            ? 'text-white bg-white/10 border border-white/10'
                            : 'hover:text-white hover:bg-white/5'
                            }`}
                    >
                        <span className="material-symbols-outlined text-[16px]">home</span>
                        Home
                    </Link>
                    <Link
                        to="/day1"
                        className={`flex items-center gap-2 px-3 py-2 transition-colors rounded-full ${isDay1
                            ? 'text-white bg-white/10 border border-teal-500/30'
                            : 'hover:text-white hover:bg-white/5'
                            }`}
                    >
                        {isDay1 && (
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                            </span>
                        )}
                        <span className={`material-symbols-outlined text-[16px] ${isDay1 ? 'text-teal-500' : ''}`}>eco</span>
                        Day 1
                    </Link>
                    <Link
                        to="/day2"
                        className={`flex items-center gap-2 px-3 py-2 transition-colors rounded-full ${isDay2
                            ? 'text-white bg-white/10 border border-fuchsia-500/30'
                            : 'hover:text-white hover:bg-white/5'
                            }`}
                    >
                        {isDay2 && (
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
                            </span>
                        )}
                        <span className={`material-symbols-outlined text-[16px] ${isDay2 ? 'text-fuchsia-500' : ''}`}>psychology</span>
                        Day 2
                    </Link>
                    <Link
                        to="/schedule"
                        className={`flex items-center gap-2 px-3 py-2 transition-colors rounded-full ${isSchedule
                            ? 'text-white bg-white/10 border border-primary/30'
                            : 'hover:text-white hover:bg-white/5'
                            }`}
                    >
                        {isSchedule && (
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                        )}
                        <span className={`material-symbols-outlined text-[16px] ${isSchedule ? 'text-primary' : ''}`}>schedule</span>
                        Schedule
                    </Link>
                </div>

                {/* Register Button */}
                <Link
                    to="/register"
                    className="hidden md:flex bg-primary hover:bg-primary-dark text-black text-xs font-bold py-2.5 px-5 rounded-full transition-all shadow-[0_0_20px_rgba(0,210,230,0.3)] overflow-hidden"
                >
                    Register Now
                </Link>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-white p-2">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </nav>
        </div>
    );
}

export default Header;
