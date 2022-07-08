//React Imports
import { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';

//Component Imports
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Projects from './routes/projects/projects.component';
import Resume from './routes/resume/resume.component';

//Asset Imports
import profilePicture from './assets/profile_pic.png';
import mail from './assets/mail.svg';
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import portfolio from './assets/portfolio.png';
import recognibox from './assets/recognibox.png';
import dexmon from './assets/dexmon.png';
import monsterdex from './assets/monsterdex.png';

// Style Sheets Imports
import './App.scss';

export const UserContext = createContext();
export const BannerTitleContext = createContext();

const user = {
  profileImage: profilePicture,
  firstName: 'samuel',
  lastName: 'catella',
  title: 'web developer',
  statement: 'Motivated to change my life through learning more about the wonders of software development',
  contact: [
    {
      image: linkedin,
      info: 'linkedin.com/in/scatella/'
    },
    {
      image: mail,
      info: 'samuel.catella@gmail.com' 
    },
    {
      image: github,
      info: 'github.com/SCatella'
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
    'SEO',
    'git',
    'npm',
    'yarn'
  ],
  interests: [
    'video games',
    'movies',
    'swimming',
    'golf',
    'hiking',
  ],
  projects: [
    {
      link: 'https://scatella.github.io/portfolio/',
      image: portfolio,
      project: 'Portfolio',
      description: 'Using React designed and developed my own portfolio site from scratch'
    },
    {
      link: 'https://recognibox.herokuapp.com/',
      image: recognibox,
      project: 'Recognibox',
      description: 'Using React and PostgreSQL developed a site that uses the Clarify API to run facial recognition on a supplied photo. Then deployed on Heroku'
    },
    {
      link: 'https://scatella.github.io/dexmon/',
      image: dexmon,
      project: 'DexMon',
      description: 'Refactored MonsterDex to use Functional components instead of Class components'
    },
    {
      link: 'https://scatella.github.io/mosterdex/',
      image: monsterdex,
      project: 'MonsterDex',
      description: 'Pulling user data from jsonplaceholder and assets from robohash.org created a rolodex using React'
    }
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
    {
      company: 'Tao Asian Fusion',
      monthStarted: 'April',
      monthEnded: 'March',
      yearStarted: '2011',
      yearEnded: '2012',
      position: 'Waiter',
      location: 'Louisville, CO'
    },
    {
      company: 'Home Depot',
      monthStarted: 'August',
      monthEnded: 'March',
      yearStarted: '2009',
      yearEnded: '2011',
      position: 'Sales Associate, Shipping Associate',
      location: 'Boulder, CO'
    },
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

const bannerTitle = 'Full Project List';


const App = () => {
  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <BannerTitleContext.Provider value={bannerTitle}>
          <Routes>
            <Route path='/' element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path='projects' element={<Projects />} />
              <Route path='resume' element={<Resume />} />
            </Route>
          </Routes>
        </BannerTitleContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
