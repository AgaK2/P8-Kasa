import "../styles/Carrousel.css"
import { useState, useEffect } from "react"
import arrow_forward from "../assets/arrow_forward_carrousel.png"
import arrow_back from "../assets/arrow_back_carrousel.png"

function Carrousel() {
    const [slides, setSlides] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const id = "0"  //ID właściwości, dla której pobierane są slajdy

    useEffect(() => {
        fetch(`http://localhost:8080/api/properties/${id}`)
            .then(response => response.json())
            .then(data => setSlides(data))
            
    }, [])

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
          setCurrentSlide(currentSlide + 1);
        }
      };
    
      const prevSlide = () => {
        if (currentSlide > 0) {
          setCurrentSlide(currentSlide - 1);
        }
      };

    return (
        <div className="carrousel-all">
            {slides.length > 0 && (
                <>
                {slides.length > 1 && (
                    <img src={arrow_back} alt="Flèche gauche" onClick={prevSlide}/>
                )}
                <img src={slides[currentSlide]} alt="Slide"/>
                {slides.length > 1 && (
                    <img src={arrow_forward} alt="Flèche droite" onClick={nextSlide} />
                )}
                </>
            )}
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