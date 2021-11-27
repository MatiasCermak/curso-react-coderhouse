import React from "react";
import "./ItemDetail.scss";

const ItemDetail = ({ item }) => {
    return (
        <div class="main_product__container container-fluid">
            <div class="row">
                <h1>{item.title}</h1>
            </div>
            <div class="row">
                <div class="col-xs-12 col-xl-6">
                    <img src={require("../../img/" + item.image).default} alt="Foto album" />
                </div>
                <div class="product_data col col-xs-12 col-xl-6 d-flex flex-column justify-content-center">
                    <div class="product_data__characteristics d-flex flex-column">
                        <h4>Características</h4>
                        <ul>
                            <li>Año: 1975</li>
                            <li>Género: Progressive Rock</li>
                            <li>Artista: {item.artist}</li>
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
                    <div class="product_data__buy_btn d-flex justify-content-center">
                        <input type="button" class="form__btn" value="Comprar!" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
