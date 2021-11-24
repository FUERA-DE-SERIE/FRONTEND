import './css/homeSections.css'
import CardLeft from '../../../Cards/CardLeft';
import CardImagePrincipal from '../../../Cards/CardImagePrincipal';

const SectionBigArticulo = () => {
  return (
    <div className='section-big-articulo'>
      <CardImagePrincipal direccion='izquierda' imagen='Pan-Mantequilla.jpg'/>
      <CardLeft/>
    </div>
  )
}

export default SectionBigArticulo
