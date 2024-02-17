import "./App.css";
import React, { lazy, Suspense, useEffect, useState } from "react";
import Home from "./components/HomePage/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import SchedulePage from "./components/Schedule/assets/page";
const Aboutus = lazy(() => import("./components/About/About"));
const Sidebar = lazy(() => import("./components/Sidebar/Sidebar"));
const Competitions = lazy(() =>
  import("./components/Competitions/Competitions")
);
const Team = lazy(() => import("./components/OurTeam/Team/Team"));

console.log(process.env.REACT_APP_API_URL);
const serverSystemUrl = "";

function App() {
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState("false");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  console.log(auth);

  return (
    <div className="App">
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Sidebar auth={auth} setAuth={setAuth} serverSystemUrl={serverSystemUrl} />

          <Routes>
            <Route
              path="/"
              element={
                loading ? <Loader /> : <Home auth={auth} setAuth={setAuth} />
              }
            />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="schedule" element={<SchedulePage />} />
            <Route path="ourteam" element={<Team />} />
            <Route
              path="competitions"
              element={<Competitions auth={auth} setAuth={setAuth} />}
            />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
