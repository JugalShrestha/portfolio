import { motion } from "framer-motion"

const SkillMarquee = () => {
  
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
    <motion.div variants={fromTopVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.2,type:"spring"}} className="skill-marquee">
        <div className="marquee">
            <div className="text"><span>●</span> PROGRAMMING <span>●</span> EDITING <span>●</span> ANIMATION <span>●</span> CONTENT CREATION</div>
            <div className="text"><span>●</span> PROGRAMMING <span>●</span> EDITING <span>●</span> ANIMATION <span>●</span> CONTENT CREATION</div>
            <div className="text"><span>●</span> PROGRAMMING <span>●</span> EDITING <span>●</span> ANIMATION <span>●</span> CONTENT CREATION</div>
        </div>
        <div className="marquee">
            <div className="text"><span>●</span> PROGRAMMING <span>●</span> EDITING <span>●</span> ANIMATION <span>●</span> CONTENT CREATION</div>
            <div className="text"><span>●</span> PROGRAMMING <span>●</span> EDITING <span>●</span> ANIMATION <span>●</span> CONTENT CREATION</div>
            <div className="text"><span>●</span> PROGRAMMING <span>●</span> EDITING <span>●</span> ANIMATION <span>●</span> CONTENT CREATION</div>
        </div>
    </motion.div>
  )
}

export default SkillMarquee