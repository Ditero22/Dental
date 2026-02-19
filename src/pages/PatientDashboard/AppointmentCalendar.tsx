import { useState, useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { createPortal } from "react-dom";

type Appointment = {
  id: number;
  title: string;
  date: string;
  time: string;
  doctor: string;
  type: string;
};

const generateDateRange = (start: string, end: string) => {
  const dates: string[] = [];
  const current = new Date(start);
  const last = new Date(end);
  while (current <= last) {
    dates.push(current.toISOString().split("T")[0]);
    current.setDate(current.getDate() + 1);
  }
  return dates;
};

const availableDates = generateDateRange("2026-02-18", "2026-03-28");

const doctors = [
  { name: "Dr. Smith", availableDates },
  { name: "Dr. Brown", availableDates },
  { name: "Dr. Lee", availableDates },
];

const initialAppointments: Appointment[] = [
  { id: 1, title: "Tooth Extraction", date: "2026-01-09", time: "10:00 AM", doctor: "Dr. Smith", type: "Extraction" },
  { id: 2, title: "Tooth Filling", date: "2026-01-14", time: "2:00 PM", doctor: "Dr. Brown", type: "Filling" },
  { id: 3, title: "Adjustment", date: "2026-01-22", time: "1:00 PM", doctor: "Dr. Lee", type: "Adjustment" },
];

const appointmentTypes = ["Extraction", "Filling", "Cleaning", "Adjustment", "Checkup"];

const generateTimes = (): string[] => {
  const times: string[] = [];
  const addTime = (hour: number, minute: number) => {
    const period = hour >= 12 ? "PM" : "AM";
    const displayHour = hour > 12 ? hour - 12 : hour;
    const mStr = minute.toString().padStart(2, "0");
    times.push(`${displayHour}:${mStr} ${period}`);
  };
  for (let i = 8; i <= 11; i++) {
    addTime(i, 0);
    addTime(i, 30);
  }
  for (let i = 13; i <= 16; i++) {
    addTime(i, 0);
    addTime(i, 30);
  }
  times.push("5:00 PM");
  return times;
};

const allowedTimes = generateTimes();

export function AppointmentCalendar() {
  const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments);
  const [currentEvents, setCurrentEvents] = useState<any[]>([]);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [showNewModal, setShowNewModal] = useState(false);
  const [newType, setNewType] = useState(appointmentTypes[0]);
  const [newTime, setNewTime] = useState(allowedTimes[0]);
  const [newDoctor, setNewDoctor] = useState("");
  const [weekendsVisible, setWeekendsVisible] = useState(true);

  const calendarRef = useRef<FullCalendar | null>(null);
  const todayStr = new Date().toISOString().split("T")[0];
  useEffect(() => {
    setCurrentEvents(
      appointments.map(a => ({
        id: a.id.toString(),
        title: a.type,
        start: a.date,
        allDay: true,
        classNames: ["appointment-event"],
      }))
    );
  }, [appointments]);

  const handleEventClick = (clickInfo: any) => {
    const found = appointments.find(a => a.id.toString() === clickInfo.event.id);
    if (found) setSelectedAppointment(found);
  };

  const handleWeekendsToggle = () => setWeekendsVisible(prev => !prev);

  const openNewAppointmentModal = (dateStr: string) => {
    if (dateStr < todayStr) return;
    setSelectedDate(dateStr);
    setNewType(appointmentTypes[0]);
    setNewTime(allowedTimes[0]);
    const availableDoctors = doctors.filter(d => d.availableDates.includes(dateStr));
    setNewDoctor(availableDoctors.length ? availableDoctors[0].name : "");
    setShowNewModal(true);
  };

  const saveNewAppointment = () => {
    if (!selectedDate) return;
    const newAppointment: Appointment = {
      id: appointments.length + 1,
      title: `${newType} Appointment`,
      date: selectedDate,
      time: newTime,
      doctor: newDoctor,
      type: newType,
    };
    setAppointments(prev => [...prev, newAppointment]);
    setShowNewModal(false);
    setSelectedAppointment(newAppointment);
  };

  const closeModal = () => {
    setSelectedAppointment(null);
    setShowNewModal(false);
  };

  return (
    <div className="flex-1 bg-white shadow-md rounded-lg p-4 h-full">

      <div className="mb-4 flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={weekendsVisible} onChange={handleWeekendsToggle} />
          Show Weekends
        </label>
      </div>

      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={currentEvents}
        weekends={weekendsVisible}
        height={600}
        dayMaxEvents={true}
        eventDisplay="block"
        eventClick={handleEventClick}
        dateClick={(info) => openNewAppointmentModal(info.dateStr)}
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        buttonText={{
          today: "Today",
          month: "M",
          week: "W",
          day: "D",
        }}
      />

      <hr />
      <div className="mt-4">
        <h2 className="font-semibold text-lg mb-2">All Appointments ({currentEvents.length})</h2>
        <ul className="space-y-1 text-sm">
          {currentEvents.map(event => (
            <li key={event.id} className="flex gap-2">
              <b>{new Date(event.start).toLocaleDateString()}</b>
              <span>{event.title}</span>
            </li>
          ))}
        </ul>
      </div>
      {selectedAppointment &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 pointer-events-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
              <h3 className="text-xl font-bold mb-2">{selectedAppointment.title}</h3>
              <p><strong>Date:</strong> {selectedAppointment.date}</p>
              <p><strong>Time:</strong> {selectedAppointment.time}</p>
              <p><strong>Doctor:</strong> {selectedAppointment.doctor}</p>
              <p><strong>Type:</strong> {selectedAppointment.type}</p>
              <button onClick={closeModal} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Close</button>
            </div>
          </div>,
          document.body
        )}
      {showNewModal && selectedDate &&
        createPortal(
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 pointer-events-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 sm:w-80">
              <h3 className="text-xl font-bold mb-4">New Appointment</h3>
              <div className="mb-2">
                <label className="font-semibold">Date</label>
                <input type="text" value={selectedDate} readOnly className="w-full border p-2 rounded bg-gray-100" />
              </div>
              <div className="mb-2">
                <label className="font-semibold">Type</label>
                <select className="w-full border p-2 rounded" value={newType} onChange={(e) => setNewType(e.target.value)}>
                  {appointmentTypes.map(type => <option key={type}>{type}</option>)}
                </select>
              </div>
              <div className="mb-2">
                <label className="font-semibold">Time</label>
                <select className="w-full border p-2 rounded" value={newTime} onChange={(e) => setNewTime(e.target.value)}>
                  {allowedTimes.map(time => <option key={time}>{time}</option>)}
                </select>
              </div>
              <div className="mb-2">
                <label className="font-semibold">Doctor</label>
                <select className="w-full border p-2 rounded" value={newDoctor} onChange={(e) => setNewDoctor(e.target.value)}>
                  {doctors.filter(d => d.availableDates.includes(selectedDate)).map(d => <option key={d.name}>{d.name}</option>)}
                </select>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button onClick={closeModal} className="px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
                <button onClick={saveNewAppointment} className="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
              </div>
            </div>
          </div>,
          document.body
        )}

      <style>{`
  .appointment-event {
    position: absolute !important;
    top: 18px;
    left: 2px;
    right: 2px;
    background: #44628a;
    color: white;
    border-radius: 4px;
    font-size: 11px;
    padding: 1px;
    text-align: center;
  }

  /* MOBILE VIEW */
  @media (max-width: 640px) {

    /* Reduce toolbar size */
    .fc .fc-toolbar-title {
      font-size: 1rem !important;
    }

    .fc .fc-button {
      font-size: 0.6rem !important;
      padding: 0.15rem 0.35rem !important;
    }

    /* Reduce day number size */
    .fc-daygrid-day-number {
      font-size: 0.7rem !important;
      padding: 2px !important;
    }

    .fc .fc-daygrid-day-frame {
      min-height: 55px !important;
      padding: 2px !important;
    }

    /* Reduce row height */
    .fc .fc-daygrid-body-natural .fc-daygrid-day-events {
      margin-top: 1px !important;
    }

    /* Reduce event font */
    .fc-event {
      font-size: 0.6rem !important;
      padding: 0 !important;
    }

  }
`}</style>
    </div>
  );
}
