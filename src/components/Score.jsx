import React, { useState } from 'react'
import Square from './Square'



export default function Score({score, playerNames}) {

    console.log(playerNames)

  return (
    <section className='w-full flex justify-center gap-4 py-4 items-center'>
        <div className='flex items-center gap-3'>
            <p>{playerNames ? playerNames.player1 : 'player1'}</p>
            <Square>{score.X}</Square>
        </div>
        <div className='flex items-center gap-3'>
            <Square>{score.O}</Square>
            <p>{playerNames ? playerNames.player2 : 'player2'}</p>
        </div>
    </section>
  )
}
