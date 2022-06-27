/* eslint-disable no-unused-vars */
import React from 'react'
import boxes from './boxes'
import './index.css'

export const App = () => {
  const [squares, setSquares] = React.useState(boxes)
  const squareElements = squares.map(square => (
    <div className="box" key={square.id}></div>
  ))
  return (
    <main>
      {squareElements}
    </main>
  )
}
