// React Imports
import { useContext } from 'react';
import { UserContext } from '../../App';

// Component Imports
import PanelContainer from '../../components/panel-container/panel-container.component';
import Contact from '../resume/components/contact/contact.component';

// Assets Imports
import profilePicture from '../../assets/profile-oval.png';

// Styles Imports
import './home.styles.scss';


const Home = () => {

  const user = useContext(UserContext);

  return (
    <div className='home'>
      <div className='page'>
        <div className='profile'>
          <img src={profilePicture} alt='' />
          <div className='profile-info'>
            <div>
              <h1>Samuel Catella</h1>
              <p>your next developer</p>
            </div>
            <div className='profile-introduction'>
              <p>{user.statement}</p>
            </div>
          </div>
        </div>
        <div className='action'>
          <div className='contact-panel'>
            <Contact contact={user.contact} />
          </div>
          <div className='projects-panel'>
            <PanelContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;