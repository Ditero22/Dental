import React from 'react'
import {
  type EventApi,
  type DateSelectArg,
  type EventClickArg,
  type EventContentArg,
  formatDate,
} from '@fullcalendar/core'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import { INITIAL_EVENTS, createEventId } from './event-utils'

interface DemoAppState {
  weekendsVisible: boolean
  currentEvents: EventApi[]
}

export class Calendar extends React.Component<{}, DemoAppState> {

  state: DemoAppState = {
    weekendsVisible: true,
    currentEvents: []
  }

  render() {
    return (
      <div className="w-full max-w-6xl mx-auto px-3 sm:px-4">

        {/* CALENDAR FIRST */}
        <div className="bg-white rounded-xl shadow-sm p-2 sm:p-4">

          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}

            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}

            initialView="dayGridMonth"

            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}

            weekends={this.state.weekendsVisible}

            initialEvents={INITIAL_EVENTS}

            select={this.handleDateSelect}
            eventContent={renderEventContent}
            eventClick={this.handleEventClick}
            eventsSet={this.handleEvents}

            /* RESPONSIVE SETTINGS */
            height="auto"
            contentHeight="auto"
            aspectRatio={window.innerWidth < 640 ? 0.9 : 1.8}
          />

        </div>

        {/* SIDEBAR BELOW CALENDAR */}
        <div className="mt-4 bg-white rounded-xl shadow-sm p-4">

          <div className="mb-4">
            <h2 className="font-semibold text-lg mb-2">Instructions</h2>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Select dates to create event</li>
              <li>Drag and resize events</li>
              <li>Click event to delete</li>
            </ul>
          </div>

          <div className="mb-4">
            <label className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={this.state.weekendsVisible}
                onChange={this.handleWeekendsToggle}
              />
              Toggle weekends
            </label>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">
              All Events ({this.state.currentEvents.length})
            </h2>

            <ul className="space-y-1 text-sm">
              {this.state.currentEvents.map(renderSidebarEvent)}
            </ul>
          </div>

        </div>

      </div>
    )
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }

  handleDateSelect = (selectInfo: DateSelectArg) => {

    const title = prompt('Enter event title')
    const calendarApi = selectInfo.view.calendar

    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  handleEventClick = (clickInfo: EventClickArg) => {

    if (confirm(`Delete event '${clickInfo.event.title}'?`)) {
      clickInfo.event.remove()
    }

  }

  handleEvents = (events: EventApi[]) => {
    this.setState({
      currentEvents: events
    })
  }

}


/* EVENT CONTENT */
function renderEventContent(eventContent: EventContentArg) {
  return (
    <div className="text-xs sm:text-sm">
      <b className="mr-1">{eventContent.timeText}</b>
      <span>{eventContent.event.title}</span>
    </div>
  )
}


/* SIDEBAR EVENT */
function renderSidebarEvent(event: EventApi) {
  return (
    <li key={event.id} className="flex gap-2">

      <b>
        {formatDate(event.start!, {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })}
      </b>

      <span>{event.title}</span>

    </li>
  )
}
