// Import Components
import Panel from '../panel/panel.component';

// Import Styles
import './projects.styles.scss'

const Projects = ({ projects }) => {
  return (
    <div className='projects-title'>
      <h2>Projects</h2>
      <div className='projects'>
        {
          projects.map((element, index) => {
            const { project, description, image, link } = element;

            return (
              <div className='project' key={`${project}${index}`}>
                <div className='project-image'>
                  <Panel link={link} image={image} />
                </div>
                <div className='project-info'>
                  <h5>{`${project}`}</h5>
                  <p>{`${description}`}</p>
                </div>
              </div>
            )})
        }
      </div>
    </div>
  )
}

export default Projects;