import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children, initialCart = [] }) => {
    const [cart, setCart] = useState(initialCart);

    const isEmpty = () => cart.length == 0;

    const addItem = (item) => {
        if (isInCart(item.item.id)) removeItem(item.item.id);
        setCart([...cart, item]);
        console.log(cart);
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
