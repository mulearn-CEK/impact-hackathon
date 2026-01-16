import Header from '../components/Header';
import Footer from '../components/Footer';

const teamMembers = [
    {
        name: 'Sarah Jenkins',
        role: 'Lead Organizer',
        image: 'https://ui-avatars.com/api/?name=Sarah+Jenkins&background=00d2e6&color=fff&size=256',
        links: { twitter: '#', linkedin: '#' }
    },
    {
        name: 'David Chen',
        role: 'Tech Lead',
        image: 'https://ui-avatars.com/api/?name=David+Chen&background=d946ef&color=fff&size=256',
        links: { github: '#', linkedin: '#' }
    },
    {
        name: 'Amara Ndiaye',
        role: 'Community Manager',
        image: 'https://ui-avatars.com/api/?name=Amara+Ndiaye&background=10b981&color=fff&size=256',
        links: { twitter: '#', linkedin: '#' }
    },
    {
        name: 'Raj Patel',
        role: 'Logistics Head',
        image: 'https://ui-avatars.com/api/?name=Raj+Patel&background=eab308&color=fff&size=256',
        links: { linkedin: '#' }
    },
    {
        name: 'Elena Rodriguez',
        role: 'Design Lead',
        image: 'https://ui-avatars.com/api/?name=Elena+Rodriguez&background=ef4444&color=fff&size=256',
        links: { twitter: '#', dribbble: '#' }
    },
    {
        name: 'Michael Chang',
        role: 'Sponsorships',
        image: 'https://ui-avatars.com/api/?name=Michael+Chang&background=6366f1&color=fff&size=256',
        links: { linkedin: '#' }
    }
];

function Team() {
    return (
        <div className="bg-background-dark min-h-screen flex flex-col font-sans text-white">
            <Header />

            <main className="flex-grow pt-32 pb-16 px-6 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mx-auto mb-6">
                            <span className="material-symbols-outlined text-gray-300 text-sm">groups</span>
                            <span className="text-xs uppercase tracking-widest text-gray-400">The Organizers</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-white">Team</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            The passionate individuals working behind the scenes to make Impact Hackathon a reality.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="group relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition duration-500 blur-sm"></div>
                                <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-center text-center hover:bg-white/[0.07] transition-colors">
                                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-white/10 group-hover:border-primary/50 transition-colors">
                                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-xl font-bold font-display text-white">{member.name}</h3>
                                    <span className="text-primary text-sm font-medium tracking-wide uppercase mt-1 mb-4">{member.role}</span>

                                    <div className="flex gap-4 mt-auto">
                                        {Object.entries(member.links).map(([platform, url]) => (
                                            <a key={platform} href={url} className="text-gray-400 hover:text-white transition-colors">
                                                <span className="capitalize text-xs font-bold px-2 py-1 rounded bg-white/5 hover:bg-white/20 transition-colors">{platform}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Team;
