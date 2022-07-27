// Imp[ort React
import { useContext } from 'react';
import { UserContext } from '../../index';

// Import Components
import Contact from './components/contact/contact.component';
import Skills from './components/skills/skills.component';
import Interests from './components/interests/interests.component';
import User from './components/user/user.component';
import Education from './components/education/education.component';
import Projects from './components/projects/projects.component';
import Employment from './components/employment/employment.component';
import resume from '../../assets/Samuel Catella Resume.pdf'
import resumeImage from '../../assets/Samuel Catella Resume.jpg';

// Import Images

// Import Styles
import './resume.component.scss';


const Resume = () => {

  const user = useContext(UserContext);

  return (
    <div className='resume'>
      <div className='button-container'>
        <a className='button' download='Samuel Catella Resume.pdf' href={resume}>Download</a>
      </div>
      <img className='resumeImage' src={resumeImage} alt='' />
      <div className='page-container' id='resume'>
        <div className='left-column'>
          <img src={user.profileImage} alt='' className='profile-picture'></img>
          <Contact contact={user.contact} />
          <Skills skills={user.skills} />
          <Interests interests={user.interests} />
        </div>
        <div className='middle-decoration' />
        <div className='right-column'>
          <User user={user} />
          <Projects projects={user.projects} />
          <Education education={user.education} />
          <Employment employment={user.employment} />
        </div>
      </div>
    </div>
  );
}

export default Resume;