import "./App.css";
import React,{lazy,Suspense} from "react";
import Home from "./components/HomePage/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";


const Aboutus = lazy(()=>import("./components/About/About"));
const Sidebar = lazy(()=>import("./components/Sidebar/Sidebar"));
const Competitions = lazy(()=>import("./components/Competitions/Competitions"));
const Team = lazy(()=>import("./components/OurTeam/Team/Team"));



console.log(process.env.REACT_APP_API_URL);
const serverSystemUrl="";
function App() {
  const [loading, setLoading] = useState(false);
  const [auth, setAuth] = useState("false");
  const [userId,setUserId]=useState(null)



 
  
  useEffect(() => {
    // console.log((user));
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // console.log(loading);
  }, []);

  console.log(auth);

  return (
    <div className="App">
        <Router>
          <Sidebar auth = {auth} setAuth={setAuth} serverSystemUrl={serverSystemUrl} setUser={setUserId}/>

          <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={loading ? (
        <Loader />
      ) :<Home auth={auth} setAuth={setAuth} />} />
            <Route path="aboutus" element={<Aboutus  />} />
            <Route path="ourteam" element={<Team />} />
            <Route path="competitions" element={<Competitions auth={auth} setAuth={setAuth}/>} />

            {/* <Route path="create-team" element={<CreateTeam/>} /> */}
          </Routes>
          </Suspense>

        </Router>
        
      
    </div>
  );
}

export default App;
