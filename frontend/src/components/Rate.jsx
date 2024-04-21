import star_active from "../assets/star_active.png"
import star_inactive from "../assets/star_inactive.png"
import "../styles/Rate.css"

function Rate({ rate }) {

    const maxStars = 5
    const filledStars = parseInt(rate) // Convertir une chaîne de caractères en nombre.
    const emptyStars = maxStars - filledStars

    // Combinant deux tableaux d'étoiles - le premier contenant des étoiles remplies et le second contenant des étoiles vides.
    const ratingStars = () => {
        let stars = Array(filledStars).fill().map((_, i) => (
            <img src={star_active} alt="Star active" key={i} className="rate_star"/>)
        )

        stars = stars.concat(Array(emptyStars).fill().map((_, i) => (
            <img src={star_inactive} alt="Star inactive" key={i + filledStars} className="rate_star" />))
        )

        return stars
    }


    return (
        <div className="rate">
            {ratingStars()}
        </div>
    )
}

export default Rate