import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../components/common/auth/Login";
import VerifyEmail from "../components/common/auth/VerifyEmail";
import AdminLayout from "./AdminRoute"; // note we will rename below

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/verify-email" element={<VerifyEmail />} />

      {/* ✅ Admin layout and nested pages */}
      <Route path="/admin/*" element={<AdminLayout />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
