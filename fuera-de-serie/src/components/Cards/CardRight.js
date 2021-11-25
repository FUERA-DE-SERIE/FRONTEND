import Button2 from "../buttons/Button2"
import './css/Cards.css'

const cardRight = props => {
    return (
        <article className="card card-right">
          <div>
            <p className="fontCalibri">$35,000 | 900 cal</p>
            <h2 className="fontPlayfair">Pasta a la Bolognese</h2>
          </div>
          <div>
            <p className="texto fontCalibri">Este es un texto cualquiera. Luego debo algo diferente hskdufhsd if ijhsdkfjhsdkf fghfgh fghf ffghfghfghfghf.
            </p>
          </div>
          <Button2 buttonName='Ver Tienda' />
        </article>
    )
}


export default cardRight