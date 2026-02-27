import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context";

type Role = "Admin" | "Staff" | "Patient" | "Dentist";

type ProtectedRouteProps = {
  allowedRoles?: Role[];
};

export function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
  const { loggedUser, loading } = useAuth();

  // Wait until auth state is loaded
  if (loading) return null; // or show a spinner

  // Not logged in
  if (!loggedUser) return <Navigate to="/" replace />;

  // Logged in but role not allowed
  if (allowedRoles && !allowedRoles.includes(loggedUser.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}