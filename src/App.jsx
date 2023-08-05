import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Home from "./components/pages/home";
import Docs from "./components/pages/docs";
import Gallery from "./components/pages/gallery";
import Error from "./components/pages/error";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visi-misi" element={<Docs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/error" element={<Error />} />
        {/* <Route path="*" element={<Navigate to={<Error />} />} /> */}
        <Route path="/*" element={<Navigate to="/error" />} />
      </Routes>
    </Router>
  );
};

export default App;
