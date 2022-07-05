import React from 'react'

const Navbar = (props) => {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <img className="nav--logo_icon"
        src={require('../images/wonders-logo.png')} alt="Logo" />
      <h3 className="nav--logo_text">Wonders of the World</h3>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div
          className="toggler--slider"
          onClick={props.toggleDarkMode}>
        <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  )
}

export default Navbar