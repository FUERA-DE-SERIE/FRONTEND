
const CardImage = ({ img }) => {
    return (
        <div>
            <div>
                <img src={img} alt="unload"/>
            </div>
            <div className="">
                <h2 className="fontPlayfair">Pasta a la Bolognese</h2>                
                <p className="fontCalibri">$35,000 | 900 cal</p>
            </div>
        </div>
    )
}


export default CardImage
