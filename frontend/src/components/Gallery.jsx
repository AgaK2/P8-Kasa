import { Link } from "react-router-dom"
import "../styles/Gallery.css"
// import Card from "./Card"
import { useState, useEffect } from 'react'

function Gallery() {
    const [properties, setProperties] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/api/properties")
            .then((response) => response.json())
            .then(data => {
                setProperties(data)
            })
    }, [])

    return (
        <div className="gallery">
            {properties.map(property => (
                <div key={property.id} className="gallery_element">
                    <h2 className="gallery_text">{property.title}</h2>
                    <Link to="/logement">
                    <img src={property.cover} alt={property.title} className="gallery_img"/>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Gallery