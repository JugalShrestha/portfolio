import PropTypes from "prop-types";

const Project = ({name,desc,link,photo,no}) => {
  return (
    <div className="project">
      <div className="project-header"><div className="text">{no+". "+name}</div></div>
      <div className="project-body">
        <div className="project-image">
          <img src={photo} alt="photos" />
        </div>
        <div className="project-contents">
          <div className="project-desc">
              <span>{name+":"}</span>
              {desc}
          </div>
          <div className="project-link">
            <a href={link} target="_blank" rel="noopener noreferrer">View Work! <svg viewBox="0 0 79 104" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 100.088L75 4M75 4H21.75M75 4V76.0661" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  no: PropTypes.number.isRequired,
}


export default Project