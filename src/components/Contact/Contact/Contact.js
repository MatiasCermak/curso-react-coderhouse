import "./Contact.scss";

import ContactForm from "../ContactForm/ContactForm";
import React from "react";

const Contact = () => {
    return (
        <main class="main_contact">
            <h2 class="form-contacto-title">Formulario de Contacto</h2>
            <div class="form_contact__body">
                <ContactForm />
            </div>
        </main>
    );
};

export default Contact;
