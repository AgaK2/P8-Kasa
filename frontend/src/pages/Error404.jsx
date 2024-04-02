import "../styles/Error404.css"
import { Link } from "react-router-dom"

function Error() {
    return (
        <div className="error_all">
            <h1 className="code404">404</h1>
            <p className="error_text_1">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="error_text_2">Retourner sur la page d’accueil</Link>
        </div>

    )
}

export default Error