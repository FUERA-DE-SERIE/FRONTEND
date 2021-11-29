import './banner.css'

const Banners = ({ NombreClase, imagen }) => {
  return (
    <div className={NombreClase}>
      <div className={`${NombreClase}-background`}>
        <div className={`${NombreClase}-body`}>
          <p className={`${NombreClase}-p fontCalibri`}>Experiencia unica</p>
          <img className={`${NombreClase}-img`} src={`/assets/${imagen}`} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banners