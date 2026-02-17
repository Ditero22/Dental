import { Navigate } from "react-router-dom";
import { useAuth } from "@/context";
import type { JSX } from "react";

type ProtectedRouteProps = {
  allowedRoles: ("Admin" | "Staff" | "Patient")[];
  children: JSX.Element;
};

export function ProtectedRoute({ allowedRoles, children }: ProtectedRouteProps) {
  const { loggedUser } = useAuth();

  if (!loggedUser) {
    return <Navigate to="/" replace />;
  }

  if (!allowedRoles.includes(loggedUser.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}
