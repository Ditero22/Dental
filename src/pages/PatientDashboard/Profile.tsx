import { Navbar } from "@/components";
import { useAuth } from "@/context";
import { User, Calendar, Stethoscope, Clock } from "lucide-react";

export function Profile() {
  const { loggedUser } = useAuth();
  const userName = loggedUser?.name || "User";

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-100">
      <nav className="sticky top-0 z-50 bg-white shadow-md w-full">
        <Navbar mode="dashboard" userName={userName} />
      </nav>
      <div className="flex flex-col items-center pt-24 px-4 w-full">
        <h1 className="text-3xl font-semibold mb-6">My Profile</h1>
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md p-10 flex flex-col items-center">
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/men/44.jpg"
              alt="Profile"
              className="w-28 h-28 rounded-lg object-cover"
            />
          </div>
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            {userName}
          </h2>
          <div className="flex flex-wrap justify-center gap-12 mt-8">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <User className="text-blue-500 w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Male</p>
                <p className="text-xs text-gray-400">Gender</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <Clock className="text-blue-500 w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-700">18</p>
                <p className="text-xs text-gray-400">Age</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <Stethoscope className="text-blue-500 w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-700">Dr. Juan Dela Cruz</p>
                <p className="text-xs text-gray-400">Consulting Doctor</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-16 mt-10">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <Clock className="text-blue-500 w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Recent Visit</p>
                <p className="text-sm text-blue-600">10/12/2025</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <Calendar className="text-blue-500 w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Upcoming Visit</p>
                <p className="text-sm text-blue-600">10/20/2126</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
