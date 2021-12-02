import './cards.css'

const CardImagePrincipal = ({ direccion, imagen }) => {
  return (
    <div className={ direccion }>
      <img className={`${ direccion }-img`} src={`/assets/${imagen}`} alt={imagen} />
      <p className={`${ direccion }-p fontCalibri`}>Experiencia unica</p>
    </div>
  )
}

export default CardImagePrincipal
