import EventList from "../components/EventList";
import { useEffect, useState } from "react";
import { eventService } from "../service/eventService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const data = await eventService.listEvents();
      setEvents(data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to get events");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleJoin = async () => {
    try {
      //await eventService.joinEvent();
      toast.success("Joined event successfully");
      fetchEvents();
    } catch (err) {
      console.error(err);
      toast.error("Failed to join event");
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
