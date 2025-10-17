import React from "react";
import { Search, Users, UserCheck, UserCircle2 } from "lucide-react";

const users = [
  { id: 1, name: "Arjun", email: "arjun@gmail.com", role: "Customer" },
  { id: 2, name: "Kavya", email: "kavya@elitemart.com", role: "Vendor" },
  { id: 3, name: "Rohit", email: "rohit123@gmail.com", role: "Customer" },
  { id: 4, name: "Sneha", email: "sneha@elitemart.com", role: "Vendor" },
];

const ManageUsers = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3 sm:mb-0">
          Manage Users
        </h2>

        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7b5cf4]"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-[#7b5cf4] to-[#a78bfa] text-white rounded-xl shadow">
          <Users size={36} />
          <div>
            <h4 className="text-lg font-semibold">Total Users</h4>
            <p className="text-sm opacity-90">156</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-xl shadow">
          <UserCheck size={36} />
          <div>
            <h4 className="text-lg font-semibold">Vendors</h4>
            <p className="text-sm opacity-90">34 Vendors</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-xl shadow">
          <UserCircle2 size={36} />
          <div>
            <h4 className="text-lg font-semibold">Customers</h4>
            <p className="text-sm opacity-90">122 Customers</p>
          </div>
        </div>
      </div>

      {/* User Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#7b5cf4] text-white text-left text-sm uppercase tracking-wider">
              <th className="py-3 px-5">User Name</th>
              <th className="py-3 px-5">Email</th>
              <th className="py-3 px-5">Role</th>
              <th className="py-3 px-5 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u, i) => (
              <tr
                key={i}
                className="border-b last:border-none hover:bg-gray-50 transition text-gray-700"
              >
                <td className="py-3 px-5 font-medium">{u.name}</td>
                <td className="py-3 px-5">{u.email}</td>
                <td className="py-3 px-5">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                      u.role === "Vendor"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {u.role}
                  </span>
                </td>
                <td className="py-3 px-5 text-center">
                  <button className="text-[#7b5cf4] hover:underline text-sm font-medium">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
