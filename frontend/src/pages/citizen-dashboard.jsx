import React from "react";
import { Award, AlertCircle, FileText, GraduationCap, QrCode, Leaf, Camera } from "lucide-react";

export default function Profile() {
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

    return (
        <div className="w-full min-h-screen bg-[#f9fafb] flex flex-col">

            {/* Hero Section */}
            <div className="relative w-full h-64">
                <img
                    src="https://img.freepik.com/premium-vector/garbage-transportation-waste-tanks-shipment-trash-truck-scavengers-service-workers-take-city-garbage-recycling-colorful-containers-vector-cartoon-flat-concept_176411-4581.jpg?w=2000"
                    alt="Hero"
                    className="w-full h-full object-cover object-bottom rounded-b-3xl"
                />

                {/* Glassy Overlay */}
                <div className="absolute inset-0 bg-[#00000066] backdrop-blur-sm rounded-b-3xl flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-[#f6e05e] drop-shadow-lg text-center">
                        Waste <span className="text-[#48bb78]">Management</span> <span className="text-[#4299e1]">System</span>
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
                    <h2 className="mt-4 text-xl font-bold text-[#6b46c1]">{citizen.name}</h2>
                    <p className="text-sm text-[#6b7280]">{citizen.email}</p>
                </div>

                {/* Edit Profile Button */}
                <button className="absolute top-8 right-8 px-4 py-2 bg-[#6366f1] text-white rounded-lg shadow-lg hover:bg-[#4f46e5] transition transform hover:scale-105 z-50">
                    Edit Profile
                </button>
            </div>

            {/* Spacer with QR button */}
            <div className="h-40 px-8 flex items-center justify-between">
                <div></div>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#2563eb] text-white rounded-lg shadow hover:bg-[#1d4ed8] transition transform hover:scale-105">
                    <QrCode size={18} />
                    Get QR
                </button>
            </div>

            {/* Info Cards Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-16 px-16">
                {/* Training Card */}
                <div className="relative bg-white rounded-2xl shadow-lg p-6 overflow-hidden flex flex-col justify-between transform transition duration-500 hover:scale-105">
                    <div>
                        <div className="absolute -top-5 -right-5 w-22 h-22 rounded-full bg-[#c6f6d5] opacity-60"></div>
                        <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-[#9ae6b4] opacity-90"></div>
                        <div className="absolute -top-3 -right-3 w-16 h-16 flex items-center justify-center rounded-full bg-[#38a169] shadow">
                            <GraduationCap className="text-white" size={35} />
                        </div>
                        <p className="mt-6 font-semibold text-[#3182ce]">Training</p>
                        <span className={`text-sm font-bold ${citizen.trained ? "text-[#16a34a]" : "text-[#dc2626]"}`}>
                            {citizen.trained ? "Trained" : "Not Trained"}
                        </span>
                        {citizen.trained && (
                            <p className="mt-2 text-xs">
                                Last: <span className="text-[#9b5de5]">{citizen.lastTraining}</span> <br />
                                Next: <span className="text-[#fbbf24]">{citizen.nextTraining}</span>
                            </p>
                        )}
                    </div>
                    <button className="mt-4 px-4 py-2 bg-[#6366f1] text-white rounded-lg shadow hover:bg-[#4f46e5] transition transform hover:scale-105">
                        Schedule Training
                    </button>
                </div>

                {/* Rewards Card */}
                <div className="relative bg-white rounded-2xl shadow-lg p-6 overflow-hidden flex flex-col justify-between transform transition duration-500 hover:scale-105">
                    <div>
                        <div className="absolute -top-5 -right-5 w-22 h-22 rounded-full bg-[#c6f6d5] opacity-60"></div>
                        <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-[#9ae6b4] opacity-90"></div>
                        <div className="absolute -top-3 -right-3 w-16 h-16 flex items-center justify-center rounded-full bg-[#38a169] shadow">
                            <Award className="text-white" size={35} />
                        </div>
                        <p className="mt-6 font-semibold text-[#3182ce]">Rewards</p>
                        <span className="text-[#16a34a] font-bold">{citizen.rewards}</span>
                    </div>
                    <button className="mt-4 px-4 py-2 bg-[#6366f1] text-white rounded-lg shadow hover:bg-[#4f46e5] transition transform hover:scale-105">
                        Redeem
                    </button>
                </div>

                {/* Penalties Card */}
                <div className="relative bg-white rounded-2xl shadow-lg p-6 overflow-hidden flex flex-col justify-between transform transition duration-500 hover:scale-105">
                    <div>
                        <div className="absolute -top-5 -right-5 w-22 h-22 rounded-full bg-[#c6f6d5] opacity-60"></div>
                        <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-[#9ae6b4] opacity-90"></div>
                        <div className="absolute -top-3 -right-3 w-16 h-16 flex items-center justify-center rounded-full bg-[#38a169] shadow">
                            <AlertCircle className="text-white" size={35} />
                        </div>
                        <p className="mt-6 font-semibold text-[#3182ce]">Penalties</p>
                        <span className="text-[#38a169] font-bold">{citizen.penalties}</span>
                    </div>
                    <button className="mt-4 px-4 py-2 bg-[#6366f1] text-white rounded-lg shadow hover:bg-[#4f46e5] transition transform hover:scale-105">
                        Pay
                    </button>
                </div>

                {/* Complaints Card */}
                <div className="relative bg-white rounded-2xl shadow-lg p-6 overflow-hidden flex flex-col justify-between transform transition duration-500 hover:scale-105">
                    <div>
                        <div className="absolute -top-5 -right-5 w-22 h-22 rounded-full bg-[#c6f6d5] opacity-60"></div>
                        <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-[#9ae6b4] opacity-90"></div>
                        <div className="absolute -top-3 -right-3 w-16 h-16 flex items-center justify-center rounded-full bg-[#38a169] shadow">
                            <FileText className="text-white" size={35} />
                        </div>
                        <p className="mt-6 font-semibold text-[#3182ce]">Complaints</p>
                        <span className="text-[#16a34a] font-bold">Total: {citizen.complaints.total}</span>
                        <p className="mt-2 text-xs">
                                Solved: <span className="text-[#9b5de5]">{citizen.complaints.solved}</span> <br />
                                Pending: <span className="text-[#fbbf24]">{citizen.complaints.pending}</span>
                            </p>
                    </div>
                    <button className="mt-4 px-4 py-2 bg-[#6366f1] text-white rounded-lg shadow hover:bg-[#4f46e5] transition transform hover:scale-105">
                        view
                    </button>
                </div>
            </div>

            {/* Weekly Stats Section */}
            <div className="mt-12 px-16 flex gap-16">
                <div className="bg-white rounded-2xl shadow-lg flex-[1]">
                    <h2 className="text-lg font-bold text-[#1f2937] pl-6 pt-6 mb-4">Weekly Segregation Stats</h2>
                    <div className="flex gap-4 pl-6">
                        {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => {
                            let bgColor = "#9ca3af";
                            let symbol = "–";

                            if (i > todayIndex) {
                                bgColor = "#e5e7eb";
                                symbol = "";
                            } else {
                                const status = citizen.weeklySegregation[i];
                                if (status === "good") {
                                    bgColor = "#16a34a";
                                    symbol = "✔";
                                } else if (status === "bad") {
                                    bgColor = "#dc2626";
                                    symbol = "✘";
                                } else if (status === "none") {
                                    bgColor = "#9ca3af";
                                    symbol = "–";
                                }
                            }

                            return (
                                <div
                                    key={i}
                                    className="w-12 h-12 rounded-full flex flex-col items-center justify-center font-semibold text-white"
                                    style={{ backgroundColor: bgColor }}
                                >
                                    {day}
                                    <span className="text-xs">{symbol}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Verify + Green Weeks Cards */}
                <div className="flex-[1] flex flex-row gap-16">
                    {/* Verify Card */}
                    <div className="relative bg-white rounded-2xl shadow-lg p-6 overflow-hidden flex-1 flex flex-col justify-between transform transition duration-500 hover:scale-105">
                        <div>
                            <div className="absolute -top-5 -right-5 w-22 h-22 rounded-full bg-[#bee3f8] opacity-60"></div>
                            <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-[#90cdf4] opacity-90"></div>
                            <div className="absolute -top-3 -right-3 w-16 h-16 flex items-center justify-center rounded-full bg-[#3182ce] shadow">
                                <Camera className="text-white" size={35} />
                            </div>
                            <p className="mt-6 font-semibold text-[#2563eb]">Verify</p>
                        </div>
                        <button className="mt-4 px-4 py-2 bg-[#2563eb] text-white rounded-lg shadow hover:bg-[#1d4ed8] transition transform hover:scale-105">
                            Get Verified
                        </button>
                    </div>

                    {/* Green Weeks Card */}
                    <div className="relative bg-white rounded-2xl shadow-lg p-6 flex-1 flex flex-col items-center justify-center transform transition duration-500 hover:scale-105 overflow-hidden">
                            <div className="absolute -top-5 -right-5 w-22 h-22 rounded-full bg-[#bee3f8] opacity-60"></div>
                            <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-[#90cdf4] opacity-90"></div>
                            <div className="absolute -top-3 -right-3 w-16 h-16 flex items-center justify-center rounded-full bg-[#3182ce] shadow">                            <Leaf className="text-white" size={36} />
                        </div>
                        <p className="mt-6 font-semibold text-[#16a34a] text-center">Total Green Weeks</p>
                        <span className="text-3xl font-bold text-[#16a34a]">{citizen.greenweeks}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
