import './homeSections.css'
import Banner from  '../../../banner/Banner'
import Card from '../../../Cards/Card';

const SectionArticulo = () => {
  return (
    <div className='section section-articulo'>
      <div className="col">
        <Card className='card-right' tag='$35,000 | 900 cal' title='Pasta a la Bolognese' paragraph='Pasta casera hecha desde cero con salsa bolognese tradicional italiana.' buttonName='Ver Pasta'/>
      </div>
      <div className="col">
        <Banner NombreClase='banner2' imagen='Pizza-Plating.jpg'/>
      </div>  
    </div>
  )
}

export default SectionArticulo
