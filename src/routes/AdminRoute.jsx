import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Analytics from "../pages/admin/Analytics";
import Announcements from "../pages/admin/Announcements";
import ManageOrders from "../pages/admin/ManageOrders";
import ManageProducts from "../pages/admin/ManageProducts";
import ManageUsers from "../pages/admin/ManageUsers";
import ManageVendors from "../pages/admin/ManageVendors";
import Payments from "../pages/admin/Payments";
import CustomerSupport from "../pages/admin/CustomerSupport";

import AdminSidebar from "../components/common/admin/AdminSidebar";
import AdminNavbar from "../components/common/admin/AdminNavbar";

const AdminRoute = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-h-screen">
        <AdminNavbar />
        <main className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/orders" element={<ManageOrders />} />
            <Route path="/products" element={<ManageProducts />} />
            <Route path="/users" element={<ManageUsers />} />
            <Route path="/vendors" element={<ManageVendors />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/support" element={<CustomerSupport />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminRoute;
