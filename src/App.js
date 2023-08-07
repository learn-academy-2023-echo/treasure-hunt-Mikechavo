import React, { useState } from "react"
import Square from "./components/Square"
import "./App.css"

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?"
  ])

    const [tresureLocation, setTresureLocation] = useState(
      Math.floor(Math.random() * board.length)
    )

    const [bombLocation, setBombLocation] = useState(
      Math.floor(Math.random() * board.length)
    )   
    const handleGamePlay = (clickedSquare) => {
    let updateBoard = [...board]
    if(clickedSquare === tresureLocation) {
      updateBoard[clickedSquare] = "💎"
      setBoard(updateBoard) 
    } else if (clickedSquare === bombLocation) {
      updateBoard[clickedSquare] = "💣"
      setBoard(updateBoard)
    } else {
      updateBoard[clickedSquare] = "🎄"
      setBoard(updateBoard)
    }

   

  }

  // const playAgain = () => {
  //   setBoard([...board])
  //   setTresureLocation(Math.floor(Math.random() * board.length))
  //   setBombLocation(
  //     Math.floor(Math.random() * board.length))
  // }
    const playAgain = () => {
      const newBoard= [...]
      setBoard(newBoard)
      setTresureLocation(Math.floor(Math.random() * board.length))
      setBombLocation(
        Math.floor(Math.random() * board.length))
    }
  console.log(tresureLocation)

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="board">
        {board.map((square, index) => {
          return <Square 
          square={square} 
          index={index} 
          key={index}
          handleGamePlay={handleGamePlay}/>
         })}
      </div>
      <div>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </>
  )
}

export default App
