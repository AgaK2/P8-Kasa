import Banner from "../components/Banner"
import Gallery from "../components/Gallery"
import image from "../assets/banner_1.png"
import "../styles/Home.css"


function Home() {
    return (
        <div className="body_home">
            <div className="">
            <Banner 
            image={image}
            alt="Paysage - mer et rochers"
            text="Chez vous, partout et ailleurs"/>
            </div>
            <Gallery />
        </div>
    )
}

export default Home

//"Paysage - mer et rochers"
//Chez vous, partout et ailleurs
// <h1 className="banner1_text">Chez vous, partout et ailleurs</h1>