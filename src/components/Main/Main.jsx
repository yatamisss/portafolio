import "../Main/Main.scss"
import fotoPerfil from "../../assets/images/descarga (2).jpg"

const Main = () => {
    return (
        <>
            <main>
                <div className="contenedor">
                    <div className="columna-estatica">
                        <img className="columna-estatica__img" src={fotoPerfil} alt="foto de perfil" />
                        <h1>BIENVENIDO/A</h1>
                        <p>Mi nombre es Yatamis Andrea Spolman Millaquipai</p>

                    </div>
                    <div className="columna-desplazable">
                        {/*Contenido desplazable*/}
                        <div className="scrollable">
                            <div className="scrollable__item1">
                                <div className="sscrollable__item1--contenedor">
                                    <img className="sscrollable__item1--contenedor"src="" alt="" />
                                    <h3 className="sscrollable__item1--contenedor">sobre mi</h3>
                                </div>
                                <div className="sscrollable__item1--contenedor">
                                    <img src="" alt="" />
                                    <h3>sobre mi</h3>
                                </div>
                                <div className="sscrollable__item1--contenedor">
                                    <img src="" alt="" />
                                    <h3>sobre mi</h3>
                                </div>
                            </div>
                            <div className="scrollable__item2">
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Main;