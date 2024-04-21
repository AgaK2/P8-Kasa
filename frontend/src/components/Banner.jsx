import "../styles/Banner.css"

function Banner({ image, alt, text, withShadowAndDarken }) {
                                  // Ajout une ombre et assombrir l'image en fonction de la page (en utilisant la condition ternaire)
    return (
        <div className="banner">
            <img src={image} alt={alt} className={withShadowAndDarken ? "banner_img banner_shadow" : "banner_img"} /> 
            <h1 className="banner_text">{text}</h1>
        </div>
    )
}

export default Banner