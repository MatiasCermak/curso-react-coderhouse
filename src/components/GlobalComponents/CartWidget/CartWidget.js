import React, { useContext } from "react";
import { MdShoppingCart } from "react-icons/md";
import Cart from "../../Cart/Cart/Cart";
import "./CartWidget.scss";
import { CartContext } from "../../../context/CartContext";
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
            <div className="dropdown-menu row " id="shopcart_list" aria-labelledby="dropdownMenuButton1">
                <Cart />
            </div>
        </div>
    );
};

export default CartWidget;
