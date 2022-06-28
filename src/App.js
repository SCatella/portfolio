import Resume from './components/resume/resume.component';

import './App.scss';


const printResume = () => window.print();

const App = () => {
  return (
    <div className="App">
      <div className='resume'>
        <Resume />
      </div>
      <button className='print-button' onClick={printResume}>Print</button>
    </div>
  );
}

export default App;
