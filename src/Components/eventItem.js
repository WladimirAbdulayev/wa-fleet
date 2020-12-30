import "./Styles/eventItem.css";
import moment from 'moment';

export default function EventItem({ eventItem }) {
  return (
    <div className="item-container">
      <p className="date-text">
      {moment(eventItem.date).format('Do MMM')}
      </p>
      <div className="text-container">
        <p className="primary-text">{eventItem.title}</p>
        <div className="secondary-text">{moment(eventItem.date).format('Do MMM')}</div>
        <p className="secondary-text">{eventItem.venue}</p>
      </div>
    </div>
  );
}