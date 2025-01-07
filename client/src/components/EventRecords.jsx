const EventRecords = ({ attendedEvents, createdEvents }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Attended Events</h2>
        <ul className="list-disc pl-5">
          {attendedEvents.map((event, index) => (
            <li key={index} className="mb-2">
              {event.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Created Events</h2>
        <ul className="list-disc pl-5">
          {createdEvents.map((event, index) => (
            <li key={index} className="mb-2">
              {event.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventRecords;
