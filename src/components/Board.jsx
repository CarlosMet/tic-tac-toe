import React from 'react'
import Square from './Square'

export default function Board({board, update}) {
  return (
    <div className='grid grid-cols-3 place-items-center gap-2'>
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
