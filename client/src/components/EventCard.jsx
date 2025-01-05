/* eslint-disable react/prop-types */
const EventCard = ({ title, date, description, location, onJoin }) => {
  return (
    <div className="event-card bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="event-date text-sm text-gray-500 mt-1">{date}</p>
      <p className="text-gray-700 mt-4">{description}</p>
      <p className="text-gray-700 mt-4">{location}</p>
      <button
        type="button"
        className="join-button mt-6 w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        onClick={() => {
          onJoin();
        }}
      >
        Join
      </button>
    </div>
  );
};

export default EventCard;
