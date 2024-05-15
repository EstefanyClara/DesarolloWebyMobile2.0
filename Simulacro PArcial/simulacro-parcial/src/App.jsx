
import './App.css'
import Dashboard from './pages/Dashboard'
import {  Routes, Route,} from 'react-router-dom';
import { getTasks } from './api'
import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import TaskDetails from './pages/TaskDetails';
import NewTask from './pages/NewTask';



export default function App() {
  
  return (
    <div className="App" >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard/>}  exact/> 
        <Route path="/:id" element={<TaskDetails/>} exact/>
        <Route path="/NewTask" element={<NewTask/>} exact/>
      </Routes>
    

    </div>
  )

}

{/*{tasks.map((t)=>{
        return (
          <p>{t.title}</p>
        );
      })}*/ }
