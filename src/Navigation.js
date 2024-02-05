// Routes.js
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ViewStore from './components/ViewStore';

const Navigation = () => {
  return (
   
      <Routes>
        <Route path="/viewstore" element={<ViewStore />}>
        </Route>
      </Routes>
   
  );
};

export default Navigation;

