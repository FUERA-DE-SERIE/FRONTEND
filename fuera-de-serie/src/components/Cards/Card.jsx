import Button2 from "../buttons/Button2"
import './cards.css'

const card = ({ h1=false, className='', tag, title, paragraph, buttonName='Reservar', onClick  }) => {
  return (
    <article className={ 'card ' + className + (h1 ? 'card-h1' : '')}>
      <div>
          <p className="fontCalibri">{ tag }</p>
          { h1 ?  <h1 className='fontPlayfair-h1'>{ title }</h1> : <h2 className='fontPlayfair'>{ title }</h2> }
      </div>
      <div>
          <p className="fontCalibri texto">{ paragraph }</p>
      </div>
      <div className="boton" >
        <Button2 buttonName={ buttonName } onClick={ onClick }/>
      </div>
    </article>
  )
}

export default card
