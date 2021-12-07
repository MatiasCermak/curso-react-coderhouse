import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import CustomButton from "../../GlobalComponents/CustomButton/CustomButton";

const Cart = () => {
    const { cart, removeItem, clearCart, totalPurchase, isEmpty } = useContext(CartContext);

    return isEmpty() ? (
        <div>
            {" "}
            Sorry, cart is empty right now, but you can fill it up <Link to="/">here</Link>
        </div>
    ) : (
        <div className="cart__list container-fluid">
            <div className="cart__list-item row">
                <div className="item__description col-6">Nombre</div>
                <div className="item__quantity col-2">Cantidad</div>
                <div className="item__price col-3">Precio Unitario</div>
                <div className="item__delete col-1">Eliminar</div>
            </div>
            {cart.map((item) => (
                <div className="cart__list-item row">
                    <div className="item__description col-6">{`${item.item.title} - ${item.item.artist}`}</div>
                    <div className="item__quantity col-2">{`${item.quantity}`}</div>
                    <div className="item__price col-3">{`${item.item.price}`}</div>
                    <div className="item__delete col-1">
                        <AiFillCloseCircle
                            className="item__delete-icon"
                            onClick={() => {
                                removeItem(item.item.id);
                            }}
                        />
                    </div>
                </div>
            ))}
            <div className="cart__list-item row">
                {" "}
                <div className="col-6">Total: {totalPurchase()}</div>
                {isEmpty() ? (
                    ""
                ) : (
                    <div className="col-6 d-flex flex-row-reverse">
                        <CustomButton text="Checkout" to="/checkout" handleClick={() => {}} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
