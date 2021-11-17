import PropTypes from 'prop-types'
import './button1.css'

const Button1 = ( { buttonName, type } ) => {

  return (
    <>
      <button className="button1" type={ type }> { buttonName } </button>
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
