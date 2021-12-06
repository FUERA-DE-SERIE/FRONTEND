import '../../../Cards/cards.css'

const SectionImage = ({ size, plato }) => {
    return (
        <div className="card-image">
            <div>
                <img className={`${size}-img`} src={`/assets/${plato}.jpg`} alt={plato} />
            </div>

        </div>
    )
}

export default SectionImage