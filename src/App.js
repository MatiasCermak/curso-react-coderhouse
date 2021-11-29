import "./App.scss";
import NavBar from "./components/GlobalComponents/NavBar/NavBar";
import Main from "./components/Index/Main/Main";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/Product/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<Main />}>
                        <Route path="category/:category" element={<Main />} />
                    </Route>
                    <Route path="product/:id" element={<ItemDetailContainer />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    );
}

export default App;
