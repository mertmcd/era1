import { Link, useNavigate } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <li className="relative">
            <div
              className="hover:text-indigo-300 cursor-pointer"
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)}
            >
              Profile
              {isMenuOpen && <ProfileMenu />}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
