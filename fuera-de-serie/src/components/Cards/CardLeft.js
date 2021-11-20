import Button2 from "../buttons/Button2"
import './css/Cards.css'

const cardLeft = props => {
    return (
        <div class="card card-left">
            <header>
                <div class="lema">
                    <h4 class="fontCalibri">Vive la experiencia</h4>
                    <h1 class="fontYasevaOne">Reserva con Nosotros</h1>
                </div>
            </header>

            <article class="content">
                <p>Este es un texto cualquiera. Luego debo algo diferente hskdufhsd if ijhsdkfjhsdkf fghfgh fghf f
                    fghfgh
                    fghfghf.
                </p>
            </article>
            <footer class="link right-position">
                <Button2 buttonName='Reservar' />
            </footer>
        </div>
    )
}


export default cardLeft
