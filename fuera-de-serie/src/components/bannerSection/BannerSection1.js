import './bannerSection1.css'
import img from'../../assets/images/Pizza-Plating.jpg'

const BannerSection1 = props => {
  return (
    <div className='banner'>
      <div className='banner-background'>
        <div className='banner-body'>
          <p className='banner-p'>Experiencia unica</p>
          <img className='banner-img' src={img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default BannerSection1