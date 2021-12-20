import "./Main.scss";

import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import React from "react";

const Main = () => {
    return (
        <main className="container-fluid main_index">
            <Banner />
            <CategoryList />
            <div className="product-title">
                <h1 className="fs-1">Nuestros Discos Disponibles</h1>
            </div>
            <ItemListContainer />
        </main>
    );
};

export default Main;
