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
    category: Yup.number()
        .required("Este campo es obligatorio")
        .oneOf([1, 2, 3], "Debe elegir una de las siguientes opciones: Reembolsos, Quejas o Envíos"),
    urgency: Yup.bool().required("Este campo es obligatorio").default(false),
});

const HelpForm = () => {
    const [isSending, setIsSending] = useState(false);
    const postContact = (buyerData) => {
        setIsSending(true);
        const contact = collection(db, "help");
        const newContact = {
            ...buyerData,
            date: Timestamp.fromDate(new Date()),
        };

        addDoc(contact, newContact).then(
            (res) => {
                setIsSending(false);
                alert(`Formulario de Ayuda enviado con éxito, id de ayuda: ${res.id}`);
            },
            () => {
                setIsSending(false);
                alert("No se pudo enviar. intentalo de nuevo más tarde");
            }
        );
    };
    return (
        <section class="main_help__form d-flex flex-column align-items-center">
            <h2 class="form__title title">Formulario de Ayuda</h2>
            <Formik
                initialValues={{ name: "", surname: "", email: "", category: 0, urgency: false }}
                validationSchema={schema}
                onSubmit={(buyerData) => {
                    postContact(buyerData);
                }}
            >
                {(formik) => (
                    <form
                        onSubmit={formik.handleSubmit}
                        class="form-contacto d-flex flex-column justify-content-center"
                    >
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
                        <div>
                            <label for="categorySelect" class="form-label">
                                Categoría
                            </label>
                            <select
                                value={formik.values.category}
                                class="form-select form-select-lg mb-3"
                                id="categorySelect"
                                aria-label="form-select-lg example"
                            >
                                <option selected value={0}>
                                    Categoría
                                </option>
                                <option value={1}>Reembolsos</option>
                                <option value={2}>Quejas</option>
                                <option value={3}>Envíos</option>
                            </select>
                        </div>
                        {formik.errors.email && <p className="alert alert-danger">{formik.errors.category}</p>}
                        <div class="form-check">
                            <input
                                class="form-check-input"
                                type="checkbox"
                                value={formik.values.urgency}
                                id="helpCheck"
                            />
                            <label class="form-check-label" for="helpCheck">
                                Urgente
                            </label>
                        </div>
                        {formik.errors.email && <p className="alert alert-danger">{formik.errors.urgency}</p>}
                        <CustomButton type="submit" text="Enviar" handleClick={() => {}} />
                        {isSending && <p>Enviando...</p>}
                    </form>
                )}
            </Formik>
        </section>
    );
};

export default HelpForm;
