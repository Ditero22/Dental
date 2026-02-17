import type { User, Patient } from "./types";

export const defaultUsers: User[] = [
  { id: 1, name: "Admin", email: "admin@example.com", password: "admin", role: "Admin" },
  { id: 2, name: "Staff", email: "staff@example.com", password: "staff", role: "Staff" },
  { id: 3, name: "John Doe", email: "patient@example.com", password: "patient123", role: "Patient" },
];

export const defaultPatients: Patient[] = [
  { id: 1, name: "Karl Diether", age: 30, contact: "1234", email: "1234", password: "1234" },
  { id: 2, name: "Patient Two", age: 25, contact: "09987654321", email: "patient2@example.com", password: "patient2" },
  { id: 3, name: "Patient Three", age: 40, contact: "4321", email: "4321", password: "4321" },
];
