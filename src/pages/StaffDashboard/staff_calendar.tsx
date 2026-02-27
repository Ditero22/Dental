import { useState, useEffect, useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { type Appointment, appointments } from "./data/staff_appointment";

type StaffCalendarProps = {
  onSelectAppointments: (appointments: Appointment[]) => void;
};

export function StaffCalendar({ onSelectAppointments }: StaffCalendarProps) {
  const [currentEvents, setCurrentEvents] = useState<any[]>([]);
  const [weekendsVisible] = useState(true);
  const calendarRef = useRef<FullCalendar | null>(null);

  useEffect(() => {
    // Group appointments by date
    const grouped: Record<string, Appointment[]> = {};

    appointments.forEach((a) => {
      if (!grouped[a.date]) grouped[a.date] = [];
      grouped[a.date].push(a);
    });

    // Convert to FullCalendar events
    const events = Object.entries(grouped).map(([date, appts]) => ({
      id: date,
      title: `${appts.length} appointment${appts.length > 1 ? "s" : ""}`,
      start: date,
      allDay: true,
      extendedProps: { appointments: appts },
      classNames: ["staff-appointment-event"],
    }));

    setCurrentEvents(events);
  }, []);

  const handleEventClick = (clickInfo: any) => {
    const appts: Appointment[] =
      clickInfo.event.extendedProps.appointments;

    if (appts && appts.length > 0) {
      onSelectAppointments(appts);
    }
  };

  return (
    <div className="h-full">

      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={currentEvents}
        weekends={weekendsVisible}
        height="100%"
        dayMaxEvents
        eventDisplay="block"
        eventClick={handleEventClick}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
      />

      {/* Custom Styling to match screenshot */}
      <style>{`
        .staff-appointment-event {
          background: #3b82f6 !important;
          border: none !important;
          font-size: 11px !important;
          padding: 2px !important;
          border-radius: 4px !important;
          text-align: center;
        }

        .fc-day-other {
          background: #f3f4f6;
        }

        .fc .fc-toolbar-title {
          font-size: 18px;
          font-weight: 600;
        }

        .fc-button {
          background: #e5e7eb !important;
          border: none !important;
          color: #111827 !important;
        }

        .fc-button-active {
          background: #14b8a6 !important;
          color: white !important;
        }
      `}</style>
    </div>
  );
}