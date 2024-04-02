import "../styles/Carrousel.css"
import { useState } from "react"
import arrow_forward from "../assets/arrow_forward_carrousel.png"
import arrow_back from "../assets/arrow_back_carrousel.png"


function Carrousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
  }


  return (
    <div>
      {images.length > 1 && (
        <div className="carrousel">
          <img src={arrow_back} alt="Flèche gauche" onClick={prevSlide} className="carrousel_arrow_left" />
          <img src={images[currentSlide]} alt="Card" className="carrousel_img" />
          <img src={arrow_forward} alt="Flèche droite" onClick={nextSlide} className="carrousel_arrow_right" />
        </div>
      )}
      {images.length === 1 && <img src={images[0]} alt="Logement-img" />}
    </div>
  )
}
export default Carrousel



// function nextSlide() {
//     currentSlide < slides.length - 1 ? setCurrentSlide(currentSlide + 1) : null
// }

// function prevSlide() {
//     currentSlide > 0 ? setCurrentSlide(currentSlide - 1) : null
// }

// const nextSlide = () => {
//   if (currentSlide < slides.length - 1) {
//     setCurrentSlide(currentSlide + 1);
//   }
//   console.log("click")
// };

// const prevSlide = () => {
//   if (currentSlide > 0) {
//     setCurrentSlide(currentSlide - 1);
//   }
// };

// return (
//   <div className="carrousel">
//       {slides.length > 0 && (
//           <>
//           {slides.length > 1 && (
//               <img src={arrow_back} alt="Flèche gauche" onClick={prevSlide}/>
//           )}
//           <img src={slides[currentSlide]} alt="Slide"/>
//           {slides.length > 1 && (
//               <img src={arrow_forward} alt="Flèche droite" onClick={nextSlide} />
//           )}
//           </>
//       )}
//   </div>
// )
// }