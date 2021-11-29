import React, { useState, useContext } from "react";
import "./ItemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";
import CustomButton from "../../GlobalComponents/CustomButton/CustomButton";

import { CartContext } from "../../../context/CartContext";

const ItemDetail = ({ item }) => {
    const [itemQuantity, setItemQuantity] = useState(0);

    const { cart, addItem } = useContext(CartContext);

    const handleAdd = () => {
        if (itemQuantity !== 0) addItem({ item: item, quantity: itemQuantity });
    };

    const onAdd = (quantityToAdd) => {
        setItemQuantity(quantityToAdd);
    };

    return (
        <div class="main_product__container container-fluid">
            <div class="row">
                <h1>{item.title}</h1>
            </div>
            <div class="row">
                <div class="col-xs-12 col-xl-6">
                    <img src={require("../../../img/" + item.image).default} alt="Foto album" />
                </div>
                <div class="product_data col col-xs-12 col-xl-6 d-flex flex-column justify-content-center">
                    <div class="product_data__characteristics d-flex flex-column">
                        <h4>Características</h4>
                        <ul>
                            <li>Año: 1975</li>
                            <li>Género: Hola</li>
                            <li>Artista: Hola</li>
                            <li>Rating: *****</li>
                            <li>Precio: {item.price}</li>
                        </ul>
                    </div>
                    <div class="product_data__description">
                        <h4>Descripción</h4>
                        <p>
                            {item.title} es un álbum de {item.artist}, con un puntaje de 5 estrellas.
                        </p>
                    </div>
                    <div class="product_data__buttons d-flex flex-column align-items-center">
                        {itemQuantity !== 0 ? (
                            <CustomButton text="Comprar" to="/cart" handleClick={handleAdd} />
                        ) : (
                            <ItemCount initial={0} stock={20} onAdd={onAdd} />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
