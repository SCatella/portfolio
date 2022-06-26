import './interests.styles.scss';

const Interests = ({interests}) => {
  return (
    <div className='section-title'>
      <h2>interests</h2>
      <div className='interests'>
        {
          interests.map((interest, index) => {
            return (
              <div className='interest' key={`${interest}${index}`}>
                <p>{interest}</p>
              </div>
            )})
        }
      </div>
    </div>
  )
}

export default Interests;