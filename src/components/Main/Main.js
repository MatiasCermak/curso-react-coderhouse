import React from "react";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./Main.scss";

const Main = () => {
    return (
        <main class="container-fluid main_index">
            <Banner />
            <CategoryList />
            <div class="product-title">
                <h1 class="fs-1">Nuestros Discos Disponibles</h1>
            </div>
            <ItemListContainer />
        </main>
    );
};

export default Main;
