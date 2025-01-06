import { Navigate } from "react-router-dom";
import { authService } from "../service/authService";

const PrivateRoute = ({ children }) => {
  return authService.isAuthenticated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
