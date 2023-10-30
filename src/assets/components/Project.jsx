import PropTypes from "prop-types";
import { motion } from "framer-motion"
// import { useEffect, useRef, useState} from "react";

const Project = ({name,desc,link,photo}) => {
  
  const fromLeftVairants = {
    initial:{
        x: -100,
        opacity: 0,
    },
    animation:{
        x: 0,
        opacity: 1,
    },
}
const fromRightVairants = {
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
const fromTopVairants = {
    initial:{
        y: -100,
        opacity: 0,
    },
    animation:{
        y: 0,
        opacity: 1,
    }
}

  return (
    <div className="project">
      <div className="project-header" >
        <div className="marquee">
          <li className="text">{name}</li>
          <li className="text">{name}</li>
          <li className="text">{name}</li>
          <li className="text">{name}</li>
          <li className="text">{name}</li>
        </div>
      </div>
      <motion.div variants={fromTopVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.2,type:"spring"}} className="project-body">
        <div className="overlay"></div>
        <motion.div variants={fromLeftVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.2,type:"spring"}} className="project-image glass-bg">
          <img src={photo} alt="photos" />
        </motion.div>
        <div className="project-contents">
          <motion.div variants={fromRightVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.2,type:"spring"}} className="project-desc glass-bg">
              <span>{name+":"}</span>
              {desc}
          </motion.div>
          <motion.div variants={fromBottomVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.2,type:"spring"}} className="project-link glass-bg">
            <a href={link} target="_blank" rel="noopener noreferrer">View Work! <svg viewBox="0 0 79 104" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 100.088L75 4M75 4H21.75M75 4V76.0661" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
}


export default Project