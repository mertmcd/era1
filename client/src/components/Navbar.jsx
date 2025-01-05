// components/Navbar.jsx
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-indigo-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          ERA1
        </h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-indigo-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/create-event" className="hover:text-indigo-300">
              Create Event
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
