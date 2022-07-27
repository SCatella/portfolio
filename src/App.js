//React Imports
import { Routes, Route } from 'react-router-dom';

//Component Imports
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Projects from './routes/projects/projects.component';
import Resume from './routes/resume/resume.component';

// Style Sheets Imports
import './App.scss';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='projects' element={<Projects />} />
          <Route path='resume' element={<Resume />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
