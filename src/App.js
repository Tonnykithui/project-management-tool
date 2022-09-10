import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Projects from './components/projects/Projects';
import Board from './components/board/Board';

function App() {
  return (
    <div className="App">
      <div className='app-layout'>
         <Sidebar />
         <Routes>
           <Route path='/Project' element={<Projects />}/>
           <Route path='/task' element={<Board />}/>
         </Routes>
      </div>
    </div>
  );
}

export default App;
