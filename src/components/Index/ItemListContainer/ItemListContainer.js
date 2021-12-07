import React, { useState, useEffect } from "react";
import "./ItemListContainer.scss";
import useFetch from "../../../customHooks/useFetch";
import ItemCount from "../../Product/ItemCount/ItemCount";
//import products from "../../json/products.json";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs } from "firebase/firestore/lite";
import db from "../../../db";

const getProducts = () => {
    const res = collection(db, "items");
    return getDocs(res).then((res) =>
        res.docs.map((doc) => {
            return {
                id: doc.id,
                ...doc.data(),
            };
        })
    );
};

const ItemListContainer = () => {
    const [productList, setProductList] = useState(null);
    useEffect(() => {
        const data = getProducts();
        data.then((res) => setProductList(res));
    }, []);

    return (
        <section class="d-flex flex-wrap row-cols-xl-6 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 product-list">
            {productList && <ItemList products={productList} />}
        </section>
    );
};

export default ItemListContainer;
