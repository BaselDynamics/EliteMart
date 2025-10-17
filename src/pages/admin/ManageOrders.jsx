import React from "react";
import { Search, PackageCheck, Clock3, XCircle } from "lucide-react";

const orders = [
  {
    id: "ORD1234",
    customer: "Ravi Kumar",
    amount: "₹1,299",
    status: "Delivered",
    date: "13 Oct 2025",
  },
  {
    id: "ORD1235",
    customer: "Sneha Reddy",
    amount: "₹899",
    status: "Pending",
    date: "14 Oct 2025",
  },
  {
    id: "ORD1236",
    customer: "Vamsi Krishna",
    amount: "₹2,450",
    status: "Cancelled",
    date: "14 Oct 2025",
  },
];

const ManageOrders = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3 sm:mb-0">
          Manage Orders
        </h2>
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search orders..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7b5cf4]"
          />
          <Search
            className="absolute left-3 top-2.5 text-gray-400"
            size={18}
          />
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#7b5cf4] text-white text-left text-sm uppercase tracking-wider">
              <th className="py-3 px-5">Order ID</th>
              <th className="py-3 px-5">Customer</th>
              <th className="py-3 px-5">Amount</th>
              <th className="py-3 px-5">Status</th>
              <th className="py-3 px-5">Date</th>
              <th className="py-3 px-5 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((o, i) => (
              <tr
                key={i}
                className="border-b last:border-none hover:bg-gray-50 transition text-gray-700"
              >
                <td className="py-3 px-5 font-medium">{o.id}</td>
                <td className="py-3 px-5">{o.customer}</td>
                <td className="py-3 px-5">{o.amount}</td>
                <td className="py-3 px-5">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                      o.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : o.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {o.status === "Delivered" && <PackageCheck size={14} />}
                    {o.status === "Pending" && <Clock3 size={14} />}
                    {o.status === "Cancelled" && <XCircle size={14} />}
                    {o.status}
                  </span>
                </td>
                <td className="py-3 px-5 text-gray-500">{o.date}</td>
                <td className="py-3 px-5 text-center">
                  <button className="text-[#7b5cf4] hover:underline text-sm font-medium">
                    View Details
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

export default ManageOrders;
