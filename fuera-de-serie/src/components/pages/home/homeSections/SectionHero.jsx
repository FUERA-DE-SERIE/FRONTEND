import './homeSections.css';
import Card from '../../../Cards/Card';
import CardImagePrincipal from '../../../Cards/CardImagePrincipal';

const SectionHero = () => {
  return (
    <div className='section section-hero'>
      <div className="col">
        <Card h1='true' tag='Vive la experiencia' title='Recetas familiares, hechas mejor.' paragraph='Sabores que recuerdas por siempre hechos con las mejores y mas creativas tecnicas para brindarte la mejor experiencia.' buttonName='Ver Menu'/>
      </div>
      <div className="col-iz">
        <CardImagePrincipal direccion='derecha' imagen='Platos.jpg'/>
      </div>
    </div>
  )
}

export default SectionHero
