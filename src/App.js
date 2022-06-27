/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'
import Header from './Header';
import Body from './Body';

const App = props => {
  const [user, setuser] = React.useState("Fatima")
  return (
    <div>
      <Header user={user}/>
      <Body user={user}/>
    </div>
  )
}

App.propTypes = {}

export default App