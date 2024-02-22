import React, { useState, useEffect, useRef } from "react";
import styles from "./Celebarting25.module.css";
import "../../fonts/Absolute_Xero/Absolute_Xero.ttf";
// import {ReactComponent as Glow} from "./glow.svg";
import Modal from "../Button/Modal";
import { motion } from "framer-motion";

import VerticalCarousel from "./VerticalCarousel/VerticalCarousel";
import EmblaCarousel from "./EmblaCarousel/EmblaCarousel";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { gsap } from "gsap";
import { Power3 } from "gsap";
import { TimelineLite } from "gsap/gsap-core.js";
import { CSSPlugin } from "gsap/CSSPlugin";

import { Handles } from "../HomePage/HandlesSection/Handles";

// import {ReactComponent as Card} from "./card.svg";
const cardpic = require("./MCKVIE.png");

function Celebrating25() {
  gsap.registerPlugin(CSSPlugin);

  //Particle Bg
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  let item1 = useRef(null);
  let item2 = useRef(null);
  let item3 = useRef(null);
  let item5 = useRef(null);
  const [tl] = useState(new TimelineLite({ paused: false }));
  const [tl2] = useState(new TimelineLite({ paused: false }));
  const [tl3] = useState(new TimelineLite({ paused: false }));
  const [tl4] = useState(new TimelineLite({ paused: false }));

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 12,
    },
    text: {
      height: 80,
      width: 80,
      x: mousePosition.x - 38,
      y: mousePosition.y - 40,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
    card: {
      height: 90,
      width: 90,
      x: mousePosition.x - 43,
      y: mousePosition.y - 45,
      backgroundColor: "yellow",
      mixBlendMode: "difference",
    },
    subtext: {
      height: 40,
      width: 40,
      x: mousePosition.x - 18,
      y: mousePosition.y - 20,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
    handle: {
      height: 50,
      width: 50,
      x: mousePosition.x - 23,
      y: mousePosition.y - 25,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };
  const [cursorVariant, setCursorVariant] = useState("default");

  const textEnter = () => setCursorVariant("text");
  // const subtextEnter = () => setCursorVariant("subtext");
  const cardEnter = () => setCursorVariant("card");
  const textLeave = () => setCursorVariant("default");
  const handleEnter = () => setCursorVariant("handle");

  useEffect(() => {
    setCursorVariant("default");

    const throttle = (func, limit) => {
      let inThrottle;
      return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
          func.apply(context, args);
          inThrottle = true;
          setTimeout(() => (inThrottle = false), limit);
        }
      };
    };

    const throttledMouseMove = throttle((e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    }, 16);

    const mouseMove = (e) => {
      throttledMouseMove(e);
    };
    window.addEventListener("mousemove", mouseMove);

    tl.fromTo(
      item1,
      4,
      { opacity: 0, ease: Power3.easeOut },
      { opacity: 1, ease: Power3.easeOut }
    );
    tl2.fromTo(
      item2,
      1,
      { x: "100%", opacity: 0, ease: Power3.easeOut },
      { x: 0, opacity: 1, ease: Power3.easeOut }
    );
    tl3
      .fromTo(
        item3,
        1,
        { opacity: 0, x: "100%", ease: Power3.easeOut },
        { opacity: 0.9, x: 0, ease: Power3.easeOut }
      )
      .delay(0.5);
    tl4
      .fromTo(
        item5,
        1,
        { opacity: 0, x: "100%", ease: Power3.easeOut },
        { opacity: 0.9, y: "-55px", x: 0, z: 30, ease: Power3.easeOut }
      )
      .delay(1);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [tl, tl2, tl3, tl4]); // Add dependencies here

  const isDesktop = window.screen.width > 600;

  const OPTIONS = { dragfree: true, loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{
          x: { delay: 0 },
          y: { delay: 0 },
          type: "tween",
          stiffness: 10000,
          bounce: 0,
        }}
      />
      <div className={styles.maindiv}>
      <Modal />
        <header
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className={styles.header}
        >
          Celebrating 25
        </header>
        <h3 style={{ color: "white" }}>1999 - The journey begins</h3>
      </div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      {/* <h3 style={{ color: "white", textAlign: "center", marginTop: "20px" }}>
        25 years of innovation, tech excellence, limitless possibilities.
      </h3> */}
      <img
        onMouseEnter={cardEnter}
        onMouseLeave={textLeave}
        src={cardpic}
        className={styles.card}
        alt="card"
      ></img>
      <VerticalCarousel />
      <div
        className={`${styles.Handles}`}
        ref={(el) => {
          item5 = el;
        }}
        onMouseEnter={handleEnter}
        onMouseLeave={textLeave}
      >
        <Handles />
      </div>

      {isDesktop && (
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            particles: {
              number: {
                value: 18,
                density: {
                  enable: true,
                  value_area: 500,
                },
              },
              color: {
                value: "#b69f9f",
              },
              shape: {
                type: "triangle",
                stroke: {
                  width: 5,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 4,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.4166266064160501,
                random: false,
                anim: {
                  enable: false,
                  speed: 0.5,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 4.00602506169279,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 240.36150370156736,
                color: "#effdff",
                opacity: 0.2964458545652664,
                width: 0.9614460148062693,
              },
              move: {
                enable: true,
                speed: 3.409640098708463,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: true,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "window",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: false,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
            fpsLimit: 120,
            fullScreen: {
              enable: true,
              zIndex: -20,
            },
          }}
        />
      )}
    </>
  );
}

export default Celebrating25;
