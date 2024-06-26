import React from 'react'
import PropTypes from 'prop-types'
// CSS
import classes from './Subtitle.module.css'

const Subtitle = (props) => {
  return (
    <h2 className={classes.Container}>
      {props.children}
    </h2>
  )
}

Subtitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ])
}

export default Subtitle
