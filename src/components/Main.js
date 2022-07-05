import React from 'react'

const Main = (props) => {
  return (
    <main className={props.darkMode ? "dark" : ""}>
      <h1 className="main--title">Seven Wonders of the World</h1>
      <ul className="main--facts">
        <li>Great Wall of China</li>
        <li>Chichén Itzá</li>
        <li>Petra</li>
        <li>Machu Picchu</li>
        <li>Christ the Redeemer</li>
        <li>Colosseum</li>
        <li>Taj Mahal</li>
      </ul>
    </main>
  )
}

export default Main