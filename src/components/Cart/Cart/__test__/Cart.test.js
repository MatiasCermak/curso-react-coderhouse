import React from "react";
import { render, screen } from "@testing-library/react";
import Cart from "../Cart";
import { CartProvider } from "../../../../context/CartContext";
import { BrowserRouter } from "react-router-dom";

describe("Cart", () => {
    test("Renders component", () => {
        render(
            <BrowserRouter>
                <CartProvider>
                    <Cart />
                </CartProvider>
            </BrowserRouter>
        );
    });

    test("Renders message when cart empty", () => {
        render(
            <BrowserRouter>
                <CartProvider>
                    <Cart />
                </CartProvider>
            </BrowserRouter>
        );

        expect(screen.getByText("Sorry, cart is empty right now, but you can fill it up"));
        expect(screen.queryByText("Nombre")).toBeNull();
    });

    test("Renders message when cart empty", () => {
        render(
            <BrowserRouter>
                <CartProvider
                    initialCart={[
                        {
                            item: {
                                artist: "Tame Impala",
                                categories: "pop, rock, jazz",
                                description: "Great Album from Tame Impala",
                                id: "1",
                                image: "disc1.png",
                                price: 1300,
                                stock: 230,
                                title: "The Slow Rush",
                            },
                            quantity: 4,
                        },
                    ]}
                >
                    <Cart />
                </CartProvider>
            </BrowserRouter>
        );

        expect(screen.getByText("Nombre")).toBeInTheDocument();
        expect(screen.queryByText("Sorry, cart is empty right now, but you can fill it up")).toBeNull();
    });
});
