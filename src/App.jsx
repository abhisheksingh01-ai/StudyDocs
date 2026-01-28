// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import DocPage from "./pages/java/DocPage"; 

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Redirect /tracks/java to the first topic automatically 
        */}
        <Route path="/tracks/java" element={<Navigate to="/tracks/java/java-fundamentals" replace />} />
        <Route path="/tracks/java/:slug" element={<DocPage />} />
        
      </Routes>
    </Router>
  );
}