import { useState } from 'react'
import './App.css'

import Started from './components/Started'
import StartingPage from './components/StartingPage'



function App() {  
  const [playerNames, setPlayerNames] = useState({
    player1: 'player1',
    player2: 'player2'
})

  const [started, setStarted] = useState(false)

  const setPlayers = (names)=>{
    setPlayerNames(names)
  }

  const startHandler = ()=>{
    setStarted(!started)
  }
  return (
    <>
      
      {started
        ? <Started playerNames={playerNames} />
        : <StartingPage startGame={startHandler} setPlayerNames={setPlayers} />
      }
    </>
        
      
  )
}

export default App
