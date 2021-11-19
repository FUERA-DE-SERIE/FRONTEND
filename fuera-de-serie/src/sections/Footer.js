import Button1 from "../components/buttons/Button1"
import './Footer.css'

const Footer = () => {
    return (
        <>
            <footer class="section-footer">
                <section class="container">
                    <div class="container-Subscribe">
                        <h1>Suscribete a Nuestra Newsletter</h1>
                    </div>
                    <input 
                        type="email" 
                        placeholder="Ingresa tu correo electronico"
                        class="container-Email"> 
                    </input>
                    <Button1 buttonName='Suscribirse'/>     
                </section>
                <div class="container-dos">
                    <div class="LinksRapidos">
                        <h2>LINKS RAPIDOS</h2>
                        <h3>Fuera de Serie 2021</h3>
                        <h3>Fuera de Serie 2021</h3>
                    </div>
                    <div class="LinksRapidos-dos">
                        <h2>LINKS RAPIDOS</h2>
                        <h3>Fuera de Serie 2021</h3>
                        <h3>Fuera de Serie 2021</h3>
                    </div>            
                    <div class="Title">
                        <h4>MARTINY</h4>
                    </div>
                    <div>
                        <hr/>
                    </div>
                    <div class="final">
                        <h3>Link repositorio en GitHub Fuera de Serie</h3>
                    </div>
                    <div class="final-dos">
                        <h3>Fuera de Serie 2021</h3>
                    </div> 
                </div>
            </footer>            
        </>
    )
}

export default Footer

