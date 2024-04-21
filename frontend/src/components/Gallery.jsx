import { useState } from "react"
import arrow_forward from "../assets/arrow_forward_carrousel.png"
import arrow_back from "../assets/arrow_back_carrousel.png"
import "../styles/Gallery.css"


function Carrousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Passer à la photo suivante dans la galerie carrousel.
  // Si l'image actuelle est la dernière image du tableau d'images, 
  // la fonction revient à la première photo.
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length)
  }
  // Aller à la photo précédente dans la galerie carrousel. Si currentSlide === 0 , il passe à la dernière image.
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
  }

  const pagination = `${currentSlide + 1}/${images.length}`

  const alt = "Photo du logement"

  return (
    <div>
      {images.length > 1 && ( // Conditions s'il y a plus d'une photo dans le carrousel.
        <div className="carrousel">
          <img src={arrow_back} alt="Flèche gauche" onClick={prevSlide} className="carrousel_arrow_left" />
          <img src={images[currentSlide]} alt={alt} className="carrousel_img" />
          <div className="carrousel_pagination">{pagination}</div>
          <img src={arrow_forward} alt="Flèche droite" onClick={nextSlide} className="carrousel_arrow_right" />
        </div>
      )}

      {images.length === 1 && // S'il n'y a qu'une seule photo, ni les flèches ni la pagination n'apparaissent.
        <img src={images[0]} className="carrousel_img" alt={alt} />
      }
    </div>
  )
}

export default Carrousel