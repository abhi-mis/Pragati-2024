import React, { useEffect, useState, useRef } from "react";
import "./Sidebar.css";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

import { gsap } from "gsap";
import { Power3 } from "gsap";
import { TimelineLite } from "gsap/gsap-core.js";
import { CSSPlugin } from "gsap/CSSPlugin";

import { HiOutlineHome } from "react-icons/hi";
import { FiAward } from "react-icons/fi";
import { BiBookAlt } from "react-icons/bi";
// import {FiPhone} from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import { AiOutlineTeam } from "react-icons/ai";
import { HiOutlineStar } from "react-icons/hi";
import { FiMic } from "react-icons/fi";
import { TbBed } from "react-icons/tb";

import axios from "axios";

const imgSrc = require("./plinth.png");

export default function Sidebar({auth,setAuth,serverSystemUrl,setUser}) {
  const location = useLocation();
  const navigate=useNavigate();
  gsap.registerPlugin(CSSPlugin);
  let item = useRef(null);
  const [tl] = useState(new TimelineLite({ paused: false }));

  // console.log(isRootRoute);
  useEffect(() => {
    if (location.pathname === "/") {
      tl.fromTo(
        item,
        2,
        { x: "-200px", ease: Power3.easeOut },
        { x: "0", opacity: 1, ease: Power3.easeOut }
      ).delay(3);
    } else {
      tl.fromTo(
        item,
        2,
        { x: "-200px", ease: Power3.easeOut },
        { x: "0", opacity: 1, ease: Power3.easeOut }
      );
    }
  }, []);

   const onLoginHandler = () =>{
      if(auth==="false"){
        navigate("/login")
      }
      else{
        axios.get(`${serverSystemUrl}/auth/logout`,{validateStatus: false,
          withCredentials: true}).then((res)=>{
          if(res.status===200){
          setAuth("false");
          setUser("false")
          navigate("/")  
          console.log(res.data.msg);
          }
        })
      }
   }

  return (
    <div>
      <div className="area" />
      <nav
        className="main-menu"
        ref={(el) => {
          item = el;
        }}
      >
        <div className="top-header">
          <a href="/">
            <img src={imgSrc} className="image-plinth fa" alt="img" />
            <span
              className="nav-text plinth-text"
              style={{
                fontWeight: "bolder",
                marginRight: "3",
                left: "10%",
              }}
            >
              Plinth 2k23
            </span>
          </a>
        </div>

        <ul>
          <li>
            <a className="anchor" href="/">
              <div className="fa fa-2x">
                <HiOutlineHome size={25} />
              </div>
              <span className="nav-text">Home</span>
            </a>
          </li>
          <li className="has-subnav">
            <a className="anchor" href="/aboutus">
              {/* <i className="fa fa-book fa-2x" /> */}
              <div className="fa fa-2x">
                <BiBookAlt size={25} />
              </div>
              <span className="nav-text">About Us</span>
            </a>
          </li>
          <li className="has-subnav">
            <a className="anchor" href="/competitions">
              {/* <i className="fa fa-medal fa-2x" /> */}
              <div className="fa fa-2x">
                <FiAward size={25} />
              </div>
              <span className="nav-text">Competitions</span>
            </a>
          </li>
          <li className="has-subnav">
            <a className="anchor" href="/campus_ambassador">
              {/* <i className="fa fa-phone fa-2x" /> */}
              <div className="fa fa-2x">
                <FiMic size={25} />
              </div>
              <span className="nav-text">Ambassador</span>
            </a>
          </li>
          <li className="has-subnav">
            <a className="anchor" href="/ourteam">
              {/* <i className="fa fa-phone fa-2x" /> */}
              <div className="fa fa-2x">
                <AiOutlineTeam size={25} />
              </div>
              <span className="nav-text">Our Team</span>
            </a>
          </li>
          
        </ul>

        <ul className="logout">
          <li>

            <button className="anchor" href="/login" onClick = {onLoginHandler}>
              {/* <i className="fa fa-sign-in fa-2x" /> */}
              <div className="fa fa-2x">
                <FiLogIn size={25} />
              </div>
              <span className="nav-text">{(auth === "false")?"Login":"Logout"}</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
