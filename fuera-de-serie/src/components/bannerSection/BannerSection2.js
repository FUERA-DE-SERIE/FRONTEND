import './bannerSection2.css'
import img from'../../assets/images/Pizza-Plating.jpg'

const BannerSection2 = props => {
  return (
    <div className='banner2'>
      <div className='banner2-background'>
        <div className='banner2-body'>
          <p className='banner2-p'>Experiencia unica</p>
          <img className='banner2-img' src={img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default BannerSection2