import React, { useEffect, useState } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.scss";

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

const getItems = (index) => {
    const data = new Promise((resolve, reject) => {
        setTimeout(resolve(products[index]), 2000);
    });
    return data;
};

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);

    useEffect(() => {
        const data = getItems(1);
        data.then((res) => {
            setItem(res);
        });
    }, []);

    return <main className="main_product">{item && <ItemDetail item={item} />}</main>;
};

export default ItemDetailContainer;
