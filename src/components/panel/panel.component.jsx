import './panel.styles.scss';

const Panel = ({ link, image }) => {

  return (
    <div key={`${link}`}>
      <a href={link} target='_blank' rel='noreferrer'>
        <button className='panel' style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }} type='button'></button>
      </a>
    </div>
  )
}

export default Panel;