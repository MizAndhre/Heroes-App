import { shallow, mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "../../routers/PrivateRoute";

describe("Pruebas en <PrivateRoute/>", () => {
   const props = {
      location: {
         pathname: "/marvel",
      },
   };

   test("should mostrar el componente si está autenticado y guardar localStorage", () => {
    //   const wrapper = mount(
    //      <MemoryRouter>
    //         <PrivateRoute isAuthenticated={true} />
    //      </MemoryRouter>
    //   );

    //   console.log(wrapper.html());
   });
});

//  <MemoryRouter>
//             <Routes>
//                <Route element={<PrivateRoute isAuthenticated={true} />}>
//                   <Route element={() => <p>Hola</p>} />
//                </Route>
//             </Routes>
//          </MemoryRouter>
