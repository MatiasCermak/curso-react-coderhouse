import React, { useState, useEffect } from "react";
import "./ItemListContainer.scss";
import useFetch from "../../customHooks/useFetch";
import ItemCount from "../ItemCount/ItemCount";
//import products from "../../json/products.json";
import ItemList from "../ItemList/ItemList";

const products = [
    {
        title: "The Slow Rush",
        artist: "Tame Impala",
        image: "disc1.png",
        price: 1300,
    },
    {
        title: "Plastic Beach",
        artist: "Gorillaz",
        image: "disc2.jpg",
        price: 1100,
    },
    {
        title: "In The Court Of The Crimson King",
        artist: "King Crimson",
        image: "disc4.jpg",
        price: 1500,
    },
    {
        title: "Holy Diver",
        artist: "DIO",
        image: "disc3.jpg",
        price: 1500,
    },
    {
        title: "Wish You Were Here",
        artist: "Pink Floyd",
        image: "disc5.jpg",
        price: 1700,
    },
    {
        title: "Rumours",
        artist: "Fleetwood Mac",
        image: "disc6.jpg",
        price: 1300,
    },
    {
        title: "Sweetener",
        artist: "Ariana Grande",
        image: "disc7.jpg",
        price: 1200,
    },
    {
        title: "Aladdin Sane",
        artist: "David Bowie",
        image: "disc8.jpg",
        price: 1000,
    },
    {
        title: "The Dark Side Of The Moon",
        artist: "Pink Floyd",
        image: "disc9.jpg",
        price: 1800,
    },
    {
        title: "Unknown Pleasures",
        artist: "Joy Division",
        image: "disc10.jpg",
        price: 1300,
    },
    {
        title: "Come Fly With Me",
        artist: "Frank Sinatra",
        image: "disc11.jpg",
        price: 1550,
    },
    {
        title: "Blond",
        artist: "Frank Ocean",
        image: "disc12.jpg",
        price: 1300,
    },
];

const getProducts = () => {
    const data = new Promise((resolve, reject) => {
        setTimeout(resolve(products), 2000);
    });
    return data;
};

const ItemListContainer = () => {
    const [productList, setProductList] = useState(null);

    useEffect(() => {
        const data = getProducts();
        data.then((res) => setProductList(res));
    }, []);

    return (
        <section class="d-flex flex-wrap row-cols-xl-6 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 product-list">
            {productList && <ItemList products={productList} />}
        </section>
    );
};

export default ItemListContainer;
