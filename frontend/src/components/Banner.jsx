import "../styles/Banner.css"

function Banner({image, alt, text}) {
    return (
        <div className="banner1">
            <img src={image} alt={alt} className="banner1_img" />
            <h1 className="banner1_text">{text}</h1>
        </div>
    )
}
 
export default Banner

