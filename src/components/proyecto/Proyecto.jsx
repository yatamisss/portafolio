import "../Proyecto/Proyecto.scss"

const Proyecto = () => {
    return (
        <>
            <main className="container-cards">
                <h1 id="formacion" className="container-card__h1">Formacion</h1>
                <section className="container">
                    <div className="card">
                        <div className="content">
                            <p className="logo">Generation Chile</p>
                            <div className="h6">ONG internacional fundada por Mckinsey &amp; Company</div>
                            <div className="hover_content">
                                <p>Mis primeros pasos en programación fueron de la mano de esta fundación, me entrego las bases y conocimientos para poder comenzar y crecer en el desarrollo de software. </p>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <p className="logo">Universidad de Santiago de Chile</p>
                            <div className="h6">Curso FrontEnd USACH G23</div>
                            <div className="hover_content">
                                <p>Realice un curso de desarrollo frontend, donde apredí como consumir apis, profundice aun más sobre el desarrollo de paginas web con JavaScript, React, html, css y sass. Y actualmente sigo aprendiendo de forma autodidacta</p>
                            </div>
                        </div>
                    </div>
                </section>
                <h1 id="hobbies" className="container-card__h1">Hobbies</h1>
                <section class="container">
                    <div class="card">
                        <div class="content">
                            <p class="logo">Deportes</p>
                            <div class="h6">Correr, patinar &amp; andar en bicicleta</div>
                            <div class="hover_content">
                                <p>Si bien disfruto de la programación, también me gusta mucho hacer actividades al aire libre, como salir a correr, patinar y andar en bicicleta (no profesionalmente). Considero que son actividades que te brindan disciplina y te ayudan a bajar el estrés.</p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="content">
                            <p class="logo">Arte</p>
                            <div class="h6">Pintura &amp; Dibujo con distintos materiales</div>
                            <div class="hover_content">
                                <p>También disfruto mucho del arte y sus distintas expresiones, estas actividades me ayudan mucho a desarrollar mi creatividad y descubrir nuevas formas de poder expresar mis ideas por medio de un simple papel por ejemplo.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Proyecto;