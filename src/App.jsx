import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your pages
import Home from "./pages/Home";
import JavaDocPost from "./docs/JavaDocPost"; 

export default function App() {
  return (
    <Router>
      <Routes>
        {/* URL Mapping */}
        <Route path="/" element={<Home />} />
        <Route path="/tracks/java" element={<JavaDocPost />} />
        {/* <Route path="/tracks/javascript" element={<JavaScriptDocs />} /> */}
      </Routes>
    </Router>
  );
}