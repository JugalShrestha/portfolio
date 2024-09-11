import React from "react"
import AboutSection from "../components/AboutSection"
import SkillMarquee from "../components/SkillMarquee"
import WelcomeCard from "../components/WelcomeCard"
// import photo from "/images/avatar picture.webp"
// import {motion} from "framer-motion";

const HeroPage = React.forwardRef((props,ref) => {

    // const fromLeftVairants = {
    //     initial:{
    //         x: -100,
    //         opacity: 0,
    //     },
    //     animation:{
    //         x: 0,
    //         opacity: 1,
    //     },
    // }
    // const fromRightVairants = {
    //     initial:{
    //         x: 100,
    //         opacity: 0,
    //     },
    //     animation:{
    //         x: 0,
    //         opacity: 1,
    //     }
    // }
    // const fromBottomVairants = {
    //     initial:{
    //         y: 100,
    //         opacity: 0,
    //     },
    //     animation:{
    //         y: 0,
    //         opacity: 1,
    //         transition:{
    //             delay: 0.2,
    //             type: "spring",
    //         }
    //     }
    // }
    // const fromTopVairants = {
    //     initial:{
    //         y: -100,
    //         opacity: 0,
    //     },
    //     animation:{
    //         y: 0,
    //         opacity: 1,
    //     }
    // }

  return (
    <div ref={ref} className="hero-page">
        <WelcomeCard/>
        <div className="right-side">
            <SkillMarquee/>
            <AboutSection/>
        </div>
    </div>
  )
})

HeroPage.displayName = "HeroPage"

export default HeroPage