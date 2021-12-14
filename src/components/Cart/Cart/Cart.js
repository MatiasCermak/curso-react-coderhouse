import "./Cart.scss";

import React, { useContext } from "react";

import { AiFillCloseCircle } from "react-icons/ai";
import { CartContext } from "../../../context/CartContext";
import CustomButton from "../../GlobalComponents/CustomButton/CustomButton";
import { Link } from "react-router-dom";

const Cart = ({ pathname }) => {
    const { cart, removeItem, totalPurchase, isEmpty } = useContext(CartContext);
    return isEmpty() ? (
        <div>
            Sorry, cart is empty right now, but you can fill it up <Link to="/">here</Link>
        </div>
    ) : (
        <ul className="cart__list container">
            {cart.map((item) => (
                <li className="cart__list-item row">
                    <div className="item__description col-6">{`${item.item.title} - ${item.item.artist}`}</div>
                    <div className="item__quantity col-2">{`${item.quantity}`}</div>
                    <div className="item__price col-3">{`${item.item.price * item.quantity}`}</div>
                    <div className="item__delete col-1">
                        <AiFillCloseCircle
                            className="item__delete-icon"
                            onClick={() => {
                                removeItem(item.item.id);
                            }}
                        />
                    </div>
                </li>
            ))}
            <li className="cart__list-item row ">
                {" "}
                <div className="col-6 d-flex align-items-center">Total: {totalPurchase()}</div>
                {isEmpty() ? (
                    ""
                ) : (
                    <div className="col-6 d-flex flex-row-reverse">
                        <CustomButton text="Checkout" to="/checkout" handleClick={() => {}} />
                    </div>
                )}
            </li>
        </ul>
    );
};

export default Cart;
