import React from "react";
import { HeroList } from "../heroes/HeroList";

export const MarvelScreen = () => {
   return (
      <div>
         <h1 className='animate__animated animate__fadeIn fw-bolder'>
            Marvel Heroes
         </h1>
         <hr />

         <HeroList publisher='Marvel Comics' />
      </div>
   );
};
