import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function App() {
  // eslint-disable-next-line no-unused-vars
  
  
  const [things, setThings] = React.useState(["Thing 1", "Thing 2"])


  function addItem() {
    const newThingText = `New ${things.length + 1}`
    setThings(prevState => [...prevState, newThingText])
  }
  const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))