import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import CitizenDashboard from "./pages/CitizenDashboard";
import CommunityPage from "./pages/Community";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/trackmywaste" element={<CitizenDashboard/>}/>
        <Route path="/community" element={<CommunityPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;