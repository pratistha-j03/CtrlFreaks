import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import CitizenDashboard from "./pages/CitizenDashboard";
import CommunityPage from "./pages/Community";
import WorkSafelyPage from "./pages/WorkerDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/trackmywaste" element={<CitizenDashboard/>}/>
        <Route path="/community" element={<CommunityPage/>}/>
        <Route path="/worker" element={<WorkSafelyPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;