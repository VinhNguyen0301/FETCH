import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import BookingsList from "./components/BookingsList";
import EditBooking from "./components/EditBooking";
import CreateBooking from "./components/CreateBooking";
import CreateUser from "./components/CreateUser";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <br />
      <Route exact path="/" component={HomePage} />
      <Route path="/booking-list" component={BookingsList} />
      <Route path="/edit/:id" component={EditBooking} />
      <Route path="/create" component={CreateBooking} />
      <Route path="/user" component={CreateUser} />
    </BrowserRouter>
  );
}

export default App;
