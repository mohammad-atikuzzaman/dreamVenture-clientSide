import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { Mycontext } from "../contexts/ContextElement";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(Mycontext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

ProtectedRoute.propTypes = {
  children: PropTypes.object,
};
export default ProtectedRoute;