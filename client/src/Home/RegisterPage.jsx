// RegisterPage.jsx
import React, { useState } from "react";

// --- Theme Colors (Must be local for self-contained file) ---
const PRIMARY_COLOR = '#004F43'; // Dark Phthalo Green


// --- Utility Icons (Inline SVGs) ---
const EyeIcon = ({ size = 20, className = "text-gray-600 hover:text-gray-800" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
);

const EyeSlashIcon = ({ size = 20, className = "text-gray-600 hover:text-gray-800" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.09 13.09 0 0 0 4 12s3 7 10 7c.76 0 1.5-.1 2.22-.27"/><line x1="2" x2="22" y1="2" y2="22"/></svg>
);


// Register Page Component
const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // Removed the 'error' state since we are using inline feedback and console logging success/failure

  const handleRegister = (e) => {
    e.preventDefault();
    
    // The button's disabled state already prevents submission if validation fails, 
    // but we log status here for demonstration.

    const isMatch = password === confirmPassword;
    const isMinLength = password.length >= 6;
    const areRequiredFieldsFilled = fullName && mobileNumber && password && confirmPassword;

    if (areRequiredFieldsFilled && isMatch && isMinLength) {
        // --- Success Logic Placeholder ---
        console.log("Registration successful! Data:", { fullName, mobileNumber, password });
    } else {
        // Should only be hit if button disable logic is circumvented, but good practice.
        console.log("Registration blocked: Validation failed.");
    }
  };

  // Real-time validation calculation for display and button disable logic
  const passwordsMatch = password === confirmPassword;
  const isPasswordEntered = password.length > 0;
  const isConfirmPasswordEntered = confirmPassword.length > 0;

  const isRegisterDisabled = !fullName || !mobileNumber || !isPasswordEntered || !isConfirmPasswordEntered || !passwordsMatch || password.length < 6;

  // Helper to determine when to show the real-time match feedback
  const showMatchFeedback = isPasswordEntered || isConfirmPasswordEntered;


  return (
    <div className="w-full flex justify-center py-4">
        <form className="w-full max-w-sm space-y-4" onSubmit={handleRegister}>
            <h3 className="text-2xl font-bold text-center mb-6" style={{ color: PRIMARY_COLOR }}>
                New Member Registration
            </h3>

            {/* Removed the global red error box display */}

            {/* Full Name */}
            <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => { setFullName(e.target.value); }}
                className={`block w-full p-4 rounded-lg bg-white border-2 
                            text-gray-700 placeholder-gray-400 
                            focus:outline-none focus:ring-4 focus:ring-opacity-40 transition duration-150`}
                style={{ borderColor: PRIMARY_COLOR, '--tw-ring-color': PRIMARY_COLOR }}
                required
            />

            {/* Mobile Number */}
            <input
                type="tel"
                placeholder="Mobile Number (10 digits)"
                pattern="[0-9]{10}"
                value={mobileNumber}
                onChange={(e) => { setMobileNumber(e.target.value); }}
                className={`block w-full p-4 rounded-lg bg-white border-2 
                            text-gray-700 placeholder-gray-400 
                            focus:outline-none focus:ring-4 focus:ring-opacity-40 appearance-none transition duration-150`}
                style={{ borderColor: PRIMARY_COLOR, '--tw-ring-color': PRIMARY_COLOR }}
                required
            />

            {/* Password Field + Eye */}
            <div className="relative w-full">
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Choose Password (Min 6 characters)"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); }}
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
                {/* Optional: Password length hint */}
                {isPasswordEntered && password.length < 6 && (
                    <p className="text-xs text-orange-500 mt-1">
                        Minimum 6 characters required.
                    </p>
                )}
            </div>

            {/* Confirm Password Field + Eye */}
            <div className="relative w-full">
                <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => { setConfirmPassword(e.target.value); }}
                    className={`w-full p-4 rounded-lg bg-white border-2 pr-12
                                text-gray-700 placeholder-gray-400 
                                focus:outline-none focus:ring-4 focus:ring-opacity-40 transition duration-150`}
                    style={{ borderColor: PRIMARY_COLOR, '--tw-ring-color': PRIMARY_COLOR }}
                    required
                />
                <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1"
                >
                    {showConfirmPassword ? <EyeSlashIcon /> : <EyeIcon />}
                </button>
            </div>

            {/* REAL-TIME MATCH FEEDBACK */}
            {showMatchFeedback && (
                <p className={`text-sm mt-1 font-medium -mt-2 ${passwordsMatch ? 'text-green-600' : 'text-red-600'}`}>
                    {passwordsMatch 
                        ? '✅ Passwords match.' 
                        : '❌ Passwords do not match.'}
                </p>
            )}


            {/* Register Button */}
            <button 
                type="submit"
                disabled={isRegisterDisabled}
                className={`block w-full p-4 rounded-lg font-bold text-lg text-white shadow-lg transition-all duration-300 transform active:scale-98
                ${isRegisterDisabled 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'hover:opacity-90 cursor-pointer'}`
                }
                style={{ backgroundColor: isRegisterDisabled ? 'rgb(156 163 175)' : PRIMARY_COLOR, boxShadow: `0 4px 15px rgba(0, 79, 67, 0.3)` }}
            >
                Register
            </button>
        </form>
    </div>
  );
};

export default RegisterPage;