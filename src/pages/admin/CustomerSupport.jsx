import React, { useState } from "react";

const initialTickets = [
  {
    id: "TCK101",
    user: "Ravi Kumar",
    issue: "Order not delivered",
    priority: "High",
    status: "Open",
    date: "12 Oct 2025",
  },
  {
    id: "TCK102",
    user: "Kavya Reddy",
    issue: "Payment failed but money deducted",
    priority: "Medium",
    status: "Progress",
    date: "13 Oct 2025",
  },
  {
    id: "TCK103",
    user: "Vamsi Krishna",
    issue: "Unable to update address",
    priority: "Low",
    status: "Resolved",
    date: "14 Oct 2025",
  },
];

const CustomerSupport = () => {
  const [tickets, setTickets] = useState(initialTickets);

  const handleResolve = (id) => {
    const updated = tickets.map((t) =>
      t.id === id ? { ...t, status: "Resolved" } : t
    );
    setTickets(updated);
  };

  const getPriorityClass = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-700";
      case "Medium":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-green-100 text-green-700";
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "Open":
        return "bg-red-100 text-red-700";
      case "In Progress":
        return "bg-orange-100 text-orange-700";
      default:
        return "bg-green-100 text-green-700";
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Customer Support Management
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-left">
              <th className="py-4 px-6">Ticket ID</th>
              <th className="py-4 px-6">User</th>
              <th className="py-4 px-6">Issue</th>
              <th className="py-4 px-6">Priority</th>
              <th className="py-4 px-6">Status</th>
              <th className="py-4 px-6">Date</th>
              <th className="py-4 px-6 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {tickets.map((t) => (
              <tr
                key={t.id}
                className="border-b last:border-none hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 px-6 font-medium">{t.id}</td>
                <td className="py-4 px-6">{t.user}</td>
                <td className="py-4 px-6">{t.issue}</td>
                <td className="py-4 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getPriorityClass(
                      t.priority
                    )}`}
                  >
                    {t.priority}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusClass(
                      t.status
                    )}`}
                  >
                    {t.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-500">{t.date}</td>
                <td className="py-4 px-6 text-center">
                  {t.status !== "Resolved" ? (
                    <button
                      onClick={() => handleResolve(t.id)}
                      className="bg-purple-600 text-white px-3 py-1 rounded-md hover:bg-purple-700 transition"
                    >
                      Mark Resolved
                    </button>
                  ) : (
                    <button className="bg-gray-300 text-gray-600 px-3 py-1 rounded-md cursor-default">
                      Resolved
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerSupport;
