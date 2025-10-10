import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { verifyOtp, clearOtp } from "./otpService";

const VerifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state || {};

  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();

    if (!otp) {
      setError("Please enter OTP");
      return;
    }

    const isValid = verifyOtp(email, otp);
    if (isValid) {
      setSuccess("✅ OTP Verified Successfully!");
      setError("");
      clearOtp(email);

      // temporary redirect to dashboard or home after delay
      setTimeout(() => navigate("/customer/home"), 1500);
    } else {
      setError("❌ Invalid OTP. Please try again.");
      setSuccess("");
    }
  };

  if (!email) {
    return (
      <div className="flex justify-center items-center min-h-screen text-lg font-medium text-red-600">
        Invalid access! Please login first.
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm transition-all">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Verify Your Email
        </h2>
        <p className="text-center text-gray-600 mb-4 text-sm">
          We’ve sent a 6-digit OTP to <span className="font-medium">{email}</span>.
        </p>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-3 text-center font-medium">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 text-green-700 p-2 rounded mb-3 text-center font-medium">
            {success}
          </div>
        )}

        <form onSubmit={handleVerify} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Enter OTP
            </label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bca7f5] bg-gray-50 text-center text-lg tracking-widest"
              placeholder="123456"
              maxLength={6}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#7b68ee] hover:bg-[#6a5acd] text-white py-2 px-4 rounded-lg font-medium transition duration-300"
          >
            Verify OTP
          </button>
        </form>

        <p
          className="text-center text-sm text-[#7b68ee] mt-4 cursor-pointer hover:underline"
          onClick={() => navigate("/")}
        >
          Back to Login
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;
