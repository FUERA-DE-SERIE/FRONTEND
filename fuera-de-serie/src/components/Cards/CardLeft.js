import Button2 from "../buttons/Button2"
import './css/Cards.css'

const cardLeft = props => {
    return (
      <article className="card">
        <div>
            <p className="fontCalibri card-p">Vive la experiencia</p>
            <h2 className="fontPlayfair">Reserva con Nosotros</h2>
        </div>
        <div>
            <p className="fontCalibri texto">Este es un texto cualquiera. Luego debo algo diferente hskdufhsd if ijhsdkfjhsdkf fghfgh fghf ffghfgh fghfghf.
            </p>
        </div>
        <div className="boton" >
          <Button2 buttonName='Reservar'/>
        </div>
      </article>
    )
}


export default cardLeft
