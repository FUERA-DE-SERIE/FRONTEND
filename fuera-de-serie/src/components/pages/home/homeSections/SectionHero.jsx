import './css/homeSections.css'
import CardLeft from '../../../Cards/CardLeft';
import CardImagePrincipal from '../../../Cards/CardImagePrincipal';

const SectionHero = () => {
  return (
    <div className='section-hero'>
      <CardLeft/>
      <CardImagePrincipal direccion='derecha' imagen='Platos.jpg'/>
    </div>
  )
}

export default SectionHero
