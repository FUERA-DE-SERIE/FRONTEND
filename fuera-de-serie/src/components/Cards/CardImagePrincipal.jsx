import './css/Cards.css'

const CardImagePrincipal = ({ direccion, imagen }) => {
  return (
    <div className={ direccion }>
      <img className={`${ direccion }-img`} src={`/assets/${imagen}`} alt="" />
      <p className={`${ direccion }-p fontCalibri`}>Experiencia unica</p>
    </div>
  )
}

export default CardImagePrincipal
