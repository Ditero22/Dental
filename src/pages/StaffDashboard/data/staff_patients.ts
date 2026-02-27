// /data/staff_patients.ts

export interface Patient {
  id: string;
  name: string;
  patientId: string;
  lastVisit: string;
  phone: string;
  email: string;
  status: "Active" | "Inactive";
}

export const patientsData: Patient[] = [
  {
    id: "1",
    name: "Mark Santos",
    patientId: "#PT-5301",
    lastVisit: "Jan 05, 2024",
    phone: "+63917234567",
    email: "marksantos@email.com",
    status: "Active",
  },
  {
    id: "2",
    name: "Lisa Wong",
    patientId: "#PT-7626",
    lastVisit: "Jan 07, 2024",
    phone: "+63918111233",
    email: "lisawong@email.com",
    status: "Active",
  },
  {
    id: "3",
    name: "Ella Navarro",
    patientId: "#PT-2447",
    lastVisit: "Jan 11, 2024",
    phone: "+639201234890",
    email: "ellanavarro@email.com",
    status: "Active",
  },
  {
    id: "4",
    name: "Sarah Green",
    patientId: "#PT-1892",
    lastVisit: "Jan 15, 2024",
    phone: "+639281234111",
    email: "sarahgreen@email.com",
    status: "Active",
  },
  {
    id: "5",
    name: "Jason Lopez",
    patientId: "#PT-5756",
    lastVisit: "Jan 17, 2024",
    phone: "+639951234222",
    email: "jasonlopez@email.com",
    status: "Active",
  },
  {
    id: "6",
    name: "Nina Castillo",
    patientId: "#PT-1511",
    lastVisit: "Jan 20, 2024",
    phone: "+639771234333",
    email: "ninacastillo@email.com",
    status: "Active",
  },
  {
    id: "7",
    name: "Adrian Flores",
    patientId: "#PT-2729",
    lastVisit: "Jan 22, 2024",
    phone: "+639661234444",
    email: "adrianflores@email.com",
    status: "Active",
  },
  {
    id: "8",
    name: "Paula Ramos",
    patientId: "#PT-2639",
    lastVisit: "Jan 15, 2024",
    phone: "+639051234555",
    email: "paularamos@email.com",
    status: "Active",
  },
  {
    id: "9",
    name: "Trisha Bautista",
    patientId: "#PT-1560",
    lastVisit: "Jan 26, 2024",
    phone: "+639881112333",
    email: "trisha@email.com",
    status: "Active",
  },
  {
    id: "10",
    name: "Ivy Salazar",
    patientId: "#PT-3568",
    lastVisit: "Jan 27, 2024",
    phone: "+639051223344",
    email: "ivysalazar@email.com",
    status: "Active",
  },
  {
    id: "11",
    name: "Robert Lee",
    patientId: "#PT-2417",
    lastVisit: "Jan 30, 2024",
    phone: "+639051556677",
    email: "robertlee@email.com",
    status: "Active",
  },
];