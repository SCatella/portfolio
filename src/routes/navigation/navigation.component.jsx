import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Fragment>
      <div className='nav-bar'>
        <Link className='logo-container' to='/'>Home</Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/resume'>Resume</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;