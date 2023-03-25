import React from 'react'
import './Scoreboard.css'
export const Scoreboard = ({score,xPlay}) => {
    const {xscore,oscore}=score
  return (
    <div className='scoreBoard'>
    <span className={`score x-score ${!xPlay && "inactive"}`}>X-{xscore}</span>
    <span className={`score x-score ${xPlay && "inactive"}`}>O-{oscore}</span>
    </div>
  )
}
