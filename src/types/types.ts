export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "Admin" | "Staff" | "Patient";
  contact?: string;
}

export interface Patient {
  id: number;
  name: string;
  age: number;
  contact: string;
  email: string;
  password: string;
}
