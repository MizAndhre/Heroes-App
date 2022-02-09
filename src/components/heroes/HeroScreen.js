import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroesById } from "../selectors/getHeroesById";

export const HeroScreen = () => {
   const { heroId } = useParams();
   let navigate = useNavigate();

   //  const hero = getHeroesById(heroId);
   const hero = useMemo(() => getHeroesById(heroId), [heroId]);

   if (!hero) {
      return <Navigate replace to='/' />;
   }

   const handleReturn = () => {
      // if (navigate.length <= 2) {
      //    navigate("/");
      // } else {
      //    navigate(-1);
      // }

      return navigate(-1);
   };

   const { superhero, alter_ego, publisher, first_appearance, characters } =
      hero;

   return (
      <div className='row mt-5'>
         <div className='col-12 col-md-4'>
            <img
               src={`../assets/heroes/${heroId}.jpg`}
               alt={superhero}
               className='img-thumbnail animate__animated animate__fadeInLeftBig'
            />
         </div>

         <div className='col-12 col-md-8 mt-3 mt-md-0 mb-5 mb-md-0 px-4 animate__animated animate__fadeIn'>
            <h1 className='fw-bold'>{superhero}</h1>

            <div className='bg-dark rounded'>
               <ul className='list-group mt-md-3'>
                  <li className='list-group-item '>
                     <b>Alter Ego:</b> {alter_ego}
                  </li>
                  <li className='list-group-item '>
                     <b>Publisher:</b> {publisher}
                  </li>
                  <li className='list-group-item '>
                     <b>First Appearance:</b> {first_appearance}
                  </li>
               </ul>

               <div className='bg-dark p-4 rounded'>
                  <h2> Characters </h2>
                  <p>{characters}</p>

                  <button
                     className='btn btn-outline-danger'
                     onClick={handleReturn}>
                     Return
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};
