/* eslint-disable no-unused-vars */
import React from 'react'

const Form = () => {
  const [firstName, setFirstName] = React.useState("")
  const [lastName, setLastName] = React.useState("")

  console.log(firstName, lastName)
  function handleFirstNameChange(event) {
    setFirstName(event.target.value)
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value)
  }
  return (
      <form>
      <input 
        type="text"
        placeholder="First Name"
        onChange={handleFirstNameChange}
      />
      <input
        type="text"
        placeholder='Last Name'
        onChange={handleLastNameChange}
      />
    </form>
  )
}

export default Form