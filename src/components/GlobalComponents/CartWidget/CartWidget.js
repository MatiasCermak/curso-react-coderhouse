import "./CartWidget.scss";

import React, { useContext } from "react";

import Cart from "../../Cart/Cart/Cart";
import { CartContext } from "../../../context/CartContext";
import { MdShoppingCart } from "react-icons/md";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <div className="dropdown d-flex align-items-center">
            <button
                className="btn btn-secondary"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <MdShoppingCart /> {totalQuantity()}
            </button>
            <div
                className="dropdown-menu dropdown-menu-end dropdown-menu-md-start "
                id="shopcart_list"
                aria-labelledby="dropdownMenuButton1"
            >
                <Cart />
            </div>
        </div>
    );
};

export default CartWidget;
