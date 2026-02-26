import { useState, useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { type Appointment, appointments } from "./data/staff_appointment";

type StaffCalendarProps = {
  onSelectAppointments: (appointments: Appointment[]) => void; // now takes an array
};

export function StaffCalendar({ onSelectAppointments }: StaffCalendarProps) {
  const [currentEvents, setCurrentEvents] = useState<any[]>([]);
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const calendarRef = useRef<FullCalendar | null>(null);

  useEffect(() => {
    // Group appointments by date
    const grouped: Record<string, Appointment[]> = {};
    appointments.forEach(a => {
      if (!grouped[a.date]) grouped[a.date] = [];
      grouped[a.date].push(a);
    });

    // Map grouped appointments to calendar events
    const events = Object.entries(grouped).map(([date, appts]) => ({
      id: date,
      title: `${appts.length} appointment${appts.length > 1 ? "s" : ""}`,
      start: date,
      allDay: true,
      extendedProps: { appointments: appts }, // pass the appointments array
      classNames: ["appointment-event"],
    }));

    setCurrentEvents(events);
  }, []);

  const handleEventClick = (clickInfo: any) => {
    const appts: Appointment[] = clickInfo.event.extendedProps.appointments;
    if (appts && appts.length > 0) {
      onSelectAppointments(appts); // send all appointments of that day
    }
  };

  return (
    <div className="flex-1 bg-white rounded-xl p-6 shadow">
      <div className="mb-4 flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            className="accent-blue-600 w-4 h-4 rounded"
            checked={weekendsVisible}
            onChange={() => setWeekendsVisible(prev => !prev)}
          />
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
        dayMaxEvents
        eventDisplay="block"
        eventClick={handleEventClick}
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
      />

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
        .fc-day-other { background: #f9fafb; }
      `}</style>
    </div>
  );
}