import "../FondoAnimado/FondoAnimado.scss"

const FondoAnimado = () => {
    return (
        <div className="fondo-gradiente">
            <video autoplay loop muted>
                <source src="mi-video.mp4" type="video/mp4"/>
                    Tu navegador no admite el elemento de video.
            </video>
        </div>
    );
}
export default FondoAnimado;