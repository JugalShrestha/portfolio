import { motion } from "framer-motion"

const WelcomeCard = () => {
   
  const fromLeftVairants = {
    initial:{
        x: -100,
        y: ["-50%"],
        opacity: 0,
    },
    animation:{
        x: 0,
        opacity: 1,
    }
  }
  const fromRightVairants = {
    initial:{
        x: 100,
        y: ["-50%"],
        opacity: 0,
    },
    animation:{
        x: 0,
        opacity: 1,
    }
  }
  const fromBottomVairants = {
    initial:{
        y: -100,
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
        opacity: 0,
    },
    animation:{
        y: 0,
        opacity: 1,
    }
  }

  return (
    <motion.div variants={fromBottomVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.1,type:"spring"}} className="welcome-card">
        <div className="graphics">
        <motion.div variants={fromLeftVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.2,type:"spring"}} className="slogan">ONE<br></br>STOP<br></br>SOLUTION</motion.div>
            <div className="gradient-overlay"></div>
            <motion.div variants={fromRightVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.4,type:"spring"}} className="name">
              <div className="first-name">JUGAL</div>
              <div>SHRESTHA</div>
            </motion.div>
            <motion.img variants={fromTopVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.4,type:"spring"}} className="avatar" src="images/avatar picture.webp"/>
        </div>
    </motion.div>
  )
}

export default WelcomeCard