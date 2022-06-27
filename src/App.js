/* eslint-disable no-unused-vars */
import React from 'react'
import boxes from './boxes'
import Box from './Box'
import './index.css'

export const App = () => {
  const [squares, setSquares] = React.useState(boxes)
  const squareElements = squares.map(square => (
    <Box key={square.id} on={square.on}/>
  ))
  return (
    <main>
      {squareElements}
    </main>
  )
}
