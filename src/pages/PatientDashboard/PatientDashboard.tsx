import { Navbar } from "@/components";
import { useAuth } from "@/context";

export function PatientDashboard() {
    const { loggedUser  } = useAuth();
    const userName = loggedUser ?.name || "User";

    return (
      <div className="flex flex-col min-h-screen">
        <nav className="sticky top-0 z-50 bg-white shadow-md flex items-center px-6">
          <Navbar mode="dashboard" userName={userName} />
        </nav>
      </div>
  );
}
