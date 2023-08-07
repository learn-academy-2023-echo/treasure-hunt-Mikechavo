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
        console.log(tresureLocation)
    const handleGamePlay = (clickedSquare) => {
    let updateBoard = [...board]
    if(clickedSquare === tresureLocation) {
      updateBoard[clickedSquare] = "💎"
      setBoard(updateBoard) 
    } else {
      updateBoard[clickedSquare] = "🎄"
      setBoard(updateBoard)
    }
  }
    
  

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
    </>
  )
}

export default App
