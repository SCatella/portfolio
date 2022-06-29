import Contact from '../../components/resume/components/contact/contact.component';
import Skills from '../../components/resume/components/skills/skills.component';
import Interests from '../../components/resume/components/interests/interests.component';
import User from '../../components/resume/components/user/user.component';
import Education from '../../components/resume/components/education/education.component';
import Projects from '../../components/resume/components/projects/projects.component';
import Employment from '../../components/resume/components/employment/employment.component';

import profilePicture from '../../assets/profile-oval.png';
import mail from '../../assets/mail.svg';
import github from '../../assets/github.svg';
import phone from '../../assets/phone.svg';
import marker from '../../assets/marker.svg';

import './resume.component.scss';


const user = {
  firstName: 'samuel',
  lastName: 'catella',
  title: 'web developer',
  statement: 'Motivated to change my life through learning more about the wonders of software development',
  contact: [
    {
      image: mail,
      info: 'samuel.catella@gmail.com' 
    },
    {
      image: github,
      info: 'github.com/SCatella'
    },
    {
      image: phone,
      info: '407-312-0526'
    },
    {
      image: marker,
      info: 'Longmont, Co'
    }
  ],
  skills: [
    'react',
    'react-router',
    'node',
    'express.js',
    'postgreSQL',
    'firebase',
    'postman',
    'HTML',
    'CSS',
    'javascript',
    'webpack',
    'git',
    'npm',
    'yarn'
  ],
  interests: [
    'video games',
    'movies',
    'hiking',
    'swimming'
  ],
  education: [
    {
      school: 'Zero to Mastery',
      course: 'Complete Web Developer 2022',
      description: 'HTML, CSS, Bootstrap, CSS Flexbox, CSS Grid, Javascript, git, NPM, React, Asynchronous Javascript, Node, Express.js, PostgreSQL'
    },
    {
      school: 'Zero to Mastery',
      // eslint-disable-next-line no-script-url
      course: 'Javascript: The Advanced Concepts',
      description: 'Javascript Engine & Runtime, Call Stack, Memory Heap, Hoisting, this, Types, Closures, Prototypal Inheritance, OOP, Functional Programming, Asynchronous Javascript, Modules, Error Handling'
    },
    {
      school: 'Zero to Mastery',
      course: 'Master the Coding Interview: Data Structures + Algorithms',
      description: 'Big O, Arrays, Hash Tables, Linked Lists, Stacks + Queues, Trees, Graphs, Recursion, Sorting, Searching + BFS + DFS, Dynamic Programming'
    },
    {
      school: 'Zero to Mastery',
      course: 'Complete React Developer (w/ Redux, Hooks, & GraphQL)',
      description: 'React Basics, Class vs Functional Components, Hooks, React Router, Authentication + Firebase, React Context, Firebase Database Storage, CSS-In-JS + Styled Components, Reducers, Redux, Asynchronous Redux, Serverless Functions + Stripe, Typescript, GraphQL + Apollo Client'
    },
    {
      school: 'Zero to Mastery',
      course: 'SEO Fundamentals (Link Building, Content Optimization)',
      description: 'Google Keyword Planner, SEMRush Keyword Tools, Google Trends, Keyword Research, Content Optimization, Monitoring Keyword Performance, Link Building'
    }, 
  ],
  projects: [
    {
      project: 'Recognibox',
      description: 'Using React and PostgreSQL developed a site that uses the Clarify API to run facial recognition on a supplied photo. Then deployed on Heroku'
    },
    {
      project: 'MonsterDex',
      description: 'Pulling user data from jsonplaceholder and assets from robohash.org created a rolodex using React'
    },
    {
      project: 'DexMon',
      description: 'Refactored MonsterDex to use Functional components instead of Class components'
    }
  ],
  employment: [
    {
      company: 'First Transit',
      monthStarted: 'January',
      monthEnded: '',
      yearStarted: '2013',
      yearEnded: 'Present',
      position: 'Bus Operator',
      location: 'Longmont, CO'
    },
    {
      company: 'Old Chicago',
      monthStarted: 'May',
      monthEnded: 'December',
      yearStarted: '2012',
      yearEnded: '2012',
      position: 'Waiter',
      location: 'Boulder, CO'
    },
    // {
    //   company: 'Tao Asian Fusion',
    //   monthStarted: 'April',
    //   monthEnded: 'March',
    //   yearStarted: '2011',
    //   yearEnded: '2012',
    //   position: 'Waiter',
    //   location: 'Louisville, CO'
    // },
    // {
    //   company: 'Home Depot',
    //   monthStarted: 'August',
    //   monthEnded: 'March',
    //   yearStarted: '2009',
    //   yearEnded: '2011',
    //   position: 'Sales Associate, Shipping Associate',
    //   location: 'Boulder, CO'
    // },
    // {
    //   company: 'The Fresh Air Group',
    //   monthStarted: 'March',
    //   monthEnded: 'June',
    //   yearStarted: '2009',
    //   yearEnded: '2009',
    //   position: 'Assistant Estimator',
    //   location: 'Winter Garden, FL'
    // },
    // {
    //   company: 'Mechanical Services Inc',
    //   monthStarted: 'April',
    //   monthEnded: 'January',
    //   yearStarted: '2004',
    //   yearEnded: '2009',
    //   position: 'CAD Drafter, Sheet Metal Technician',
    //   location: 'Orlando, FL'
    // } 
  ]
}


const Resume = () => {
  return (
    <div className='resume'>
      <div className='page-container' id='resume'>
        <div className='left-column'>
          <img src={profilePicture} alt='' className='profile-picture'></img>
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