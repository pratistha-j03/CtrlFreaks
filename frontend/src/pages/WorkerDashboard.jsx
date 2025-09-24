import React, { useState } from "react";
import Navbar from "../components/Navbar";

// --- SVG Icon Components ---
const UserCheckIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <polyline points="16 11 18 13 22 9" />

    </svg>
);
const SafetyShieldIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
    </svg>
);
const CameraAltIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
    </svg>
);
const GraduationCapIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 1.7.9 3.2 2.3 4" />
        <path d="M18 12v5a4 4 0 0 1-4 4h-1" />
    </svg>
);

const stepsData = [
    {
        id: 1,
        title: "Worker Registration",
        icon: UserCheckIcon,
        description: "Workers are registered and verified in the system before starting their job, ensuring a secure and accountable workforce.",
        buttonText: "Register Now",
        image: "rr.png"
    },
    {
        id: 2,
        title: "Worker Training",
        icon: GraduationCapIcon,
        description: "Mandatory safety and operational training is provided before job onboarding to ensure competence and safety.",
        buttonText: "Start Training",
        image: "trr.png"
    },
    {
        id: 3,
        title: "Safety Kit Distribution",
        icon: SafetyShieldIcon,
        description: "Each worker receives a comprehensive safety kit, because their well-being is our top priority.",
        buttonText: "Get Kit",
        image: "d.png"
    },
    {
        id: 4,
        title: "QR Scan & Photo Upload",
        icon: CameraAltIcon,
        description: "Workers scan a QR code and upload photos upon receiving their kits, creating a transparent and verifiable record.",
        buttonText: "Upload Photos",
        image: "qr.png"
    },

];

const WorkSafelyPage = () => {
    const [activeStep, setActiveStep] = useState(1);
    const currentStep = stepsData.find(step => step.id === activeStep);

    const navLinks = [
        { href: "/#features", label: "Features" },
        { href: "#", label: "Leaderboard" },
        { href: "/community", label: "Community" },
        { href: "#", label: "Training" },
        { href: '/trackmywaste', label: "Track My Waste" },
        { href: '/worker', label: "Worker Portal" }
    ];


    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
                    <Navbar navLinks={navLinks} />
                </header>
            <div className="container mx-auto p-4 sm:p-8">
                
                {/* Header */}
                <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-[#15332d]">
                        Workers Portal
                    </h1>
                    <div className="flex items-center gap-4">
                        <div className="text-right">
                            <h2 className="text-lg font-bold text-gray-800">Rahul Shukla</h2>
                            <p className="text-sm text-gray-500">rahul@example.com</p>
                        </div>
                        <img
                            alt="User Profile"
                            src="https://placehold.co/128x128/E2E8F0/4A5568?text=RS"
                            className="w-14 h-14 rounded-full border-4 border-gray-100 shadow-sm"
                        />
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="w-full md:w-1/4">
                        <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
                            {stepsData.map(step => (
                                <button
                                    key={step.id}
                                    onClick={() => setActiveStep(step.id)}
                                    className={`w-full flex items-center gap-4 p-4 rounded-lg text-left transition-all duration-300 ${activeStep === step.id ? 'bg-[#0f705d] text-white shadow-lg' : 'hover:bg-gray-100'}`}
                                >
                                    <step.icon className={`h-6 w-6 ${activeStep === step.id ? 'text-white' : 'text-[#0f705d]'}`} />
                                    <span className="font-semibold">{step.title}</span>
                                </button>
                            ))}
                        </div>

                    </aside>

                    {/* Content Area */}
                    <main className="w-full md:w-3/4">
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            {currentStep && (
                                <div className="grid lg:grid-cols-2 gap-8 items-center">
                                    <div>
                                        <img src={currentStep.image} alt={currentStep.title} className="rounded-xl  w-full h-auto" />
                                    </div>
                                    <div className="text-left">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={`bg-[#0f705d]/10 rounded-full p-3`}>
                                                <currentStep.icon className="h-8 w-8 text-[#0f705d]" />
                                            </div>
                                            <h2 className="text-3xl font-bold text-gray-800">{currentStep.title}</h2>
                                        </div>
                                        <p className="text-gray-600 mb-8">{currentStep.description}</p>
                                        <button className="bg-[#0f705d] text-white py-3 px-8 rounded-lg font-semibold hover:bg-[#0c5a4a] transition-colors shadow-md hover:shadow-lg transform hover:scale-105">
                                            {currentStep.buttonText}
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default WorkSafelyPage;

