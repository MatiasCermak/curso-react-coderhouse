import React, { useContext } from "react";
import Cart from "../Cart/Cart";
import CustomButton from "../../GlobalComponents/CustomButton/CustomButton";
import { CartContext } from "../../../context/CartContext";

const CartContainer = () => {
    return (
        <div className="cart__container d-flex flex-column align-items-center ">
            <h2>Cart</h2>
            <Cart />
        </div>
    );
};

export default CartContainer;
