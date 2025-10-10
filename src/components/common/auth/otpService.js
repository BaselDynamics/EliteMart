// pages/customer/login/otpService.js

// Store OTPs temporarily (in-memory)
const otpStore = {};

// Function to generate a random 6-digit OTP
export const generateOtp = (email) => {
  const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
  otpStore[email] = otp;
  return otp;
};

// Function to verify OTP
export const verifyOtp = (email, enteredOtp) => {
  return otpStore[email] && otpStore[email].toString() === enteredOtp;
};

// Optional: clear OTP after verification
export const clearOtp = (email) => {
  delete otpStore[email];
};
