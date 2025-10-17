import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart2,
  Megaphone,
  ShoppingBag,
  Package,
  Users,
  Store,
  CreditCard,
  Headphones,
} from "lucide-react";

const AdminSidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <LayoutDashboard /> },
    { name: "Analytics", path: "/admin/analytics", icon: <BarChart2 /> },
    { name: "Announcements", path: "/admin/announcements", icon: <Megaphone /> },
    { name: "Orders", path: "/admin/orders", icon: <ShoppingBag /> },
    { name: "Products", path: "/admin/products", icon: <Package /> },
    { name: "Users", path: "/admin/users", icon: <Users /> },
    { name: "Vendors", path: "/admin/vendors", icon: <Store /> },
    { name: "Payments", path: "/admin/payments", icon: <CreditCard /> },
    { name: "Customer Support", path: "/admin/support", icon: <Headphones /> },
  ];

  return (
    <aside className="w-64 bg-[#7b5cf4] text-white p-5 flex flex-col h-screen sticky top-0">
      <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
      <nav className="flex flex-col gap-2 flex-grow">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition ${
                isActive
                  ? "bg-white text-[#7b5cf4] font-medium"
                  : "hover:bg-[#8b6ef8]"
              }`
            }
          >
            {item.icon}
            {item.name}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
