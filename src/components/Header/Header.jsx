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

    //Para implementar el desplazamiento suave en mi componente
    useEffect(() => {
        const scrollToSection = (sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        };

        const handleScrollToSection = (sectionId) => {
            return (event) => {
                event.preventDefault();
                scrollToSection(sectionId);
            };
        };

        document.getElementById("scrollToSkills").addEventListener("click", handleScrollToSection("skills"));
        document.getElementById("scrollToHobbies").addEventListener("click", handleScrollToSection("hobbies"));
        document.getElementById("scrollToFormacion").addEventListener("click", handleScrollToSection("formacion"));
        document.getElementById("scrollToProjects").addEventListener("click", handleScrollToSection("projects"));
    }, []);

    return (
        <>
            <header>
                <nav className="nav-bar">
                    {showLink2 && (
                        <>
                            <a className="nav-bar__link2" id="scrollToSkills" href="#skills">Habilidades</a>
                            <a className="nav-bar__link2" id="scrollToHobbies" href="#hobbies"> Hobbies</a>
                            <a className="nav-bar__link2" id="scrollToFormacion" href="#formacion">Formación</a>
                            <a className="nav-bar__link2" id="scrollToProjects" href="#projects">Proyectos</a>
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