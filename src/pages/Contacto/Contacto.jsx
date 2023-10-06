import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../Contacto/Contacto.scss"
import * as yup from 'yup';


const Contacto = () => {
    const [validationErrors, setValidationErrors] = useState({});
    //funcion que se ejecutara cuando el usuario aprete el boton enviar
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();

        const formData = {
            user_name: form.current.querySelector('[name="user_name"]').value,
            user_email: form.current.querySelector('[name="user_email"]').value,
            message: form.current.querySelector('[name="message"]').value,
          };

        const validationSchema = yup.object().shape({
            user_name: yup.string().required('Name is required'),
            user_email: yup.string().email('Invalid email format').required('Email is required'),
            message: yup.string().required('Message is required'),
        });

        try {
            await validationSchema.validate(formData, { abortEarly: false });

            // El formulario es válido, puedes enviar los datos
            emailjs.sendForm('service_rc73i9i', 'template_weizvse', form.current, 'L_D0CJL4Hl_b4uITf')
                .then((result) => {
                    console.log(result.text);
                    // Para restablecer el formulario una vez enviado el mensaje
                    form.current.reset();
                }, (error) => {
                    console.log(error.text);
                });
        } catch (error) {
            // Hay errores de validación, muestra los mensajes de error
            const newErrors = {};
            error.inner.forEach((e) => {
                newErrors[e.path] = e.message;
            });
            setValidationErrors(newErrors);
        }
    };

    return (
        <>
            <div className="form-container">
                <form className="form" ref={form} onSubmit={sendEmail}>
                    <div className="title">Contact us</div>
                    <label>Name</label>
                    <input type="text" name="user_name" className="input" />
                    {validationErrors.user_name && <div className="error">{validationErrors.user_name}</div>}
                    <label>Email</label>
                    <input type="email" name="user_email" className="input" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" className='button' />
                </form>
            </div>
        </>
    )
}

export default Contacto;