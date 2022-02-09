import React from "react";
import PropTypes from "prop-types";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const PrivateRoute = ({ isAuthenticated }) => {
    
   let location = useLocation();
   let lastSearch = location.pathname + location.search;
   localStorage.setItem("lastPath", lastSearch);

   return isAuthenticated ? <Outlet /> : <Navigate replace to='/login' />;
};

PrivateRoute.propTypes = {
   isAuthenticated: PropTypes.bool.isRequired,
};

// ?    ===============> Old Version
// export const PrivateRoute = ({
//    isAuthenticated,
//    element: Component,
//    ...rest
// }) => {
//    return (
//       <Route
//          {...rest}
//          element={(props) =>
//             isAuthenticated ? (
//                <Outlet {...props} />
//             ) : (
//                <Navigate replace to='/marvel' />
//             )
//          }
//       />
//    );
// };
