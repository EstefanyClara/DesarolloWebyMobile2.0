import React, { useState } from 'react'
import { Button } from "rsuite"
import './App.css'
import MyButton from './components/MyButton'


export default function App() {

  const [numberMin, setNumberMin]= useState(0);
  const [numberMax, setNumberMax]= useState(101);
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * numberMax-numberMin + 1) + numberMin);
  

  function generateRandomNumber () {
    setNumberMax(10);
    setNumberMin(0);
    setRandomNumber(Math.floor(Math.random() * (numberMax - numberMin + 1)) + numberMin);
  }
  const getRandomMenor = () =>{
    setNumberMax(randomNumber-1);
    setRandomNumber(Math.floor(Math.random() * (randomNumber -numberMin + 1))+ numberMin);
  }
  const getRandomMayor = () =>{
    setNumberMin(randomNumber+1);
    setRandomNumber(Math.floor(Math.random() * (numberMax - randomNumber + 1)) + randomNumber);
  }
  const lables = ['MAYOR', 'MENOR', 'IGUAL'];

  

  return (
    <div className='App'>
      
      <h1>{randomNumber}</h1>
      <MyButton label='Generar número' onClickHandler={generateRandomNumber} variant='violet'/>
      <MyButton label={lables[0]} onClickHandler={getRandomMayor}  variant='blue'/>
      <MyButton label={lables[1]} onClickHandler={getRandomMenor}  variant='red'/>
      <MyButton label={lables[2]} onClickHandler={alert} variant='green'/>
    </div>
  )
}