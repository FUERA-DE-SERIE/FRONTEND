import React from 'react'
import PropTypes from 'prop-types'
import './button2.css'

const Button2 = ( { buttonName } ) => {

  return (
    <>
      <button className="button2 fontCalibri">  
          { buttonName }
          <i className="icon"></i>
      </button>
    </>
  )
}

Button2.propTypes = {
  buttonName : PropTypes.string
}

export default Button2
