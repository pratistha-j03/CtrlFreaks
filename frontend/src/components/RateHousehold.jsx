import React, { useState, useEffect } from 'react';

// Helper function to generate random household data for demo purposes
const generateRandomHousehold = () => {
    const randomId = Math.floor(1000 + Math.random() * 9000);
    const streetNames = ['Green Avenue', 'Clean Street', 'Unity Lane', 'Park Road'];
    const randomStreet = streetNames[Math.floor(Math.random() * streetNames.length)];
    return {
        id: `${randomId}-XYZ`,
        address: `${Math.floor(10 + Math.random() * 90)}, ${randomStreet}, Gorakhpur`,
    };
};

// --- Icon Components ---
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

const CameraIcon = () => (
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


// --- Main App Component ---
export default function App() {
    const [household, setHousehold] = useState(generateRandomHousehold());
    const [selectedRating, setSelectedRating] = useState(null);
    const [photoFile, setPhotoFile] = useState(null);
    const [showPhotoUpload, setShowPhotoUpload] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleRatingSelect = (rating) => {
        setSelectedRating(rating);
        if (rating === 'average' || rating === 'poor') {
            setShowPhotoUpload(true);
        } else {
            setShowPhotoUpload(false);
            setPhotoFile(null); // Clear photo if not needed
        }
    };

    const handlePhotoChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setPhotoFile(event.target.files[0]);
        }
    };
    
    const resetState = () => {
        setSelectedRating(null);
        setPhotoFile(null);
        setShowPhotoUpload(false);
        setHousehold(generateRandomHousehold());
    };

    const handleSubmit = () => {
        console.log('Submitting data:', {
            householdId: household.id,
            address: household.address,
            rating: selectedRating,
            photoAttached: !!photoFile,
            fileName: photoFile?.name
        });

        setShowSuccessModal(true);
        
        setTimeout(() => {
            setShowSuccessModal(false);
            resetState();
        }, 2000);
    };

    const RatingButton = ({ rating, bgColor, textColor, ringColor, emoji, text }) => {
        const isSelected = selectedRating === rating;
        return (
            <button
                onClick={() => handleRatingSelect(rating)}
                className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-sm transition-all duration-200 ${bgColor} ${textColor} hover:brightness-105 ${isSelected ? `ring-4 ring-offset-2 ${ringColor}` : ''}`}
            >
                <span className="text-4xl">{emoji}</span>
                <span className="mt-2 font-semibold">{text}</span>
            </button>
        );
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen font-sans">
            <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-6">
                {/* Header */}
                <header className="flex items-center justify-between">
                    <button className="text-gray-500 hover:text-gray-800"><BackIcon /></button>
                    <h1 className="text-xl font-bold text-gray-800">Household Update</h1>
                    <div className="w-6"></div>
                </header>

                {/* Household Info */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                        <div className="bg-blue-100 p-2 rounded-full"><HouseholdIcon /></div>
                        <div>
                            <p className="font-semibold text-gray-700">Household ID: <span>{household.id}</span></p>
                            <p className="text-sm text-gray-500">{household.address}</p>
                        </div>
                    </div>
                </div>

                {/* Segregation Rating */}
                <div>
                    <label className="block text-md font-semibold text-gray-700 mb-3 text-center">How is the waste segregation?</label>
                    <div className="grid grid-cols-3 gap-3">
                        <RatingButton rating="good" bgColor="bg-green-100" textColor="text-green-800" ringColor="ring-green-500" emoji="👍" text="Good" />
                        <RatingButton rating="average" bgColor="bg-yellow-100" textColor="text-yellow-800" ringColor="ring-yellow-500" emoji="🤔" text="Average" />
                        <RatingButton rating="poor" bgColor="bg-red-100" textColor="text-red-800" ringColor="ring-red-500" emoji="👎" text="Poor" />
                    </div>
                </div>

                {/* Photo Evidence */}
                {showPhotoUpload && (
                    <div>
                        <label htmlFor="photo-upload" className="w-full cursor-pointer flex items-center justify-center p-4 bg-gray-100 text-gray-700 rounded-lg border-2 border-dashed border-gray-300 hover:bg-gray-200 transition-colors">
                            <CameraIcon />
                            <span>{photoFile ? `Photo Added: ${photoFile.name}` : 'Add Photo Proof'}</span>
                        </label>
                        <input type="file" id="photo-upload" className="hidden" accept="image/*" onChange={handlePhotoChange} />
                    </div>
                )}

                {/* Submit Button */}
                <button
                    onClick={handleSubmit}
                    disabled={!selectedRating}
                    className="w-full p-4 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed disabled:shadow-none"
                >
                    Confirm and Submit
                </button>
            </div>

            {/* Success Modal */}
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
}
