// import React
import { useContext } from 'react';
import { StateContext } from '../../contexts/state.context';

// Import Components
import Projects from '../../components/projects/projects.component';

// Import Styles
import './projects.styles.scss'

const Portfolio = () => {

  const user = useContext(StateContext).user;

  return (
    <div className='portfolio'>
      <Projects projects={user.projects} />
    </div>
  )
}

export default Portfolio;