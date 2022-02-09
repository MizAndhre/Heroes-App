import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";

import { AuthContext } from "../auth/AuthContext";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
   const { user } = useContext(AuthContext);
   // console.log(user);

   return (
      <Router>
         <div>
            <Routes>
               <Route element={<PublicRoute isAuthenticated={user.logged} />}>
                  <Route path='/login' element={<LoginScreen />} />
               </Route>

               <Route element={<PrivateRoute isAuthenticated={user.logged} />}>
                  <Route path='*' element={<DashboardRoutes />} />
               </Route>
            </Routes>
         </div>
      </Router>
   );
};
