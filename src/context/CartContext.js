import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children, initialCart = [] }) => {
    const [cart, setCart] = useState(initialCart);

    useEffect(() => {
        let cartString = window.localStorage.getItem("vinylrec-cart-react");
        if (cartString !== null && cartString !== "") {
            setCart(JSON.parse(cartString));
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem("vinylrec-cart-react", JSON.stringify(cart));
        console.log(cart);
    }, [cart]);

    const isEmpty = () => cart.length === 0;

    const addItem = (item) => {
        console.log(item.item.id);
        if (isInCart(item.item.id)) setCart([...cart.filter((element) => element.item.id !== item.item.id), item]);
        else setCart([...cart, item]);
    };

    const removeItem = (id) => {
        setCart(cart.filter((element) => element.item.id !== id));
    };

    const isInCart = (id) => {
        return cart.some((element) => element.item.id === id);
    };

    const totalQuantity = () => {
        return cart.reduce((acc, element) => acc + element.quantity, 0);
    };

    const totalPurchase = () => {
        return cart.reduce((acc, element) => acc + element.quantity * element.item.price, 0);
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                isInCart,
                totalQuantity,
                totalPurchase,
                clearCart,
                isEmpty,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
