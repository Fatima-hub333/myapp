/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'

const Box = props => {
	const [on, setOn] = React.useState(props.on)
	 /**
     * 
     * Create an event listener so when the box is clicked,
     * it toggles from "on" to "off".
     * 
     * Goal: clicking each box should toggle it on and off.
     */
	const styles = {
		backgroundColor: on ? "#222222" : "transparent"
	}

	function toggle() {
		setOn(prevOn => !prevOn)
	}
	return (
		<div style={styles}className="box" onClick={toggle}> 
    </div>
	)
}

Box.propTypes = {}

export default Box