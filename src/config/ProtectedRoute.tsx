import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context";

type Role = "Admin" | "Staff" | "Patient";

type ProtectedRouteProps = {
  allowedRoles?: Role[];
};
export function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
  const { loggedUser } = useAuth();

  if (!loggedUser) {
    return <Navigate to="/" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(loggedUser.role)) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}
