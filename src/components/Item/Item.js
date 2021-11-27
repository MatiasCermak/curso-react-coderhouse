import React from "react";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ element }) => {
    return (
        <div className="col">
            <div className="cards">
                <a href="#">
                    <img src={require("../../img/" + element.image).default} alt="Foto del album" />
                    <p className="parrafo-cards fs-5">
                        {element.artist} - {element.title}
                    </p>
                </a>
                <ItemCount
                    stock={20}
                    initial={5}
                    onAdd={(setcurrentStock, currentStock, setcurrentSelected, currentSelected) => {
                        if (currentStock <= 0) return;
                        setcurrentStock(currentStock - currentSelected);
                        setcurrentSelected(currentStock - currentSelected);
                    }}
                />
            </div>
        </div>
    );
};

export default Item;
