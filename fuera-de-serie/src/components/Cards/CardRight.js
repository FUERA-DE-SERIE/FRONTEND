import Button2 from "../buttons/Button2"
import './css/Cards.css'

const cardRight = props => {
    return (
        <div className="card card-right">
            <header className="col-7">
                <div className="lema">
                    <h4 className="fontCalibri">$35,000 | 900 cal</h4>
                    <h1 className="fontYasevaOne">Pasta a la Bolognese</h1>
                </div>
            </header>

            <article className="content  col-7">
                <p className="">Este es un texto cualquiera. Luego debo algo diferente hskdufhsd if ijhsdkfjhsdkf fghfgh fghf f
                    fghfgh
                    fghfghf.
                </p>
            </article>
            <footer className="link">
                <Button2 buttonName='Ver Tienda' />
            </footer>
        </div>
    )
}


export default cardRight