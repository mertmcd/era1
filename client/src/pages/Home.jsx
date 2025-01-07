import EventList from "../components/EventList";
import { useEffect, useState } from "react";
import { eventService } from "../service/eventService";

const Home = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const data = await eventService.listEvents();
      setEvents(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleJoin = async () => {
    try {
      alert("Joined event successfully");
    } catch (err) {
      console.error(err);
      alert("Failed to join event");
    }
  };

  return (
    <div>
      <EventList
        events={events}
        onJoin={() => {
          handleJoin();
        }}
      />
    </div>
  );
};

export default Home;
