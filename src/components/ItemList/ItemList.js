import React from "react";
import Item from "../Item/Item";
const ItemList = ({ products }) => {
    return products.map((element) => <Item element={element} />);
};

export default ItemList;
