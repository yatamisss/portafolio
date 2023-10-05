import "../Header/Header.scss"
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
    const location = useLocation();
    const [showLink2, setShowLink2] = useState(true);

    useEffect(() => {
        // Verifica la ubicación actual para determinar si se debe mostrar u ocultar link2
        if (location.pathname === "/contacto") {
            setShowLink2(false);
        } else {
            setShowLink2(true);
        }
    }, [location]);

    return (
        <>
            <header>
                <nav className="nav-bar">
                    {showLink2 && (
                        <>
                            <a className="nav-bar__link2" href="#skills">Skills</a>
                            <a className="nav-bar__link2" href="">Hobbies</a>
                            <a className="nav-bar__link2" href="">Formación</a>
                            <a className="nav-bar__link2" href="#projects">Proyectos</a>
                        </>
                    )}
                    <Link className="nav-bar__link" to="/">Portafolio</Link>
                    <Link className="nav-bar__link" to="/contacto">Contacto</Link>
                </nav>
            </header>
        </>
    )
}

export default Header;