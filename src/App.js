import React from 'react';
import {Route,Routes} from 'react-router-dom';
import './index.css';
import Home from './Routes/Home';
import Project from './Routes/Project';
import Contact from './Routes/Contact';
import About from './Routes/About';
import FlightTicket from './Components/Project-section/FlightTicket';
import College from "./Components/Project-section/College";
import Restaurant from "./Components/Project-section/Restaurant";
import Shrestha from "./Components/Project-section/Shrestha";

function App() {
  return (
    <>
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path = "/Project" element = {<Project />} />
      <Route path = "/Contact" element = {<Contact />} />
      <Route path = "/About" element = {<About />} />
      <Route path = "/Flight-Ticket-Booking-System" element = {<FlightTicket />} />
      <Route path = "/College-Admission-System" element = {<College />} />
      <Route path = "/Restaurant-Table-Booking-System" element = {<Restaurant />} />
      <Route path = "/Shrestha-Club" element = {<Shrestha />} />
    </Routes>
    </>
  );
}

export default App;