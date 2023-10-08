import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { pathname } = useLocation()

  const authenticated = !!localStorage.getItem("authToken");
  if (authenticated) {
    return <>{children}</>;
  }
  return <Navigate to="/signin" replace  state={{ referrer: pathname }} />;
}