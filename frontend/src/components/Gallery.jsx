import { useState } from "react"
import arrow_forward from "../assets/arrow_forward_carrousel.png"
import arrow_back from "../assets/arrow_back_carrousel.png"
import "../styles/Gallery.css"


function Carrousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
  }

  const pagination = `${currentSlide + 1}/${images.length}`

  const alt = "Photo du logement"

  return (
    // Conditions s'il y a plus d'une photo ou s'il n'y a qu'une seule photo dans le carrousel
    <div>
      {images.length > 1 && (
        <div className="carrousel">
          <img src={arrow_back} alt="Flèche gauche" onClick={prevSlide} className="carrousel_arrow_left" />
          <img src={images[currentSlide]} alt={alt} className="carrousel_img" />
          <div className="carrousel_pagination">{pagination}</div>
          <img src={arrow_forward} alt="Flèche droite" onClick={nextSlide} className="carrousel_arrow_right" />
        </div>
      )}

      {images.length === 1 && <img src={images[0]} className="carrousel_img" alt={alt} />}
    </div>
  )
}

export default Carrousel