import './cards.css'

const CardImage = ({ size, id, dish, price, calories }) => {
  return (
    <div className="card-image">
      <div>
        <img className={`${ size }-img`} src={`/assets/${id}.jpg`} alt={ id }/>
      </div>
      <div className={`${ size }-body`}>
        <h3 className="fontPlayfair-h3">{ dish }</h3>                
        <p className="fontCalibri">{ `${price} | ${calories}`}</p>
      </div>
    </div>
  )
}

export default CardImage
