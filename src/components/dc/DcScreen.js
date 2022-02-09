import React from "react";
import { HeroList } from "../heroes/HeroList";

export const DcScreen = () => {
   return (
      <div>
         <h1 className='animate__animated animate__fadeIn fw-bolder'>
            DC Heroes
         </h1>
         <hr />
         <HeroList publisher={"DC Comics"} />
      </div>
   );
};
