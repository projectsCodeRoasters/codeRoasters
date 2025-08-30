// components/ProtectedRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import PropTypes from "prop-types";

const ProtectedRoute = ({ redirectPath = "/" }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Cargando...</div>; // opcional, mientras se verifica la autenticación
  }

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};
ProtectedRoute.propTypes = {
  redirectPath: PropTypes.string,
};

export default ProtectedRoute;
