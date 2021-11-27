import React, { useState } from "react";
import "./ItemCount.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import useCounter from "../../customHooks/useCounter";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, increase, decrease, reset, setCount] = useCounter(initial);
    const [currentStock, setCurrentStock] = useState(stock);
    const handleSubtract = () => {
        count > 0 && decrease();
    };
    const handleAdd = () => {
        count < stock && increase();
    };

    return (
        <div className="card__btn-container">
            <button className="btn" onClick={handleSubtract}>
                <AiOutlineArrowLeft />
            </button>
            {count}
            <button className="btn" onClick={handleAdd}>
                <AiOutlineArrowRight />
            </button>
            <button className="card__btn" onClick={() => onAdd(setCurrentStock, currentStock, setCount, count)}>
                Añadir al carrito
            </button>
        </div>
    );
};

export default ItemCount;
