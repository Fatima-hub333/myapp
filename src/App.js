/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Star from './Star'
import './index.css'

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "Fatima",
    lastName: "Zahir",
    phone: "+92 347 7871262",
    email: "fatimaazahir@gmail.com",
    isFavorite: true
  })

  // eslint-disable-next-line no-unused-vars

  function toggleFavorite() {
    setContact(prevContact => ({
      ...prevContact,
      isFavorite: !prevContact.isFavorite
    }))
  }

  return (
    <main>
      <article className="card">
        <img src="../images/user.png" className="card--image" />
        <div className="card--info">
          <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
          <h2 className="card--name">
            {contact.firstName} {contact.emaillastName}
          </h2>
          <p className="card--contact">{contact.phone}</p>
          <p className="card--contact">{contact.email}</p>
        </div>
      </article>
    </main>
  )
}