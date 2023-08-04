import React from 'react'
import { Route, Routes } from 'react-router-dom';
import DashboardHome from "../../src/pages/Dashboard/DashboardHome";
import Nutrition from "../../src/pages/Dashboard/Nutrition";
import Activity from "../../src/pages/Dashboard/Activity";
import Goals from "../../src/pages/Dashboard/Goals";
import Wearables from "../../src/pages/Dashboard/Wearables";
import Settings from "../../src/pages/Dashboard/Settings";


const DashboardContent = () => {
    return (
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/wearables" element={<Wearables />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    );
  };

export default DashboardContent