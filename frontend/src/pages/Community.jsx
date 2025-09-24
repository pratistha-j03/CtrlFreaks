import React, { useState } from "react";
import { ArrowUp, CheckCircle2, MapPin, Plus, Trophy, Calendar, FileText, Users, Image as ImageIcon, X, Menu } from "lucide-react";

// --- Mock Data ---
const mockReports = [
    {
        id: 1, user: { name: 'Anjali Sharma', avatar: 'https://placehold.co/100x100/FFC0CB/000000?text=AS' },
        timestamp: '2 hours ago', image: 're.jpg',
        location: 'Gorakhpur', upvotes: 12, confirmations: 5, status: 'Verified'
    },
    {
        id: 2, user: { name: 'Vikram Singh', avatar: 'https://placehold.co/100x100/A7F3D0/000000?text=VS' },
        timestamp: '8 hours ago', image: 'co.jpg',
        location: 'Gorakhpur', upvotes: 5, confirmations: 1, status: 'Pending'
    },
    {
        id: 3, user: { name: 'Priya Patel', avatar: 'https://placehold.co/100x100/E9D5FF/000000?text=PP' },
        timestamp: '1 day ago', image: 'ca.jpeg',
        location: 'Gorakhpur', upvotes: 35, confirmations: 15, status: 'Resolved'
    },
    {
        id: 4, user: { name: 'Ravi Kumar', avatar: 'https://placehold.co/100x100/BFDBFE/000000?text=RK' },
        timestamp: '2 days ago', image: 'ua.jpg',
        location: 'Gorakhpur', upvotes: 21, confirmations: 8, status: 'Verified'
    },
];
const myReports = [
    { id: 4, image: 'https://placehold.co/600x400/FFFBEB/B45309?text=Fallen+Tree+Debris', location: 'MMMUT Rd', status: 'Pending', timestamp: '3 hours ago' },
    { id: 5, image: 'https://placehold.co/600x400/EFF6FF/1D4ED8?text=Illegal+Dumping', location: 'AIIMS Gkp', status: 'Verified', timestamp: '2 days ago' },
];
const events = [
    { title: 'Community Clean-Up Drive', date: 'Sept 28, 2025', location: 'Taramandal Park', description: 'Join us for a morning of cleaning and greening our beloved park.'},
    { title: 'Waste Segregation Workshop', date: 'Oct 5, 2025', location: 'Civil Lines Community Hall', description: 'Learn the best practices for waste segregation and composting at home.'},
];
const leaderboardData = [
    { name: 'Priya Patel', points: 1250, avatar: 'https://placehold.co/100x100/E9D5FF/000000?text=PP' },
    { name: 'Anjali Sharma', points: 980, avatar: 'https://placehold.co/100x100/FFC0CB/000000?text=AS' },
    { name: 'Rajesh Kumar', points: 760, avatar: 'https://placehold.co/100x100/BFDBFE/000000?text=RK' },
];

const statusStyles = {
    Verified: 'bg-blue-100 text-blue-800',
    Pending: 'bg-yellow-100 text-yellow-800',
    Resolved: 'bg-green-100 text-green-800',
};

// --- Reusable Navbar Component ---
const Navbar = ({ navLinks }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-[#0f705d]">SwacchConnect</span>
            </a>
            <nav className="hidden md:flex space-x-8 items-center">
                {navLinks.map((link) => (
                    <a key={link.label} href={link.href} className="text-gray-600 hover:text-[#0f705d] transition-colors duration-300">{link.label}</a>
                ))}
            </nav>
            <div className="hidden md:flex items-center space-x-2">
                <button className="text-gray-600 hover:text-[#0f705d] transition-colors duration-300">Login</button>
                <button className="bg-[#0f705d] text-white px-4 py-2 rounded-full hover:bg-[#0c5a4a] transition-colors duration-300 shadow-lg shadow-[#0f705d]/20">Sign Up</button>
            </div>
            <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>
             {isMenuOpen && (
              <div className="md:hidden absolute top-full left-0 w-full bg-white py-4 shadow-lg">
                <nav className="flex flex-col items-center space-y-4">
                  {navLinks.map((link) => ( <a key={link.label} href={link.href} className="text-gray-600 hover:text-[#0f705d] transition-colors duration-300" onClick={() => setIsMenuOpen(false)}>{link.label}</a>))}
                  <div className="flex flex-col space-y-2 w-full px-6 pt-4">
                     <button className="w-full text-center border border-gray-300 text-gray-600 py-2 rounded-full hover:bg-gray-100 transition-colors duration-300">Login</button>
                     <button className="w-full text-center bg-[#0f705d] text-white py-2 rounded-full hover:bg-[#0c5a4a] transition-colors duration-300">Sign Up</button>
                  </div>
                </nav>
              </div>
            )}
        </div>
    );
};

