import Project from "../components/Project"
import project_data from "../components/project_data"

const ProjectPage = () => {
  return (
    <div className='page' id='project-page'>
        <div className="projects">
            {project_data.map((project,index)=>(
                <Project key={index} name={project.name} link={project.link} desc={project.desc} photo={project.photo} />
            ))}
         </div>
    </div>
  )
}

export default ProjectPage