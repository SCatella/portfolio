// React Imports
import { useContext } from 'react';
import { StateContext } from '../../contexts/state.context';

// Component Imports
import PanelContainer from '../../components/panel-container/panel-container.component';
import Contact from '../../components/contact/contact.component';

// Assets Imports

// Styles Imports
import './home.styles.scss';


const Home = () => {

  const user = useContext(StateContext).user;


  return (
    <div className='home'>
      <div className='page'>
        <div className='profile'>
          <img src={user.profileImage} alt='' width='200' height='217'  />
          <div className='profile-info'>
            <div>
              <h1>Samuel Catella</h1>
              <h3>your next developer</h3>
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