import BestSellerDishList from '../../../dish/BestSellerDishList'
import './homeSections.css'

const SectionMiniTienda = () => {

  return (
    <div className='section-mini-tienda'>
      <h2 className='fontPlayfair mini-tienda-title'>Nuestros Mejores Vendidos</h2>
      <div className='section section-list'>
        <BestSellerDishList />
      </div>
    </div>
  )
}

export default SectionMiniTienda
