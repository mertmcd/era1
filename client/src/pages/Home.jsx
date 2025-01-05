import EventList from "../components/EventList";

const Home = () => {
  const events = [
    {
      id: 1,
      title: "Event 1",
      date: "2022-01-01",
      description: "Description for event 1",
    },
    {
      id: 2,
      title: "Event 2",
      date: "2022-02-02",
      description: "Description for event 2",
    },
    {
      id: 3,
      title: "Event 3",
      date: "2022-03-03",
      description: "Description for event 3",
    },
  ];

  return (
    <div>
      <EventList events={events} />
    </div>
  );
};

export default Home;
