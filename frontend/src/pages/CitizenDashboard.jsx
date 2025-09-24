import React, { useState } from "react";
import { Award, AlertCircle, FileText, GraduationCap, QrCode, Leaf, Camera, Menu, X } from "lucide-react";
import Navbar from "../components/Navbar";


export default function CitizenDashboard() {
    const citizen = {
        name: "Rajan Singh",
        email: "rajan.singh@example.com",
        ward: "Ward 12 - Greenfield",
        trained: true,
        lastTraining: "2025-08-01",
        nextTraining: "2025-10-01",
        greenweeks: 3,
        penalties: 1,
        rewards: 520,
        complaints: {
            total: 3,
            solved: 2,
            pending: 1,
        },
        weeklySegregation: ["good", "good", "good", "none", "bad", "good", "none"],
    };

    const todayIndex = 5;

    const navLinks = [
        { href: "/#features", label: "Features" },
        { href: "#", label: "Leaderboard" },
        { href: "/community", label: "Community" },
        { href: "#", label: "Training" },
        { href: '/trackmywaste', label: "Track My Waste" },
        { href: '/worker', label: "Worker Portal" }
    ];

    return (
        <div className="w-full min-h-screen bg-[#f9fafb] flex flex-col">

            <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
                <Navbar navLinks={navLinks} />
            </header>

            {/* Hero Section */}
            <div className="relative w-full h-64">
                <img
                    src="dash.jpg"
                    alt="Hero"
                    className="w-full h-full object-cover object-bottom rounded-b-3xl"
                />

                {/* Glassy Overlay */}
                <div className="absolute inset-0 bg-[#00000066] backdrop-blur-sm rounded-b-3xl flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center">
                        Citizen <span className="text-[#a7f3d0]">Dashboard</span>
                    </h1>
                </div>
                {/* Profile Picture + Info */}
                <div className="absolute -bottom-28 left-16 flex flex-col items-start">
                    <div className="w-36 h-36 rounded-full bg-white shadow-xl flex items-center justify-center overflow-hidden border-4 border-white transform transition duration-500 hover:scale-105">
                        <img
                            src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
                            alt={citizen.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <h2 className="mt-4 text-xl font-bold text-[#0f705d]">{citizen.name}</h2>
                    <p className="text-sm text-gray-600">{citizen.email}</p>
                </div>

                {/* Edit Profile Button */}
                <button className="absolute top-8 right-8 px-4 py-2 bg-[#0f705d] text-white rounded-lg shadow-lg hover:bg-[#0c5a4a] transition transform hover:scale-105 z-10">
                    Edit Profile
                </button>
            </div>

            {/* Spacer with QR button */}
            <div className="h-40 px-8 flex items-center justify-between">
                <div></div>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#0f705d] text-white rounded-lg shadow hover:bg-[#0c5a4a] transition transform hover:scale-105">
                    <QrCode size={18} />
                    Get QR
                </button>
            </div>

            {/* Info Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 md:px-16">
                {/* Training Card */}
                <InfoCard 
                    icon={GraduationCap} 
                    title="Training" 
                    buttonText="Schedule Training"
                    color="green"
                >
                    <span className={`text-sm font-bold ${citizen.trained ? "text-[#0f705d]" : "text-red-600"}`}>
                        {citizen.trained ? "Completed" : "Pending"}
                    </span>
                    {citizen.trained && (
                        <p className="mt-2 text-xs text-gray-500">
                            Last: <span className="font-semibold text-gray-700">{citizen.lastTraining}</span> <br />
                            Next: <span className="font-semibold text-gray-700">{citizen.nextTraining}</span>
                        </p>
                    )}
                </InfoCard>

                {/* Rewards Card */}
                 <InfoCard 
                    icon={Award} 
                    title="Rewards" 
                    buttonText="Redeem"
                    color="green"
                >
                    <span className="text-3xl font-bold text-gray-800">{citizen.rewards}</span>
                    <p className="text-sm text-gray-500">Points</p>
                </InfoCard>

                {/* Penalties Card */}
                <InfoCard 
                    icon={AlertCircle} 
                    title="Penalties" 
                    buttonText="View Details"
                    color="red"
                >
                    <span className="text-3xl font-bold text-red-600">{citizen.penalties}</span>
                     <p className="text-sm text-gray-500">Violations</p>
                </InfoCard>

                {/* Complaints Card */}
                 <InfoCard 
                    icon={FileText} 
                    title="Complaints" 
                    buttonText="View"
                    color="yellow"
                >
                    <span className="text-3xl font-bold text-gray-800">{citizen.complaints.total}</span>
                    <p className="mt-1 text-xs text-gray-500">
                        <span className="font-semibold text-gray-700">{citizen.complaints.solved} Solved</span> | 
                        <span className="font-semibold text-gray-700"> {citizen.complaints.pending} Pending</span>
                    </p>
                </InfoCard>
            </div>

            {/* Weekly Stats Section */}
            <div className="mt-12 px-8 md:px-16 pb-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-6 lg:col-span-2">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Weekly Segregation Stats</h2>
                    <div className="flex justify-around">
                        {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => {
                            let bgColor = "bg-gray-400";
                            let symbol = "–";

                            if (i > todayIndex) {
                                bgColor = "bg-gray-200";
                                symbol = "";
                            } else {
                                const status = citizen.weeklySegregation[i];
                                if (status === "good") {
                                    bgColor = "bg-[#0f705d]";
                                    symbol = "✔";
                                } else if (status === "bad") {
                                    bgColor = "bg-red-500";
                                    symbol = "✘";
                                }
                            }

                            return (
                                <div key={i} className="flex flex-col items-center gap-2">
                                     <p className="text-sm font-semibold text-gray-500">{day}</p>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white text-lg ${bgColor}`}>
                                        {symbol}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="flex flex-col gap-8">
                    {/* Verify Card */}
                    <div className="relative bg-white rounded-2xl shadow-lg p-6 flex-1 flex flex-col justify-between items-center text-center transform transition duration-500 hover:scale-105">
                        <div className="absolute -top-4 -right-4 w-16 h-16 flex items-center justify-center rounded-full bg-[#0f705d]/10">
                            <Camera className="text-[#0f705d]" size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">Verify Your Household</h3>
                        <button className="mt-4 px-6 py-2 bg-[#0f705d] text-white rounded-lg shadow hover:bg-[#0c5a4a] transition">
                            Get Verified
                        </button>
                    </div>

                    {/* Green Weeks Card */}
                     <div className="relative bg-white rounded-2xl shadow-lg p-6 flex-1 flex flex-col items-center justify-center text-center transform transition duration-500 hover:scale-105">
                         <div className="absolute -top-4 -right-4 w-16 h-16 flex items-center justify-center rounded-full bg-[#0f705d]/10">
                            <Leaf className="text-[#0f705d]" size={32} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">Total Green Weeks</h3>
                        <span className="text-4xl font-bold text-[#0f705d]">{citizen.greenweeks}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

const InfoCard = ({ icon: Icon, title, buttonText, children, color }) => {
    const colorClasses = {
        green: { bg: 'bg-[#0f705d]/10', text: 'text-[#0f705d]', border: 'border-[#0f705d]' },
        red: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-500' },
        yellow: { bg: 'bg-yellow-100', text: 'text-yellow-600', border: 'border-yellow-500' },
    };

    const selectedColor = colorClasses[color] || colorClasses.green;

    return (
         <div className={`relative bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between transform transition duration-500 hover:scale-105 border-t-4 ${selectedColor.border}`}>
            <div className="flex-grow">
                 <div className={`w-14 h-14 mb-4 flex items-center justify-center rounded-full ${selectedColor.bg}`}>
                    <Icon className={selectedColor.text} size={32} />
                </div>
                <h3 className="font-bold text-gray-800 text-lg">{title}</h3>
                <div className="mt-2">
                    {children}
                </div>
            </div>
            <button className={`mt-4 w-full px-4 py-2 bg-[#0f705d] text-white rounded-lg shadow hover:bg-[#0c5a4a] transition`}>
                {buttonText}
            </button>
        </div>
    )
}
