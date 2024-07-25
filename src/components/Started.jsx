
import { useEffect, useState } from 'react'
import Score from './Score'
import Board from './Board'
import TurnSection from './TurnSection'
import Modal from './Modal'
import { TURNS, winner_combs, SCORE } from '../utils/constants'
import confetti from 'canvas-confetti'


function Started({playerNames}) {  
  
  const [board, setBoard] = useState(()=>{
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  }) 
  const [turn, setTurn] = useState(()=>{
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ? turnFromStorage : TURNS.X
  })
  const [winner, setWinner] = useState(null)  // null no hay ganador, false es empate
  const [score, setScore] = useState(()=>{
    const scoreFromStorage = window.localStorage.getItem('score')    
    return scoreFromStorage ? JSON.parse(scoreFromStorage) : SCORE
  })

  const [lineCords, setLineCords] = useState([null, null, null])
  
  

  const checkWinner = (boardToCheck) =>{
    for (const combo of winner_combs){
      const [a,b,c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]
      ){       
        
        setScore( prevScore => ({
          ...prevScore,
          [boardToCheck[a]]: prevScore[boardToCheck[a]] + 1
        }) )        
        return boardToCheck[a]
      }
    }
    return null
  }

  const checkEndGame = (newBoard)=>{
    return newBoard.every((square) => square !== null)
  }

  const update = (index)=>{
    if (board[index] || winner) return
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // guardar partida en local storage

    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner){
      setWinner(newWinner)
      confetti()
      
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }

  }

  const restart = ()=>{
    setWinner(null)
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    window.localStorage.removeItem('board')
  }

  useEffect(()=>{
    window.localStorage.setItem('score', JSON.stringify(score))
     
  }, 
  [winner])

  return (
    <>
      <main className='flex flex-col items-center bg-[#0c0c31] h-screen'>
        <Score score = {score} playerNames={playerNames} />
        <h1 className='font-extrabold text-3xl my-6'>Tricky</h1>
        <section className=''>
          <Board board={board} update={update} winner={winner ? true : false} lineStyles={lineCords} />
        </section>
        <section className=''>
          <TurnSection turn={turn} />
        </section>              
       
       {/* <Modal restart={restart} winner={winner} />                   */}
      </main>
    </>
        
      
  )
}

export default Started
