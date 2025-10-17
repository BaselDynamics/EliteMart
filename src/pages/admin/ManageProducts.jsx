import React from "react";
import { Search, Package, Boxes, AlertTriangle } from "lucide-react";

const products = [
  {
    id: "PROD001",
    name: "Wireless Earbuds",
    price: "₹1,499",
    stock: 42,
    status: "Active",
    image: "https://hips.hearstapps.com/hmg-prod/images/wireless-earbuds-001-6792869accae0.jpg?crop=0.583xw:0.776xh;0.194xw,0.179xh&resize=1200:*",
  },
  {
    id: "PROD002",
    name: "Smart Watch",
    price: "₹2,999",
    stock: 8,
    status: "Low Stock",
    image: "https://istarmax.com/wp-content/uploads/2024/02/2024-FEB-PRODUCT-RANGE-1-1024x499.webp",
  },
  {
    id: "PROD003",
    name: "Bluetooth Speaker",
    price: "₹1,799",
    stock: 0,
    status: "Out of Stock",
    image: "https://cdn.thewirecutter.com/wp-content/media/2024/11/portablebluetoothspeakers-2048px-9498-3x2-1.jpg?auto=webp&quality=75&crop=1.91:1&width=1200",
  },
];

const ManageProducts = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3 sm:mb-0">
          Manage Products
        </h2>
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7b5cf4]"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-[#7b5cf4] to-[#a78bfa] text-white rounded-xl shadow">
          <Boxes size={36} />
          <div>
            <h4 className="text-lg font-semibold">Total Products</h4>
            <p className="text-sm opacity-90">124</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-xl shadow">
          <AlertTriangle size={36} />
          <div>
            <h4 className="text-lg font-semibold">Low Stock</h4>
            <p className="text-sm opacity-90">8 Products</p>
          </div>
        </div>

        <div className="flex items-center gap-4 p-5 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-xl shadow">
          <Package size={36} />
          <div>
            <h4 className="text-lg font-semibold">Active Categories</h4>
            <p className="text-sm opacity-90">12 Categories</p>
          </div>
        </div>
      </div>

      {/* Product Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#7b5cf4] text-white text-left text-sm uppercase tracking-wider">
              <th className="py-3 px-5">Product</th>
              <th className="py-3 px-5">Price</th>
              <th className="py-3 px-5">Stock</th>
              <th className="py-3 px-5">Status</th>
              <th className="py-3 px-5 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p, i) => (
              <tr
                key={i}
                className="border-b last:border-none hover:bg-gray-50 transition text-gray-700"
              >
                <td className="py-3 px-5 flex items-center gap-3">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-10 h-10 rounded-md border"
                  />
                  <span className="font-medium">{p.name}</span>
                </td>
                <td className="py-3 px-5">{p.price}</td>
                <td className="py-3 px-5">{p.stock}</td>
                <td className="py-3 px-5">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                      p.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : p.status === "Low Stock"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {p.status}
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

export default ManageProducts;
