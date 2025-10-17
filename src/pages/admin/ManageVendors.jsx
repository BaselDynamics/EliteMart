import React from "react";
import { Search, Building2, CheckCircle2, Clock3 } from "lucide-react";

const vendors = [
  { id: 1, name: "FreshMart", email: "info@freshmart.com", status: "Approved" },
  { id: 2, name: "TechWave", email: "sales@techwave.in", status: "Blocked" },
  { id: 3, name: "StyleHub", email: "contact@stylehub.com", status: "Pending" },
];

const ManageVendors = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3 sm:mb-0">
          Manage Vendors
        </h2>

        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search vendors..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7b5cf4]"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-[#7b5cf4] to-[#a78bfa] text-white rounded-xl shadow">
          <Building2 size={36} />
          <div>
            <h4 className="text-lg font-semibold">Total Vendors</h4>
            <p className="text-sm opacity-90">120 Vendors</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-xl shadow">
          <CheckCircle2 size={36} />
          <div>
            <h4 className="text-lg font-semibold">Approved</h4>
            <p className="text-sm opacity-90">95 Active Vendors</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-xl shadow">
          <Clock3 size={36} />
          <div>
            <h4 className="text-lg font-semibold">Pending Approvals</h4>
            <p className="text-sm opacity-90">25 Vendors</p>
          </div>
        </div>
      </div>

      {/* Vendor Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#7b5cf4] text-white text-left text-sm uppercase tracking-wider">
              <th className="py-3 px-5">Vendor Name</th>
              <th className="py-3 px-5">Email</th>
              <th className="py-3 px-5">Status</th>
              <th className="py-3 px-5 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {vendors.map((v, i) => (
              <tr
                key={i}
                className="border-b last:border-none hover:bg-gray-50 transition text-gray-700"
              >
                <td className="py-3 px-5 font-medium">{v.name}</td>
                <td className="py-3 px-5">{v.email}</td>
                <td className="py-3 px-5">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                      v.status === "Approved"
                        ? "bg-green-100 text-green-700"
                        : v.status === "Blocked"
                        ? "bg-red-100 text-red-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {v.status}
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

export default ManageVendors;
