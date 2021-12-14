import * as Yup from "yup";

import React, { useState } from "react";
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore/lite";

import CustomButton from "../../GlobalComponents/CustomButton/CustomButton";
import { Formik } from "formik";
import db from "../../../db";

const schema = Yup.object().shape({
    name: Yup.string()
        .required("Este campo es obligatorio")
        .min(4, "El nombre es demasiado corto")
        .max(30, "El nombre es demasiado largo"),
    surname: Yup.string()
        .required("Este campo es obligatorio")
        .min(4, "El nombre es demasiado corto")
        .max(30, "El nombre es demasiado largo"),
    email: Yup.string().required("Este campo es obligatorio").email("Email inválido"),
    description: Yup.string().required("Este campo es obligatorio"),
});

const ContactForm = () => {
    const [isSending, setIsSending] = useState(false);
    const postContact = (buyerData) => {
        setIsSending(true);
        const contact = collection(db, "contact");
        const newContact = {
            ...buyerData,
            date: Timestamp.fromDate(new Date()),
        };

        addDoc(contact, newContact).then(
            (res) => {
                setIsSending(false);
                alert(`Formulario de Contacto enviado con éxito, id de contacto": ${res.id}`);
            },
            () => {
                setIsSending(false);
                alert("No se pudo enviar. intentalo de nuevo más tarde");
            }
        );
    };
    return (
        <Formik
            initialValues={{ name: "", surname: "", email: "", description: "" }}
            validationSchema={schema}
            onSubmit={(buyerData) => {
                postContact(buyerData);
            }}
        >
            {(formik) => (
                <form onSubmit={formik.handleSubmit} class="form-contacto d-flex flex-column justify-content-center">
                    <div class="mb-3 input-group-lg">
                        <label for="name" class="form-label">
                            Nombre
                        </label>
                        <input
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            name="name"
                            className="form-control my-2"
                            type="text"
                        />
                    </div>

                    {formik.errors.name && <p className="alert alert-danger">{formik.errors.name}</p>}

                    <div class="mb-3 input-group-lg">
                        <label for="inputLastName" class="form-label">
                            Apellido
                        </label>
                        <input
                            value={formik.values.surname}
                            onChange={formik.handleChange}
                            name="surname"
                            className="form-control my-2"
                            type="text"
                        />
                    </div>

                    {formik.errors.surname && <p className="alert alert-danger">{formik.errors.surname}</p>}
                    <div class="mb-3 input-group-lg">
                        <label for="email" class="form-label">
                            Email
                        </label>
                        <input
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            name="email"
                            className="form-control my-2"
                            type="email"
                        />
                    </div>
                    {formik.errors.email && <p className="alert alert-danger">{formik.errors.email}</p>}
                    <div class="mb-3 input-group-lg">
                        <label for="inputText" class="form-label">
                            Descripción
                        </label>
                        <textarea
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            name="description"
                            className="form-control my-2"
                            type="email"
                            cols="24"
                            rows="10"
                            id="inputText"
                        />
                    </div>
                    {formik.errors.description && <p className="alert alert-danger">{formik.errors.description}</p>}

                    <CustomButton type="submit" text="Enviar" handleClick={() => {}} />
                    {isSending && <p>Enviando...</p>}
                </form>
            )}
        </Formik>
    );
};

export default ContactForm;
