
const CardImage = ({ img }) => {
    return (
        <div>
            <div>
                <img src={img} alt="unload"/>
            </div>
            <div className="">
                <h1 className="fontYasevaOne">Pasta a la Bolognese</h1>                
                <h4 className="fontCalibri">$35,000 | 900 cal</h4>
            </div>
        </div>
    )
}


export default CardImage
