import { useState } from "react";
import { StaffCalendar } from "./staff_calendar";
import { type Appointment } from "./data/staff_appointment";

export function StaffAppointments() {
  const [todaysAppointments, setTodaysAppointments] = useState<Appointment[]>([]);
  const todayStr = new Date().toISOString().split("T")[0];

  const handleSelectAppointments = (appts: Appointment[]) => {
    setTodaysAppointments(prev => {
      const newAppointments = [...prev];
      appts.forEach(a => {
        if (!newAppointments.find(x => x.id === a.id)) {
          newAppointments.push(a);
        }
      });
      return newAppointments;
    });
  };

  return (
    <div className="flex gap-6 h-full">
      <div className="w-1/4 bg-white rounded-xl p-6 shadow flex flex-col items-center text-center">
        <h3 className="text-sm font-semibold text-blue-600 mb-4">Today's Appointments</h3>
        <ul className="w-full space-y-3">
          {todaysAppointments
            .filter(a => a.date === todayStr)
            .map(a => (
              <li
                key={a.id}
                className="flex items-center gap-3 p-2 cursor-pointer hover:bg-gray-100 rounded"
              >
                {a.profile ? (
                  <img
                    src={a.profile}
                    alt={a.title}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold text-gray-700">
                    {a.title
                      .split(" ")
                      .map(n => n[0])
                      .join("")}
                  </div>
                )}
                <div className="flex flex-col items-start">
                  <span className="font-semibold">{a.title}</span>
                  <span className="text-sm text-gray-500">Time: {a.time}</span>
                  <span className="text-sm text-gray-500">Treatment: {a.type}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>
      <StaffCalendar onSelectAppointments={handleSelectAppointments} />
    </div>
  );
}