import React from "react";
import { MdShoppingCart } from "react-icons/md";
import "./CartWidget.scss";

const CartWidget = () => {
    return (
        <div className="dropdown d-flex align-items-center">
            <button
                className="btn btn-secondary"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <MdShoppingCart />
            </button>
            <ul className="dropdown-menu" id="shopcart_list" aria-labelledby="dropdownMenuButton1"></ul>
        </div>
    );
};

export default CartWidget;
