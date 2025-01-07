/* eslint-disable react/prop-types */
import EventCard from "./EventCard";

const EventList = ({ events, onJoin }) => {
  return (
    <div className="event-list grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
      {events?.map((event) => (
        <EventCard
          key={event._id}
          title={event.title}
          date={event.date}
          description={event.description}
          location={event.location}
          onJoin={onJoin}
        />
      ))}
    </div>
  );
};

export default EventList;
