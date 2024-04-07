import star_active from "../assets/star_active.png"
import star_inactive from "../assets/star_inactive.png"
import "../styles/Rate.css"

function Rate({ rate }) {

    const maxStars = 5
    const filledStars = parseInt(rate) //dopisac co to
    const emptyStars = maxStars - filledStars

    function ratingStars() {
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

// const ratingStars = () => {
//     let stars = []
//     for (let i = 0; i < filledStars; i++) {
//       stars.push(<img src={star_active} alt="Star" key={i} className="rate_star"/>)
//     }
//     for (let i = 0; i < emptyStars; i++) {
//       stars.push(<img src={star_inactive} alt="Star" key={i + filledStars} className="rate_star"/>)
//     }
//     return stars
//   }