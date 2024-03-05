import "./App.css";
import React, { lazy, Suspense, useEffect, useState } from "react";
import Home from "./components/HomePage/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Button/Modal";
import SchedulePage from "./components/Schedule/assets/page";
import Question from "./components/Doubt/Question";
const Aboutus = lazy(() => import("./components/About/About"));
const Sidebar = lazy(() => import("./components/Sidebar/Sidebar"));
const Explore = lazy(() => import("./components/Explore/Explore"));
const Competitions = lazy(() =>
  import("./components/Competitions/Competitions")
);
const Celebarting25 = lazy(() =>
  import("./components/Celebrating25/Celebrating25")
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
          <Sidebar
            auth={auth}
            setAuth={setAuth}
            serverSystemUrl={serverSystemUrl}
          />
          <Modal />
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
            <Route path="/question" element={<Question />} />
            <Route
              path="/:name"
              element={<Explore auth={auth} setAuth={setAuth} />}
            />
            <Route
              path="competitions"
              element={<Competitions auth={auth} setAuth={setAuth} />}
            />
            <Route path="location" element={<Celebarting25 />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
