import React, { useState } from "react";
import ResetPassword from "./ResetPassword";

const PRIMARY_COLOR = "#004F43";

const EyeIcon = ({ size = 20, className = "text-gray-600 hover:text-gray-800" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeSlashIcon = ({ size = 20, className = "text-gray-600 hover:text-gray-800" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
    <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
    <path d="M6.61 6.61A13.09 13.09 0 0 0 4 12s3 7 10 7c.76 0 1.5-.1 2.22-.27" />
    <line x1="2" x2="22" y1="2" y2="22" />
  </svg>
);

const LoginPage = ({ onLoginComplete }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showReset, setShowReset] = useState(false);
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: fullName, password }),
      });

      const data = await res.json();

      if (res.ok && data.token) {
        console.log("Login successful, token:", data.token);
        localStorage.setItem("username", fullName); // for session
        localStorage.setItem("token", data.token);
        onLoginComplete(); // navigate to dashboard
      } else {
        alert(data.message || "Incorrect username or password");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  const handleForgotPassword = () => {
    if (!fullName) {
      alert("Please enter your username first");
      return;
    }
    // Store username for ResetPassword
    localStorage.setItem("usernameForReset", fullName);
    setShowReset(true);
  };

  return (
    <div className="w-full flex justify-center py-4">
      <form className="w-full max-w-sm space-y-6" onSubmit={handleLogin}>
        <h3 className="text-2xl font-bold text-center mb-6" style={{ color: PRIMARY_COLOR }}>
          Member Login
        </h3>

        <input
          type="text"
          placeholder="Username"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="block w-full p-4 rounded-lg border-2 text-gray-700 placeholder-gray-400 focus:outline-none"
          style={{ borderColor: PRIMARY_COLOR }}
          required
        />

        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-lg border-2 pr-12 text-gray-700 placeholder-gray-400 focus:outline-none"
            style={{ borderColor: PRIMARY_COLOR }}
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

        <div className="flex justify-end text-sm">
          <button
            type="button"
            onClick={handleForgotPassword}
            className="text-blue-700 hover:text-blue-900 underline"
          >
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          className="block w-full p-4 rounded-lg font-bold text-lg text-white"
          style={{ backgroundColor: PRIMARY_COLOR }}
        >
          Log in
        </button>
      </form>

      {showReset && <ResetPassword onClose={() => setShowReset(false)} />}
    </div>
  );
};

export default LoginPage;
