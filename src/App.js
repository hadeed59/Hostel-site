import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import About from "./components/About";
import Rooms from "./components/Rooms";
import RoomDetails from "./components/RoomDetails";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/Rooms/:id" element={<RoomDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
