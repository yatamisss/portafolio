import { Link } from "react-router-dom";
import "../Header/Header.scss"

const Header = () => {
    return (
        <>
            <header>
                <nav className="nav-bar">
                    <Link className="nav-bar__link" to="/">Portafolio</Link>
                    <Link className="nav-bar__link" to="/contacto">Contacto</Link>
                </nav>
            </header>
        </>
    )
}

export default Header;