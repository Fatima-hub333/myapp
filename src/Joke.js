import React from 'react'

const Joke = (props) => {
  const [isShown, setIsShown] = React.useState(false)

  function toggleShown() {
    setIsShown(prevShown => !prevShown)
  }
  return (
    <div>
      {props.setup && <h3>{props.setup}</h3>}
      {isShown && <p>{props.punchline}</p>}
      <button onClick={toggleShown}>Show Punchline</button>
      <hr />
    </div>
  )
}

const cond1 = true
const cond2 = true
if (cond1 && console.log("Hello There")) {
  
}
export default Joke