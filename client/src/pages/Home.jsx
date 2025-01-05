import EventList from "../components/EventList";
import { useEffect, useState } from "react";
import { eventService } from "../service/eventService";

const Home = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await eventService.listEvents();
        console.log(data);
        setEvents(data);
      } catch (err) {
        console.error(err);
      }
    };

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
