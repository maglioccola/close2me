import * as React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import { EventType } from '../types'

import '../style.scss'

interface CalendarState {
  calendarWeekends: boolean
}

type Props = {
  events: EventType[];
}

export default class Calendar extends React.Component<Props, CalendarState> {

  calendarComponentRef = React.createRef<FullCalendar>()

  constructor(props: Props) {
    super(props)

    this.state = {
      calendarWeekends: true
    }
  }

  render() {
    return (
      <div className='close2me'>
        <div className='close2me-calendar'>
          <FullCalendar
            locale="italian"
            defaultView="dayGridMonth"
            displayEventTime={false}
            header={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.props.events}
            dateClick={this.handleDateClick}
          />
        </div>
      </div>
    )
  }

  handleDateClick = (arg: any) => {

  }

}