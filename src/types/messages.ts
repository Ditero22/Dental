export type Message = {
  id: number;
  sender: string;
  text: string;
  time: string;
  read: boolean; // new property
};

export type Conversation = {
  id: number;
  user: string;
  messages: Message[];
  lastMessage: string;
  lastTime: string;
};

export const conversations: Conversation[] = [
  {
    id: 1,
    user: "Clinic",
    messages: [
      { id: 1, sender: "Clinic", text: "Your appointment is confirmed.", time: "2026-02-19T10:59:00", read: true },
      { id: 11, sender: "Clinic", text: "Check your prescription.", time: "2026-02-19T11:00:00", read: true },
    ],
    lastMessage: "Check your prescription.",
    lastTime: "2026-02-19T11:00:00",
  },
  {
    id: 2,
    user: "Dr. Smith",
    messages: [
      { id: 2, sender: "Dr. Smith", text: "Please arrive early tomorrow.", time: "2026-02-19T09:50:00", read: false },
    ],
    lastMessage: "Please arrive early tomorrow.",
    lastTime: "2026-02-19T09:50:00",
  },
  {
    id: 3,
    user: "Reception",
    messages: [
      { id: 3, sender: "Reception", text: "Reminder for your cleaning.", time: "2026-02-19T00:00:00", read: true },
    ],
    lastMessage: "Reminder for your cleaning.",
    lastTime: "2026-02-19T00:00:00",
  },
  {
    id: 4,
    user: "Admin",
    messages: [
      { id: 4, sender: "Admin", text: "System update completed.", time: "2026-02-18T15:30:00", read: true },
    ],
    lastMessage: "System update completed.",
    lastTime: "2026-02-18T15:30:00",
  },
  {
    id: 5,
    user: "Brix",
    messages: [
      { id: 5, sender: "Brix", text: "wadafakkkk.", time: "2026-02-19T20:30:00", read: false },
    ],
    lastMessage: "wadafakkkk.",
    lastTime: "2026-02-19T20:30:00",
  },
  {
    id: 6,
    user: "Nurse Joy",
    messages: [
      { id: 6, sender: "Nurse Joy", text: "Your lab results are ready.", time: "2026-02-18T16:00:00", read: false },
    ],
    lastMessage: "Your lab results are ready.",
    lastTime: "2026-02-18T16:00:00",
  },
  {
    id: 7,
    user: "Reception",
    messages: [
      { id: 7, sender: "Reception", text: "Don't forget to bring your insurance card.", time: "2026-02-18T08:30:00", read: true },
    ],
    lastMessage: "Don't forget to bring your insurance card.",
    lastTime: "2026-02-18T08:30:00",
  },
  {
    id: 8,
    user: "Lab",
    messages: [
      { id: 8, sender: "Lab", text: "Blood test results are abnormal.", time: "2026-02-17T14:15:00", read: false },
    ],
    lastMessage: "Blood test results are abnormal.",
    lastTime: "2026-02-17T14:15:00",
  },
  {
    id: 9,
    user: "Clinic",
    messages: [
      { id: 9, sender: "Clinic", text: "Your next appointment is scheduled.", time: "2026-02-16T10:00:00", read: false },
    ],
    lastMessage: "Your next appointment is scheduled.",
    lastTime: "2026-02-16T10:00:00",
  },
  {
    id: 10,
    user: "Dr. Smith",
    messages: [
      { id: 10, sender: "Dr. Smith", text: "Follow-up needed for your treatment.", time: "2026-02-15T12:30:00", read: false },
    ],
    lastMessage: "Follow-up needed for your treatment.",
    lastTime: "2026-02-15T12:30:00",
  },
];