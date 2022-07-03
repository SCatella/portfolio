import Banner from '../banner/banner.component';

import './panel-container.styles.scss';

const PanelContainer = ({ title }) => {
  return (
    <div className='panel-container'>
      <div className='panels'>
        <a href='' target='_blank' className='panel'></a>
        <a href='' target='_blank'  className='panel'></a>
        <a href='' target='_blank'  className='panel'></a>
        <a href='' target='_blank'  className='panel'></a>
      </div>
      <div className='panel-container-banner'>
        <Banner title={title} />
      </div>
    </div>
  )
}

export default PanelContainer