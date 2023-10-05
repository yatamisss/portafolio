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
                            <h1>Sobre mi</h1>
                        ) : (
                            <h1>Bienvenido/a, es un placer que te encuentres hoy aquí</h1>
                        )}
                        {isHovered ? (
                            <p>Soy una persona bastante alegre, carismatica, y trabajadora, siempre he disfrutado del poder aprender cosas nuevas...</p>
                        ) : (
                            <p>Mi nombre es [Tu Nombre], soy [tu profesión] con [número de años] de experiencia en [tu especialidad]. Estoy apasionado por [tu área de especialización] y he trabajado en proyectos emocionantes como [proyectos relevantes].</p>
                        )}
                    </div>
                </div>

            </main>
        </>
    );
}

export default Main;