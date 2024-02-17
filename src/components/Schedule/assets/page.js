import React, { useState } from 'react'
import "./page.module.css"
import EventList from './eventList'
import backgroundGlow from './images/bg_svg.svg'
import backgroundTexture from './images/texture.svg'
import hashtag from './images/hashtags.svg'
import star from './images/star.svg'
import layer_blur from './images/layer-blur.svg'
const SchedulePage = () => {
  const [toggle, setToggle] = useState(1)

  const toggletab = (index) => {
    setToggle(index);
  }
  return (
    <div style={{ backgroundImage: `url(${backgroundTexture})` }} className=' bg-cover w-full h-auto absolute bg-opacity-30'>
      <img src={layer_blur} alt='layer blur' width={1920} height={560} className=' object-cover w-full absolute bottom-0 left-20 lg:block hidden' />
      <img src={backgroundGlow} alt='bg_glow' width={1920} height={560} className=' object-cover w-full absolute top-0' />
    <div className='lg:max-w-[1220px] md:max-w-[640px] max-w-[360px] mx-auto'>
    <div className='flex flex-col justify-center items-center text-white relative '>
      
      <h1 className=' font-Corben text-lg md:text-xl lg:text-[40px] tracking-wider font-bold font lg:pt-24 lg:pb-24 md:pt-8 pt-8 pb-28'>Schedule of Events </h1>
      <div className=' block-tabs flex flex-row lg:gap-[124px] md:gap-12 gap-4 z-20 absolute lg:top-44 md:top-24 top-24'>
        <div className={toggle===1?" tabs active-tabs bg-white text-[#333333] lg:py-8 py-4 lg:px-12 px-6 lg:text-[20px] md:text-md text-xs border border-white relative" : "tabs  lg:py-8 py-4 lg:px-12 px-6 lg:text-[20px] md:text-md text-xs bg-[#D7700B] border border-white relative text-white"} onClick={() => {
          toggletab(1)
        }}>
          <div className='lg:py-[40px] py-5 lg:px-[72px] px-[36px] border border-white absolute lg:bottom-[-8px] bottom-[-4px] left-[10px] -z-10'></div>
          DAY 1</div>
        

        <div className={toggle===2?" tabs active-tabs bg-white text-[#333333] lg:py-8 py-4 lg:px-12 px-6 lg:text-[20px] md:text-md text-xs border border-white relative" : "tabs text-white lg:py-8 py-4 lg:px-12 px-6 lg:text-[20px] md:text-md text-xs bg-[#D7700B] border border-white relative"} onClick={() => {
          toggletab(2)
        }}>
          <div className='lg:py-[40px] py-5 lg:px-[72px] px-[36px] border border-white absolute lg:bottom-[-8px] bottom-[-4px] left-[10px] -z-10'></div>
          DAY 2</div>
        <div className={toggle===3?" tabs active-tabs bg-white text-[#333333] lg:py-8 py-4 lg:px-12 px-6 lg:text-[20px] md:text-md text-xs border border-white relative" : "tabs text-white lg:py-8 py-4 lg:px-12 px-6 lg:text-[20px] md:text-md text-xs bg-[#D7700B] border border-white relative"} onClick={() => {
          toggletab(3)
        }}><div className='lg:py-[40px] py-5 lg:px-[72px] px-[36px] border border-white absolute lg:bottom-[-8px] bottom-[-4px] left-[10px] -z-10'></div>
          DAY 3</div>
          </div>
          <img src={star} alt='roteing star' width={120} height={120} className=' absolute lg:right-20 md:right-20 -right-3 top-48 lg:top-80 md:top-80 lg:w-24 w-16 animate-spin-slowest hover:animate-spin-slow z-50' />
      <div className='content-tab border border-white border-opacity-50 bg-white bg-opacity-10 z-0 '>
            <div className={toggle === 1 ? "content active-content block" : "content hidden"}>
              <h2>Content 1</h2>
            <EventList day={1} />
        </div>
        <div className={toggle===2? "content active-content block": "content hidden"}>
              <h2>Content 2</h2>
              <EventList day={2} />
        </div>
        <div className={toggle===3? "content active-content block": "content hidden"}>
              <h2>Content 3</h2>
              <EventList day={3} />
        </div>
        </div>
      </div>
        <div className=' lg:py-12 pt-6 pb-8 justify-start flex flex-col lg:items-start md:items-center items-end'>
        <img src={hashtag}alt='bg_glow' width={300} height={400} className=' lg:w-[246px] w-40 hover:scale-105 ease-in-out duration-300 animate-pulse -rotate-6' />
        </div>
        </div>
    </div>
  )
}

export default SchedulePage
