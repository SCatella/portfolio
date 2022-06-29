import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Resume from './routes/resume/resume.component';

import './App.scss';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route path='home' element={<Home />} />
          <Route path='resume' element={<Resume />} />       
        </Route>
      </Routes>
    </div>
  );
}

export default App;
