import React from 'react'
import Square from './Square'

export default function Modal({winner, restart}) {
  return (
    <section>
         {
        winner !== null && (
          <section className='absolute w-screen h-screen top-0 left-0 bg-black/25 grid place-items-center'>
            <div className='flex flex-col items-center gap-8 bg-blue-700 px-24 py-10 rounded-3xl'>
              <p className='bg-inherit'>
                {winner === false 
                
                  ? 'empate'
                  : winner + ' ganó'
                }
              </p>
              <Square>
                {winner}
              </Square>
              <footer className='bg-inherit'>
                <button className='' onClick={restart}>Empezar de nuevo</button>
              </footer>
            </div>
            
          </section>

        )
       }
    </section>
  )
}
