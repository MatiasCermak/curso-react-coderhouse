import "./ItemCount.scss";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import CustomButton from "../../GlobalComponents/CustomButton/CustomButton";
import React from "react";
import useCounter from "../../../customHooks/useCounter";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, increase, decrease] = useCounter(initial);
    const handleSubtract = () => {
        count > 0 && decrease();
    };
    const handleAdd = () => {
        count < stock && increase();
    };

    return (
        <div className="card__btn-container d-flex flex-column align-items-center">
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn" onClick={handleSubtract}>
                    <AiOutlineArrowLeft />
                </button>
                {count}
                <button className="btn" onClick={handleAdd}>
                    <AiOutlineArrowRight />
                </button>
            </div>
            <CustomButton text="Añadir al carrito" handleClick={() => onAdd(count)} />
        </div>
    );
};

export default ItemCount;
