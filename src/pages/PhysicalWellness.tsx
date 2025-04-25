import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';

function PhysicalWellness() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default PhysicalWellness;