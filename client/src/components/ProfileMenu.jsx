import { useNavigate } from "react-router-dom";
import { authService } from "../service/authService";

const ProfileMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    authService.logout();
    navigate("/welcome");
  };

  const goToSettings = () => {
    navigate("/settings");
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="absolute z-10 top-4 mt-2 right-0 bg-white text-black shadow-lg rounded-lg py-2 w-40">
      <ul className="flex flex-col">
        <li
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={goToProfile}
        >
          Profile
        </li>
        <li
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={goToSettings}
        >
          Settings
        </li>
        <li
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
