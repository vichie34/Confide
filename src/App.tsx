// import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/LandingUI/homepage";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home page route */}
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
