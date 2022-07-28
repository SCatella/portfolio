// import React
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';

// Import Components
import Projects from '../resume/components/projects/projects.component';

// Import Styles
import './projects.styles.scss'

const Portfolio = () => {

  const user = useContext(UserContext);

  return (
    <div className='portfolio'>
      <Projects projects={user.projects} />
    </div>
  )
}

export default Portfolio;