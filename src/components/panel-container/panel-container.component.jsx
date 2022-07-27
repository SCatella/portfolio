import { useContext } from 'react';
import { BannerTitleContext, UserContext } from '../../index';

import Banner from '../banner/banner.component';
import Panel from '../panel/panel.component';

import './panel-container.styles.scss';

const PanelContainer = () => {
  const title = useContext(BannerTitleContext);
  const user = useContext(UserContext);
  const projects = user.projects.slice(0, 4);

  return (
    <div className='panel-container'>
      <div className='panels'>
        {projects.map((element) => {
          const { link, image } = element;
          return (
            <Panel link={link} image={image} key={link} />
          )
        })}
      </div>  
      <div className='panel-container-banner'>
        <Banner title={title} />
      </div>
    </div>
  )
}

export default PanelContainer