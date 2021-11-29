import './homeSections.css'
import Card from '../../../Cards/Card';
import CardImagePrincipal from '../../../Cards/CardImagePrincipal';

const SectionBigArticulo = () => {
  return (
    <div className='section section-big-articulo'>
      <div className="col">
        <CardImagePrincipal direccion='izquierda' imagen='Pan-Mantequilla.jpg'/>
      </div>
      <div className="col">
        <Card tag='$20,000 | 500 cal' title='Italian Bread Butter' paragraph='Pan Italiano con garlic butter, explosion de sabores.' buttonName='Ver Bread'/>
      </div>
    </div>
  )
}

export default SectionBigArticulo
