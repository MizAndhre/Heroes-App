import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";

export const Navbar = () => {
   let navigate = useNavigate();
   const { user, dispatch } = useContext(AuthContext);

   const handleLogout = () => {
      dispatch({
         type: types.logout,
      });

      navigate("/login", { replace: true });
   };

   return (
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
         <div className='container-fluid'>
            <Link className='navbar-brand fw-bold text-danger' to='/'>
               Heroes
            </Link>

            <div className='collapse navbar-collapse'>
               <ul className='navbar-nav'>
                  <li className='nav-item'>
                     <NavLink className='nav-link nav-item' end to='/marvel'>
                        Marvel
                     </NavLink>
                  </li>

                  <li className='nav-item'>
                     <NavLink className='nav-link' end to='/dc'>
                        DC
                     </NavLink>
                  </li>
                  <li className='nav-item'>
                     <NavLink className='nav-link' end to='/search'>
                        Search
                     </NavLink>
                  </li>
               </ul>
            </div>

            <div className='navbar-collapse w-100'>
               <ul className='navbar-nav ms-auto'>
                  <li className='nav-item'>
                     <span className='nav-link text-info'>{user.name}</span>
                  </li>
                  <li className='nav-item'>
                     <button
                        className='nav-link btn fw-bold text-warning'
                        onClick={handleLogout}>
                        Logout
                     </button>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
};
