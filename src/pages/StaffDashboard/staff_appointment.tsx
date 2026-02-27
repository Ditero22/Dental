import { useState } from "react";
import { StaffCalendar } from "./staff_calendar";
import { type Appointment } from "./data/staff_appointment";
import { Plus, Download, Printer, Check, X, Eye } from "lucide-react";

export function StaffAppointment() {
  const [todaysAppointments, setTodaysAppointments] = useState<Appointment[]>([]);
  const todayStr = new Date().toISOString().split("T")[0];

  const handleSelectAppointments = (appts: Appointment[]) => {
    setTodaysAppointments(prev => {
      const updated = [...prev];
      appts.forEach(a => {
        if (!updated.find(x => x.id === a.id)) {
          updated.push(a);
        }
      });
      return updated;
    });
  };

  return (
    <div className="flex flex-col gap-2 h-full mt-4">

      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-teal-600 text-white text-xs rounded-md shadow-sm hover:bg-teal-700">
            <Plus size={14} />
            New Appointment
          </button>

          <button className="flex items-center gap-1.5 px-3 py-1.5 border text-xs rounded-md bg-white hover:bg-gray-50">
            <Download size={14} />
            Export
          </button>

          <button className="flex items-center gap-1.5 px-3 py-1.5 border text-xs rounded-md bg-white hover:bg-gray-50">
            <Printer size={14} />
            Print Schedule
          </button>
        </div>

        <div className="flex gap-2">
          <select className="px-3 py-1.5 border rounded-md bg-white text-xs">
            <option>All Doctors</option>
          </select>

          <select className="px-3 py-1.5 border rounded-md bg-white text-xs">
            <option>All Status</option>
          </select>
        </div>
      </div>

      <h2 className="text-base font-semibold">Appointment Calendar</h2>

      <div className="flex gap-6 flex-1">

        <div className="w-1/4 bg-white rounded-xl p-5 shadow flex flex-col">
          <h3 className="text-sm font-semibold text-teal-600 text-center mb-3">
            Today's Appointments
          </h3>

          <div className="border-b mb-3" />

          <ul className="flex flex-col divide-y overflow-y-auto">

            {todaysAppointments
              .filter(a => a.date === todayStr)
              .map(a => (
                <li key={a.id} className="py-4 flex flex-col gap-3">

                  <div className="flex items-start justify-between">

                    <div className="flex items-start gap-3">
                      {a.profile ? (
                        <img
                          src={a.profile}
                          alt={a.title}
                          className="w-9 h-9 rounded-full object-cover"
                        />
                      ) : (
                        <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-xs font-semibold text-gray-700">
                          {a.title
                            .split(" ")
                            .map(n => n[0])
                            .join("")}
                        </div>
                      )}

                      <div className="flex flex-col">
                        <span className="font-semibold text-sm">
                          {a.title}
                        </span>
                        <span className="text-xs text-gray-500">
                          Time: {a.time}
                        </span>
                        <span className="text-xs text-gray-500">
                          Treatment: {a.type}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        a.status === "Approved"
                          ? "bg-green-100 text-green-600"
                          : a.status === "Pending"
                          ? "bg-red-100 text-red-500"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {a.status}
                    </span>
                  </div>

                  <div className="flex justify-end gap-4">
                    {a.status === "Pending" && (
                      <>
                        <button className="text-red-500 hover:scale-110 transition">
                          <X size={16} />
                        </button>
                        <button className="text-green-500 hover:scale-110 transition">
                          <Check size={16} />
                        </button>
                      </>
                    )}

                    {a.status === "Approved" && (
                      <button className="text-blue-500 hover:scale-110 transition">
                        <Eye size={16} />
                      </button>
                    )}
                  </div>

                </li>
              ))}

          </ul>

          <button className="mt-4 py-1.5 text-xs bg-gray-100 rounded-md hover:bg-gray-200">
            See More
          </button>
        </div>

        <div className="flex-1 bg-white rounded-xl p-5 shadow">
          <StaffCalendar onSelectAppointments={handleSelectAppointments} />
        </div>

      </div>
    </div>
  );
}