import PropTypes from 'prop-types'
import './buttons.css'

const Button1 = ( { buttonName, type, onClick } ) => {

  return (
    <>
      <button 
      className="button1 fontCalibri" 
      type={ type }
      onClick={ onClick }
      > { buttonName } </button>
    </>
  )
}

Button1.propTypes = {
  buttonName : PropTypes.string
}

Button1.defaul = {
  type : 'button'
}

export default Button1
