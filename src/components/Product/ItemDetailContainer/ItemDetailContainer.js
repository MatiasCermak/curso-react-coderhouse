import React, { useEffect, useState, useContext } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.scss";
import { useParams } from "react-router-dom";
const products = [
    {
        id: 1,
        title: "The Slow Rush",
        artist: "Tame Impala",
        image: "disc1.png",
        price: 1300,
        category: [
            { pop: true },
            { electro: false },
            { rock: false },
            { heavyMetal: false },
            { blues: false },
            { classic: false },
            { jazz: false },
            { hipHop: true },
        ],
    },
    {
        id: 2,
        title: "Plastic Beach",
        artist: "Gorillaz",
        image: "disc2.jpg",
        price: 1100,
        category: [
            { pop: true },
            { electro: false },
            { rock: false },
            { heavyMetal: false },
            { blues: false },
            { classic: false },
            { jazz: false },
            { hipHop: true },
        ],
    },
    {
        id: 3,
        title: "In The Court Of The Crimson King",
        artist: "King Crimson",
        image: "disc4.jpg",
        price: 1500,
        category: [
            { pop: true },
            { electro: false },
            { rock: false },
            { heavyMetal: false },
            { blues: false },
            { classic: false },
            { jazz: false },
            { hipHop: true },
        ],
    },
    {
        id: 4,
        title: "Holy Diver",
        artist: "DIO",
        image: "disc3.jpg",
        price: 1500,
        category: [
            { pop: true },
            { electro: false },
            { rock: false },
            { heavyMetal: false },
            { blues: false },
            { classic: false },
            { jazz: false },
            { hipHop: true },
        ],
    },
    {
        id: 5,
        title: "Wish You Were Here",
        artist: "Pink Floyd",
        image: "disc5.jpg",
        price: 1700,
        category: [
            { pop: true },
            { electro: false },
            { rock: false },
            { heavyMetal: false },
            { blues: false },
            { classic: false },
            { jazz: false },
            { hipHop: true },
        ],
    },
    {
        id: 6,
        title: "Rumours",
        artist: "Fleetwood Mac",
        image: "disc6.jpg",
        price: 1300,
        category: [
            { pop: true },
            { electro: false },
            { rock: false },
            { heavyMetal: false },
            { blues: false },
            { classic: false },
            { jazz: false },
            { hipHop: true },
        ],
    },
    {
        id: 7,
        title: "Sweetener",
        artist: "Ariana Grande",
        image: "disc7.jpg",
        price: 1200,
        category: [
            { pop: true },
            { electro: false },
            { rock: false },
            { heavyMetal: false },
            { blues: false },
            { classic: false },
            { jazz: false },
            { hipHop: true },
        ],
    },
    {
        id: 8,
        title: "Aladdin Sane",
        artist: "David Bowie",
        image: "disc8.jpg",
        price: 1000,
        category: [
            { pop: true },
            { electro: false },
            { rock: false },
            { heavyMetal: false },
            { blues: false },
            { classic: false },
            { jazz: false },
            { hipHop: true },
        ],
    },
    {
        id: 9,
        title: "The Dark Side Of The Moon",
        artist: "Pink Floyd",
        image: "disc9.jpg",
        price: 1800,
        category: [
            { pop: true },
            { electro: false },
            { rock: false },
            { heavyMetal: false },
            { blues: false },
            { classic: false },
            { jazz: false },
            { hipHop: true },
        ],
    },
    {
        id: 10,
        title: "Unknown Pleasures",
        artist: "Joy Division",
        image: "disc10.jpg",
        price: 1300,
        category: [
            { pop: true },
            { electro: false },
            { rock: false },
            { heavyMetal: false },
            { blues: false },
            { classic: false },
            { jazz: false },
            { hipHop: true },
        ],
    },
    {
        id: 11,
        title: "Come Fly With Me",
        artist: "Frank Sinatra",
        image: "disc11.jpg",
        price: 1550,
        category: [
            { pop: true },
            { electro: false },
            { rock: false },
            { heavyMetal: false },
            { blues: false },
            { classic: false },
            { jazz: false },
            { hipHop: true },
        ],
    },
    {
        id: 12,
        title: "Blond",
        artist: "Frank Ocean",
        image: "disc12.jpg",
        price: 1300,
        category: [
            { pop: true },
            { electro: false },
            { rock: false },
            { heavyMetal: false },
            { blues: false },
            { classic: false },
            { jazz: false },
            { hipHop: true },
        ],
    },
];

const getItems = (index) => {
    const data = new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, products[index - 1]);
    });
    return data;
};

const ItemDetailContainer = () => {
    const [item, setItem] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const data = getItems(id);
        data.then((res) => {
            setItem(res);
        });
    }, [id]);

    return (
        item && (
            <main className="main_product">
                <ItemDetail item={item} />
            </main>
        )
    );
};

export default ItemDetailContainer;
