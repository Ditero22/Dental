import React from "react";
import Sidebar, {type SidebarLink } from "@/components/layout/Sidebar";
import { Navbar } from "@/components";
import { useAuth } from "@/context";
import { Outlet } from "react-router-dom";

const dashboardLinks: SidebarLink[] = [
  { name: "Dashboard", path: "/staff-dashboard/dashboard" },
  { name: "Patients", path: "/staff-dashboard/patients" },
  { name: "Appointments", path: "/staff-dashboard/appointments" },
  { name: "Billing", path: "/staff-dashboard/billing" },
  { name: "Inventory", path: "/staff-dashboard/inventory" },
];

export default StaffDashboard;

export function StaffDashboard(){
      const { loggedUser } = useAuth();
      const userName = loggedUser?.name || "User";
  return (
    <div>
    <nav className="sticky top-0 z-50 bg-white shadow-md flex items-center px-6">
        <Navbar mode="dashboard" userName={userName} />
    </nav>
    <div className="flex">
      <Sidebar links={dashboardLinks} />
      <main className="flex-1 p-6 bg-gray-100 min-h-screen">
        <Outlet /> 
      </main>
    </div>
    </div>
  );
}

