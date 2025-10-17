import React from "react";
import { Megaphone, CalendarDays } from "lucide-react";

const announcements = [
  {
    title: "New Vendor Onboarding Policy",
    date: "10 Oct 2025",
    description:
      "We’ve introduced a new onboarding checklist for vendors to ensure better product compliance and faster approvals.",
    type: "Policy Update",
  },
  {
    title: "Platform Maintenance - Oct 20th",
    date: "12 Oct 2025",
    description:
      "Scheduled maintenance on October 20th between 1:00 AM and 4:00 AM IST. Please plan your operations accordingly.",
    type: "Maintenance",
  },
  {
    title: "Diwali Offers for Vendors",
    date: "08 Oct 2025",
    description:
      "Special commission discounts and boosted visibility campaigns are now live for the festive season!",
    type: "Offer",
  },
];

const Announcements = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
          <Megaphone className="text-[#7b5cf4]" size={26} />
          Platform Announcements
        </h2>
        <button className="mt-4 sm:mt-0 bg-[#7b5cf4] text-white px-4 py-2 rounded-lg shadow hover:bg-[#6841e0] transition">
          + Create Announcement
        </button>
      </div>

      {/* Announcements List */}
      <div className="bg-white rounded-xl shadow-lg divide-y divide-gray-100 overflow-hidden">
        {announcements.map((a, i) => (
          <div
            key={i}
            className="p-6 hover:bg-gray-50 transition flex flex-col sm:flex-row sm:items-center sm:justify-between"
          >
            {/* Left Side - Title & Description */}
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span
                  className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    a.type === "Policy Update"
                      ? "bg-green-100 text-green-700"
                      : a.type === "Maintenance"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-purple-100 text-purple-700"
                  }`}
                >
                  {a.type}
                </span>
                <p className="text-gray-400 text-sm flex items-center gap-1">
                  <CalendarDays size={14} /> {a.date}
                </p>
              </div>
              <h4 className="text-lg font-medium text-[#7b5cf4] mb-1">
                {a.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {a.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
