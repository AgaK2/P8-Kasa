import "../styles/Card.css"

function Card() {
    return (
        <div className="cards">
            <img className="card_photo" alt="Location"/>
            <p className="card_text">Titre de la location</p>
        </div>
    )
}
 
export default Card