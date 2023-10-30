import React from "react"
import photo from "/images/jugal-shrestha-photo.webp"
import {motion} from "framer-motion";

const HeroPage = React.forwardRef((props,ref) => {

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
            transition:{
                delay: 0.2,
                type: "spring",
            }
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
    <div ref={ref} className="page" id="hero-page">
        {/* for the middle contents */}
        <div className="hero-page-contents">
            <motion.div variants={fromRightVairants} transition={{delay: 0.8,type: "spring",}} initial="initial" viewport={{ once: true }}  whileInView="animation"  className="right-content">
                <div className="text">Hi!<br/> I am Jugal Shrestha,</div>
            </motion.div>
            <motion.div variants={fromBottomVairants}  initial="initial" viewport={{ once: true }} whileInView="animation"   className="big-content">
                <div className="overlay"></div>
                <img src={photo} alt="A man looking right with a smile" />
            </motion.div>
            <div className="left-content">
                <motion.div variants={fromLeftVairants} transition={{delay: 0.2,type: "spring",}}  initial="initial" viewport={{ once: true }} whileInView="animation"  className="big-text">verified</motion.div>
                <motion.div variants={fromLeftVairants} transition={{delay: 0.4,type: "spring",}}  initial="initial" viewport={{ once: true }} whileInView="animation"  className="big-text">problem</motion.div>
                <motion.div variants={fromLeftVairants} transition={{delay: 0.6,type: "spring",}}  initial="initial" viewport={{ once: true }} whileInView="animation"  className="big-text">solver</motion.div>
                <motion.div variants={fromLeftVairants} transition={{delay: 0.8,type: "spring",}}  initial="initial" viewport={{ once: true }} whileInView="animation"  className="text">Solving problems since day 0.</motion.div>
            </div>
            <motion.div variants={fromRightVairants} transition={{delay: 0.8,type: "spring",}}  initial="initial" viewport={{ once: true }} whileInView="animation"   className="bottom-content">
                <div className="text">Not your typical developer!</div>
            </motion.div>
        </div>
        {/* for the text that says look at my works! */}
        <motion.div variants={fromTopVairants} transition={{delay: 0.8,type: "spring",}}   initial="initial" viewport={{ once: true }} whileInView="animation"  className="scroll-nav">
            <div className="text">Scroll to see<br/>my work..</div>
            <svg viewBox="0 0 24 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.9393 199.061C11.5251 199.646 12.4749 199.646 13.0607 199.061L22.6066 189.515C23.1924 188.929 23.1924 187.979 22.6066 187.393C22.0208 186.808 21.0711 186.808 20.4853 187.393L12 195.879L3.51471 187.393C2.92892 186.808 1.97918 186.808 1.39339 187.393C0.807603 187.979 0.807603 188.929 1.39339 189.515L10.9393 199.061ZM10.5 7.83154e-08L10.5 198L13.5 198L13.5 -7.83171e-08L10.5 7.83154e-08Z"/>
            </svg>
        </motion.div>
    </div>
  )
})

HeroPage.displayName = "HeroPage"

export default HeroPage