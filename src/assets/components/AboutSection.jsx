import { motion } from "framer-motion"
import React, { useState } from "react"
import Marquee from "./Marquee"
import { useRef } from "react"

const AboutSection = React.forwardRef((props,ref)=>{

  const audioRef = useRef();
  const [music,setMusic] =  useState(true)
  
  const fromLeftVairants = {
    initial:{
        x: 100,
        opacity: 0,
    },
    animation:{
        x: 0,
        opacity: 1,
    }
  }

  const fromBottomVairants = {
    initial:{
        y: 100,
        opacity: 0,
    },
    animation:{
        y: 0,
        opacity: 1,
    }
  }

  const handleMusic = () =>{
    audioRef.current.volume = 0.3;
    setMusic(!music)
    if(music)
    {
      audioRef.current.play()
    }
    else{
      audioRef.current.pause()
    }
  }

  return (
    <>
    <Marquee text="←● Know me a little ●→"/>
    <div ref={ref} className="about-page">
      <div className="scrollable">
        <motion.div variants={fromBottomVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.1,type:"spring"}} className="hero-section">
          {/* for skill section */}
          <div className="skill-section">
            <div className="logo">
              <img src="/images/logo.webp" alt="this is the logo" />
            </div>
            <div className="skills">
              <div className="skill">
                I make <span>apps</span> for fun.
              </div>
              <div className="skill">
                I create wonder <span>websites</span>.
              </div>
              <div className="skill">
                I can <span>edit</span> like Picasso.
              </div>
              <div className="skill">
                I create 2D/ 3D <span>animations</span> too!
              </div>
              <div className="skill">
                I also create <span>content</span> on the side.
              </div>
            </div>
          </div>
          <div className="scroll-text">
            {"Scroll-->"}
          </div>
          {/* for the intro part */}
          <div className="intro-header">
            {"Every Hero has it's own origin story"} <img src="/images/hero-image.webp" alt="hero image" /> <br></br> 
            {"& guess what this "}<span>little guy</span>{" has one too!"}
          </div>
        </motion.div>
        {/* for the born part */}
        <motion.div variants={fromLeftVairants}  initial="initial" whileInView="animation" transition={{delay:.3,type:"spring"}} className="story">
          <div className="image">
            <img src="/images/baby-jugal.webp" alt="" />
          </div>
          <div className="text">
            <div className="small-text">Yes, that is me</div>
            <div className="big-text">Born 2003 A.D</div>
          </div>
        </motion.div>
        {/* for the art part */}
        <motion.div variants={fromLeftVairants}  initial="initial" whileInView="animation" transition={{delay:.1,type:"spring"}} className="story">
          <div className="image">
            <img src="/images/art-jugal.webp" alt="" />
          </div>
          <div className="text">
            <div className="small-text">Later found out I suck at it</div>
            <div className="big-text">Got interested in the world of Arts</div>
          </div>
        </motion.div>
        {/* for the music part */}
        <motion.div variants={fromLeftVairants}  initial="initial" whileInView="animation" transition={{delay:.1,type:"spring"}} className="story">
          <div id="audio" onClick={handleMusic} className="image">
            Tap to {music?"play":"stop"}
            <img src="/images/cd-player.webp" alt="" />
            <audio ref={audioRef} src="/audio/thavayena.mp3" >Your Browser cannot play audio</audio>
          </div>
          <div className="text">
            <div className="small-text">This one is close to my heart!</div>
            <div className="big-text">Started Creating Songs at the age of 12</div>
          </div>
        </motion.div>
        {/* for the computer part */}
        <motion.div variants={fromLeftVairants}  initial="initial" whileInView="animation" transition={{delay:.1,type:"spring"}} className="story">
          <div className="image">
            <img src="/images/computer-jugal.webp" alt="" />
          </div>
          <div className="text">
            <div className="small-text">I speak Code</div>
            <div className="big-text">Noticed that I have a thing for Computer too!</div>
          </div>
        </motion.div>
        {/* for meet part */}
        <motion.div variants={fromLeftVairants}  initial="initial" whileInView="animation" transition={{delay:.1,type:"spring"}} className="full-story">
          <div className="subscription">
            <div className="text">To know the full story buy this Subscription</div>
            <div onClick={()=>{alert("Are you stupid? just contact me!")}} className="sub-btn">
              $10,000,000 per day
            </div>
          </div>
          <div className="divider">
            OR
          </div>
          <div className="meet">
            <div className="text">You can just mail me..</div>
            <a href="mailto:jugalnepali@gmail.com" target="_blank" rel="noopener noreferrer" className="meet-btn">
              <img src="/images/mail.webp" alt="" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  )
})

AboutSection.displayName = "AboutPage"

export default AboutSection