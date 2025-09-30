import React, { useState } from "react";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";



// --- 3. Main App Component (HomePage) ---
const HomePage= () => {
    const [activeTab, setActiveTab] = useState("Login");

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 font-sans antialiased">
            <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden transform transition-all duration-500 scale-100">

                {/* Left Side: Marketing/Branding Area (Dark Phthalo Green) */}
                <div className="md:flex w-full md:w-5/12 p-8 bg-[#004F43] items-center justify-center text-white min-h-[300px] md:min-h-0">
                    <div className="text-center space-y-6">
                        <h1 className="text-5xl font-extrabold tracking-tighter drop-shadow-lg mb-4">
                            Interact Quiz
                        </h1>

                        <h2 className="text-xl md:text-2xl font-semibold opacity-95">
                            Welcome to our Interactive Quiz App!
                        </h2>
                        <p className="text-base md:text-lg font-light opacity-90">
                            {activeTab === "Login"
                                ? "Sign in to access quizzes and track your progress."
                                : "Create your account now and start learning with our engaging quizzes."}
                        </p>
                    </div>
                </div>

                {/* Right Side: Form Area */}
                <div className="w-full md:w-7/12 p-8 text-gray-700 flex flex-col bg-white">

                    {/* Tabs Container */}
                    <div className="grid grid-cols-2 gap-4 text-xl font-bold mb-8">
                        <button
                            className={`py-3 rounded-xl transition-all duration-300 shadow-lg ${
                                activeTab === "Login"
                                    ? "bg-[#004F43] text-white scale-[1.03] shadow-green-400/50"
                                    : "bg-gray-200 text-[#004F43] hover:bg-gray-300"
                            }`}
                            onClick={() => setActiveTab("Login")}
                        >
                            Log in
                        </button>
                        <button
                            className={`py-3 rounded-xl transition-all duration-300 shadow-lg ${
                                activeTab === "Register"
                                    ? "bg-[#004F43] text-white scale-[1.03] shadow-green-400/50"
                                    : "bg-gray-200 text-[#004F43] hover:bg-gray-300"
                            }`}
                            onClick={() => setActiveTab("Register")}
                        >
                            Register
                        </button>
                    </div>

                    {/* Conditional Form Rendering */}
                    <div className="flex-grow flex items-start justify-center">
                        {activeTab === "Login" ? <LoginPage /> : <RegisterPage/>}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default HomePage;
