import React from "react";
import "./VerticalCarousei.css";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const VerticalCarousel = () => {
  return (
    <div className="App1">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{
            background: "rgba(255, 247, 241, 0.1)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "0px solid  rgb(33, 150, 243)" }}
          // date="2011 - present"
          iconStyle={{ background: "#005bea", color: "#fff" }}
          icon={<FaLocationDot />}
        >
          <h3 className="vertical-timeline-element-title">March 06,2024</h3>
          <h4 className="vertical-timeline-element-subtitle">B402 & B405</h4>
          <p style={{ fontSize: "20px" }}>INNOVATIVE MODEL </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(255, 247, 241, 0.1)",
            color: "#fff",
          }}
          // date="2010 - 2011"
          iconStyle={{ background: "#005bea", color: "#fff" }}
          icon={<FaLocationDot />}
        >
          <h3 className="vertical-timeline-element-title">March 06,2024</h3>
          <h4 className="vertical-timeline-element-subtitle">
            A111 ,A113, A114, A115 ,A116
          </h4>
          <p style={{ fontSize: "20px" }}>MATH MANIA</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(255, 247, 241, 0.1)",
            color: "#fff",
          }}
          // date="2008 - 2010"
          iconStyle={{ background: "#005bea", color: "#fff" }}
          icon={<FaLocationDot />}
        >
          <h3 className="vertical-timeline-element-title">March 06,2024</h3>
          <h4 className="vertical-timeline-element-subtitle">B303</h4>
          <p style={{ fontSize: "20px" }}> CATIA</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(255, 247, 241, 0.1)",
            color: "#fff",
          }}
          // date="2006 - 2008"
          iconStyle={{ background: "#005bea", color: "#fff" }}
          icon={<FaLocationDot />}
        >
          <h3 className="vertical-timeline-element-title">March 06,2024</h3>
          <h4 className="vertical-timeline-element-subtitle">B108</h4>
          <p style={{ fontSize: "20px" }}>CIRCUIT DESIGN</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "rgba(255, 247, 241, 0.1)",
            color: "#fff",
          }}
          // date="April 2013"
          iconStyle={{ background: "#005bea", color: "#fff" }}
          icon={<FaLocationDot />}
        >
          <h3 className="vertical-timeline-element-title">March 06,2024</h3>
          <h4 className="vertical-timeline-element-subtitle">A219(Lab)</h4>
          <p style={{ fontSize: "20px" }}>NFS</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education "
          contentStyle={{
            background: "rgba(255, 247, 241, 0.1)",
            color: "#fff",
          }}
          // date="November 2012"
          iconStyle={{ background: "#005bea", color: "#fff" }}
          icon={<FaLocationDot />}
        >
          <h3 className="vertical-timeline-element-title">March 06,2024</h3>
          <h4 className="vertical-timeline-element-subtitle">Workshop</h4>
          <p style={{ fontSize: "20px" }}>ROBOTICS</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          // date="2002 - 2006"
          contentStyle={{
            background: "rgba(255, 247, 241, 0.1)",
            color: "#fff",
          }}
          iconStyle={{ background: "#005bea", color: "#fff" }}
          icon={<FaLocationDot />}
        >
          <h3 className="vertical-timeline-element-title">March 07,2023</h3>
          <h4 className="vertical-timeline-element-subtitle">
            English Communication Lab
          </h4>
          <p style={{ fontSize: "20px" }}>INNOVATIVE IDEA</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          // date="2002 - 2006"
          contentStyle={{
            background: "rgba(255, 247, 241, 0.1)",
            color: "#fff",
          }}
          iconStyle={{ background: "#005bea", color: "#fff" }}
          icon={<FaLocationDot />}
        >
          <h3 className="vertical-timeline-element-title">March 07,2023</h3>
          <h4 className="vertical-timeline-element-subtitle">
            B312 & Physics Lab & Chemistry Lab , A101, A102, A104 & A115
          </h4>
          <p style={{ fontSize: "20px" }}>TREASURE HUNT(ENIGMA)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          // date="2002 - 2006"
          contentStyle={{
            background: "rgba(255, 247, 241, 0.1)",
            color: "#fff",
          }}
          iconStyle={{ background: "#005bea", color: "#fff" }}
          icon={<FaLocationDot />}
        >
          <h3 className="vertical-timeline-element-title">March 07,2023</h3>
          <h4 className="vertical-timeline-element-subtitle">
            A301, A314, A317(Lab){" "}
          </h4>
          <p style={{ fontSize: "20px" }}>CODE FIESTA</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          // date="2002 - 2006"
          contentStyle={{
            background: "rgba(255, 247, 241, 0.1)",
            color: "#fff",
          }}
          iconStyle={{ background: "#005bea", color: "#fff" }}
          icon={<FaLocationDot />}
        >
          <h3 className="vertical-timeline-element-title">March 07,2023</h3>
          <h4 className="vertical-timeline-element-subtitle">A219(Lab)</h4>
          <p style={{ fontSize: "20px" }}>FIFA</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          // date="2002 - 2006"
          contentStyle={{
            background: "rgba(255, 247, 241, 0.1)",
            color: "#fff",
          }}
          iconStyle={{ background: "#005bea", color: "#fff" }}
          icon={<FaLocationDot />}
        >
          <h3 className="vertical-timeline-element-title">March 07,2023</h3>
          <h4 className="vertical-timeline-element-subtitle">Workshop</h4>
          <p style={{ fontSize: "20px" }}>ROBOTICS</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          // date="2002 - 2006"
          contentStyle={{
            background: "rgba(255, 247, 241, 0.1)",
            color: "#fff",
          }}
          iconStyle={{ background: "#005bea", color: "#fff" }}
          icon={<FaLocationDot />}
        >
          <h3 className="vertical-timeline-element-title">March 08,2023</h3>
          <h4 className="vertical-timeline-element-subtitle">
            B309 (DRAWING HALL)
          </h4>
          <p style={{ fontSize: "20px" }}>TECHNICAL POSTER</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          // date="2002 - 2006"
          contentStyle={{
            background: "rgba(255, 247, 241, 0.1)",
            color: "#fff",
          }}
          iconStyle={{ background: "#005bea", color: "#fff" }}
          icon={<FaLocationDot />}
        >
          <h3 className="vertical-timeline-element-title">March 08,2023</h3>
          <h4 className="vertical-timeline-element-subtitle">
            B309 ,B301 ,A204
          </h4>
          <p style={{ fontSize: "20px" }}>QUIZOMANIA</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          // date="2002 - 2006"
          contentStyle={{
            background: "rgba(255, 247, 241, 0.1)",
            color: "#fff",
          }}
          iconStyle={{ background: "#005bea", color: "#fff" }}
          icon={<FaLocationDot />}
        >
          <h3 className="vertical-timeline-element-title">March 08,2023</h3>
          <h4 className="vertical-timeline-element-subtitle">
            A301, A304 , A318(Lab)
          </h4>
          <p style={{ fontSize: "20px" }}>ML MANIA</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          // date="2002 - 2006"
          contentStyle={{
            background: "rgba(255, 247, 241, 0.1)",
            color: "#fff",
          }}
          iconStyle={{ background: "#005bea", color: "#fff" }}
          icon={<FaLocationDot />}
        >
          <h3 className="vertical-timeline-element-title">March 08,2023</h3>
          <h4 className="vertical-timeline-element-subtitle">Workshop</h4>
          <p style={{ fontSize: "20px" }}>ROBOTICS(FINAL)</p>
        </VerticalTimelineElement>

        {/* <VerticalTimelineElement
          iconStyle={{ background: "#005bea", color: "#fff" }}
          icon={<MdOutlineEmojiEvents />}
        /> */}
      </VerticalTimeline>
    </div>
  );
};

export default VerticalCarousel;
