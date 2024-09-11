import { motion } from "framer-motion"

const WelcomeCard = () => {
   
  const fromLeftVairants = {
    initial:{
        x: -100,
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
        y: 100,
        x:"-50%",
        opacity: 0,
    },
    animation:{
        y: 0,
        x:"-50%",
        opacity: 1,
    }
  }

  return (
    <div className="welcome-card">
        <motion.div variants={fromBottomVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.2,type:"spring"}} className="graphics">
            <motion.div variants={fromLeftVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.2,type:"spring"}} className="slogan">ONE<br></br>STOP<br></br>SOLUTION</motion.div>
            <div className="gradient-overlay"></div>
            <motion.div variants={fromTopVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.2,type:"spring"}} className="name">JUGAL</motion.div>
            <img src="images/avatar picture.webp"/>
            <div className="sun"></div>
        </motion.div>
    </div>
  )
}

export default WelcomeCard