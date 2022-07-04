import React from 'react'
import './index.css'

const App = () => {
    const [starWarsData, setStarWarsData] = React.useState({})

    React.useEffect(function () {
      fetch("https://swapi.dev/api/people/1")
       .then(res => res.json())
       .then(data => setStarWarsData(data))
    })
  
  return (
      <div>
          <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      </div>
  )
}

export default App