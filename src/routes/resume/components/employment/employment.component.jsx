import './employment.styles.scss';

const Employment = ({ employment }) => {
  
  return (
    <div className='employment-title'>
      <h2>Employment</h2>
      <div className='employment'>
        {
          employment.map((element, index) => {
            const {
              company,
              monthStarted,
              monthEnded,
              yearStarted,
              yearEnded,
              position,
              location
            } = element;
        
            return (
              <div className='company' key={`${company}${index}`}>
                <h5>{`${company} (${monthStarted} ${yearStarted} - ${monthEnded} ${yearEnded})`}</h5>
                <p>{`${location} - ${position}`}</p>
              </div>
            )})
        }
      </div>
    </div>
  )
}

export default Employment;