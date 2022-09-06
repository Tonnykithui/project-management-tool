import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <div className='app-layout'>
         <Sidebar />
         <Routes>
           <Route path='/Project' element={<Projects />}/>
         </Routes>
      </div>
    </div>
  );
}

export default App;
