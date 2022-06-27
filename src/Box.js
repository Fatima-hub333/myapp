/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const Box = props => {
	const styles = {
		backgroundColor: props.on ? "#222222" : "none"
	}
	return (
		<div style={styles}className="box"> 
    </div>
	)
}

Box.propTypes = {}

export default Box