import React from 'react';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './views/App';
import Expenses from './views/Expenses';
import Invoices from './views/Invoices';

const root =  document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  root
);

