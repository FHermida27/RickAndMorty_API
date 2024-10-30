import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Page/HomePage/HomePage";
import AliensPage from "./Components/Page/AlienPage/AliensPage";
import HumansPage from "./Components/Page/HumanPage/HumansPage";
import AboutPage from "./Components/Page/AboutPage/AboutPage";
import Header from "./Components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aliens" element={<AliensPage />} />
        <Route path="/humans" element={<HumansPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;