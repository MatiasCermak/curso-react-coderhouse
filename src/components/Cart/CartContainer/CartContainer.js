import Cart from "../Cart/Cart";
import React from "react";

const CartContainer = () => {
    return (
        <div className="cart__container d-flex flex-column align-items-center ">
            <h2>Cart</h2>
            <Cart />
        </div>
    );
};

export default CartContainer;
