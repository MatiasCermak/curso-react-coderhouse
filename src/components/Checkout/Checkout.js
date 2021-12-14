import * as Yup from "yup";

import React, { useContext, useState } from "react";
import { Timestamp, addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore/lite";

import { CartContext } from "../../context/CartContext";
import CustomButton from "../GlobalComponents/CustomButton/CustomButton";
import { Formik } from "formik";
import db from "../../db";

const buyerData = {
    name: "Matias Nicolas Cermak",
    phone: "3644596509",
    email: "matias.cermak99@gmail.com",
};

const schema = Yup.object().shape({
    name: Yup.string()
        .required("Este campo es obligatorio")
        .min(4, "El nombre es demasiado corto")
        .max(30, "El nombre es demasiado largo"),
    email: Yup.string().required("Este campo es obligatorio").email("Email inválido"),
    phone: Yup.string().required("Este campo es obligatorio").min(8, "Formato inválido"),
});

const postOrder = (cart, buyerData, totalPurchase, clearCart, setOrderCompleted, setOrderId) => {
    const orders = collection(db, "orders");
    const items = collection(db, "items");
    const newOrder = {
        buyer: buyerData,
        items: cart,
        total: totalPurchase(),
        date: Timestamp.fromDate(new Date()),
    };

    const batch = writeBatch(db);

    const outOfStock = [];

    getDocs(
        query(
            items,
            where(
                documentId(),
                "in",
                cart.map((el) => String(el.item.id))
            )
        )
    ).then((res) => {
        res.docs.forEach((doc) => {
            const itemToUpdate = cart.find((prod) => prod.item.id === doc.id);

            if (doc.data().stock >= itemToUpdate.quantity) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemToUpdate.quantity,
                });
            } else {
                outOfStock.push(itemToUpdate);
            }
        });

        if (outOfStock.length === 0) {
            batch.commit();

            addDoc(orders, newOrder).then((res) => {
                setOrderCompleted(true);
                setOrderId(res.id);
                clearCart();
            });
        } else {
            alert("Hay items sin stock");
        }
    });
};

const Checkout = () => {
    const { cart, clearCart, totalPurchase } = useContext(CartContext);
    const [orderCompleted, setOrderCompleted] = useState(false);
    const [orderId, setOrderId] = useState(null);

    return orderCompleted ? (
        <div className="checkout__container d-flex flex-column align-items-center">
            <h1>Orden Completada!</h1>
            <h2>Orden de Compra: {orderId}</h2>
        </div>
    ) : (
        <div className="checkout__container">
            <div className="checkout__form">
                <h2>Resumen de compra</h2>
                <hr />

                <Formik
                    initialValues={buyerData}
                    validationSchema={schema}
                    onSubmit={(buyerData) => {
                        console.log(buyerData);
                        postOrder(cart, buyerData, totalPurchase, clearCart, setOrderCompleted, setOrderId);
                    }}
                >
                    {(formik) => (
                        <form onSubmit={formik.handleSubmit}>
                            <input
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                name="name"
                                className="form-control my-2"
                                placeholder="Name and Surname"
                                type="text"
                            />
                            {formik.errors.name && <p className="alert alert-danger">{formik.errors.name}</p>}

                            <input
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                name="email"
                                className="form-control my-2"
                                placeholder="Email"
                                type="email"
                            />
                            {formik.errors.email && <p className="alert alert-danger">{formik.errors.email}</p>}

                            <input
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                name="phone"
                                className="form-control my-2"
                                placeholder="Phone"
                                type="phone"
                            />
                            {formik.errors.phone && <p className="alert alert-danger">{formik.errors.phone}</p>}

                            <CustomButton type="submit" text="Enviar" handleClick={() => {}} />
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Checkout;
