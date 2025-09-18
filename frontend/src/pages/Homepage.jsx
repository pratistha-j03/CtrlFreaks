import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';

// --- SVG Icon Components ---
const MenuIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);
const XIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);
const QrCodeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="5" height="5" x="3" y="3" rx="1" />
    <rect width="5" height="5" x="16" y="3" rx="1" />
    <rect width="5" height="5" x="3" y="16" rx="1" />
    <path d="M21 16h-3a2 2 0 0 0-2 2v3" /><path d="M21 21v.01" /><path d="M12 7v3a2 2 0 0 1-2 2H7" /><path d="M3 12h.01" /><path d="M12 3h.01" /><path d="M12 16v.01" /><path d="M16 12h.01" /><path d="M21 12h.01" /><path d="M12 21h.01" />
  </svg>
);
const GiftIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 12v10H4V12" /><path d="M2 7h20v5H2z" /><path d="m12 12 4-10-8 0 4 10z" />
  </svg>
);
const TruckIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" /><path d="M14 9h4l4 4v4h-8v-4c0-1.1.9-2 2-2z" /><circle cx="7.5" cy="18.5" r="2.5" /><circle cx="17.5" cy="18.5" r="2.5" />
    </svg>
);
const UsersIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const ShieldIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
);
const CheckCircleIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);
const TrendingUpIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
);
const CameraIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);
const MapPinIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);


