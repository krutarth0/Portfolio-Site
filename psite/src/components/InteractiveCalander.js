import React,{useEffect,useState} from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from "@fullcalendar/list";

export default function InteractiveCalander(props) {

      var handleDateSelect = (selectInfo) => {
          console.log(selectInfo);
        let title = prompt('Please enter a new title for your event')
        let calendarApi = selectInfo.view.calendar
    
        calendarApi.unselect() // clear date selection
    
        if (title) {
            props.eventCallback({
            title,
            start: selectInfo.startStr,
            end: selectInfo.endStr,
            allDay: selectInfo.allDay
          })
          // props.callback(Events)
        }
      }


      var handleEventClick = (clickInfo) => {
        if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
          props.eventDeleteCallback(clickInfo.event)
          clickInfo.event.remove()
        }
      }

      
      
    return (
        
        <FullCalendar
             id = "your-custom-ID"
             plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin,listPlugin]}
            headerToolbar={{
              left: 'prevYear,prev,next,nextYear,today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            }}
        initialView='dayGridMonth'
        navLinks= {true} // can click day/week names to navigate views
        selectMirror={true}
        editable= {true}
        eventLimit= {true} // allow "more" link when too many events
        events = {props.events}
        selectable={true}	
        dayMaxEvents={true}
        select={handleDateSelect}
        eventContent={renderEventContent} // custom render function
        eventClick={handleEventClick}
        
    />
      
    )
}

function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }