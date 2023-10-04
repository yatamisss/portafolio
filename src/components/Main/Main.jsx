import "../Main/Main.scss"
import fotoPerfil from "../../assets/images/IMG_20230423_154220956.jpg"

const Main = () => {
    return (
        <>
            <main className="contenedor-main">
                <div className="contenedor-presentacion">
                    <div className="imagen-perfil">
                        <img src={fotoPerfil} alt="Tu nombre" />
                    </div>
                    <div className="descripcion">
                        <h1>Bienvenido/a, es un placer encontarte por aquí</h1>
                        <p>Mi nombre es [Tu Nombre], soy [tu profesión] con [número de años] de experiencia en [tu especialidad]. Estoy apasionado por [tu área de especialización] y he trabajado en proyectos emocionantes como [proyectos relevantes].</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main;