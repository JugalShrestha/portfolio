import { motion } from "framer-motion"
import React from "react"

const AboutSection = React.forwardRef((props,ref)=>{
  
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

  return (
    <div ref={ref} className="about-page">
      <motion.div variants={fromLeftVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.1,type:"spring"}} className="about-section">   
        Hey! {"I'm"} <motion.span variants={fromBottomVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.4,type:"spring"}}>Jugal Shrestha</motion.span>, a <motion.span variants={fromBottomVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.4,type:"spring"}}>multi-talented creator</motion.span> passionate about bringing <motion.span variants={fromBottomVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.4,type:"spring"}}>ideas to life</motion.span>. Got a project in mind? <motion.span variants={fromBottomVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.4,type:"spring"}}>
        {"Let's"} collaborate!</motion.span>
      </motion.div>
      <motion.div variants={fromBottomVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.4,type:"spring"}} className="skill-section">
        <div className="header">I got you covered!</div>
        <ul className="skills">
          <li className="skill">Making an <span>App</span> for your need</li>
          <li className="skill">A wonderful <span>website</span> as you need</li>
          <li className="skill"><span>Editing</span> your masterpiece videos</li>
          <li className="skill">Making an amazing <span>animation</span> video</li>
          <li className="skill">Also, <span>acting</span> on side</li>
        </ul>
      </motion.div>
    </div>
  )
})

AboutSection.displayName = "AboutPage"

export default AboutSection