import React from "react";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";

const ItemList = ({ products }) => {
    const { category } = useParams();
    let retProduct = products;
    if (category !== undefined) {
        retProduct = retProduct.filter((element) => element.categories.includes(category));
    }
    return retProduct.map((element) => <Item element={element} key={element.id} />);
};

export default ItemList;
