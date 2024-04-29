import React, {useState} from 'react'
import{Button} from "rsuite"
import './App.css'
import MyButton from './components/MyButton'


export default function App () {

  const[count, setCount]= useState(0);
  const add = () => setCount(count + 1);
  const substract = () => setCount(count - 1);
  const clear = () => setCount(0);
  const lables = ['ADD', 'SUBSTRACT', 'CLEAR'];
  
  return (
    <div className='App'>
      <h1>{count}</h1>
      <MyButton  label={lables[0]} onClickHandler={add} variant={"red"}/>
      <MyButton label={lables[1]} onClickHandler={substract} variant={"violet"}/>
      <MyButton label={lables[2]} onClickHandler={clear} variant={"blue"}/>
      </div>
  )
}



