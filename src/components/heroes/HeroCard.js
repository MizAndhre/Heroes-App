import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = (hero) => {
   const { id, superhero, alter_ego, first_appearance, characters } = hero;

   return (
      <div className='col animate__animated animate__fadeInUp'>
         <div
            className='card border-light text-white bg-dark h-100'
            style={{ maxWidth: 540 }}>

            <img
               src={`./assets/heroes/${id}.jpg`}
               className='card-img-top'
               alt='...'
            />

            <div className='card-body'>
               <h5 className='card-title fw-bolder'>{superhero}</h5>
               <p className='card-text'>{alter_ego}</p>

               {alter_ego !== characters && (
                  <p className='card-text'>{characters}</p>
               )}

               <Link to={`/hero/${id}`} className="text-danger">More...</Link>
            </div>

            <div className='card-footer'>
               <small className='text-muted'>{first_appearance}</small>
            </div>
         </div>
      </div>
   );
};

// * ================>
// <div className='card-group'>
//    <div
//       className='card border-light text-white bg-dark'
//       style={{ maxWidth: 540 }}>
//       <div className='row g-0'>
//          <div className='col-md-4'>
//             <img
//                src={`./assets/heroes/${id}.jpg`}
//                className='card-img-top'
//                // className='img-fluid rounded-start'
//                alt={superhero}
//             />
//          </div>

//          <div className='col-md-8'>
//             <div className='card-body'>
//                <h5 className='card-title'>{superhero}</h5>
//                <p className='card-text'>{alter_ego}</p>

//                {alter_ego !== characters && (
//                   <p className='card-text'>{characters}</p>
//                )}

// <p className='card-text'>
//    <small className='text-muted'>{first_appearance}</small>
// </p>

// <Link to={`./hero/${id}`}></Link>
//             </div>
//          </div>
//       </div>
//    </div>
// </div>
