import { useLocalStorage } from "@/hooks";
import type { User, Patient } from "@/types";
import { defaultUsers, defaultPatients } from "@/types";

export function useAuth() {
  const [users] = useLocalStorage<User[]>("users", defaultUsers);
  const [patients] = useLocalStorage<Patient[]>("patients", defaultPatients);
  const [loggedUser, setLoggedUser] = useLocalStorage<User | null>("loggedUser", null);

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

    if (user) {
      setLoggedUser(user);
      return user;
    }

    return null;
  };

  const logout = () => setLoggedUser(null);

  return { users, patients, loggedUser, login, logout };
}