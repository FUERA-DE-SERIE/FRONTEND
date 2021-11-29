import './homeSections.css'
import Banner from  '../../../banner/Banner'
import Card from '../../../Cards/Card';

const SectionReserva = () => {
  return (
    <div className='section section-reserva'> 
      <div className="col">
        <Banner NombreClase='banner' imagen='Pizza-Plating.jpg'/>
      </div> 
      <div className="col-iz">
        <Card tag='Vive la experiencia' title='Reserva con nosotros' paragraph='Reservas hechas facil para lograr una la mejor experiencia gastronomica' buttonName='Reservar'/>
      </div>
    </div>
  )
}

export default SectionReserva
