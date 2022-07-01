import React from 'react'
import './index.css'

const App = () => {
  return (
    <div className='form--container'>
      <form className='form'>
        <input
          type="email"
          placeholder='Email Address'
          className='form--input'
        />
        <input
          type="password"
          placeholder='Password'
          className='form--input'
        />
        <input
          type="password"
          placeholder='Confirm Password'
          className='form--input'
        />

        <div className='form--marketing'>
          <input
            type="checkbox"
            id='okayToEmail'
          />
          <label htmlFor='okayToEmail'> I want to join the newsletter</label>
        </div>
        <button className='form--submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default App