// --- Main Community Page Component ---
const CommunityPage = () => {
    const [activeTab, setActiveTab] = useState('reports');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const navLinks = [
        { href: "/#features", label: "Features" },
        { href: "#", label: "Leaderboard" },
        { href: "/community", label: "Community" },
        { href: "#", label: "Training" },
        { href: '/trackmywaste', label: "Track My Waste" },
        { href: '/worker', label: "Worker Portal" }
    ];

    const tabs = [
        { id: 'reports', label: 'Community Reports', icon: FileText },
        { id: 'my-reports', label: 'My Reports', icon: Users },
        { id: 'events', label: 'Events', icon: Calendar },
        { id: 'champions', label: 'Green Champions', icon: Trophy },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'reports': return <ReportsFeed reports={mockReports} />;
            case 'my-reports': return <MyReports reports={myReports} />;
            case 'events': return <EventsFeed events={events} />;
            case 'champions': return <Leaderboard leaders={leaderboardData} />;
            default: return null;
        }
    };

    return (
        <div className="bg-white min-h-screen font-sans">
            <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
                <Navbar navLinks={navLinks} />
            </header>
            
            <div className="container mx-auto p-4 sm:p-8">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Community </h1>
                    <p className="text-gray-500 mt-1">Together for a cleaner community!</p>
                </div>

                <div className="mb-8">
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-2 flex flex-col sm:flex-row gap-2">
                        {tabs.map(tab => (
                            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex-1 flex items-center justify-center gap-3 p-3 rounded-lg text-left transition-all duration-300 ${activeTab === tab.id ? 'bg-[#0f705d] text-white shadow' : 'hover:bg-gray-200 text-gray-700'}`}>
                                <tab.icon className="h-6 w-6"/>
                                <span className="font-semibold">{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
                
                <main className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                    {renderContent()}
                </main>
            </div>
            <ReportModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <button onClick={() => setIsModalOpen(true)} className="fixed bottom-8 right-8 bg-[#0f705d] text-white p-4 rounded-full shadow-lg hover:bg-[#0c5a4a] transition-transform transform hover:scale-110">
                <Plus className="h-8 w-8"/>
            </button>
        </div>
    );
};

// --- Sub-components ---
const ReportsFeed = ({ reports }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {reports.map(report => (
            <div key={report.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden transition-shadow hover:shadow-xl flex flex-col">
                <img src={report.image} alt="Waste report" className="w-full h-56 object-cover"/>
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4">
                            <img src={report.user.avatar} alt={report.user.name} className="w-12 h-12 rounded-full"/>
                            <div>
                                <p className="font-bold text-gray-800">{report.user.name}</p>
                                <p className="text-sm text-gray-500">{report.timestamp}</p>
                            </div>
                        </div>
                        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusStyles[report.status]}`}>{report.status}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 my-4 flex-grow"><MapPin className="h-5 w-5 mr-2 text-gray-400"/><span>{report.location}</span></div>
                    <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-6">
                            <button className="flex items-center gap-2 text-gray-600 hover:text-[#0f705d] transition-colors"><ArrowUp className="h-5 w-5"/><span className="font-semibold">{report.upvotes}</span></button>
                            <button className="flex items-center gap-2 text-gray-600 hover:text-[#0f705d] transition-colors"><CheckCircle2 className="h-5 w-5"/><span className="font-semibold">{report.confirmations}</span></button>
                        </div>
                        {report.status !== 'Resolved' && (<button className="text-sm font-semibold text-[#0f705d] hover:underline">View Details</button>)}
                    </div>
                </div>
            </div>
        ))}
    </div>
);

const MyReports = ({ reports }) => (
    <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Track Your Reports</h2>
        <div className="space-y-4">
            {reports.map(report => (
                <div key={report.id} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
                     <div className="flex items-center gap-4">
                        <img src={report.image} alt="Waste report" className="w-16 h-16 rounded-lg object-cover"/>
                        <div>
                            <p className="font-bold text-gray-700">{report.location}</p>
                            <p className="text-sm text-gray-500">{report.timestamp}</p>
                        </div>
                     </div>
                     <span className={`px-3 py-1 text-xs font-semibold rounded-full ${statusStyles[report.status]}`}>{report.status}</span>
                </div>
            ))}
        </div>
    </div>
);

const EventsFeed = ({ events }) => (
     <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
        <div className="space-y-6">
            {events.map(event => (
                <div key={event.title} className="p-4 bg-white border border-gray-200 rounded-lg flex items-start gap-4">
                    <div className="bg-[#0f705d]/10 text-[#0f705d] p-3 rounded-lg"><Calendar className="h-6 w-6"/></div>
                    <div>
                        <h3 className="font-bold text-lg text-gray-800">{event.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">{event.date} at {event.location}</p>
                        <p className="text-sm text-gray-600">{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const Leaderboard = ({ leaders }) => (
    <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Green Champions</h2>
        <ul className="space-y-4">
            {leaders.map((user, index) => (
                <li key={user.name} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg">
                    <div className="flex items-center gap-4">
                        <span className={`font-bold text-lg w-8 text-center ${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-gray-400' : 'text-yellow-600'}`}>#{index+1}</span>
                        <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full"/>
                        <div>
                            <p className="font-bold text-gray-800">{user.name}</p>
                            <p className="text-sm text-gray-500">{user.points.toLocaleString()} Points</p>
                        </div>
                    </div>
                    {index === 0 && <Trophy className="h-7 w-7 text-yellow-500"/>}
                </li>
            ))}
        </ul>
    </div>
);

const ReportModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full m-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-800">Report a Waste Pile</h2>
                    <button onClick={onClose}><X className="h-6 w-6 text-gray-500 hover:text-gray-800"/></button>
                </div>
                <div className="space-y-4">
                    <div className="h-48 bg-gray-100 rounded-lg flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                        <ImageIcon className="h-12 w-12 text-gray-400 mb-2"/>
                        <p className="text-gray-500">Click to upload a photo</p>
                    </div>
                    <textarea className="w-full p-2 border border-gray-300 rounded-lg" placeholder="Add a description (optional)"></textarea>
                    <div className="flex items-center gap-2 p-3 bg-gray-100 rounded-lg">
                        <MapPin className="h-5 w-5 text-gray-500"/>
                        <p className="text-sm text-gray-600">Geotag will be added automatically.</p>
                    </div>
                    <button className="w-full bg-[#0f705d] text-white py-3 rounded-lg font-semibold hover:bg-[#0c5a4a]">Submit Report</button>
                </div>
            </div>
        </div>
    );
};

export default CommunityPage;

