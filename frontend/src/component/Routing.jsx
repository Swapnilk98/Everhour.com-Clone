import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardMain from './DashBoardMain/DashboardMain';
import Navbar from './Navbar/Navbar';
import Confirmation from './Payment/Confirmation';
import Otp from './Payment/Otp';
import Setting from './Payment/Setting';
import CombineEmptyandFilled from './Products/CombineEmptyandFilled';
import SimpleSidebar from './SideBar/SideBar';

const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path='/project' element={<CombineEmptyandFilled/>}/> */}
        // <Route path="/otp" element={<Otp />} />
        {/* <Route path='/setting' element={<Setting/>}/> */}
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/dashboard" element={<DashboardMain />} />
      </Routes>
    </>
  );
};

export default Routing;
