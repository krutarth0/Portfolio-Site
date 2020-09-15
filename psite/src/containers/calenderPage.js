import React,{useState,useEffect} from 'react'
import InteractiveCalander from "../components/InteractiveCalander"
import { formatDate } from '@fullcalendar/react'
import "../static/calanderPage.css"
import SexyButton from "../components/Buttons/SexyButton"
import SexyDropdown from "../components/Buttons/SexyDropdown"
export default function CalenderPage(props) {

    const [Events, setEvents] = useState([
      {
          title: 'All Day Event',
          start: '2020-09-01'
      },
      {
          title: 'Long Event',
          start: '2020-09-07',
          end: '2020-09-10'
      },
      {
          id: 999,
          title: 'Repeating Event',
          start: '2020-09-09T16:00:00'
      },
      {
          id: 999,
          title: 'Repeating Event',
          start: '2020-09-16T16:00:00'
      },
      {
          title: 'Conference',
          start: '2020-09-11',
          end: '2020-09-13'
      },
      {
          title: 'Meeting',
          start: '2020-09-12T10:30:00',
          end: '2020-09-12T12:30:00'
      },
      {
          title: 'Birthday Party',
          start: '2020-09-13T07:00:00'
      },
      {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2020-09-28'
      },
      {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2020-09-1'
      }
  ])


  var removeByAttr = function(arr, attr, value){
    var i = arr.length;
    while(i--){
       if( arr[i] 
           && arr[i].hasOwnProperty(attr) 
           && (arguments.length > 2 && arr[i][attr] === value ) ){ 

           arr.splice(i,1);

       }
    }
    return arr;
}


    var eventCallback = (e)=>{
      setEvents(Events.concat(e))
      console.log(Events);
    }

    var eventDeleteCallback = (e)=>{
      // var arr = removeByAttr(Events,"title",e.title)
      // console.log(arr);
      setEvents( Events.filter((item) => item.title !== e.title));
      
    }

    return (
        <div className="calander-page">

            <div className="side-bar">
                
              <div className="calander-navigation">
                  <SexyButton name={"Home"} link={"/"} size={[5,5]} onClick={props.ReloadCallback}/>
                  <SexyDropdown
                  prop={"Resources"} 
                  size={[7,5]} 
                  links={[
                        {to:"Forum",name:"Forum"},
                        {to:"Admin",name:"Admin"}
                        ]}
                />
              </div>

              <div className="event-list">
                  {
                    Events.map((e,i)=>
                    {
                      return (

                      <li key={i}>
                        <b>{formatDate(e.start, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
                        <i>{e.title}</i>
                      </li>
                      )}
                    )
                  }
              </div>

            </div>
            <div className="interactiveCalander">
                  <InteractiveCalander events={Events} eventCallback={eventCallback} eventDeleteCallback={eventDeleteCallback}/>
            </div >
       
    </div>
    )
}
