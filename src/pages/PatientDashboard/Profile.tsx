import { Navbar } from "@/components";
import { useAuth } from "@/context";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function Profile() {
  const { loggedUser } = useAuth();
  const userName = loggedUser?.name || "User";
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-100">
      <nav className="sticky top-0 z-50 bg-white shadow-md w-full">
        <Navbar mode="dashboard" userName={userName} />
      </nav>
      <div className="relative flex flex-col items-center pt-24 px-4 w-full h-full">
        <button
          onClick={() => navigate("/patient-dashboard")}
          className="absolute top-20 left-6 flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div className="flex flex-col items-center w-full max-w-4xl">
          <h1 className="text-4xl font-semibold mb-4 text-center">My Profile</h1>
          <p className="text-gray-600 mb-6 text-center">
            Here you can view and edit your profile information.
          </p>
          <div className="w-full bg-white rounded-xl shadow p-6">
            <p className="mb-2"><strong>Name:</strong> {userName}</p>
            <p className="mb-2"><strong>Email:</strong> {loggedUser?.email || "user@example.com"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
