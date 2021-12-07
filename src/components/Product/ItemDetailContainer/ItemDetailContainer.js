import React, { useEffect, useState, useContext } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.scss";
import { useParams } from "react-router-dom";
import { collection, getDoc, doc, query, where, documentId } from "firebase/firestore/lite";
import db from "../../../db";

const getItems = (index) => {
    const items = collection(db, "items");
    return getDoc(doc(items, index)).then((res) => {
        return {
            id: res.id,
            ...res.data(),
        };
    });
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

    return <main className="main_product">{item && <ItemDetail item={item} />}</main>;
};

export default ItemDetailContainer;
