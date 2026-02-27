export interface ServiceItem {
  description: string;
  toothNo?: string;
  qty: number;
  unitPrice: number;
}

export interface PatientBilling {
  id: number;
  name: string;
  status: "Active" | "Inactive";
  dob: string;
  phone: string;
  email: string;
  address: string;
  outstandingBalance: number;
  totalPaid: number;
  appointmentDate: string;
  dentist: string;
  treatmentDate: string;
  services: ServiceItem[];
}

export const billingData: PatientBilling = {
  id: 1,
  name: "Robin Villamor",
  status: "Active",
  dob: "February 2, 2003",
  phone: "+63 123456789",
  email: "robin@email.com",
  address: "Bukidnon",
  outstandingBalance: 2300,
  totalPaid: 3000,
  appointmentDate: "February 5, 2026 - 9:00 PM",
  dentist: "Dr. Dentist",
  treatmentDate: "February 5, 2026",
  services: [
    { description: "Teeth Cleaning", qty: 1, unitPrice: 1500 },
    { description: "Fluoride Treatment", qty: 1, unitPrice: 800 },
  ],
};