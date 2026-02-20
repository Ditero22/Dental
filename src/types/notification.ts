export type Notification = {
  id: number;
  title: string;
  message: string;
  date: string; 
  read: boolean;
};

export const notifications: Notification[] = [
  {
    id: 1,
    title: "Appointment Completed",
    message: "Your dental appointment has been completed.",
    date: "2026-02-10T09:00:00",
    read: true,
  },
  {
    id: 2,
    title: "Appointment Reminder",
    message: "You have an appointment tomorrow at 2:00 PM.",
    date: "2026-02-11T14:00:00",
    read: true,
  },
  {
    id: 3,
    title: "New Message",
    message: "You received a message from the clinic.",
    date: "2026-02-12T16:30:00",
    read: true,
  },
  {
    id: 4,
    title: "Appointment Approved",
    message: "Your appointment request has been approved.",
    date: "2026-02-13T10:30:00",
    read: false,
  },
  {
    id: 5,
    title: "Payment Received",
    message: "Your payment has been successfully processed.",
    date: "2026-02-14T11:15:00",
    read: false,
  },
  {
    id: 6,
    title: "Lab Results Ready",
    message: "Your lab results are now available.",
    date: "2026-02-15T09:45:00",
    read: true,
  },
  {
    id: 7,
    title: "Follow-up Needed",
    message: "Please schedule a follow-up appointment.",
    date: "2026-02-16T13:00:00",
    read: false,
  },
  {
    id: 8,
    title: "Clinic Update",
    message: "Our clinic will be closed on Feb 20th for maintenance.",
    date: "2026-02-17T08:30:00",
    read: true,
  },
  {
    id: 9,
    title: "New Promotion",
    message: "Get 20% off on your next dental cleaning.",
    date: "2026-02-18T12:00:00",
    read: false,
  },
  {
    id: 10,
    title: "Appointment Canceled",
    message: "Your appointment on Feb 19th has been canceled.",
    date: "2026-02-19T10:00:00",
    read: true,
  },
];