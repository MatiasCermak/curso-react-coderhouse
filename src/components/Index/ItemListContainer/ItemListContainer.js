import "./ItemListContainer.scss";

import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore/lite";

import CircularProgress from "react-cssfx-loading/lib/CircularProgress";
import ItemList from "../ItemList/ItemList";
import db from "../../../db";

const getProducts = () => {
    const res = collection(db, "items");
    return getDocs(query(res, where("stock", ">", 0))).then(
        (res) =>
            res.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                };
            }),
        () => {
            alert("Hubo un error al cargar la lista de discos.");
        }
    );
};

const ItemListContainer = () => {
    const [productList, setProductList] = useState(null);
    useEffect(() => {
        const data = getProducts();
        data.then((res) => setProductList(res));
    }, []);

    return (
        <section class="d-flex flex-wrap align-items-center justify-content-center row-cols-xl-6 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 product-list">
            {productList ? <ItemList products={productList} /> : <CircularProgress color="#f98948" />}
        </section>
    );
};

export default ItemListContainer;
