import React, { useEffect, useRef, useState } from "react";
import "./Sidebar.css";
import { useLocation } from "react-router-dom";

import { gsap } from "gsap";
import { Power3 } from "gsap";
import { TimelineLite } from "gsap/gsap-core.js";
import { CSSPlugin } from "gsap/CSSPlugin";

import { HiOutlineHome } from "react-icons/hi";
import { FiAward } from "react-icons/fi";
import { BiBookAlt } from "react-icons/bi";
import { AiOutlineTeam } from "react-icons/ai";
import { MdOutlineCalendarMonth } from "react-icons/md";

export default function Sidebar() {
  const location = useLocation();
  gsap.registerPlugin(CSSPlugin);
  let item = useRef(null);
  const [tl] = useState(new TimelineLite({ paused: false }));

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
  }, [location.pathname, tl]);

  return (
    <div>
      <div className="area" />
      <nav
        className="main-menu"
        ref={(el) => {
          item = el;
        }}
      >

        
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
              <div className="fa fa-2x">
                <BiBookAlt size={25} />
              </div>
              <span className="nav-text">About Us</span>
            </a>
          </li>
          {/* <li className="has-subnav">
            <a className="anchor" href="/celebrating25">
              <div className="fa fa-2x">
                <BiBookAlt size={25} />
              </div>
              <span className="nav-text">Celebrating 25</span>
            </a>
          </li> */}

          <li className="has-subnav">
            <a className="anchor" href="/competitions">
              <div className="fa fa-2x">
                <FiAward size={25} />
              </div>
              <span className="nav-text">Events</span>
            </a>
          </li>
          <li className="has-subnav">
            <a className="anchor" href="/schedule">
              <div className="fa fa-2x">
                <MdOutlineCalendarMonth size={25} />
              </div>
              <span className="nav-text">Schedule</span>
            </a>
          </li>
          <li className="has-subnav">
            <a className="anchor" href="/ourteam">
              <div className="fa fa-2x">
                <AiOutlineTeam size={25} />
              </div>
              <span className="nav-text">Our Team</span>
            </a>
          </li>
        </ul>
        <ul className="logout">
          <div className="">
            <img
              className="plinth-logo"
              src={require("./plinth.png")}
              alt="Plinth Logo"
              />
            </div>
        </ul>
      </nav>
    </div>
  );
}
