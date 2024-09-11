import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Project = ({order,name,type,link,date}) => {
  
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
    <motion.div variants={fromBottomVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:order*.2,type:"spring"}}>
    <a target="_blank" rel="noreferrer" href={link} className="project">
              <div className="left-side">
                {/* project order */}
                <div className="sn">0{order+1}</div>
                {/* project desc */}
                <div className="context">
                  <div className="name">{name}</div>
                  <div className="type">{type}</div>
                  <div className="date">{date}</div>
                </div>
              </div>
              {/* project link */}
              <div className="link">
                <img src="/images/redirect icon.png"/>
              </div>
    </a>
    </motion.div>
  )
}

Project.propTypes = {
  order: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}


export default Project