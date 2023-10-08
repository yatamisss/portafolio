import "../Main/Main.scss"
import fotoPerfil from "../../assets/images/IMG_20230423_154220956.jpg"
import React, { useState } from 'react';

const Main = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            <main className="contenedor-main">
                <div
                    className={`contenedor-presentacion ${isHovered ? 'hovered' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >

                    <div className="imagen-perfil">
                        <img src={fotoPerfil} alt="Tu nombre" />
                    </div>
                    <div className="descripcion">
                        {isHovered ? (
                            <h1>Sobre mí</h1>
                        ) : (
                            <h1>¡Hola! mi nombre es Yatamis Spolman ¡Bienvenido a mi portafolio en línea!</h1>
                        )}
                        {isHovered ? (
                            <p>Soy una jovén entusiasta y comprometida, apasionada por la creatividad y el aprendizaje constante, siempre he disfrutado del poder aprender cosas nuevas y es así como llegue a la programación. Algo que valoro bastante es la creatividad, la innovación y la colaboración en mi trabajo y en cualquier aspecto en general.</p>
                        ) : (
                            <p>Soy desarrolladora Full Stack Java Junior y cuento con experiencia en el desarrollo de proyectos tanto personales como grupales. Mi objetivo es seguir aprendiendo y creando  aplicaciones tangibles, interactivas y funcionales, y este portafolio es un vistazo a mi viaje y logros en este campo de la programación.</p>
                        )}
                    </div>
                </div>

            </main>
        </>
    );
}

export default Main;