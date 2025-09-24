import React, { useState } from "react";
import Navbar from "../components/Navbar";


const generateRandomHousehold = () => {
    const randomId = Math.floor(1000 + Math.random() * 9000);
    const streetNames = ['Green Avenue', 'Clean Street', 'Unity Lane', 'Park Road'];
    const randomStreet = streetNames[Math.floor(Math.random() * streetNames.length)];
    return {
        id: `${randomId}-XYZ`,
        address: `${Math.floor(10 + Math.random() * 90)}, ${randomStreet}, Gorakhpur`,
    };
};

const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
    </svg>
);

const HouseholdIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const RatingCameraIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const SuccessIcon = () => (
    <svg className="h-10 w-10 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
);

const HouseholdRatingPage = ({ onBack }) => {
    const [household, setHousehold] = useState(generateRandomHousehold());
    const [selectedRating, setSelectedRating] = useState(null);
    const [photoFile, setPhotoFile] = useState(null);
    const [showPhotoUpload, setShowPhotoUpload] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleRatingSelect = (rating) => {
        setSelectedRating(rating);
        setShowPhotoUpload(rating === 'average' || rating === 'poor');
        if (rating === 'good') setPhotoFile(null);
    };

    const handlePhotoChange = (event) => {
        if (event.target.files && event.target.files[0]) setPhotoFile(event.target.files[0]);
    };
    
    const handleSubmit = () => {
        setShowSuccessModal(true);
        setTimeout(() => {
            setShowSuccessModal(false);
            onBack(); 
        }, 2000);
    };

    const RatingButton = ({ rating, bgColor, textColor, ringColor, emoji, text }) => (
        <button
            onClick={() => handleRatingSelect(rating)}
            className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-sm transition-all duration-200 ${bgColor} ${textColor} hover:brightness-105 ${selectedRating === rating ? `ring-4 ring-offset-2 ${ringColor}` : ''}`}
        >
            <span className="text-4xl">{emoji}</span>
            <span className="mt-2 font-semibold">{text}</span>
        </button>
    );

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen font-sans fixed inset-0 z-50">
            <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-6">
                <header className="flex items-center justify-between">
                    <button onClick={onBack} className="text-gray-500 hover:text-gray-800"><BackIcon /></button>
                    <h1 className="text-xl font-bold text-gray-800">Household Update</h1>
                    <div className="w-6"></div>
                </header>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-2 rounded-full"><HouseholdIcon /></div>
                        <div>
                            <p className="font-semibold text-gray-700">Household ID: <span>{household.id}</span></p>
                            <p className="text-sm text-gray-500">{household.address}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <label className="block text-md font-semibold text-gray-700 mb-3 text-center">How is the waste segregation?</label>
                    <div className="grid grid-cols-3 gap-3">
                        <RatingButton rating="good" bgColor="bg-green-100" textColor="text-green-800" ringColor="ring-green-500" emoji="👍" text="Good" />
                        <RatingButton rating="average" bgColor="bg-yellow-100" textColor="text-yellow-800" ringColor="ring-yellow-500" emoji="🤔" text="Average" />
                        <RatingButton rating="poor" bgColor="bg-red-100" textColor="text-red-800" ringColor="ring-red-500" emoji="👎" text="Poor" />
                    </div>
                </div>
                {showPhotoUpload && (
                    <div>
                        <label htmlFor="photo-upload" className="w-full cursor-pointer flex items-center justify-center p-4 bg-gray-100 text-gray-700 rounded-lg border-2 border-dashed border-gray-300 hover:bg-gray-200 transition-colors">
                            <RatingCameraIcon />
                            <span>{photoFile ? `Photo Added: ${photoFile.name}` : 'Add Photo Proof'}</span>
                        </label>
                        <input type="file" id="photo-upload" className="hidden" accept="image/*" onChange={handlePhotoChange} />
                    </div>
                )}
                <button
                    onClick={handleSubmit}
                    disabled={!selectedRating}
                    className="w-full p-4 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:shadow-none"
                >
                    Confirm and Submit
                </button>
            </div>
            {showSuccessModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
                    <div className="bg-white rounded-lg p-8 text-center shadow-2xl transform transition-all scale-100">
                        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                            <SuccessIcon />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">Success!</h3>
                        <p className="mt-2 text-gray-600">Household status has been updated.</p>
                    </div>
                </div>
            )}
        </div>
    );
};

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
    const [showRatingPage, setShowRatingPage] = useState(false);
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
            {showRatingPage && <HouseholdRatingPage onBack={() => setShowRatingPage(false)} />}
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
                                        <button 
                                            onClick={() => {
                                                if (currentStep.id === 4) {
                                                    setShowRatingPage(true);
                                                }
                                                // Add other button actions here if needed
                                            }}
                                            className="bg-[#0f705d] text-white py-3 px-8 rounded-lg font-semibold hover:bg-[#0c5a4a] transition-colors shadow-md hover:shadow-lg transform hover:scale-105"
                                        >
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

