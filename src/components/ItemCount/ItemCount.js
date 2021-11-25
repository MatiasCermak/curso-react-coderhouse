import React, { useState } from "react";
import "./ItemCount.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [currentSelected, setcurrentSelected] = useState(initial);
    const [currentStock, setcurrentStock] = useState(stock);
    const handleSubtract = () => {
        currentSelected > initial && setcurrentSelected(currentSelected - 1);
    };
    const handleAdd = () => {
        currentSelected < currentStock && setcurrentSelected(currentSelected + 1);
    };

    return (
        <div className="card__btn-container">
            <button className="btn" onClick={handleSubtract}>
                <AiOutlineArrowLeft />
            </button>
            {currentSelected}
            <button className="btn" onClick={handleAdd}>
                <AiOutlineArrowRight />
            </button>
            <button
                className="card__btn"
                onClick={() => onAdd(setcurrentStock, currentStock, setcurrentSelected, currentSelected)}
            >
                Añadir al carrito
            </button>
        </div>
    );
};

export default ItemCount;
