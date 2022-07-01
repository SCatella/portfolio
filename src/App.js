import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Portfolio from './routes/portfolio/portfolio.component';
import Resume from './routes/resume/resume.component';

import './App.scss';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='resume' element={<Resume />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
