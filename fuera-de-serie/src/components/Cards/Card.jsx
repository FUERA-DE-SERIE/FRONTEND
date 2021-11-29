import Button2 from "../buttons/Button2"
import './css/Cards.css'

const card = ({ h1=false, className='', tag, title, paragraph, buttonName='Reservar'  }) => {
  return (
    <article className={ 'card ' + className + (h1 ? 'card-h1' : '')}>
      <div>
          <p className="fontCalibri">{ tag }</p>
          { h1 ?  <h1 className='fontPlayfair title'>{ title }</h1> : <h2 className='fontPlayfair'>{ title }</h2> }
      </div>
      <div>
          <p className="fontCalibri texto">{ paragraph }</p>
      </div>
      <div className="boton" >
        <Button2 buttonName={ buttonName }/>
      </div>
    </article>
  )
}

export default card
