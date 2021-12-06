import React from 'react'
import CardImagePrincipal from '../../Cards/CardImagePrincipal';
import '../../Cards/cards.css'
import './nosotros.css'

import '../home/homeSections/homeSections.css'
import Button1 from "../../buttons/Button1"
import SectionImage from './nosotrosSections/sectionImage';


const NosotrosPage = () => {
  return (
    <div className="probar">
      <div className="section margenes">
        <div className="col">
          <div>
            <h1 className="fontPlayfair">Acerca 1 de Nombre</h1>
            <p className="fontCalibri margenCard">Este es un texto cualquirea. Luego debo algo diferente hskdu�sd lf
              ijhsdk�hsdkf fghfgh fghf f fghfgh fghfghf. Este es un texto cualquirea.
              Luego debo algo diferente. dfg dfg df este tambien es un componenete.
              Luego debo algo diferente. dfg dfg df este tambien es un componenete.</p>

            <h1 className="fontPlayfair-h3">Acerca de Nombre</h1>
            <p className="fontCalibri margenCard">Este es un texto cualquirea. Luego debo algo diferente hskdu�sd lf
              ijhsdk�hsdkf fghfgh fghf f fghfgh fghfghf. Este es un texto cualquirea.
              Luego debo algo diferente. dfg dfg df este tambien es un componenete.
              Luego debo algo diferente. dfg dfg df este tambien es un componenete.</p>

            <h1 className="fontPlayfair">Cotacto</h1>
            <p className="fontCalibri">Para preguntas por favor contacta.</p>
            <p className="fontCalibri">Email: contacto@nombre.com</p>
            <p className="fontCalibri">Telefono: 3124363888</p>
          </div>
        </div>

        <div className="col">
          <div className="">
            <div>
              <SectionImage size='medium' plato='Pizza-Plating'></SectionImage>
            </div>

            <div className="">
              <SectionImage className="" size='medium' plato='Pizza-Plating'></SectionImage>
            </div>
          </div>

          <div className="mt-20">
            <div className="margenImg">
              <SectionImage size='medium' plato='Pizza-Plating'></SectionImage>
            </div>

            <div className="margenImg">
              <SectionImage className="" size='medium' plato='Pizza-Plating'></SectionImage>
            </div>
          </div>
        </div>






      </div>

      <div className="section colorSection2 margenes">
        <div className='section section-big-articulo'>
          <div className="col">
            <CardImagePrincipal direccion='izquierda' imagen='Pan-Mantequilla.jpg' />
          </div>
          <div className="margenText">
            <h3>Vive la experiencia</h3>
            <h1 className="fontPlayfair">Apoyando el medio ambiente</h1>
            <p>Este es un texto cualquirea. Luego debo algo diferente
              hskdu�sd lf ijhsdk�hsdkf fghfgh fghf f fghfgh fghfghf.
              Este es un texto cualquirea. Luego debo algo diferente</p>
            <p>Este es un texto cualquirea. Luego debo algo diferente
              hskdu�sd lf ijhsdk�hsdkf fghfgh fghf f fghfgh fghfghf.
              Este es un texto cualquirea. Luego debo algo diferente</p>
            <Button1 buttonName='Suscribirse' type='submit' />
          </div>
        </div>
      </div>

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
