import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";

import { DcScreen } from "../components/dc/DcScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";

export const DashboardRoutes = () => {
   return (
      <>
         <Navbar />

         <div className="container mt-5">
            <Routes>
               <Route path='/marvel' element={<MarvelScreen />} />
               <Route path='/hero/:heroId' element={<HeroScreen />} />
               <Route path='/dc' element={<DcScreen />} />
               <Route path='/search' element={<SearchScreen />} />

               <Route path='/' element={<Navigate replace to='/marvel' />} />
            </Routes>

         </div>
      </>
   );
};
