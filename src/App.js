import React from 'react'
import './index.css'

const App = () => {
    const [starWarsData, setStarWarsData] = React.useState({})
  return (
      <div>
          <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      </div>
  )
}

export default App