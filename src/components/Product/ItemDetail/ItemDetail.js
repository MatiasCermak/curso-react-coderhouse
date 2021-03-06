import "./ItemDetail.scss";

import { Popover, PopoverTrigger } from "../../GlobalComponents/Popover/Popover";
import React, { useContext, useState } from "react";

import { CartContext } from "../../../context/CartContext";
import CustomButton from "../../GlobalComponents/CustomButton/CustomButton";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ item }) => {
    const [itemQuantity, setItemQuantity] = useState(0);

    const { addItem } = useContext(CartContext);

    const handleAdd = () => {};

    const onAdd = (quantityToAdd) => {
        setItemQuantity(quantityToAdd);
        if (quantityToAdd !== 0) addItem({ item: item, quantity: quantityToAdd });
    };
    return (
        <div className="main_product__container container-fluid">
            <div className="row">
                <h1>{item.title}</h1>
            </div>
            <div className="row">
                <div className="col-xs-12 col-xl-6">
                    <Popover text={`Album ${item.title}`}>
                        <PopoverTrigger>
                            <img src={require("../../../img/" + item.image).default} alt="Foto album" />{" "}
                        </PopoverTrigger>
                    </Popover>
                </div>
                <div className="product_data col col-xs-12 col-xl-6 d-flex flex-column justify-content-center">
                    <div className="product_data__characteristics d-flex flex-column">
                        <h4>Características</h4>
                        <ul>
                            <li>Año: 1975</li>
                            <li>Género: {item.categories}</li>
                            <li>Artista: {item.artist}</li>
                            <li>Rating: *****</li>
                            <li>Precio: {item.price}</li>
                        </ul>
                    </div>
                    <div className="product_data__description">
                        <h4>Descripción</h4>
                        <p>{item.description}</p>
                    </div>
                    <div className="product_data__buttons d-flex flex-column align-items-center justify-content-center">
                        {itemQuantity !== 0 ? (
                            <CustomButton text="Comprar" to="/cart" handleClick={handleAdd} />
                        ) : (
                            <ItemCount initial={0} stock={item.stock} onAdd={onAdd} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
