import './css/homeSections.css'
import BannerSection from  '../../../bannerSection/BannerSection'
import CardLeft from '../../../Cards/CardLeft';

const SectionReserva = () => {
  return (
    <div className='section-reserva'>  
      <BannerSection NombreClase='banner2' imagen='Pizza-Plating.jpg'/>
      <CardLeft/>
    </div>
  )
}

export default SectionReserva
