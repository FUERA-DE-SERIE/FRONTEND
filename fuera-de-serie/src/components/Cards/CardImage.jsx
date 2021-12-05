import './cards.css'

const CardImage = ({ size, plato, precio, calorias  }) => {
  return (
    <div className="card-image">
      <div>
        <img className={`${ size }-img`} src={`/assets/${plato}.jpg`} alt={ plato }/>
      </div>
      <div className={`${ size }-body`}>
        <h3 className="fontPlayfair-h3">{ plato }</h3>                
        <p className="fontCalibri">{ `${precio} | ${calorias}`}</p>
      </div>
    </div>
  )
}

export default CardImage
