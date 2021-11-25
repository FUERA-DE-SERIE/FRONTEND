import Button1 from "../buttons/Button1"
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer className="section-footer">
                <section className="container">
                    <div className="container-Subscribe">
                        <h1>Suscribete a Nuestra Newsletter</h1>
                    </div>
                    <input 
                        type="email" 
                        placeholder="Ingresa tu correo electronico"
                        class="container-Email"> 
                    </input>
                    <Button1 buttonName='Suscribirse'/>     
                </section>
                <div className="container-dos">
                    <div className="LinksRapidos">
                        <h2>LINKS RAPIDOS</h2>
                        <h3>Fuera de Serie 2021</h3>
                        <h3>Fuera de Serie 2021</h3>
                    </div>
                    <div className="LinksRapidos-dos">
                        <h2>LINKS RAPIDOS</h2>
                        <h3>Fuera de Serie 2021</h3>
                        <h3>Fuera de Serie 2021</h3>
                    </div>            
                    <div className="Title">
                        <h4>MARTINY</h4>
                    </div>
                    <div>
                        <hr/>
                    </div>
                    <div className="final">
                        <h3>Link repositorio en GitHub Fuera de Serie</h3>
                    </div>
                    <div className="final-dos">
                        <h3>Fuera de Serie 2021</h3>
                    </div> 
                </div>
            </footer>            
        </>
    )
}

export default Footer

