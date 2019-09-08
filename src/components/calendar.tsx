import * as React from 'react'
import FullCalendar from '@fullcalendar/react'
import { EventInput } from '@fullcalendar/core'
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
            header={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            }}
            plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
            ref={ this.calendarComponentRef }
            weekends={ this.state.calendarWeekends }
            events={ this.props.events }
            dateClick={ this.handleDateClick }
            />
        </div>
      </div>
    )
  }

  toggleWeekends = () => {
    this.setState({ // update a property
      calendarWeekends: !this.state.calendarWeekends
    })
  }

  gotoPast = () => {
    let calendarApi = this.calendarComponentRef.current!.getApi()
    calendarApi.gotoDate('2000-01-01') // call a method on the Calendar object
  }

  handleDateClick = (arg: any) => {
    /*if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.setState({  // add new event data
        calendarEvents: this.state.calendarEvents.concat({ // creates a new array
          title: 'New Event',
          start: arg.date,
          allDay: arg.allDay
        })
      })
    }*/
  }

}