import EventRecords from "../components/EventRecords";
import { useEffect, useState } from "react";

const Profile = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUsername(user.username);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 my-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full mb-4"
            src="https://via.placeholder.com/150"
            alt="Profile"
          />
          <h2 className="text-2xl font-semibold mb-2">{username}</h2>
          <p className="text-gray-600 mb-4">Software Engineer</p>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <p className="text-gray-700">
            I enjoy climbing, guitars and reading books. I am a software
            engineer who loves to code and learn new things.
          </p>
        </div>
      </div>
      <EventRecords
        attendedEvents={[{ name: "Event 1" }, { name: "Event 2" }]}
        createdEvents={[{ name: "Event 3" }, { name: "Event 4" }]}
      />
    </div>
  );
};

export default Profile;
