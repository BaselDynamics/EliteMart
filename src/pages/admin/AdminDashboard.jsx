import React from "react";

const AdminDashboard = () => {
  const stats = [
    { title: "Total Sales", value: "₹2,34,000", color: "from-green-400 to-green-600" },
    { title: "Active Vendors", value: "58", color: "from-blue-400 to-blue-600" },
    { title: "Orders Today", value: "142", color: "from-purple-400 to-purple-600" },
    { title: "Pending Payments", value: "₹45,600", color: "from-orange-400 to-orange-600" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Dashboard Overview
      </h1>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((item, i) => (
          <div
            key={i}
            className={`p-5 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-lg hover:scale-105 transition-transform`}
          >
            <p className="text-sm opacity-90">{item.title}</p>
            <h3 className="text-2xl font-semibold mt-2">{item.value}</h3>
          </div>
        ))}
      </div>

      {/* Feature Overview */}
      <section className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-[#7b5cf4] mb-4">
          Platform Overview
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li>✔ Manage Users & Vendors (approve/block access)</li>
          <li>✔ Handle Product & Category compliance</li>
          <li>✔ Track Orders and Quality Standards</li>
          <li>✔ Manage Payments, Commissions & Settlements</li>
          <li>✔ View Analytics & Performance Metrics</li>
          <li>✔ Broadcast Announcements & Notifications</li>
          <li>✔ Resolve Customer Queries and Support</li>
        </ul>
      </section>
    </div>
  );
};

export default AdminDashboard;
