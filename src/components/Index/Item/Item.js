import "./Item.scss";

import { Link } from "react-router-dom";
import React from "react";

const Item = ({ element }) => {
    return (
        <div className="col">
            <div className="cards">
                <Link to={`/product/${element.id}`}>
                    <img src={require("../../../img/" + element.image).default} alt="Foto del album" />
                    <p className="parrafo-cards">
                        {element.artist} - {element.title}
                    </p>
                </Link>
            </div>
        </div>
    );
};

export default Item;
