import React from 'react'
import CardImagePrincipal from '../../Cards/CardImagePrincipal';
import '../../Cards/cards.css'
import './nosotros.css'

import '../home/homeSections/homeSections.css'
import Button1 from "../../buttons/Button1"
import SectionImage from './nosotrosSections/sectionImage';


const NosotrosPage = () => {
  return (
    <div className="">
      <div className="section margenes">
        <div className="col">
          <div>
            <h1 className="fontPlayfair-h3">Acerca de EVER</h1>
            <p className="fontCalibri margenCard">Este es un texto cualquirea. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

            <h1 className="fontPlayfair-h3">Nuestros Valores</h1>
            <p className="fontCalibri margenCard">Este es un texto cualquirea. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur..</p>

            <h1 className="fontPlayfair">Contacto</h1>
            <p className="fontCalibri">Para preguntas por favor contacta.</p>
            <p className="fontCalibri">Email: contacto@nombre.com</p>
            <p className="fontCalibri">Telefono: 3124363888</p>
          </div>
        </div>

        <div className="col">
          <div className="">
            <div>
              <SectionImage size='small' plato='Platos'></SectionImage>
            </div>

            <div className="">
              <SectionImage className="" size='small' plato='Pizza-plating'></SectionImage>
            </div>
          </div>

          <div className="mt-20">
            <div className="margenImg">
              <SectionImage size='small' plato='Frutas'></SectionImage>
            </div>

            <div className="margenImg">
              <SectionImage className="" size='small' plato='Risotto'></SectionImage>
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
            <p className="fontCalibri">Vive la experiencia</p>
            <h1 className="fontPlayfair">Apoyando el medio ambiente</h1>
            <p className="fontCalibri-2">Este es un texto cualquirea. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <p className="fontCalibri-2 para-dos-nosotros">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <Button1 buttonName='Suscribirse' type='submit' />
          </div>
        </div>
      </div>

      <div className="container-nosotros-personas">
        <h2 className='fontPlayfair nombresPersonas'>Nuestro Equipo</h2>

        <div className="container-2">
          <div className="container-img-text-2">
            <img className={`Chica-img`} src={`/assets/Chica.jpg`} alt="" />
            <p className="fontCalibri-5">David Fonseca</p>
          </div>
          <div className="container-img-text-2">
            <img className={`Chica-img`} src={`/assets/Chica.jpg`} alt="" />
            <p className="fontCalibri-5">Didier Llanten</p>
          </div>
          <div className="container-img-text-2">
            <img className={`Chica-img`} src={`/assets/Chica.jpg`} alt="" />
            <p className="fontCalibri-5">Daniel Ayala</p>
          </div>
          <div className="container-img-text-2">
            <img className={`Chica-img`} src={`/assets/Chica.jpg`} alt="" />
            <p className="fontCalibri-5">Alejandra Yaima</p>
          </div>
          <div className="container-img-text-2">
            <img className={`Chica-img`} src={`/assets/Chica.jpg`} alt="" />
            <p className="fontCalibri-5">Jimmy Bohorques</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NosotrosPage
