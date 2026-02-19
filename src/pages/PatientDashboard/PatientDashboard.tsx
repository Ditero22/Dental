import { Navbar } from "@/components";
import { useAuth } from "@/context";
import { Outlet } from "react-router-dom";
import { AppointmentRecord } from "./AppointmentRecord";
import { Calendar } from "./AppointmentCalendarT";



export function PatientDashboard() {
  const { loggedUser } = useAuth();
  const userName = loggedUser?.name || "User";

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <nav className="sticky top-0 z-50 bg-white shadow-md flex items-center px-6">
        <Navbar mode="dashboard" userName={userName} />
      </nav>

      <main className="flex-1 p-6 mt-15">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <AppointmentRecord />
          </div>
          <div className="flex-2">
            <div className="bg-white rounded-xl shadow p-4">
              <Calendar />
            </div>
          </div>

        </div> 
        <Outlet />
      </main>
    </div>
  );
}
