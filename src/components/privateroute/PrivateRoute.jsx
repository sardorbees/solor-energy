import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("access");

  if (!token) {
    return <Navigate to="api/accounts/login/" />;
  }

  return children;
}
