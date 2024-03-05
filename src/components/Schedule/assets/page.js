import React, { useState, useEffect, useCallback, useRef } from 'react'
import "./page.module.css"
import EventList from './eventList'
import { gsap } from "gsap";
import { Power3 } from "gsap";
import { CSSPlugin } from 'gsap/CSSPlugin'
import { TimelineLite } from "gsap/gsap-core.js";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from 'framer-motion';
import backgroundGlow from './images/bg_svg.svg'
import backgroundTexture from './images/texture.svg'
import hashtag from './images/hashtags.svg'
import star from './images/star.svg'
import layer_blur from './images/layer-blur.svg'

const SchedulePage = () => {
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
  

  const [mousePosition,setMousePosition] = useState({
    x:0,
    y:0
  });

  const variants = {
    default : {
      x : mousePosition.x - 10,
      y : mousePosition.y - 12
    },
    text:{
      height : 80,
      width : 80,
      x : mousePosition.x - 38,
      y : mousePosition.y - 40,
      backgroundColor : "white",
      mixBlendMode : "difference"
    },
    card:{
      height : 90,
      width : 90,
      x : mousePosition.x - 43,
      y : mousePosition.y - 45,
      backgroundColor : "yellow",
      mixBlendMode : "difference"
    },
    subtext : {
      height : 40,
        width :40,
        x : mousePosition.x - 18,
        y : mousePosition.y - 20,
        backgroundColor : "white",
        mixBlendMode : "difference"
    },
    handle : {
      height : 50,
      width :50,
      x : mousePosition.x - 23,
      y : mousePosition.y - 25,
      backgroundColor : "white",
      mixBlendMode : "difference"
    },
  };

  const [cursorVariant,setCursorVariant] = useState("default");

  const textEnter = ()=> setCursorVariant("text");
  const subtextEnter = ()=> setCursorVariant("subtext");
  const cardEnter = ()=> setCursorVariant("card");
  const textLeave = ()=> setCursorVariant("default");
  const handleEnter = ()=> setCursorVariant("handle");

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
        y: e.clientY
      });
    }, 16);
  
    const mouseMove = (e) => {
      throttledMouseMove(e);
    };
    window.addEventListener("mousemove", mouseMove);
    tl.fromTo(item1, 4, { opacity: 0, ease: Power3.easeOut }, { opacity: 1, ease: Power3.easeOut });
    tl2.fromTo(item2, 1, { x: "100%", opacity: 0, ease: Power3.easeOut }, { x: 0, opacity: 1, ease: Power3.easeOut });
    tl3.fromTo(item3, 1, { opacity: 0, x: "100%", ease: Power3.easeOut }, { opacity: 0.9, x: 0, ease: Power3.easeOut }).delay(0.5);
    tl4.fromTo(item5, 1, { opacity: 0, x: "100%", ease: Power3.easeOut }, { opacity: 0.9, y: "-55px", x: 0, z: 30, ease: Power3.easeOut }).delay(1);
  
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [tl, tl2, tl3, tl4]); // Add dependencies here
  
  const isDesktop = window.screen.width > 600;

  const [toggle, setToggle] = useState(1)

  const toggletab = (index) => {
    setToggle(index);
  }
  return (
    <>
      <motion.div className="cursor" 
    variants={variants}
    animate={cursorVariant}
    transition={{
      x: {delay: 0},
      y: {delay: 0},
      type: 'tween', stiffness: 10000 ,bounce:0
      }}/>
    
    <div
      style={{ backgroundImage: `url(${backgroundTexture})` }} className=' bg-cover w-full h-auto absolute bg-opacity-30'>
      <img src={layer_blur} alt='layer blur' width={1920} height={560} className=' object-cover w-full absolute bottom-0 left-20 lg:block hidden' />
      <img src={backgroundGlow} alt='bg_glow' width={1920} height={560} className=' object-cover w-full absolute top-0' />
    <div className='lg:max-w-[1220px] md:max-w-[640px] max-w-[360px] mx-auto'>
    <div className='flex flex-col justify-center items-center text-white relative '>
      
            <h1
              ref={(el) => {
                item1 = el;
              }} onMouseEnter={textEnter} onMouseLeave={textLeave}
              className=' text-[4vw] md:text-[4vw] lg:text-[3.2vw] tracking-wider font-bold headfont lg:pt-12 lg:pb-24 md:pt-8 pt-8 pb-28 '>Schedule of Events </h1>
      <div className=' block-tabs flex flex-row lg:gap-[124px] md:gap-12 gap-4 z-20 absolute lg:top-44 md:top-24 top-24'>
        <div className={toggle===1?" tabs active-tabs bg-white text-[#333333] lg:py-8 py-4 lg:px-12 px-6 lg:text-[20px] md:text-md text-xs border border-white relative" : "tabs  lg:py-8 py-4 lg:px-12 px-6 lg:text-[20px] md:text-md text-xs bg-[#D7700B] border border-white relative text-white"} onClick={() => {
          toggletab(1)
        }}>
          <div className='lg:py-[40px] py-5 lg:px-[72px] px-[36px] border border-white absolute lg:bottom-[-8px] bottom-[-4px] left-[10px] -z-10'></div>
          <b>DAY 1</b></div>
        <div className={toggle===2?" tabs active-tabs bg-white text-[#333333] lg:py-8 py-4 lg:px-12 px-6 lg:text-[20px] md:text-md text-xs border border-white relative" : "tabs text-white lg:py-8 py-4 lg:px-12 px-6 lg:text-[20px] md:text-md text-xs bg-[#D7700B] border border-white relative"} onClick={() => {
          toggletab(2)
        }}>
          <div className='lg:py-[40px] py-5 lg:px-[72px] px-[36px] border border-white absolute lg:bottom-[-8px] bottom-[-4px] left-[10px] -z-10'></div>
          <b>DAY 2</b></div>
        <div className={toggle===3?" tabs active-tabs bg-white text-[#333333] lg:py-8 py-4 lg:px-12 px-6 lg:text-[20px] md:text-md text-xs border border-white relative" : "tabs text-white lg:py-8 py-4 lg:px-12 px-6 lg:text-[20px] md:text-md text-xs bg-[#D7700B] border border-white relative"} onClick={() => {
          toggletab(3)
        }}><div className='lg:py-[40px] py-5 lg:px-[72px] px-[36px] border border-white absolute lg:bottom-[-8px] bottom-[-4px] left-[10px] -z-10'></div>
          <b>DAY 3</b></div>
          </div>
          <img src={star} alt='roteing star' width={120} height={120} className=' absolute lg:right-20 md:right-20 -right-3 top-48 lg:top-80 md:top-80 lg:w-24 w-16 animate-spin-slowest hover:animate-spin-slow z-50' />
      <div className='content-tab border border-white border-opacity-50 bg-white bg-opacity-10 z-0 '>
            <div className={toggle === 1 ? "content active-content block" : "content hidden"}>
              {/* <h2>Content 1</h2> */}
            <EventList day={1} />
        </div>
        <div className={toggle===2? "content active-content block": "content hidden"}>
              {/* <h2>Content 2</h2> */}
              <EventList day={2} />
        </div>
        <div className={toggle===3? "content active-content block": "content hidden"}>
              {/* <h2>Content 3</h2> */}
              <EventList day={3} />
        </div>
        </div>
      </div>
        <div className=' lg:py-12 pt-6 pb-8 justify-start flex flex-col lg:items-start md:items-center items-end'>
        <img src={hashtag}alt='bg_glow' width={300} height={400} className=' lg:w-[246px] w-40 hover:scale-105 ease-in-out duration-300 animate-pulse -rotate-6' />
        </div>
        </div>
      </div>
      
      {isDesktop && <Particles
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
              fpsLimit:120,
              fullScreen: {
                enable: true,
                zIndex: -20,
              },
            }}
          />}

      </>
  )
}

export default SchedulePage
