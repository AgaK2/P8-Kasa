import "../styles/Collapse.css"
import { useState } from "react"
import arrow from "../assets/arrow_collapse.png"


function Collapse({ title, content }) {// Définir deux props comme arguments de fonction
    const [isOpen, setIsOpen] = useState(false) // Hook pour stocker des informations indiquant si l'élément est actuellement enroulé ou déroulé

    function switchCollapse() {
        setIsOpen(!isOpen)
    }

    return (
        <div className="collapse_all">
            <div className={`collapse_item ${isOpen ? "collapsed" : ""}`} >
                <div className="collapse">
                    <h3 className="collapse_title">{title}</h3>
                    <img src={arrow} alt="Flèche pour ouvrir ou fermer le contenu" className={`arrow ${isOpen ? "rotate" : ""}`} onClick={switchCollapse} />
                </div>
            </div>
            {isOpen && (
                <div className="collapse_content_div">
                    {Array.isArray(content) ? (
                        <ul className="collapse_list">
                            {content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : ( 
                        <p className="collapse_content">{content}</p>
                    )}
                </div>
            )}
        </div>
    )
}

export default Collapse