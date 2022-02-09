import React from "react";
import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = ({ isAuthenticated }) => {
   return !isAuthenticated ? <Outlet /> : <Navigate replace to='/' />;
};

PublicRoute.propTypes = {
   isAuthenticated: PropTypes.bool.isRequired,
};