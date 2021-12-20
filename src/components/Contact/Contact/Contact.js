import "./Contact.scss";

import ContactForm from "../ContactForm/ContactForm";
import React from "react";

const Contact = () => {
    return (
        <main className="main_contact">
            <h2 className="form-contacto-title">Formulario de Contacto</h2>
            <div className="form_contact__body">
                <ContactForm />
            </div>
        </main>
    );
};

export default Contact;
