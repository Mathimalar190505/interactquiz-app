import React, { useState, useEffect } from "react";

// Define the custom Phthalo Green shades
const PRIMARY_COLOR = '#004F43';
const HOVER_COLOR = '#003B33';

// --- Inline SVG Icons ---

// Eye Icon (for visible password)
const EyeIcon = ({ size = 20, className = "" }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className={className}
    >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
    </svg>
);

// Eye Slash Icon (for hidden password)
const EyeSlashIcon = ({ size = 20, className = "" }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className={className}
    >
        <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.09 13.09 0 0 0 4 12s3 7 10 7c.76 0 1.5-.1 2.22-.27"/><line x1="2" x2="22" y1="2" y2="22"/>
    </svg>
);


const ResetPassword = ({ onClose }) => {
    // State to hold the new passwords
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // State for toggling password visibility
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    // Effect to automatically close the popup after successful submission (3 seconds)
    useEffect(() => {
        if (isSubmitted) {
            const timer = setTimeout(() => {
                onClose();
            }, 3000); // Close after 3 seconds
            return () => clearTimeout(timer);
        }
    }, [isSubmitted, onClose]);

    const handleReset = () => {
        setError(""); // Clear previous errors

        if (!newPassword.trim() || !confirmPassword.trim()) {
            setError("All fields are required.");
            return;
        }

        if (newPassword !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        
        // --- SUCCESS LOGIC ---
        // In a real app, this is where the password reset API call would happen.
        setIsSubmitted(true);
    };

    // Check if the Reset button should be disabled
    const isResetDisabled = !newPassword.trim() || !confirmPassword.trim() || newPassword !== confirmPassword;


    return (
        // Modal Overlay
        <div
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 p-4"
            onClick={onClose}
        >
            {/* Modal Card */}
            <div
                className="relative w-[420px] max-w-full bg-white rounded-2xl shadow-2xl p-6 text-center border-4 transition-transform duration-300 transform scale-100"
                style={{ borderColor: PRIMARY_COLOR, boxShadow: `0 0 40px rgba(0, 79, 67, 0.4)` }} // Custom dark green shadow
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button (Hidden during success message) */}
                {!isSubmitted && (
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-5 text-3xl text-gray-500 hover:text-gray-900 transition font-light"
                        aria-label="Close"
                    >
                        &times;
                    </button>
                )}

                {isSubmitted ? (
                    // --- Success Message View (Custom Alert) ---
                    <div className="py-6 animate-fadeIn">
                        {/* Success Icon */}
                        <svg className="mx-auto h-16 w-16 text-green-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        
                        <h2 className="text-2xl font-extrabold my-3 tracking-wide text-gray-800">Password Updated!</h2>
                        
                        <p className="text-base mb-6 text-gray-600">
                            Your password has been successfully reset. This window will close automatically.
                        </p>
                        
                        <button
                            onClick={onClose}
                            className="w-full py-3 rounded-lg text-base font-medium tracking-wide text-white shadow-lg
                                transition transform hover:opacity-90 active:scale-95 cursor-pointer"
                            style={{ backgroundColor: PRIMARY_COLOR }}
                        >
                            Understood
                        </button>
                    </div>
                ) : (
                    // --- Input Form View ---
                    <>
                        {/* Title */}
                        <h2 className="text-3xl font-extrabold mb-2 tracking-wide" style={{ color: PRIMARY_COLOR }}>
                            Set New Password
                        </h2>

                        <p className="text-sm mb-6 text-gray-500">
                            Please choose a strong, new password.
                        </p>

                        {/* Error Message */}
                        {error && (
                            <div className="text-red-600 bg-red-100 p-2 rounded-lg text-sm mb-4 border border-red-300">
                                {error}
                            </div>
                        )}

                        {/* New Password Input */}
                        <div className="relative mb-4 w-full mx-auto" style={{ maxWidth: '90%' }}>
                            <input
                                type={showNewPassword ? "text" : "password"}
                                placeholder="Enter New Password"
                                value={newPassword}
                                onChange={(e) => { setNewPassword(e.target.value); setError(''); }}
                                // Border-2 set to PRIMARY_COLOR. Focus ring uses PRIMARY_COLOR.
                                className="block w-full px-4 py-3 text-base border-2 rounded-lg outline-none transition
                                    focus:ring-4 focus:ring-opacity-40 bg-gray-50 shadow-inner pr-10"
                                style={{ 
                                    borderColor: PRIMARY_COLOR, 
                                    '--tw-ring-color': PRIMARY_COLOR, 
                                    transition: 'box-shadow 0.2s, border-color 0.2s' 
                                }}
                            />
                            <button
                                type="button"
                                onClick={() => setShowNewPassword(!showNewPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-[#003B33] transition-colors duration-150 p-1"
                            >
                                {showNewPassword ? <EyeSlashIcon size={20} /> : <EyeIcon size={20} />}
                            </button>
                        </div>

                        {/* Confirm Password Input */}
                        <div className="relative mb-6 w-full mx-auto" style={{ maxWidth: '90%' }}>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm New Password"
                                value={confirmPassword}
                                onChange={(e) => { setConfirmPassword(e.target.value); setError(''); }}
                                // Border-2 set to PRIMARY_COLOR. Focus ring uses PRIMARY_COLOR.
                                className="block w-full px-4 py-3 text-base border-2 rounded-lg outline-none transition
                                    focus:ring-4 focus:ring-opacity-40 bg-gray-50 shadow-inner pr-10"
                                style={{ 
                                    borderColor: PRIMARY_COLOR, 
                                    '--tw-ring-color': PRIMARY_COLOR, 
                                    transition: 'box-shadow 0.2s, border-color 0.2s' 
                                }}
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-[#003B33] transition-colors duration-150 p-1"
                            >
                                {showConfirmPassword ? <EyeSlashIcon size={20} /> : <EyeIcon size={20} />}
                            </button>
                        </div>


                        {/* Buttons */}
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={onClose}
                                className={`flex-1 py-3 rounded-lg text-base font-medium tracking-wide bg-gray-200 shadow-md
                                    transition transform hover:bg-gray-300 hover:text-[${HOVER_COLOR}] active:scale-95 cursor-pointer`}
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleReset}
                                disabled={isResetDisabled}
                                className={`flex-1 py-3 rounded-lg text-base font-medium tracking-wide text-white shadow-md
                                    transition transform active:scale-95
                                    ${isResetDisabled
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : `bg-[${PRIMARY_COLOR}] hover:bg-[${HOVER_COLOR}] cursor-pointer`
                                    }`
                                }
                            >
                                Reset Password
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ResetPassword;
