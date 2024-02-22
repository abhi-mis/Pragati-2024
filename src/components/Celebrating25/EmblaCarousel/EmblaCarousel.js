import React, { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { flushSync } from "react-dom";
import imageByIndex from "./imageByIndex";
import styles from "./EmblaCarousel.module.css";
import { motion } from "framer-motion";

import { Power3 } from "gsap";
import { TimelineLite } from "gsap/gsap-core.js";

const TWEEN_FACTOR = 1.2;

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [tweenValues, setTweenValues] = useState([]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      return diffToTarget * (-1 / TWEEN_FACTOR) * 100;
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

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

  //   const textEnter = ()=> setCursorVariant("text");
  //   const subtextEnter = ()=> setCursorVariant("subtext");
  //   const cardEnter = ()=> setCursorVariant("card");
  //   const textLeave = ()=> setCursorVariant("default");
  //   const handleEnter = ()=> setCursorVariant("handle");

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
  useEffect(() => {
    const autoScroll = () => {
      emblaApi.scrollNext();
    };
    const intervalId = setInterval(autoScroll, 3000);
    return () => clearInterval(intervalId);
  }, [emblaApi]);

  return (
    <>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{
          x: { delay: 0 },
          y: { delay: 0 },
          stiffness: 1,
          bounce: 0,
        }}
      />
      <div className={styles.main_parent}></div>
      <div className={styles.glow_effect_top}></div>
      <div className={styles.emla_parent}>
        <div className={styles.embla}>
          <div className={styles.embla__viewport} ref={emblaRef}>
            <div className={styles.embla__container}>
              {slides.map((index) => (
                <div className={styles.embla__slide} key={index}>
                  <div className={styles.embla_slide_number}>
                    <span>{index + 1}</span>
                  </div>
                  <div className={styles.embla__parallax}>
                    <div
                      className={styles.embla_parallax_layer}
                      style={{
                        ...(tweenValues.length && {
                          transform: `translateX(${tweenValues[index]}%)`,
                        }),
                      }}
                    >
                      {/* <img
                            className={${styles.embla__slide__img}, ${styles.embla__parallax__img}}
                            src={imageByIndex(index)}
                                        alt="Parallax images"
                            /> */}
                      <img
                        className={`${styles.embla__slide__img} ${styles.embla__parallax__img}`}
                        src={imageByIndex(index)}
                        alt="Parallax images"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;
