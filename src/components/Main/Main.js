import React from "react";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import "./Main.scss";
import ItemDetail from "../ItemDetail/ItemDetail";

const Main = () => {
    return (
        <main class="container-fluid main_index">
            <Banner />
            <CategoryList />
            <div class="product-title">
                <h1 class="fs-1">Nuestros Discos Disponibles</h1>
            </div>

            <ItemListContainer />
            <ItemDetailContainer />
        </main>
    );
};

export default Main;
