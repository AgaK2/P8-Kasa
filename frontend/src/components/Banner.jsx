import "../styles/Banner.css"

function Banner({ image, alt, text, withShadow }) {
    return (
        <div className="banner">
            <img src={image} alt={alt} className={withShadow ? "banner_img banner_shadow" : "banner_img"} />
            <h1 className="banner_text">{text}</h1>
        </div>
    )
}

export default Banner

