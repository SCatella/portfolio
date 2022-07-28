import './education.styles.scss'

const Education = ({ education }) => {
  return (
    <div className='education-title'>
      <h2>Education</h2>
      <div className='education'>
        {
          education.map((element, index) => {
            return (
              <div className='course' key={`${element.course}${index}`}>
                <h5>{`${element.course} - ${element.school}`}</h5>
                <p>{`${element.description}`}</p>
              </div>
            )})
        }
      </div>
    </div>
  )
}

export default Education;