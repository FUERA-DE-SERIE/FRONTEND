
const CardImage = ({ size, imagen, title, value }) => {
  return (
    <div>
      <div>
        <img className={`${ size }-img`} src={`/assets/${imagen}`} alt={ imagen }/>
      </div>
      <div className={`${ size }-body`}>
        <h3 className="fontPlayfair">{ title }</h3>                
        <p className="fontCalibri">{ value }</p>
      </div>
    </div>
  )
}


export default CardImage
