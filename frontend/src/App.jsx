import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import CitizenDashboard from "./pages/citizen-dashboard";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/citizen/dashboard" element={<CitizenDashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;