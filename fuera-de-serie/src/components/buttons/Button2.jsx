import React from 'react'
import PropTypes from 'prop-types'
import './buttons.css'

const Button2 = ( { buttonName, onClick } ) => {

  return (
    <>
      <button 
        className="button2 fontCalibri"
        onClick={ onClick }
      >  
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
