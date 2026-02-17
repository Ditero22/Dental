import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context";

type Role = "Admin" | "Staff" | "Patient";

type ProtectedRouteProps = {
  allowedRoles?: Role[];
};
export function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
  const { loggedUser } = useAuth();

  if (!loggedUser) {
    // Not logged in
    return <Navigate to="/" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(loggedUser.role)) {
    // Role not allowed
    return <Navigate to="/" replace />;
  }

  // For nested routes, render <Outlet />
  return <Outlet />;
}
