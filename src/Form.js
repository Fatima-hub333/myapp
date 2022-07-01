/* eslint-disable no-unused-vars */
import React from 'react'
import './index.css'

const Form = () => {
  const [formData, setFormData] = React.useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
      isFriendly: true
    }
  )

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
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
      <input
        name="isFriendly"
        type="checkbox"
        id="isFriendly"
        checked={formData.isFriendly}
        onChange={handleChange}
      />
      <label htmlFor='isFriendly'>Are You Friendly?</label>
    </form>
  )
}

export default Form