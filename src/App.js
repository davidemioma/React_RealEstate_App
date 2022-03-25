import React from "react";
import { Routes, Route } from "react-router";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import PropertyPage from "./pages/PropertyPage";

const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/search" element={<SearchPage />} />

        <Route path="/property/:propertyId" element={<PropertyPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
