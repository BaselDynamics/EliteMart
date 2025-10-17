import React from "react";

const payments = [
  { id: 1, vendor: "FreshMart", amount: "₹12,500", status: "Paid", date: "12 Oct 2025" },
  { id: 2, vendor: "StyleHub", amount: "₹8,700", status: "Pending", date: "13 Oct 2025" },
];

const Payments = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Payment Settlements</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-left">
              <th className="py-4 px-6">Vendor</th>
              <th className="py-4 px-6">Amount</th>
              <th className="py-4 px-6">Status</th>
              <th className="py-4 px-6">Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr key={p.id} className="border-b last:border-none hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 font-medium">{p.vendor}</td>
                <td className="py-4 px-6">{p.amount}</td>
                <td className="py-4 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      p.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-500">{p.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
