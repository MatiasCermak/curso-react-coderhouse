import React from "react";
import { Link } from "react-router-dom";
const Item = ({ element }) => {
    console.log(element);
    return (
        <div className="col">
            <div className="cards">
                <Link to={`/product/${element.id}`}>
                    <img src={require("../../../img/" + element.image).default} alt="Foto del album" />
                    <p className="parrafo-cards fs-5">
                        {element.artist} - {element.title}
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default Item;
