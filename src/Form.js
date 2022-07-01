/* eslint-disable no-unused-vars */
import React from 'react'
import './index.css'

const Form = () => {
  const [formData, setFormData] = React.useState(
    { firstName: "", lastName: "", email: "", comments: ""}
  )

  function handleChange(event) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
      <form>
      <input 
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder='Last Name'
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <textarea
        placeholder="comments"
        onChange={handleChange}
        name="comments"
        value={formData.comments}
      />
    </form>
  )
}

export default Form