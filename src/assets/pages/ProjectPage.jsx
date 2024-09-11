import React from "react"
import project_data from "../components/project_data"
import Project from "../components/Project"
import { motion } from "framer-motion"

const ProjectPage = React.forwardRef((props,ref) => {
   
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
  
  return (
    <div ref={ref} className='project-page'>
      <motion.div variants={fromLeftVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.2,type:"spring"}}  className="header">
        <div className="marquee">
          <div className="text">WORKS . WORKS . WORKS . WORKS . WORKS . WORKS . WORKS . WORKS .</div>
          <div className="text">WORKS . WORKS . WORKS . WORKS . WORKS . WORKS . WORKS . WORKS .</div>
        </div>
      </motion.div>
      <div className="projects">
        <div className="collection">
        <motion.div variants={fromBottomVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.2,type:"spring"}} className="collection-header">
            PROGRAMMING
          </motion.div>
          <div className="body">
            {project_data
              .filter((project) => project.platfrom === "A")
              .map((project, index) => (
                <Project
                  key={project.link}
                  name={project.name}
                  order={index}
                  type={project.type}
                  date={project.date}
                  link={project.link}
                />
              ))}
          </div>
        </div>
        <div className="collection">
          <motion.div variants={fromBottomVairants}  initial="initial" viewport={{ once: true }} whileInView="animation" transition={{delay:.1,type:"spring"}} className="collection-header"> 
            CONTENT CREATION/ EDITING/ ANIMATION
          </motion.div>
          <div className="body">
          {project_data
              .filter((project) => project.platfrom === "B")
              .map((project, index) => (
                <Project
                  key={project.link}
                  name={project.name}
                  order={index}
                  type={project.type}
                  date={project.date}
                  link={project.link}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  )
})

ProjectPage.displayName = "ProjectPage"

export default ProjectPage