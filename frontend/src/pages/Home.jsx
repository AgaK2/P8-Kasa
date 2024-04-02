import Banner from "../components/Banner"
import Gallery from "../components/GalleryCards"
import banner_1 from "../assets/banner_1.png"
import "../styles/Home.css"


function Home() {
    return (
        <div className="body_home">
            <Banner
                image={banner_1}
                alt="Paysage - mer et rochers"
                text="Chez vous, partout et ailleurs"
                withShadow={true} />
            <Gallery />
        </div>
    )
}

export default Home