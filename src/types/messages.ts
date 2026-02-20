export type Message = {
  id: number;
  sender: string; // who sent the message
  text: string;
  time: string; // exact ISO timestamp
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
      { id: 1, sender: "Clinic", text: "Your appointment is confirmed.", time: "2026-02-19T10:59:00" },
    ],
    lastMessage: "Your appointment is confirmed.",
    lastTime: "2026-02-19T10:59:00",
  },
  {
    id: 2,
    user: "Dr. Smith",
    messages: [
      { id: 2, sender: "Dr. Smith", text: "Please arrive early tomorrow.", time: "2026-02-19T09:50:00" },
    ],
    lastMessage: "Please arrive early tomorrow.",
    lastTime: "2026-02-19T09:50:00",
  },
  {
    id: 3,
    user: "Reception",
    messages: [
      { id: 3, sender: "Reception", text: "Reminder for your cleaning.", time: "2026-02-19T00:00:00" },
    ],
    lastMessage: "Reminder for your cleaning.",
    lastTime: "2026-02-19T00:00:00",
  },
  {
    id: 4,
    user: "Admin",
    messages: [
      { id: 4, sender: "Admin", text: "System update completed.", time: "2026-02-18T15:30:00" },
    ],
    lastMessage: "System update completed.",
    lastTime: "2026-02-18T15:30:00",
  },
  {
    id: 5,
    user: "Brix",
    messages: [
      { id: 5, sender: "Brix", text: "wadafakkkk.", time: "2026-02-19T20:30:00" },
    ],
    lastMessage: "System update completed.",
    lastTime: "2026-02-19T20:30:00",
  },
];
