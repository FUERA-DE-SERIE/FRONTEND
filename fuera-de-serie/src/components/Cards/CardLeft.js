import Button2 from "../buttons/Button2"
import './css/Cards.css'

const cardLeft = props => {
    return (
        <div className="card card-left">
            <header>
                <div className="lema">
                    <h4 className="fontCalibri">Vive la experiencia</h4>
                    <h1 className="fontYasevaOne">Reserva con Nosotros</h1>
                </div>
            </header>

            <article className="content">
                <p>Este es un texto cualquiera. Luego debo algo diferente hskdufhsd if ijhsdkfjhsdkf fghfgh fghf f
                    fghfgh
                    fghfghf.
                </p>
            </article>
            <footer className="link right-position">
                <Button2 buttonName='Reservar' />
            </footer>
        </div>
    )
}


export default cardLeft
