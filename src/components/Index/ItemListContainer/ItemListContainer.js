import React, { useState, useEffect } from "react";
import "./ItemListContainer.scss";
import useFetch from "../../../customHooks/useFetch";
import ItemCount from "../../Product/ItemCount/ItemCount";
//import products from "../../json/products.json";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const products = [
    {
        id: 1,
        title: "The Slow Rush",
        artist: "Tame Impala",
        image: "disc1.png",
        price: 1300,
        category: {
            pop: true,
            electro: false,
            rock: true,
            heavyMetal: false,
            blues: false,
            classic: false,
            jazz: false,
            hipHop: false,
        },
    },
    {
        id: 2,
        title: "Plastic Beach",
        artist: "Gorillaz",
        image: "disc2.jpg",
        price: 1100,
        category: {
            pop: false,
            electro: false,
            rock: true,
            heavyMetal: false,
            blues: false,
            classic: false,
            jazz: false,
            hipHop: false,
        },
    },
    {
        id: 3,
        title: "In The Court Of The Crimson King",
        artist: "King Crimson",
        image: "disc4.jpg",
        price: 1500,
        category: {
            pop: false,
            electro: false,
            rock: true,
            heavyMetal: true,
            blues: false,
            classic: false,
            jazz: false,
            hipHop: false,
        },
    },
    {
        id: 4,
        title: "Holy Diver",
        artist: "DIO",
        image: "disc3.jpg",
        price: 1500,
        category: {
            pop: false,
            electro: false,
            rock: true,
            heavyMetal: true,
            blues: false,
            classic: false,
            jazz: false,
            hipHop: false,
        },
    },
    {
        id: 5,
        title: "Wish You Were Here",
        artist: "Pink Floyd",
        image: "disc5.jpg",
        price: 1700,
        category: {
            pop: false,
            electro: false,
            rock: true,
            heavyMetal: false,
            blues: false,
            classic: false,
            jazz: false,
            hipHop: false,
        },
    },
    {
        id: 6,
        title: "Rumours",
        artist: "Fleetwood Mac",
        image: "disc6.jpg",
        price: 1300,
        category: {
            pop: false,
            electro: false,
            rock: true,
            heavyMetal: false,
            blues: false,
            classic: false,
            jazz: false,
            hipHop: false,
        },
    },
    {
        id: 7,
        title: "Sweetener",
        artist: "Ariana Grande",
        image: "disc7.jpg",
        price: 1200,
        category: {
            pop: true,
            electro: false,
            rock: false,
            heavyMetal: false,
            blues: false,
            classic: false,
            jazz: false,
            hipHop: false,
        },
    },
    {
        id: 8,
        title: "Aladdin Sane",
        artist: "David Bowie",
        image: "disc8.jpg",
        price: 1000,
        category: {
            pop: false,
            electro: false,
            rock: true,
            heavyMetal: false,
            blues: false,
            classic: false,
            jazz: false,
            hipHop: false,
        },
    },
    {
        id: 9,
        title: "The Dark Side Of The Moon",
        artist: "Pink Floyd",
        image: "disc9.jpg",
        price: 1800,
        category: {
            pop: false,
            electro: false,
            rock: true,
            heavyMetal: false,
            blues: false,
            classic: false,
            jazz: false,
            hipHop: false,
        },
    },
    {
        id: 10,
        title: "Unknown Pleasures",
        artist: "Joy Division",
        image: "disc10.jpg",
        price: 1300,
        category: {
            pop: false,
            electro: false,
            rock: true,
            heavyMetal: false,
            blues: false,
            classic: false,
            jazz: false,
            hipHop: false,
        },
    },
    {
        id: 11,
        title: "Come Fly With Me",
        artist: "Frank Sinatra",
        image: "disc11.jpg",
        price: 1550,
        category: {
            pop: false,
            electro: false,
            rock: false,
            heavyMetal: false,
            blues: false,
            classic: false,
            jazz: true,
            hipHop: false,
        },
    },
    {
        id: 12,
        title: "Blond",
        artist: "Frank Ocean",
        image: "disc12.jpg",
        price: 1300,
        category: {
            pop: true,
            electro: false,
            rock: false,
            heavyMetal: false,
            blues: false,
            classic: false,
            jazz: false,
            hipHop: true,
        },
    },
];

const getProducts = () => {
    const data = new Promise((resolve, reject) => {
        setTimeout(() => resolve(products), 2000);
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
