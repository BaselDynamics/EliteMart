import React, { useState } from "react";
import {
  Bell,
  User,
  Settings,
  MessageSquare,
  Search,
} from "lucide-react";

const AdminNavbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-white/80 backdrop-blur-md px-6 py-3 shadow-md sticky top-0 z-30 border-b border-gray-100">
      {/* Left Section */}
      <h2 className="text-xl font-semibold text-[#7b5cf4] tracking-wide">
        Welcome Back, Admin 👋
      </h2>

      {/* Right Section */}
      <div className="flex items-center gap-5 relative">

        {/* Icons */}
        <div className="flex items-center gap-5 text-gray-600">
          <MessageSquare
            size={22}
            className="hover:text-[#7b5cf4] cursor-pointer transition-transform hover:scale-110"
            title="Messages"
          />
          <Settings
            size={22}
            className="hover:text-[#7b5cf4] cursor-pointer transition-transform hover:scale-110"
            title="Settings"
          />
          <Bell
            size={22}
            className="hover:text-[#7b5cf4] cursor-pointer transition-transform hover:scale-110"
            title="Notifications"
          />
        </div>

        {/* Profile Icon with Dropdown */}
        <div className="relative">
          <User
            size={24}
            className="text-gray-600 hover:text-[#7b5cf4] cursor-pointer transition-transform hover:scale-110"
            onClick={() => setOpenDropdown(!openDropdown)}
            title="Profile"
          />
          {openDropdown && (
            <div className="absolute right-0 mt-3 bg-white border border-gray-200 shadow-lg rounded-xl w-52 z-50 overflow-hidden">
              <p className="px-4 py-2 text-gray-700 font-medium hover:bg-gray-100 cursor-pointer">
                My Account
              </p>
              <p className="px-4 py-2 text-gray-700 font-medium hover:bg-gray-100 cursor-pointer">
                Orders
              </p>
              <p className="px-4 py-2 text-gray-700 font-medium hover:bg-gray-100 cursor-pointer">
                Subscriptions
              </p>
              <hr />
              <p className="px-4 py-2 text-red-500 font-medium hover:bg-gray-100 cursor-pointer">
                Sign Out
              </p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
