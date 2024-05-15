
import './App.css'
import Dashboard from './pages/Dashboard'
import {  Routes, Route,} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Game from './pages/Game';

//TODO: Dashboard in pages

export default function App() {
  
  return (
    <div className="App" >
      <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard/>}  exact/> 
          <Route path="/game" element={<Game/>}  exact/>
        </Routes>
    </div>
  )

}