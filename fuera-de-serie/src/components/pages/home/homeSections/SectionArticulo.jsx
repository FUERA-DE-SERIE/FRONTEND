import './css/homeSections.css'
import BannerSection from  '../../../bannerSection/BannerSection'
import CardRight from '../../../Cards/CardRight';

const SectionArticulo = () => {
  return (
    <div className='section-articulo'>  
      <CardRight/>
      <BannerSection NombreClase='banner2' imagen='Pizza-Plating.jpg'/>
    </div>
  )
}

export default SectionArticulo
