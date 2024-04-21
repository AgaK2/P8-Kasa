import Banner from "../components/Banner"
import banner_2 from "../assets/banner_2.png"
import Collapse from "../components/Collapse"
import { collapseTextAPropos } from "../data/CollapseTable"
import "../styles/Apropos.css"


function Apropos() {
    return (
        <div className="apropos">
            <Banner
                image={banner_2}
                alt="Une vallée entre de hautes montagnes enneigées"
            />
            {collapseTextAPropos.map((item, index) => (  //Mapping de chaque élément du tableau d'objets.
                <Collapse
                    key={index}
                    title={item.title}
                    content={item.content}
                />
            ))}
        </div>
    )
}

export default Apropos