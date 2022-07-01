import Banner from '../banner/banner.component';

import './panel-container.styles.scss';

const PanelContainer = () => {
  return (
    <div className='panel-container'>
      <div className='panels'>
        <a href='' className='panel'></a>
        <a href='' className='panel'></a>
        <a href='' className='panel'></a>
        <a href='' className='panel'></a>
      </div>
      <Banner />
    </div>
  )
}

export default PanelContainer