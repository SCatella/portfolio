import './skills.styles.scss';

const Skills = ({ skills }) => {
  return (
    <div className='section-title'>
      <h2>Skills</h2>
      <div className='skills'>
        {
          skills.map((skill, index) => {
            return (
              <div className='skill' key={`${skill}${index}`}>
                <p>{skill}</p>
              </div>
            )})
        }
      </div>
    </div>
  )
}

export default Skills;