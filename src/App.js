/* eslint-disable no-unused-vars */
import React from 'react'
import './index.css'

const App = () => {
  const [starWarsData, setStarWarsData] = React.useState({})
  const [count, setCount] = React.useState(0)

  console.log("Component Render")
  React.useEffect(function () {
      console.log("Effect ran")
      // fetch("https://swapi.dev/api/people/1")
      //  .then(res => res.json())
      //  .then(data => setStarWarsData(data))
    }, [0])
  
  return (
      <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
      </div>
  )
}

export default App