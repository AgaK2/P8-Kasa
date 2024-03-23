import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import { useState } from "react"
import "../styles/Header.css"

function Header() {
const [activeLink, setActiveLink] = useState("")

    function linkClick(e) {
        setActiveLink(e) 
}

    return (
        <header className="header">
            <div>
                <img src={logo} alt="KASA logo" />
            </div>
            <nav className="header_nav">
                <Link to="/" onClick={() => linkClick("/")} className={`header_link ${activeLink === "/" ? "underline" : "none"}`}>Accueil</Link>
                <Link to="/apropos" onClick={() => linkClick("/apropos")} className={`header_link ${activeLink === "/apropos" ? "underline" : ""}`}>A Propos</Link>
            </nav>
        </header>
    )
}

export default Header