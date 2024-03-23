import logo_footer from "../assets/logo_footer.png"
import "../styles/Footer.css"

function Footer() {
    return (
        <div className="footer_background">
            <img src={logo_footer} alt="KASA logo" className="footer_logo"/>
            <p className="footer_text">© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer