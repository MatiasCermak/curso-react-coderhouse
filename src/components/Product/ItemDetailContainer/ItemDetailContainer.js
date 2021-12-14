import "./ItemDetailContainer.scss";

import React, { useEffect, useState } from "react";
import { collection, doc, getDoc } from "firebase/firestore/lite";

import CircularProgress from "react-cssfx-loading/lib/CircularProgress";
import ItemDetail from "../ItemDetail/ItemDetail";
import db from "../../../db";
import { useParams } from "react-router-dom";

const getItems = (index) => {
    const items = collection(db, "items");
    return getDoc(doc(items, index)).then(
        (res) => {
            return {
                id: res.id,
                ...res.data(),
            };
        },
        () => {
            alert("Hubo un error en la carga del producto, por favor intente de nuevo más tarde.");
        }
    );
};

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const data = getItems(id);
        data.then((res) => {
            setItem(res);
        });
    }, [id]);

    return (
        <main className="main_product">
            {item ? (
                <ItemDetail item={item} />
            ) : (
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <CircularProgress className="progressbar" />
                </div>
            )}
        </main>
    );
};

export default ItemDetailContainer;
