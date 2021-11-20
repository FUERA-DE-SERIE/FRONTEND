import Button2 from "../buttons/Button2"
import './css/Cards.css'

const cardRight = props => {
    return (
        <div class="card card-right">
            <header class="col-7">
                <div class="lema">
                    <h4 class="fontCalibri">$35,000 | 900 cal</h4>
                    <h1 class="fontYasevaOne">Pasta a la Bolognese</h1>
                </div>
            </header>

            <article class="content  col-7">
                <p class="">Este es un texto cualquiera. Luego debo algo diferente hskdufhsd if ijhsdkfjhsdkf fghfgh fghf f
                    fghfgh
                    fghfghf.
                </p>
            </article>
            <footer class="link">
                <Button2 buttonName='Ver Tienda' />
            </footer>
        </div>
    )
}


export default cardRight