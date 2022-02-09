import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe("Pruebas en authReducer", () => {
   // ! ===============================>
   test("should retornar el estado por defecto", () => {
      //   const userTest = {
      //      name: "Andhre",
      //      logged: true,
      //   };

      const state = authReducer({ logged: false }, {});
      //   console.log(state);
      expect(state).toEqual({ logged: false });
   });

   // ! ===============================>
   test("should autenticar y colocar el name del usuario", () => {
      const newUser = { name: "Joaquin" };
      const action = { type: types.login, payload: newUser };

      const state = authReducer({ logged: false }, action);
      //   console.log(state);

      expect(state).toEqual({ name: "Joaquin", logged: true });
   });
   // ! ===============================>
   test("should borrar el name del usuario y logged => false", () => {
      //
      const action = { type: types.logout };

      //   const state = authReducer({}, action);
      const state = authReducer({ name: "Joaquin", logged: true }, action);
      //   console.log(state);
      expect(state).toEqual({ logged: false });
   });
});
