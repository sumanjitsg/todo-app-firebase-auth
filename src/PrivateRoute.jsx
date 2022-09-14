import { Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

export function PrivateRoute({ children }) {
  const { currentUser } = useAuth();

  if (currentUser === null) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
}
