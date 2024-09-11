import { motion } from "framer-motion"

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

const AboutSection = () => {
  return (
    <motion.div variants={fromBottomVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.2,type:"spring"}}   className="about-section">
        <div className="overlay">
            <img src="/images/graphite texture.webp" alt="" />
        </div>
        <div className="header">
            <motion.div variants={fromLeftVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.2,type:"spring"}} className="text">ABOUT</motion.div>
            <div className="line"></div>
        </div>
        <motion.div variants={fromBottomVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.3,type:"spring"}} className="body">
          Hi! I am <span>Jugal Shrestha</span>. I am known for many talents as I am passionate about any creative works at hand. So, if you have any projects you want to initiate contact me!
          <br></br>
          Services:
          <li>App Development</li> 
          <li>Web Development️</li>
          <li>Video Editing</li>
          <li>Content Creation</li>
          <li>Animations</li>
        </motion.div>
        <motion.div variants={fromLeftVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.2,type:"spring"}}    className="logo">
            <img src="/images/logo.webp" alt="" />
        </motion.div>
    </motion.div>
  )
}

export default AboutSection