import React, { useState, useEffect } from "react";
import axios from "axios";

const PRIMARY_COLOR = "#004F43";
const HOVER_COLOR = "#003B33";

const ResetPassword = ({ onClose }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Get username from localStorage (stored on login or prior)
  const username = localStorage.getItem("usernameForReset");

  // Auto-close modal after success
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        onClose();
        localStorage.removeItem("usernameForReset"); // clean up
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, onClose]);

  const handleReset = async () => {
    

    if (!newPassword || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!username) {
      setError("No user found. Please login first.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/ResetPassword", {
        username,
        newPassword,
      });
        console.log(res.data); // should log { message: "Password reset successfully" }

    localStorage.removeItem("usernameForReset");
    window.location.href = "/dashboard"; 
      setIsSubmitted(true);
    } catch (err) {
      setError(err.response?.data?.message || "Error resetting password");
    }
  };

  const isResetDisabled =
    !newPassword || !confirmPassword || newPassword !== confirmPassword;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-[420px] max-w-full bg-white rounded-2xl shadow-2xl p-6 text-center border-4"
        style={{ borderColor: PRIMARY_COLOR }}
        onClick={(e) => e.stopPropagation()}
      >
        {!isSubmitted && (
          <button
            onClick={onClose}
            className="absolute top-3 right-5 text-3xl text-gray-500 hover:text-gray-900"
          >
            &times;
          </button>
        )}

        {isSubmitted ? (
          <div className="py-6">
            <h2 className="text-2xl font-extrabold my-3 text-gray-800">
              Password Updated!
            </h2>
            <p className="text-base mb-6 text-gray-600">
              Your password has been successfully reset. This window will close
              automatically.
            </p>
            <button
              onClick={onClose}
              className="w-full py-3 rounded-lg text-white"
              style={{ backgroundColor: PRIMARY_COLOR }}
            >
              Understood
            </button>
          </div>
        ) : (
          <>
            <h2
              className="text-3xl font-extrabold mb-2"
              style={{ color: PRIMARY_COLOR }}
            >
              Set New Password
            </h2>

            {error && (
              <div className="text-red-600 bg-red-100 p-2 rounded-lg mb-4">
                {error}
              </div>
            )}

            <input
              type="password"
              placeholder="Enter New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="block w-full px-4 py-3 border-2 rounded-lg outline-none mb-4"
              style={{ borderColor: PRIMARY_COLOR }}
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block w-full px-4 py-3 border-2 rounded-lg outline-none mb-6"
              style={{ borderColor: PRIMARY_COLOR }}
            />

            <div className="flex justify-center gap-4">
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-lg bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleReset}
                disabled={isResetDisabled}
                className={`flex-1 py-3 rounded-lg text-white ${
                  isResetDisabled
                    ? "bg-gray-400"
                    : `bg-[${PRIMARY_COLOR}] hover:bg-[${HOVER_COLOR}]`
                }`}
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
