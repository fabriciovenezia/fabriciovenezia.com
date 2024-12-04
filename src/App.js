import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HomeEN from "./pages/HomeEN";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/en" element={<HomeEN />} />
      </Routes>
    </Router>
  );
};

export default App;
