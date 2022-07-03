import { useContext } from 'react';
import { UserContext, BannerTitleContext } from '../../App';

import PanelContainer from '../../components/panel-container/panel-container.component';
import profilePicture from '../../assets/profile-oval.png';
import Contact from '../resume/components/contact/contact.component';

import './home.styles.scss';


const Home = () => {

  const bannerTitle = useContext(BannerTitleContext);
  const user = useContext(UserContext);

  return (
    <div className='home'>
      <div className='page'>
        <div className='profile'>
          <img src={profilePicture} alt='' />
          <div className='profile-info'>
            <h1>Samuel Catella</h1>
            <p>your next developer.</p>
          </div>
        </div>
        <div className='action'>
          <div className='contact-panel'>
            <Contact contact={user.contact} />
          </div>
          <div className='home-panel'>
            <PanelContainer title={ bannerTitle } />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;