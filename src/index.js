import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function App() {
  // eslint-disable-next-line no-unused-vars
  const thingsArray = ["Thing 1", "Thing 2"]
  const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

  function addItem() {
    const newThingText = `New ${thingsArray.length + 1}`
    thingsArray.push(newThingText)
    document.getElementById()
    console.log(thingsArray)
  }
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))