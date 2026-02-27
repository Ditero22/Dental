import { useState, useEffect } from "react";
import { useLocalStorage } from "@/hooks";
import type { User, Patient } from "@/types";
import { defaultUsers, defaultPatients } from "@/types";

export function useAuth() {
  const [users, setUsers] = useLocalStorage<User[]>("users", defaultUsers);
  const [patients] = useLocalStorage<Patient[]>("patients", defaultPatients);
  const [loggedUser, setLoggedUser] = useLocalStorage<User | null>("loggedUser", null);

  // Track if localStorage state is loaded
  const [loading, setLoading] = useState(true);

  // Initialize default users if missing
  useEffect(() => {
    if (!users || users.length === 0) setUsers(defaultUsers);
    setLoading(false); // mark loading complete
  }, []);

  const login = (identifier: string, password: string): User | null => {
    const trimmedIdentifier = identifier.trim().toLowerCase();
    const trimmedPassword = password.trim();

    let user = users.find(
      u =>
        (u.email.toLowerCase() === trimmedIdentifier ||
         (u.contact && u.contact.trim() === trimmedIdentifier)) &&
        u.password === trimmedPassword
    );

    if (!user) {
      const patient = patients.find(
        p =>
          (p.email.toLowerCase() === trimmedIdentifier ||
           p.contact.trim() === trimmedIdentifier) &&
          p.password === trimmedPassword
      );
      if (patient) user = { ...patient, role: "Patient" };
    }

    if (user) setLoggedUser(user);
    return user || null;
  };

  const logout = () => setLoggedUser(null);

  return { users, patients, loggedUser, login, logout, loading };
}