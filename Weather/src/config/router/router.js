import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About ,Home} from ".";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}