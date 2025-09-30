// LoginPage.jsx
import React, { useState } from "react";
import ResetPassword from "./ResetPassword";

// --- Theme Colors (Must be local for self-contained file) ---
const PRIMARY_COLOR = '#004F43'; // Dark Phthalo Green
// --- Utility Icons (Inline SVGs) ---
const EyeIcon = ({ size = 20, className = "text-gray-600 hover:text-gray-800" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
);

const EyeSlashIcon = ({ size = 20, className = "text-gray-600 hover:text-gray-800" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.09 13.09 0 0 0 4 12s3 7 10 7c.76 0 1.5-.1 2.22-.27"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
);


const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showReset, setShowReset] = useState(false); // State for popup

    const handleLogin = (e) => {
        e.preventDefault();
        // Placeholder for login logic
        console.log("Attempting login...");
    };

    return (
        <div className="w-full flex justify-center py-4">
            <form className="w-full max-w-sm space-y-6" onSubmit={handleLogin}>
                <h3 className="text-2xl font-bold text-center mb-6" style={{ color: PRIMARY_COLOR }}>
                    Member Login
                </h3>

                {/* Username / Mobile Input */}
                <input
                    type="text"
                    placeholder="Username / Mobile Number"
                    className={`block w-full p-4 rounded-lg bg-white border-2 
                                text-gray-700 placeholder-gray-400 
                                focus:outline-none focus:ring-4 focus:ring-opacity-40 transition duration-150`}
                    style={{ borderColor: PRIMARY_COLOR, '--tw-ring-color': PRIMARY_COLOR }}
                    required
                />

                {/* Password Field + Eye */}
                <div className="relative w-full">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className={`w-full p-4 rounded-lg bg-white border-2 pr-12
                                    text-gray-700 placeholder-gray-400 
                                    focus:outline-none focus:ring-4 focus:ring-opacity-40 transition duration-150`}
                        style={{ borderColor: PRIMARY_COLOR, '--tw-ring-color': PRIMARY_COLOR }}
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1"
                    >
                        {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                    </button>
                </div>

                {/* Forgot Password */}
                <div className="flex justify-end text-sm">
                    <button
                        type="button"
                        onClick={() => setShowReset(true)}
                        className={`text-blue-700 hover:text-blue-900 underline transition cursor-pointer`}
                    >
                        Forgot Password?
                    </button>
                </div>

                {/* Login Button */}
                <button 
                    type="submit"
                    className={`block w-full p-4 rounded-lg font-bold text-lg text-white shadow-lg transition-all duration-300 transform hover:scale-[1.01] active:scale-98 cursor-pointer`}
                    style={{ backgroundColor: PRIMARY_COLOR, boxShadow: `0 4px 15px rgba(0, 79, 67, 0.3)` }}
                >
                    Log in
                </button>
            </form>
            {/* Popup */}
            {showReset && <ResetPassword onClose={() => setShowReset(false)} />}
        </div>
    );
};

export default LoginPage;
