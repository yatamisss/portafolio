import React from "react";
import "../FondoAnimado/FondoAnimado.scss"
import video from "../../assets/images/138595 (720p).mp4"

const FondoAnimado = () => {
    return (
        <>
            <div className="fondo-video">
                <video className="video" autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                    Tu navegador no admite el elemento de video.
                </video>
            </div>
        </>
    );
}
export default FondoAnimado;




