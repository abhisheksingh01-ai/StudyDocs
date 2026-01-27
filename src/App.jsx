import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Future routes (examples) */}
        {/* 
        <Route path="/docs/java" element={<JavaDocs />} />
        <Route path="/docs/javascript" element={<JavaScriptDocs />} />
        <Route path="/interview" element={<InterviewPrep />} />
        */}
      </Routes>
    </Router>
  );
}
