import { Navbar } from "@/components";
import { useAuth } from "@/context";
import { Outlet } from "react-router-dom";
import { AppointmentRecord } from "./AppointmentRecord";
import { AppointmentCalendar } from "./AppointmentCalendar";

export function PatientDashboard() {
  const { loggedUser } = useAuth();
  const userName = loggedUser?.name || "User";

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <nav className="sticky top-0 z-50 bg-white shadow-md flex items-center px-6">
        <Navbar mode="dashboard" userName={userName} />
      </nav>
<<<<<<< HEAD

      <main className="flex-1 p-6 mt-15">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
=======
      <main className="flex-1 p-4 sm:p-6 mt-15">
        <div className="flex flex-col-reverse md:flex-row gap-6">
          <div className="w-full md:flex-1">
>>>>>>> main
            <AppointmentRecord />
          </div>
          <div className="w-full md:flex-[2]">
            <AppointmentCalendar />
          </div>
<<<<<<< HEAD
        </div> 
=======

        </div>
>>>>>>> main
        <Outlet />
      </main>
    </div>
  );
}
