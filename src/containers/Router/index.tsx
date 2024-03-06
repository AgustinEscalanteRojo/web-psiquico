import { FC } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../../views/Home';
import Consult from '../../views/Consult';
import Contact from '../../views/Contact';
import Who from '../../views/Who';
import Services from '../../views/Services';
import Training from '../../views/Training';

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Consult" element={<Consult />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Who" element={<Who />} />
        <Route path="/Training" element={<Training />} />
        <Route path="/*" element={<Navigate replace to="/Home" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
