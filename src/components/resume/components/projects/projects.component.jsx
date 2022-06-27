import './projects.styles.scss'

const Projects = ({ projects }) => {
  return (
    <div className='projects-title'>
      <h2>Projects</h2>
      <div className='projects'>
        {
          projects.map((element, index) => {
            const { project, description } = element;

            return (
              <div className='project' key={`${project}${index}`}>
                <h5>{`${project}`}</h5>
                <p>{`${description}`}</p>
              </div>
            )})
        }
      </div>
    </div>
  )
}

export default Projects;