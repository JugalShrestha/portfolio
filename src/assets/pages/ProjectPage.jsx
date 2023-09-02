import Project from "../components/Project"
import project_data from "../components/project_data"

const ProjectPage = () => {
  return (
    <div className='page' id='project-page'>
        <div className="projects">
            {project_data.map((project,index)=>(
                <Project key={index} no={index + 1} name={project.name} link={project.link} desc={project.desc} photo={project.photo} techStack={project.techStack} />
            ))}
         </div>
    </div>
  )
}

export default ProjectPage