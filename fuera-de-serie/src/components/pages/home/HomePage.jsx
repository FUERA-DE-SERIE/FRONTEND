import SectionHero from './homeSections/SectionHero';
import SectionReserva from './homeSections/SectionReserva';
import SectionArticulo from './homeSections/SectionArticulo';
import SectionMiniTienda from './homeSections/SectionMiniTienda';
import SectionBigArticulo from './homeSections/SectionBigArticulo';

const HomePage = () => {
  return (
    <div>
      <SectionHero/>
      <SectionReserva/>
      <SectionArticulo/>
      <SectionMiniTienda/>
      <SectionBigArticulo/>
    </div>
  )
}

export default HomePage