// --- Impact Dashboard Component ---
const ImpactDashboard = () => {
    const recycledWaste = 20875;
    const activeHouseholds = 5432;
    const co2Reduced = 125;

    return (
        <section id="impact" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Live Impact Dashboard</h2>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">See the real-time difference you're making by coming together.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                    <div className="lg:col-span-3 h-96 lg:h-full w-full rounded-2xl shadow-lg z-10">
                        <img 
                            src="gkp.png"
                            alt="Map of Gorakhpur showing impact areas"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                    <div className="lg:col-span-2 space-y-6">
                         <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                             <div className="flex items-center space-x-4">
                                 <div className="bg-[#0f705d]/10 text-[#0f705d] h-12 w-12 rounded-full flex items-center justify-center"><TrendingUpIcon className="h-6 w-6"/></div>
                                 <div>
                                     <p className="text-gray-500 text-sm">Total Waste Recycled (KG)</p>
                                     <p className="text-3xl font-bold text-gray-900">{recycledWaste.toLocaleString()}</p>
                                 </div>
                             </div>
                         </div>
                         <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                             <div className="flex items-center space-x-4">
                                 <div className="bg-[#0f705d]/10 text-[#0f705d] h-12 w-12 rounded-full flex items-center justify-center"><UsersIcon className="h-6 w-6"/></div>
                                 <div>
                                     <p className="text-gray-500 text-sm">Active Households</p>
                                     <p className="text-3xl font-bold text-gray-900">{activeHouseholds.toLocaleString()}</p>
                                 </div>
                             </div>
                         </div>
                         <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                             <div className="flex items-center space-x-4">
                                 <div className="bg-[#0f705d]/10 text-[#0f705d] h-12 w-12 rounded-full flex items-center justify-center"><ShieldIcon className="h-6 w-6"/></div>
                                 <div>
                                     <p className="text-gray-500 text-sm">CO₂ Reduction (Tonnes)</p>
                                     <p className="text-3xl font-bold text-gray-900">{co2Reduced.toLocaleString()}</p>
                                 </div>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- Instant Report Component ---
const InstantReport = () => {
    const [image, setImage] = useState(null);
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImage(URL.createObjectURL(file));
            setError('');
            setSuccess('');
        }
    };

    const handleReport = () => {
        if (!image) {
            setError('Please upload a photo of the waste pile first.');
            return;
        }
        setLoading(true);
        setError('');
        setSuccess('');

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ lat: latitude, lon: longitude });
                setLoading(false);
                setSuccess(`Report submitted successfully with your photo and location! Lat: ${latitude.toFixed(4)}, Lon: ${longitude.toFixed(4)}`);
            },
            (err) => {
                setLoading(false);
                setError('Could not get your location. Please enable location services and try again.');
                console.error(err);
            }
        );
    };

    return (
        <section id="report" className="py-20 bg-[#0f705d]">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">See Waste? Report Instantly.</h2>
                <p className="text-[#e7fbf7] max-w-2xl mx-auto mb-8">
                    Help us keep your city clean. Snap a photo of any garbage pile, and we'll geotag it for immediate action.
                </p>
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
                    {image && (
                        <div className="mb-4">
                            <img src={image} alt="Waste report preview" className="rounded-lg w-full h-48 object-cover" />
                        </div>
                    )}

                    <input type="file" accept="image/*" ref={fileInputRef} onChange={handleImageChange} className="hidden" />
                    
                    {!success && (
                        <div className="flex flex-col items-center space-y-4">
                             <button 
                                onClick={() => fileInputRef.current.click()}
                                className="w-full flex items-center justify-center space-x-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-full text-md font-semibold hover:bg-gray-200 transition-colors duration-300">
                                <CameraIcon className="h-5 w-5"/>
                                <span>{image ? 'Change Photo' : 'Upload Photo'}</span>
                             </button>

                             <button 
                                onClick={handleReport} 
                                disabled={loading || !image}
                                className="w-full flex items-center justify-center space-x-2 bg-gray-800 text-white px-6 py-4 rounded-full text-lg font-semibold hover:bg-gray-900 transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed">
                                 {loading ? (
                                    <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></div>
                                 ) : (
                                    <MapPinIcon className="h-6 w-6"/>
                                 )}
                                 <span>{loading ? 'Getting Location...' : 'Report with Geotag'}</span>
                             </button>
                        </div>
                    )}
                    
                    {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
                    {success && (
                        <div className="text-left">
                            <p className="text-[#0c5a4a] font-semibold mb-2">Thank you for your report!</p>
                            <p className="text-gray-600 text-sm">{success}</p>
                             <button 
                                onClick={() => {
                                    setImage(null);
                                    setSuccess('');
                                    setLocation(null);
                                }}
                                className="mt-4 w-full text-center bg-[#0f705d] text-white py-2 rounded-full hover:bg-[#0c5a4a] transition-colors duration-300">
                                 Submit Another Report
                             </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

// --- Main App Component ---
export default function Homepage() {
  
  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#", label: "Leaderboard" },
    { href: "/community", label: "Community" },
    { href: "#", label: "Training" },
    { href: '/trackmywaste', label: "Track My Waste"}
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <Navbar navLinks={navLinks} />
      </header>

      <main>
        <section className="py-16 md:py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                    <img 
                        src="ddd.png" 
                        alt="Community recycling waste" 
                        className="rounded-lg w-full h-auto"
                    />
                </div>
                <div className="text-center md:text-right">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">Connecting Citizens, Communities & Councils for <span className="text-[#0f705d]">better waste management</span></h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto md:ml-auto mb-8">Your waste, your responsibility, your power — join the movement for a greener and cleaner India.</p>
                    <div className="flex justify-center md:justify-end space-x-4">
                      <button className="bg-[#0f705d] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#0c5a4a] transition-transform duration-300 transform hover:scale-105 shadow-xl shadow-[#0f705d]/30">Register Your Household</button>
                      <button className="bg-white text-gray-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 border border-gray-300">Learn More</button>
                    </div>
                </div>
                
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Simple Steps to a Cleaner City</h2>
                    <p className="text-gray-600 mt-2">Joining the SwacchConnect initiative is easy.</p>
                </div>
                <div className="relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 border-t-2 border-dashed border-gray-300" style={{ transform: 'translateY(-50%)' }}></div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        <div className="text-center">
                            <div className="mx-auto bg-white border-4 border-[#0f705d] h-20 w-20 rounded-full flex items-center justify-center text-[#0f705d] text-3xl font-bold mb-4 shadow-lg">1</div>
                            <h3 className="font-bold text-lg mb-2">Train & Register</h3>
                            <p className="text-gray-600 text-sm">A family member completes a one-time training session on waste segregation rules.</p>
                            <button className="mt-4 bg-[#0f705d] text-white px-4 py-1 rounded-full text-sm font-semibold hover:bg-[#0c5a4a] transition-colors duration-300">Register Now</button>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto bg-white border-4 border-[#0f705d] h-20 w-20 rounded-full flex items-center justify-center text-[#0f705d] text-3xl font-bold mb-4 shadow-lg">2</div>
                            <h3 className="font-bold text-lg mb-2">Get Your QR Code</h3>
                            <p className="text-gray-600 text-sm">Receive a unique QR code for your household to stick on your bin or wall.</p>
                            <button className="mt-4 bg-[#0f705d] text-white px-4 py-1 rounded-full text-sm font-semibold hover:bg-[#0c5a4a] transition-colors duration-300">Get Your QR</button>
                        </div>
                        <div className="text-center"><div className="mx-auto bg-white border-4 border-[#0f705d] h-20 w-20 rounded-full flex items-center justify-center text-[#0f705d] text-3xl font-bold mb-4 shadow-lg">3</div><h3 className="font-bold text-lg mb-2">Scan & Segregate</h3><p className="text-gray-600 text-sm">Our collector scans your QR and verifies segregation during every pickup.</p></div>
                        <div className="text-center"><div className="mx-auto bg-white border-4 border-[#0f705d] h-20 w-20 rounded-full flex items-center justify-center text-[#0f705d] text-3xl font-bold mb-4 shadow-lg">4</div><h3 className="font-bold text-lg mb-2">Earn & Contribute</h3><p className="text-gray-600 text-sm">Earn rewards for correct segregation and help keep your community clean.</p></div>
                    </div>
                </div>
            </div>
        </section>

        <section id="features" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">A Smarter Approach to Waste Management</h2>
              <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Leveraging technology to create a cleaner, more accountable system for everyone.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="bg-[#0f705d]/10 text-[#0f705d] rounded-full h-12 w-12 flex items-center justify-center mb-4"><QrCodeIcon className="h-6 w-6" /></div>
                <h3 className="text-xl font-bold mb-2">Smart QR System</h3>
                <p className="text-gray-600">Unique QR codes for every household for easy tracking, segregation verification and seamless updates.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="bg-[#0f705d]/10 text-[#0f705d] rounded-full h-12 w-12 flex items-center justify-center mb-4"><GiftIcon className="h-6 w-6" /></div>
                <h3 className="text-xl font-bold mb-2">Citizen Rewards & Fines</h3>
                <p className="text-gray-600">Get rewarded with rebates and coupons for responsible waste segregation. Repeat violators face fines.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="bg-[#0f705d]/10 text-[#0f705d] rounded-full h-12 w-12 flex items-center justify-center mb-4"><TruckIcon className="h-6 w-6" /></div>
                <h3 className="text-xl font-bold mb-2">Real-Time Vehicle Tracking</h3>
                <p className="text-gray-600">Track waste collection vehicles live on a map. Never miss a pickup and plan your day better.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="bg-[#0f705d]/10 text-[#0f705d] rounded-full h-12 w-12 flex items-center justify-center mb-4"><UsersIcon className="h-6 w-6" /></div>
                <h3 className="text-xl font-bold mb-2">Community Reporting</h3>
                <p className="text-gray-600">Spot and report garbage dumps with geotags. Get community validation and earn rewards for your vigilance.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="bg-[#0f705d]/10 text-[#0f705d] rounded-full h-12 w-12 flex items-center justify-center mb-4"><ShieldIcon className="h-6 w-6" /></div>
                <h3 className="text-xl font-bold mb-2">Worker Safety & Training</h3>
                <p className="text-gray-600">Ensuring our sanitation heroes are registered, trained and equipped with safety kits for their well-being.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                <div className="bg-[#0f705d]/10 text-[#0f705d] rounded-full h-12 w-12 flex items-center justify-center mb-4"><CheckCircleIcon className="h-6 w-6" /></div>
                <h3 className="text-xl font-bold mb-2">AI-Powered Verification</h3>
                <p className="text-gray-600">AI verifies waste segregation at treatment plants and safety kit distribution, ensuring complete transparency.</p>
              </div>
            </div>
          </div>
        </section>
        
        <ImpactDashboard />

        <InstantReport />
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div><h3 className="text-xl font-bold mb-4">SwacchConnect</h3><p className="text-gray-400">Connecting communities for a cleaner tomorrow.</p></div>
                <div>
                    <h4 className="font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-semibold mb-4">Contact</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li>Email: contact@swacchconnect.com</li>
                        <li>Phone: +91 12345 67890</li>
                    </ul>
                </div>
                <div><h4 className="font-semibold mb-4">Follow Us</h4></div>
            </div>
            <div className="text-center text-gray-500 border-t border-gray-700 mt-8 pt-6">
                <p>&copy; {new Date().getFullYear()} SwacchConnect. All Rights Reserved.</p>
                {/* <p className="text-xs mt-2">Illustration by <a href="http://www.freepik.com" className="underline hover:text-white">Freepik</a></p> */}
            </div>
        </div>
      </footer>
    </div>
  );
}

