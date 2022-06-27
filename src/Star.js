/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const Star = props => {
  const starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
  return (
    <img src={`../images/${starIcon}`}
      className="card--favorite"
      onClick={props.handleClick}
    />
  )
}

Star.propTypes = {}

export default Star
