import React from "react";
import "./ItemListContainer.scss";
import products from "../../json/products.json";
import ItemCount from "../ItemCount/ItemCount";

const ItemListContainer = () => {
    return (
        <section class="d-flex flex-wrap row-cols-xl-6 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 product-list">
            {products.map((element) => (
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
            ))}
        </section>
    );
};

export default ItemListContainer;
