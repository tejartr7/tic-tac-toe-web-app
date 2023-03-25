import React from 'react'
import './Reset.css';
export const Reset = ({resetBoard}) => {
  return (
    <button className='reset' onClick={resetBoard}>Restart</button>
  )
}
