import React, { useEffect, useState } from 'react'
import Square from './Square'

// 40,130, 220 --- 45deg130px

export default function Board({board, update, winner, lineStyles}) {
  const [styles, setStyles] = useState({
    top: "130px",
    left:0,
    rotation: "-45deg"
  })
  
  return (
    <div className='grid grid-cols-3 place-items-center gap-2 relative'>
      {
        winner &&
        <div 
          style={{
            top:styles.top,
            transform:`rotate(${styles.rotation})`
          }}
          className='w-64 h-2 bg-white absolute'>

        </div>
      }
      {
            board.map((_,index) =>{
              return (
                <Square
                  key={index}
                  index = {index}
                  updateBoard={update}
                >
                  {board[index] === 'X' ? '✖️' : (board[index] === 'O' ? '⭕' : null)}
                </Square>

                
              )
            } )
          }
    </div>
  )
}
