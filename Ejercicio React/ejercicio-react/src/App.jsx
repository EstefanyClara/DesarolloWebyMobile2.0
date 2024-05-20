import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}
//creo el tablero a continuacion 

//esto perfectamente podria ser un componente
const Square = ({ children,  isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`// verifca si esta seleccionado
  
  const handleClick = () => {
    updateBoard(index) //actualiza el tablero
  }

  return (
    <div onClick={handleClick} className ={className}> {/* cuando se hace click se actualiza el tablero */}
     {children}
     </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null)) //defino el tablero

  const [turn, setTurn] = useState(TURNS.X) //defino el turno
  
  const updateBoard = (index) => {
    const newBoard= [...board] //creo un nuevo tablero
    newBoard[index] = turn //actualizo el tablero
    setBoard(newBoard) //actualizo el tablero
    const newTurn= turn === TURNS.X ? TURNS.O : TURNS.X //cuando se actualiza el tablero cambia el turno
    setTurn(newTurn)


  }


  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className='game'>
        {
          board.map((_, index) => { //recorre el tablero
            return (
              <Square 
              key={index}
              index={index}
              updateBoard={updateBoard} //actualiza el tablero
              >
                {board[index]} 
              </Square>
            )
          })
        }
      </section>
      <section className='turn'> {/* muestra el turno actual */}
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
        </section>
    </main>
  )
}

export default App
