import React, { useMemo } from "react";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import { getHeroesByName } from "../selectors/getHeroesByName";

export const SearchScreen = () => {
   let navigate = useNavigate();

   const location = useLocation();
   const { q = "" } = queryString.parse(location.search);

   const [formValues, handleInputChange] = useForm({ searchText: q });
   const { searchText } = formValues;

   //    const heroesFiltered = getHeroesByName(searchText);
   const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

   const handleSubmit = (e) => {
      e.preventDefault();
      navigate(`?q=${searchText}`);
   };

   return (
      <div>
         <div>
            <h1 className='animate__animated animate__fadeInLeft fw-bolder'>
               Search Heroe
            </h1>
            <hr />
            <form
               onSubmit={handleSubmit}
               className='row animate__animated animate__fadeIn'>
               <div className='col-12 col-sm-9'>
                  <input
                     autoComplete='off'
                     type='text'
                     name='searchText'
                     placeholder='Find a hero...'
                     className='form-control'
                     onChange={handleInputChange}
                     value={searchText}
                  />
               </div>

               <div className='col-12 col-sm-3'>
                  <button
                     type='submit'
                     className='btn mt-3 mt-sm-0 w-100 btn-outline-warning'>
                     Search
                  </button>
               </div>
            </form>
         </div>

         <div className='row mt-4 g-3 animate__animated animate__fadeIn'>
            <h2 className='fw-bold'>Results</h2>

            <div className='d-flex justify-content-center'>
               {q === "" && (
                  <div
                     className='alert alert-warning text-center flex-fill'
                     style={{ maxWidth: 800 }}>
                     Search a Hero
                  </div>
               )}

               {q !== "" && heroesFiltered.length === 0 && (
                  <div
                     className='alert alert-danger text-center flex-fill'
                     style={{ maxWidth: 800 }}>
                     There is not a hero with{" "}
                     <span className='alert-link'>{q}</span>
                  </div>
               )}
            </div>

            {heroesFiltered.map((hero) => (
               <div className='col-6 col-md-4 col-lg-2' key={hero.id}>
                  <HeroCard key={hero.id} {...hero} />
               </div>
            ))}
         </div>
      </div>
   );
};
