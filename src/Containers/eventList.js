import './Styles/eventList.css'
import EventItem from '../Components/eventItem'
import NextEvent from "../Components/nextEventItem";

export default function EventList ({eventItems}) {

  return (
    <div>
    <NextEvent eventItem={eventItems[0]}></NextEvent>
      {eventItems
      .sort((a,b)=>a.date<b.date ? 1 : -1)
      .map(eventItem => <EventItem key={eventItem._id} eventItem={eventItem}></EventItem>)}
    </div>
  )
}