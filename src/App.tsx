import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import PhysicalWellness from './pages/PhysicalWellness';
import PhysicalWellnessHome from './pages/PhysicalWellnessHome';
import PhysicalWellnessInfo from './pages/PhysicalWellnessInfo';
import PhysicalWellnessClasses from './pages/PhysicalWellnessClasses';
import PhysicalWellnessContact from './pages/PhysicalWellnessContact';
import ChildrenYoga from './pages/ChildrenYoga';
import AdultYoga from './pages/AdultYoga';
import SeniorYoga from './pages/SeniorYoga';
import WellnessRoutine from './pages/WellnessRoutine';
import WellnessChallenges from './pages/WellnessChallenges';
import SleepHealth from './pages/SleepHealth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wellness-routine" element={<WellnessRoutine />} />
        <Route path="/wellness-challenges" element={<WellnessChallenges />} />
        <Route path="/sleep-health" element={<SleepHealth />} />
        <Route path="/physical-wellness" element={<PhysicalWellness />}>
          <Route index element={<PhysicalWellnessHome />} />
          <Route path="info" element={<PhysicalWellnessInfo />} />
          <Route path="classes" element={<PhysicalWellnessClasses />} />
          <Route path="contact" element={<PhysicalWellnessContact />} />
          <Route path="classes/children" element={<ChildrenYoga />} />
          <Route path="classes/adults" element={<AdultYoga />} />
          <Route path="classes/seniors" element={<SeniorYoga />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;