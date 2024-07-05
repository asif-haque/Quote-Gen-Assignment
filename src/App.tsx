import React from "react";
import { Route, Routes } from "react-router-dom";
import Generate from "./pages/Generate";
import Bookmarks from "./pages/Bookmarks";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Generate />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>
    </div>
  );
};

export default App;
