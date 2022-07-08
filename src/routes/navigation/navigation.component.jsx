// React Imports
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
// Assets Imports
import { ReactComponent as SCLogo } from '../../assets/logo.svg';

// Styles Imports
import './navigation.styles.scss';


const Navigation = () => {
  return (
    <Fragment>
      <div className='navigation-bar'>
        <Link className='logo-container' to='/'>
          <SCLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/projects'>
            Projects
            <p>
              P
            </p>
          </Link>
          <Link className='nav-link' to='/resume'>
            Resume
            <p>
              R
            </p>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;