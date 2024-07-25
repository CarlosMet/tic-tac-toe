import React from 'react'
import Square from './Square'
import { TURNS } from '../utils/constants'

export default function TurnSection({turn}) {
  return (
    <section className='flex gap-3 mt-4'>
      <Square isSelected = {turn === TURNS.X}>{TURNS.X}</Square>
      <Square isSelected = {turn === TURNS.O}>{TURNS.O}</Square>
    </section>
  )
}
