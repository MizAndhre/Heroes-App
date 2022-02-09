import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { useForm } from "../../hooks/useForm";
import { types } from "../../types/types";

// export const LoginScreen = ({ history }) => { *==> OLD
export const LoginScreen = () => {
   let navigate = useNavigate();

   const { dispatch } = useContext(AuthContext);

   const initialForm = { username: "" };
   const [{ username }, handleInputChange] = useForm(initialForm);

   const handleLogin = () => {
      const lastPath = localStorage.getItem("lastPath") || "/";

      const name = { name: username };

      dispatch({
         type: types.login,
         payload: name,
      });

      navigate(lastPath, { replace: true });
   };

   return (
      <div className='container mt-5'>
         <h1 className='fw-bolder'>Login</h1>
         <hr />
         <form onSubmit={handleLogin}>
            <input
               autoComplete='off'
               type='text'
               name='username'
               placeholder='Write your username'
               className='form-control'
               onChange={handleInputChange}
               value={username}
            />

            <button className='btn btn-outline-warning mt-3 animate__animated animate__bounceIn'>
               Login
            </button>
         </form>
      </div>
   );
};
