export interface Appointment {
  id: number;
  title: string;
  date: string;
  time: string;
  doctor: string;
  type: string;
  status: "Approved" | "Pending" | "Cancelled"; // ✅ Added
  profile?: string;
}

export const appointments: Appointment[] = [
  {
    id: 1,
    title: "James Yap",
    date: "2026-01-09",
    time: "07:00 AM",
    doctor: "Dr. Smith",
    type: "Tooth Extraction",
    status: "Pending",
    profile: "/profiles/james.jpg",
  },
  {
    id: 2,
    title: "Mark Potter",
    date: "2026-01-09",
    time: "08:00 AM",
    doctor: "Dr. Brown",
    type: "Tooth Filling",
    status: "Approved",
    profile: "/profiles/mark.jpg",
  },
  {
    id: 3,
    title: "Harry James",
    date: "2026-01-09",
    time: "09:00 AM",
    doctor: "Dr. Lee",
    type: "Tooth Filling",
    status: "Approved",
    profile: "/profiles/harry.jpg",
  },
  {
    id: 4,
    title: "Juan Kite",
    date: "2026-02-26",
    time: "10:00 PM",
    doctor: "Dr. Lee",
    type: "Tooth Filling",
    status: "Approved",
    profile: "/profiles/juan.jpg",
  },
  {
    id: 5,
    title: "Diether Kyle",
    date: "2026-02-28",
    time: "11:00 AM",
    doctor: "Dr. Smith",
    type: "Tooth Filling",
    status: "Approved",
    profile: "/profiles/diether.jpg",
  },
  {
    id: 6,
    title: "James Yap",
    date: "2026-03-01",
    time: "10:00 AM",
    doctor: "Dr. Smith",
    type: "Checkup",
    status: "Pending",
    profile: "/profiles/james.jpg",
  },
  {
    id: 7,
    title: "Harry James",
    date: "2026-02-27",
    time: "09:00 AM",
    doctor: "Dr. Brown",
    type: "Filling",
    status: "Approved",
    profile: "/profiles/harry.jpg",
  },
  {
    id: 8,
    title: "Diether Kyle",
    date: "2026-02-27",
    time: "09:00 AM",
    doctor: "Dr. Brown",
    type: "Filling",
    status: "Cancelled",
    profile: "/profiles/diether.jpg",
  },
  {
    id: 9,
    title: "James Yap",
    date: "2026-02-27",
    time: "09:00 AM",
    doctor: "Dr. Brown",
    type: "Filling",
    status: "Approved",
    profile: "/profiles/james.jpg",
  },
];