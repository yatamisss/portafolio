import "../Contacto/Contacto.scss"

const Contacto = () => {
    return (
        <>
            <section>
                <div className="contenedor">
                    <form class="form">
                        <div class="title">Contact us</div>
                        <input type="text" placeholder="Your email" class="input" />
                        <textarea placeholder="Your message"></textarea>
                        <button>Submit</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contacto;