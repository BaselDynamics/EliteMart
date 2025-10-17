import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateOtp } from "./otpService";
import { FaEnvelope, FaLock } from "react-icons/fa"; // ✅ Added icons

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    // Temporary logic: accept any email/password (for OTP testing)
    const success = true;

    if (success) {
      const otp = generateOtp(email);
      console.log(`OTP for ${email}:`, otp);

      setError("");
      navigate("/verify-email", { state: { email } });
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-gradient-to-r from-orange-50 via-white to-orange-100 p-8 rounded-2xl shadow-lg w-full max-w-sm transition-all">
        <h2 className="text-2xl font-semibold mb-6 text-center text-orange-400">
          Login
        </h2>

        {error && (
          <div className="bg-red-100 text-red-500 p-2 rounded mb-4 text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email Address
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e89c49] bg-gray-50"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e89c49] bg-gray-50"
                placeholder="Enter your password"
              />
            </div>
          </div>

          {/* Forgot Password */}
          <p
            className="text-right text-sm text-orange-400 cursor-pointer hover:underline"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password?
          </p>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#e89c49] hover:bg-[#39eb4b] text-white py-2 px-4 rounded-lg font-medium transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center text-gray-500 text-sm mt-4">
          Don’t have an account?{" "}
          <span
            className="text-orange-400 font-medium cursor-pointer hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
