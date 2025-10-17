import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from "recharts";

const Analytics = () => {
  const metrics = [
    {
      title: "Total Revenue",
      value: "₹12,45,600",
      change: "+8.4%",
      color: "from-green-400 to-green-600",
    },
    {
      title: "Total Orders",
      value: "3,245",
      change: "+3.2%",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Active Users",
      value: "1,892",
      change: "+1.9%",
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "Vendors Online",
      value: "72",
      change: "-1.3%",
      color: "from-orange-400 to-orange-600",
    },
  ];

  const revenueData = [
    { month: "Apr", revenue: 14000 },
    { month: "May", revenue: 19000 },
    { month: "Jun", revenue: 22000 },
    { month: "Jul", revenue: 26000 },
    { month: "Aug", revenue: 24000 },
    { month: "Sep", revenue: 28000 },
    { month: "Oct", revenue: 31000 },
  ];

  const ordersData = [
    { month: "Apr", orders: 540 },
    { month: "May", orders: 690 },
    { month: "Jun", orders: 750 },
    { month: "Jul", orders: 810 },
    { month: "Aug", orders: 780 },
    { month: "Sep", orders: 890 },
    { month: "Oct", orders: 940 },
  ];

  const usersData = [
    { month: "Apr", users: 1200 },
    { month: "May", users: 1450 },
    { month: "Jun", users: 1600 },
    { month: "Jul", users: 1750 },
    { month: "Aug", users: 1820 },
    { month: "Sep", users: 1900 },
    { month: "Oct", users: 2100 },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Platform Analytics
      </h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {metrics.map((m, i) => (
          <div
            key={i}
            className={`p-5 rounded-xl bg-gradient-to-r ${m.color} text-white shadow-md hover:scale-105 transition`}
          >
            <p className="text-sm opacity-90">{m.title}</p>
            <h3 className="text-2xl font-bold mt-2">{m.value}</h3>
            <p className="text-sm opacity-80 mt-1">{m.change} vs last week</p>
          </div>
        ))}
      </div>

      {/* Revenue Growth */}
      <div className="bg-white rounded-xl p-6 shadow mb-8">
        <h3 className="text-lg font-semibold text-[#7b5cf4] mb-4">
          Revenue Growth (Last 6 Months)
        </h3>
        <div className="w-full h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  border: "1px solid #ddd",
                }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#7b5cf4"
                strokeWidth={3}
                dot={{
                  r: 5,
                  stroke: "#7b5cf4",
                  strokeWidth: 2,
                  fill: "white",
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Two Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Orders Trend */}
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="text-lg font-semibold text-[#3b82f6] mb-4">
            Orders Trend (Last 6 Months)
          </h3>
          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ordersData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                  }}
                />
                <Bar dataKey="orders" fill="#3b82f6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Active Users */}
        <div className="bg-white rounded-xl p-6 shadow">
          <h3 className="text-lg font-semibold text-[#a855f7] mb-4">
            Active Users Growth
          </h3>
          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={usersData}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    border: "1px solid #ddd",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="users"
                  stroke="#a855f7"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorUsers)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
