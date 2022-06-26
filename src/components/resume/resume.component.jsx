import Contact from '../contact/contact.component';
import Skills from '../skills/skills.component';
import Interests from '../interests/interests.component';
import User from '../user/user.component';
import Education from '../education/education.component';

import profilePicture from '../../images/profile-oval.png';
import mail from '../../images/mail.svg';
import github from '../../images/github.svg';
import phone from '../../images/phone.svg';
import marker from '../../images/marker.svg';

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
    'HTML',
    'CSS',
    'javascript',
    'react',
    'node',
    'express.js',
    'postgreSQL',
    'firebase',
    'postman',
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
}


const Resume = () => (
  <div className='page-container'>
    <div className='left-column'>
      <img src={profilePicture} alt='' className='profile-picture'></img>
      <Contact contact={user.contact} />
      <Skills skills={user.skills} />
      <Interests interests={user.interests} />
    </div>
    <div className='right-column'>
      <User user={user} />
      <Education education={user.education} />
    </div>
  </div>
)

export default Resume;