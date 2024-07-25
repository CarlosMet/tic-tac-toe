import React, { useState } from 'react'
import X from '../assets/x.svg'
import O from '../assets/o.svg'


export default function StartingPage({setPlayerNames, startGame}) {

    

    const formSubmit = (event)=>{
        event.preventDefault()
        setPlayerNames({
            player1:event.target.player1.value,
            player2:event.target.player2.value
        })
        startGame()
    }
  return (
    <main className='flex flex-col items-center justify-center h-screen w-screen starting-page'>
        
        <div className='flex flex-col justify-center items-center p-4 bg-black/55 [&>*]:bg-transparent'>
            <h1 className='mb-10 lg:mb-16 2xl:mb-28 '>TIC TAC TOE</h1>
            <p className='mb-8 lg:mb-12 font-extrabold text-xl'>Enter player names</p>
            <form onSubmit={formSubmit} action="">
                <div className='flex gap-1 justify-between border-none  bg-gradient-to-br from-[#30335d] to-[#030523] mb-6 pl-1 rounded-md '>
                    <div className='grid place-items-center w-10 h-10 bg-transparent'>
                        <img className='bg-transparent' src={X} alt="" />
                    </div>
                    <input name='player1' className='bg-transparent focus:outline-none' type="text" />
                </div>
                <div className='flex gap-1 justify-between border-none bg-gradient-to-br from-[#30335d] to-[#030523] pl-1 rounded-md'>
                    <div className='grid place-items-center w-10 h-10 p-1 bg-transparent '>
                        <img className='bg-transparent' src={O} alt="" />
                    </div>
                    <input name='player2' className='bg-transparent focus:outline-none' type="text" />
                </div>
                <button className='w-full bg-[#0099cb] py-2 rounded-3xl mt-10 hover:brightness-150 font-bold text-lg' type="submit">Start Game</button>
            </form>
        </div>
    </main>
  )
}
