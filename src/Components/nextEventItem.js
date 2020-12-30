import "./Styles/nextEventItem.css";
import moment from 'moment';

export default function nextEventItem({ eventItem }) {
  if (eventItem) {
    const { title, venue, date } = eventItem;
    return (
      <div className="next-event-item-container">
        <h4>Next Event</h4>
        <p className="next-event-primary-text">{title}</p>
        <p className="next-event-secondary-text">{venue}</p>
        <p className="next-event-secondary-text">{moment(date).format('Do MMM')}</p>
      </div>
    );
  } else {
    return <h2>Next Event is not scheduled.</h2>;
  }
}