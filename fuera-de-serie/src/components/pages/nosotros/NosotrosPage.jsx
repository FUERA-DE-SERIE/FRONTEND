import React from 'react'
import './Nosotros.css'

const NosotrosPage = () => {
  return (
    <div>
      <h1>Nosotros Page</h1>

      <div>
        <h2 className='fontPlayfair'>Nuestro Equipo</h2>

        <div className="container">
          <div className="container-img-text">
          <img className={`Chica-img`} src={`/assets/Chica.jpg`} alt="" />
          <p>David Fonseca</p>
          </div>
          <div className="container-img-text">
          <img className={`Chica-img`} src={`/assets/Chica.jpg`} alt="" />
          <p>Didier Llanten</p>
          </div>
          <div className="container-img-text">
          <img className={`Chica-img`} src={`/assets/Chica.jpg`} alt="" />
          <p>Daniel Ayala</p>
          </div>
          <div className="container-img-text">
          <img className={`Chica-img`} src={`/assets/Chica.jpg`} alt="" />
          <p>Alejandra Yaima</p>
          </div>
          <div className="container-img-text">
          <img className={`Chica-img`} src={`/assets/Chica.jpg`} alt="" />
          <p>Jimmy Bohorques</p>
          </div>
        </div>
      </div>
  </div>
  )
}

export default NosotrosPage
