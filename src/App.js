/* eslint-disable no-unused-vars */
import React from 'react'
import './index.css'

const App = () => {
  const [starWarsData, setStarWarsData] = React.useState({})
  const [count, setCount] = React.useState(0)

  console.log("Component Render")
  React.useEffect(function () {
      fetch(`https://swapi.dev/api/people/${count}`)
       .then(res => res.json())
       .then(data => setStarWarsData(data))
    }, [count])
  
  return (
      <div>
      
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      </div>
  )
}

export default App