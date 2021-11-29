import CardImage from '../../../Cards/CardImage'
import './homeSections.css'

const SectionMiniTienda = () => {
  return (
    <div className='section-mini-tienda'>
      <h2 className='fontPlayfair'>Nuestros Mejores Vendidos</h2>
      <div className='section'>
        <CardImage size='medium' imagen='Avena.jpg' title='Pasta Bolognese' value='$35,000 | 900 cal'></CardImage>
      </div>
    </div>
  )
}

export default SectionMiniTienda
