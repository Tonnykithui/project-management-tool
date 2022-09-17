import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Projects from './components/projects/Projects';
import Board from './components/board/Board';
import Modal from './components/modal/Modal';
import Home from './components/home/Home';
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
      <div className='app-layout'>
         <Sidebar />
         <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/Project' element={<Projects />}/>
           <Route path='/task' element={<Board />}/>
           <Route path='/login' element={<Login />} />
         </Routes>
      </div>
      {/* <Modal /> */}
    </div>
  );
}

export default App;
