import { Link } from "react-router-dom"
import "../styles/GalleryCards.css"
import { useState, useEffect } from 'react'

function Gallery() {
    const [properties, setProperties] = useState([])

   // Appel à l'API avec fetch afin de récupérer dynamiquement des images
    useEffect(() => {
        fetch("http://localhost:8080/api/properties")
            .then((response) => response.json())
            .then(data => {
                setProperties(data)
            })
    }, []) // Tableau de dépendances vide à appeler une seule fois

    return (
        <div className="gallery">
            <div className="gallery_all">
                {properties.map(property => (
                    <div key={property.id} className="gallery_element">
                        <h2 className="gallery_text">{property.title}</h2>
                        <Link to={`./logement/${property.id}`}>
                            <img src={property.cover} alt={property.title} className="gallery_img" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery