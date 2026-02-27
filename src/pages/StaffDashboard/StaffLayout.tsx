import React, { useEffect, useRef } from "react";
import Sidebar, { type SidebarLink } from "@/components/layout/Sidebar";
import { Navbar } from "@/components";
import { useAuth } from "@/context";
import { Outlet, useLocation } from "react-router-dom";
import { LayoutGrid, User, Calendar, CreditCard } from "lucide-react";

const dashboardLinks: SidebarLink[] = [
  { name: "Dashboard", path: "/staff-dashboard/dashboard", icon: <LayoutGrid className="w-5 h-5" /> },
  { name: "Patients", path: "/staff-dashboard/patients", icon: <User className="w-5 h-5" /> },
  { name: "Appointments", path: "/staff-dashboard/appointments", icon: <Calendar className="w-5 h-5" /> },
  { name: "Billing", path: "/staff-dashboard/billing", icon: <CreditCard className="w-5 h-5" /> },
  { name: "Inventory", path: "/staff-dashboard/inventory", icon: <CreditCard className="w-5 h-5" /> },
];

export default Staff;

export function Staff() {
  const { loggedUser } = useAuth();
  const userName = loggedUser?.name || "User";
  const location = useLocation();
  const mainRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({
        top: 0,
        behavior: "auto",
      });
    }
  }, [location.pathname]);

  return (
    <div className="h-screen overflow-hidden bg-gray-100">
      <nav className="fixed top-0 left-0 right-0 h-16 z-50 bg-white shadow-md flex items-center px-6">
        <Navbar mode="dashboard" userName={userName} />
      </nav>

      <div className="flex pt-10 h-full">
        <aside className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-white shadow-md">
          <Sidebar links={dashboardLinks} />
        </aside>
        <main
          ref={mainRef}
          className="ml-64 flex-1 p-6 overflow-y-auto"
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}