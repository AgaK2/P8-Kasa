import "../styles/Collapse.css"
import { useState } from "react"
import arrow from "../assets/arrow_collapse.png"


function Collapse({ title, content }) { // Définir deux props comme arguments de fonction
    const [isOpen, setIsOpen] = useState(false) // Hook pour stocker des informations indiquant si l'élément est actuellement enroulé ou déroulé

    const switchCollapse = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="collapse_all">
            <div className="collapse_item" >
                <div className="collapse">
                    <h3 className="collapse_title">{title}</h3>
                    <img src={arrow} alt="Flèche pour ouvrir ou fermer le contenu" className={`arrow ${isOpen ? "rotate" : ""}`} onClick={switchCollapse} />
                </div>
            </div>

            <div className={`collapse_content_div ${isOpen ? "expand" : "collapsed"}`}>
                {Array.isArray(content) ? ( // Si le contenu est ouvert et est un tableau, il est mappé et affiché sous forme de liste ("Equipement"). 
                    <ul className="collapse_list">
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : ( // Sinon il est affiché sous forme d'élément unique <p> ("Description").
                    <p className="collapse_content">{content}</p>
                )}
            </div>

        </div>
    )
}

export default Collapse